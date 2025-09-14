# rabbitmq-clickhouse-lab

A hands-on learning project exploring **Event-Driven Architecture** using **RabbitMQ** as the message broker and **ClickHouse** as the storage engine.

## 🎯 Goals
- Understand RabbitMQ core concepts: exchanges, queues, routing keys, bindings, and message acknowledgements.
- Learn how to publish and consume events in Node.js.
- Explore RabbitMQ’s dead-lettering and retry mechanisms.
- Integrate ClickHouse with RabbitMQ using the RabbitMQ Engine.
- Experiment with transient vs persistent message storage.

## 🏗️ Tech Stack
- **RabbitMQ** (message broker)
- **Node.js** (producer & consumer services)
- **ClickHouse** (event storage & analytics)
- **Docker** (to run RabbitMQ & ClickHouse locally)

## 🚀 Running the Project

1. **Start RabbitMQ container:**
   ```bash
   docker run -d --name rabbitmq \
     -p 5672:5672 \
     -p 15672:15672 \
     rabbitmq:3-management
    

2. **Start ClickHouse container:**
    ```bash
    docker run -d --name clickhouse \
    -p 8123:8123 \
    -p 9000:9000 \
    clickhouse/clickhouse-server

3. **Run producer and consumer services:**
    ```bash
    NODE_ENV=local node index.js

