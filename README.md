# Student CRUD Project

This project is a CRUD (Create, Read, Update, Delete) application for managing students. It uses Angular version 17 for the frontend, Node.js with Express for the backend, Prisma as the ORM (Object-Relational Mapping) to interact with the PostgreSQL database.

## Prerequisites

Before getting started, make sure you have the following tools installed:

- Node.js and npm: [Download Node.js](https://nodejs.org/)
- Angular CLI: You can install it via npm using the command `npm install -g @angular/cli`
- PostgreSQL: [Download PostgreSQL](https://www.postgresql.org/download/)

## Database Configuration

1. Create a PostgreSQL database.
2. Copy the contents of the `.env.example` file into a new `.env` file and replace the values with your own database configurations.

## Installation

1. Clone this repository: `git clone <REPO_URL>`
2. Navigate to the project directory: `cd <PROJECT_NAME>`
3. Install backend dependencies: `cd backend && npm install`
4. Install frontend dependencies: `cd ../frontend && npm install`

## Usage

1. Start the Node.js backend:
   ```bash```
   cd exercice
   npm start
1. Start the Angular front-end:
   ```bash```
    cd front-end
    ng serve

