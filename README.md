# Nodejs Expressjs MongoDB Ready-to-use API Project Structure

A ready-to-use for REST API Development with Node.js, Express, and MongoDB

## Getting started (This section is impoertant for the interviewer or reviewerr)

This project will run on **NodeJs** using **MongoDB** as database. I had tried to complete the case study as you expected.
Tehre are some issues which should be improved. 
I did not use nodejs for a long time and did not have enough time at weekend. 
So I did not complete and refactor these parts and they should be improved. 
- Naming rules should be better for anything you can imagine (variable, model, file, etc names)
- Test cases do not work (I had issue about it but I could not solve it. If I was able to run at least one case, this step would be completed :)
- I added constants and utils classes but they are empty. (There were no extrem logic in the case, I did not use them but I am sure that we could use them more effectively)
- I dont know what you want related with docker. But after I write this line, I will try to dockerize the source code via dockerfile. Then, I will try to run it via docker. If it works I will push it to dockerhub and than will shre the image name to you.

## Features

- Pre-defined response structures with proper status codes.
- I added 2 extra files that are named constants.js and utils.js. (Not using for now, For further improvoments)
- **Book** example with **CRUD** operations.
- **Author** example with **CRUD** operations.
- API collection for Postman.
- **NodeJs** code documentation.
- Light-weight project.
- Test cases with Mocha and Chai (NOT WORKING).

## Software Requirements

- Node.js **20+**
- MongoDB **7.0+**

## How to install

In this interview case, I don't knwo how to share my code. (docker image, git repo, compressed file, etc). 
So I assumed that you get the project on your local and continue to explain more
1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing

```bash
cd myproject
npm install
```


## Project structure

```sh
.
├── server.js
├── package.json
├── controllers
│   ├── author.js
│   └── book.js
├── models
│   ├── author.js
│   └── book.js
├── routes
│   ├── authorsRouter.js
│   └── booksRouter.js
├── helpers
│   ├── apiResponse.js
│   ├── constants.js
│   └── utils.js
├── test
    ├── config.js
    ├    ├── testConfig.js
    ├── author.js
    └── book.js

```

## How to run

### Running API server locally

```bash
npm run devStart
```

You will know server is running by checking the output of the command `npm run devStart`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```

**Note:** `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/server.js` it will be loaded dynamically.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running Test Cases

Test cases are nor working
```bash
npm run test
```