const express = require('express');
const { publishEvent } = require('./producer/producer');

const app = express();

app.use(express.json());

app.post('/users/signup', async (req, res, next) => {
    const userDetails = req.body;

    if(userDetails) {
        await publishEvent(userDetails, 'user.created');
    }

    res.status(201).send({status: 'SUCCESS'})
})

app.listen(3000, async () => {
    console.log(`RabbitMQ-Clickhouse lab running on port 3000`);
})
