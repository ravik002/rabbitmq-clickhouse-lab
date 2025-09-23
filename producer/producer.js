const amqp = require('amqplib');
const { USERS_EXCHANGE, USERS_QUEUE } = require('../utils/constants')
const { getRabbitMQChannel } = require('../datastore/connection')


module.exports.publishEvent = async function (data, routingKey) {
    const channel = await getRabbitMQChannel();

    await channel.assertExchange(USERS_EXCHANGE, 'topic', { durable: true });

    await channel.assertQueue(USERS_QUEUE, { durable: true });
    await channel.bindQueue(USERS_QUEUE, USERS_EXCHANGE, 'user.*');

    await channel.publish(USERS_EXCHANGE, routingKey, Buffer.from(JSON.stringify(data)))
}