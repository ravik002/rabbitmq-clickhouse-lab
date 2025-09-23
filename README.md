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

## ✅ Prerequisites
- Ensure that ClickHouse is set up with the following:
  - **2 tables** (for event storage and processing).
  - **1 Materialized View** (to pull data from the RabbitMQ engine table into the target table).


## 🚀 Running the Project

1. **Start RabbitMQ & ClickHouse containers via Docker Compose:**
   ```bash
   docker compose up -d

3. **Run producer and consumer services:**
    ```bash
    node index.js
