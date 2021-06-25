# Task Manager
## Description

[Nest](https://github.com/nestjs/nest) framework based backend to handle task creation, updation and deletion by the task-herald web application.

## Pre-requisites

- Running instance of MongoDB
- Git
- Yarn

## Installation

After cloning the repository, run the following command to set up the task-manager.

```bash
$ yarn install
```

## Running the app

After the installation step, ensure that you create a file called .env containing the following configuration:

```
DB_CONNECTION_STR=mongodb://<your-mongo-username>:<mongo-user-password>@<mongo-host>:<mongo-port>/
APP_NAME=task-manager
```

Next, you can setup a local instance of the backend by running the command:

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
