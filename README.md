# UOL Fullstack Test

![alt text](image-1.png)

## Description
This is a Fullstack development project that implements a simple client managment system

## This documentation will be partitioned in a few steps
- [Information about the Test](#about-the-test)
- [My Project Decisions on the API](#my-project-decisions-on-the-api)
- [My Project Decisions on the FrontEnd](#my-project-decisions-on-the-frontend)
- [How to run the API (with and without Docker)](#how-to-run-the-api)
- [How to run the FrontEnd (with and without Docker)](#how-to-run-the-frontend)
- [How to run Both at once (with and without Docker)](#how-to-run-both-at-once)

## About the Test

#### Basic Success Requirements

both the api and the frontend must be done in this repository
- API
    1) implement create/edit/get endpoints for a client entity
        1) get all registered clients
        2) register a new client with valid data
        3) update existing data of a registered client
        4) store the client data in a persistent manner (the test suggestion was SQLite but i used postgresql)

    2) the client entity should possess the following fields:
        ```json
        {
            "name": "string",
            "email": "string",
            "cpf": "string",
            "cellphone": "string",
            "status": "string"
        }
        ```

- Frontend
    1) implement a page that show a list of clients following the given design
    2) implement a form page in wich the user can register or edit a client
    3) when editing a client, show alerts for invalid data
    4) use the same api done here to receive the client data

#### Basic Code Quality Requirements
- make a clean, well organized and easy to read code. Adopt best practices in development and architecture.

#### Desirable Itens (optional)
1) unit tests
2) additional libraries and frameworks

## My Project Decisions on the Api
## My Project Decisions on the FrontEnd
## How to run the API
## How to run the FrontEnd
## How to run Both at once
