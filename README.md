# Vet App REST API

This project is being developed live on Twitch.

You can watch the stream here: https://www.twitch.tv/joaofmaranhao

## Overview

REST API for a veterinary clinic.

It allows users to create, read, update, and delete appointments, clients, and pets.

Users can only access resources that they have permission to access.

Roles are assigned to users, and permissions are assigned to roles.

## Requirements

- Should exists two roles: `admin` and `user`
- `admin`should be able to create users with any role
- `admin` should be able to create, read, update, and delete appointments, clients, and pets
- `user` should be able to create, read, update, and delete appointments, clients, and pets

## Models


| Field Name | Data Type | Validation |
|------------|-----------|------------|
| id         | Integer   | read-only  |
| email      | String    | required, unique |
| password   | String    | required   |
| role       | String    | required   |

### Client

| Field Name | Data Type | Validation |
|------------|-----------|------------|
| id         | Integer   | read-only  |
| name       | String    | required, unique |
| address    | String    | required   |
| phone      | String    | required   |

### Pet

| Field Name | Data Type | Validation |
|------------|-----------|------------|
| id         | Integer   | read-only  |
| name       | String    | required, unique |
| species    | String    | required   |
| breed      | String    | required   |
| age        | Integer   | required   |
| client_id  | Integer   | required   |

### Appointment

| Field Name | Data Type | Validation |
|------------|-----------|------------|
| id         | Integer   | read-only  |
| date       | Date      | required   |
| time       | Time      | required   |
| client_id  | Integer   | required   |
| pet_id     | Integer   | required   |

## Endpoints

### Authentication

`POST /auth/signup`

| Field Name | Data Type | Validation |
|------------|-----------|------------|
| email      | String    | required, unique |
| password   | String    | required   |
| role       | String    | required   |

`POST /auth/login`

| Field Name | Data Type | Validation |
|------------|-----------|------------|
| username   | String    | required   |
| password   | String    | required   |

### Users

`GET /users`

`GET /users/:id`

`POST /users`

`PUT /users/:id`

`DELETE /users/:id`

### Clients

`GET /clients`

`GET /clients/:id`

`POST /clients`

`PUT /clients/:id`

`DELETE /clients/:id`

### Pets

`GET /pets`

`GET /pets/:id`

`POST /pets`

`PUT /pets/:id`

`DELETE /pets/:id`

### Appointments

`GET /appointments`

`GET /appointments/:id`

`POST /appointments`

`PUT /appointments/:id`

`DELETE /appointments/:id`


---
