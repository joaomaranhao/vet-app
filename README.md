# Vet API

This project is being developed live on Twitch.

Saas API for a veterinary clinic.
When a user creates an account, they also create a Clinic.
Clinics can have multiple users, which can be admins or regular users.
Regular users can create, read, update, and delete appointments, clients,pets, and veterinarians.
Admins can do the same, plus they can create other users and change Clinic settings.

## User Stories

- As a user, I want to be able to register a new account
- As a user, I want to be able to login
- As a user, I want to be able to logout
- As a user, I want to be able to create a clinic
- As a admin user, I want to be able to create other users and assign them to the clinic with a role
- As a admin user, I want to be able to create, read, update, and delete users, appointments, clients, pets, and veterinarians
- As a user, I want to be able to create, read, update, and delete appointments, clients, pets, and veterinarians
- As a user, I want to be able to change my password

## Business Rules

- A user can only access their own data
- A admin user can access all data for their clinic
- A user can only access data for their clinic
- Users created by a admin user are automatically assigned to the clinic of the admin user
- Users created by a admin user receive an email with a link to set their password

## Models

### User

- id
- email
- password
- clinic_id
- role

### Clinic

- id
- name
- address
- phone
- email

### Appointment

- id
- client_id
- pet_id
- veterinarian_id
- date
- time
- notes

### Client

- id
- clinic_id
- first_name
- last_name
- address
- phone
- email

### Pet

- id
- client_id
- name
- type
- breed
- age
- weight
- notes

### Veterinarian

- id
- clinic_id
- first_name
- last_name
- address
- phone
- email

## Endpoints

### Users

- POST /users
- GET /users
- GET /users/:id
- PUT /users/:id
- DELETE /users/:id

### Clinics

- POST /clinics
- GET /clinics
- GET /clinics/:id
- PUT /clinics/:id
- DELETE /clinics/:id

### Appointments

- POST /appointments
- GET /appointments
- GET /appointments/:id
- PUT /appointments/:id
- DELETE /appointments/:id

### Clients

- POST /clients
- GET /clients
- GET /clients/:id
- PUT /clients/:id
- DELETE /clients/:id

### Pets

- POST /pets
- GET /pets
- GET /pets/:id
- PUT /pets/:id
- DELETE /pets/:id

### Veterinarians

- POST /veterinarians
- GET /veterinarians
- GET /veterinarians/:id
- PUT /veterinarians/:id
- DELETE /veterinarians/:id

## Resources

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

