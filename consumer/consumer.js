const amqp = require('amqplib');
const { USERS_EXCHANGE, USERS_QUEUE } = require('../utils/constants')
const { getRabbitMQChannel } = require('../datastore/connection')


module.exports.consumeEvent = async function () {
    const channel = await getRabbitMQChannel();

    await channel.assertExchange(USERS_EXCHANGE, 'topic', { durable: false });

    await channel.assertQueue(USERS_QUEUE, { durable: false });
    await channel.bindQueue(USERS_QUEUE, USERS_EXCHANGE, 'user.*');

    await channel.consume(USERS_QUEUE, (msg) => {
        if (msg) {
            try {
                const data = JSON.parse(msg.content.toString());

                console.log(`Consumer -> Received message from RabbitMQ :: ${JSON.stringify(data)}`)

                channel.ack(msg);
            } catch (error) {
                console.error(`Failed to process the consumed data :: ${error}`);

                channel.nack(msg, false, true);
            }
        }
    },
        { noAck: false }
    )
}