const amqp = require('amqplib');
const { rabbitMQEndpoint } = require('../config.json')

let channel = null;
let connection = null;

module.exports.getRabbitMQChannel = async function () {
    try {
        if (channel) {
            return channel;
        }

        if (!connection) {
            connection = await amqp.connect(rabbitMQEndpoint);
        }

        channel = await connection.createChannel();

        return channel;

    } catch (error) {
        console.error(`Error occurred while establishing RabbitMQ connection :: ${error}`)

        process.exit(1);
    }
}

async function shutdownAndExit(code) {
  try {
    console.log("Shutting down gracefully...");

    if (channel) await channel.close();
    if (connection) await connection.close();
    
  } catch (err) {
    console.error("Error during shutdown:", err);
  } finally {
    process.exit(code);
  }
}

// Signals
process.on("SIGINT", () => shutdownAndExit(0));
process.on("SIGTERM", () => shutdownAndExit(0));

// Crashes
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  shutdownAndExit(1);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  shutdownAndExit(1);
});
