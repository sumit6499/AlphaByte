
# ALPHA_BYTE_PLACEMINT

# User Authentication

This microservice performs basic user authentication.

## Table of Contents

-   [NewServiceSetup](#new-service-repo-setup)
-   [Overview](#overview)
-   [Endpoints](#endpoints)
-   [Database](#database)
-   [Getting Started](#getting-started)
-   [Configuration](#configuration)
-   [Testing](#testing)

## Overview

Provide a high-level overview of the microservice , including its purpose, key features, and any important concepts.

## Endpoints

### Base URL

**URL**: `http://localhost:3000/api/v1/auth/admin/signup`

### Admin Endpoints

#### Create User

-   **URL**: `api/v1/auth/admin/signup`
-   **Method**: `POST`
-   **Description**: Creates a recruiter.
-   **Query Parameters**:

    | Parameter  | Type   | Description                                           |
    | ---------- | ------ | ----------------------------------------------------- |
    | `email` | String | The recruiter's email                                   |
    | `password` | String | The recruiter's Password (this should be hashed when sent) |

-   **Example**:

    Request

    ```json
    {
        "headers": {},
        "body": {
            "firstName":"Rushi Tonape",
            "companyName":"JP Morgran",
            "email":"rushikeshtonape2002@gmail.com",
            "companyID":"20UCS110",
            "password":"Pass@123"
        }
    }
    ```

    Response

    ```json
    {
        "body": {
            "code": 201,
            "success":true,
            "message":"Admin Registered Successfully."
        }
    }
    ```

#### Login Admin

-   **URL**: `http://localhost:3000/api/v1/auth/admin/login`
-   **Method**: `POST`
-   **Description**: Logs in a admin(recruiter).
-   **Query Parameters**:

    | Parameter  | Type   | Description                                           |
    | ---------- | ------ | ----------------------------------------------------- |
    | `email` | String | The User's Username                                   |
    | `password` | String | The User's Password (this should be hashed when sent) |

-   **Example**:

    Request

    ```json
    {
        "headers": {},
        "body": {
            "email":"tempAddress53@gmail.com",
            "password":"Pass@1234"
        }
    }
    ```

    Response

    ```json
    {
        {
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5NjAxNDcsImV4cCI6MTcwNDA0NjU0N30.NM5LgE3yAxdptn2BicFB4meJnXrQy4f6HvG5ZglqRWU",
            "user": 
            {
                "_id": "658ed0da083ba7e6b41ae62a",
                "email":"tempAddress53@gmail.com",
                "password":"Pass@1234",
                "tokens": [
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM4NTg0NTQsImV4cCI6MTcwMzk0NDg1NH0.-vqLtTApgSIpOcZ_1rPygpHDjUXTsRfHilcIIb4hbU0",
                "_id": "658ed116083ba7e6b41ae62d"
            }
        ],
        "__v": 1
        },
        "message": "Student login successfully"
        }
    
    }
    ```

### Candidate Routes

#### Get Job Post Info

-   **URL**: `http://localhost:3000/api/v1/auth/getJobDetails`
-   **Method**: `GET`
-   **Description**: Gets all of the info in the database about current job postings. Does not retrieve password.

-   **Example**:

    Request

    ```json
    {
        "headers": {},
    }
    ```

    Response

    ```json
    {
    "success": true,
    "message": "Student Details Fetched Successfully",
    "data": {
       {
    "success": true,
    "message": "All Resume success fully fetched",
    "data": [
        {
        "_id": 1,
        "result": "{\"JD Match\":\"65%\",\"MissingKeywords\":[\"Software Development Life Cycle (SDLC)\",\"Data Analysis\",\"Database Management\",\"Machine Learning\",\"Deep Learning\",\"Big Data\"],\"Profile Summary\":\"Shreya Bhandari is a Python Developer with experience in Business Analysis, Event Management, and Graphic Design. Her diverse skill set and enthusiasm for AI/ML make her a potential fit for roles in software development and data science. To enhance her resume for competitive job markets, it is recommended to highlight her technical skills, particularly in data analysis, ML, and database management. Additionally, incorporating industry-specific keywords and quantifying her achievements would strengthen her application.\"}",
        "__v": 0
        },
        {
        "_id": 2,
        "result": "{\"JD Match\":\"55%\",\"MissingKeywords\":[\"Data Science\",\"Big Data Engineer\"],\"Profile Summary\":\"Shreya Bhandari is a Python Developer and AI/ML enthusiast. She has a Bachelor of Engineering in Software Engineering and has around 2 years of experience in a variety of roles including Business Analyst, Event Team Ambassador, and Business Owner. She is proficient in Python and Django and has a strong understanding of data science concepts. She is also a skilled graphic designer and has worked on projects for both large and small businesses.\"}",
        "__v": 0
        }
  ]
    ```
#### Upload Resume

-   **URL**: `http://localhost:3000/api/v1/auth/upload-resume`
-   **Method**: `POST`
-   **Description**: upload resume.
-   **Query Parameters**:

    | Parameter  | Type   | Description                                           |
    | ---------- | ------ | ----------------------------------------------------- |
    | `PDF` | String($binary) | The User's Resume                                  |
   

-   **Example**:

    Request

    ```json
    {
        "headers": {},
        "body": {
            "aaplyDate":"28/12/2023",
            "validDate":"12/1/2025"
        }
    }





### Database Type

MongoDB is a document database. It stores data in a type of JSON format.

### Database Schema

The following tables constitute the database schema: ![Alt text](docs/dbschema.png)

#### Admin Table

Stores information about users.

| Column              | Type    | Description                  |
| ------------------- | ------- | ---------------------------- |
| `email`         | String  | Admin's email           |
| `password`          | String  | User's password           |
| `token`         | String  | Admin's Token           |

#### CompanyDetails Sessions Table

Stores user sessions and jw tokens.

| Column         | Type     | Description                           |
| -------------- | -------- | ------------------------------------- |
| `id`           | INT      | Unique identifier             |
| `name`       | INT      | Company name    |
| `Description`       | String     | Company description    |
| `post` | String  |    Name of new Post |
| `jobTitle`   | String | New Job Title |



## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

-   [Node.js](https://nodejs.org/) (version 20.11.1 or higher)
-   [npm](https://www.npmjs.com/) (version 10.2.4 or higher)
-   [MongoDB](https://www.mongodb.com/) (if using a MongoDB database)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sumit6499/AlphaByte.git
    ```

2. Change into the project directory:

    ```bash
    cd server
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Run the Server:

    ```bash
    npm run dev
    ```


## Configuration 

Make sure to include a `.env` file in the root directory of the project (Same directory as this README). The following environment variables
should be present:

```env
DATABASE_URI = your_mongodb_uri

PORT = your_port
JWT_SECRET = your_secret_key 


#SMTP
MAIL_HOST = smtp.gmail.com
MAIL_USER = pradeeppawar4182@gmail.com
MAIL_PASS = mijknuknvdrmbgpp


#AWS S3
AWS_BUCKET_NAME = 'your_bucket_address'
AWS_ACCOUNT_REGION = 'your_account_region'
AWS_ACCOUNT_ACCESS_KEY = 'your_access_key'
AWS_ACCOUNT_SECRET_ACCESS_KEY = 'your_secret_key'

eg.

PORT=3000

JWT_SECRET="yJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1"

DATABASE = "mongodb+srv://sumitpadalkar53:7XrfOlJtp2C0vMH8@cluster0.lkhdf8m.mongodb.net/?retryWrites=true&w=majority"



```

Adjust the values based on your specific configuration.


## Testing

Provide instructions on how to perform tests from the test suite here.

npm test

To spin up the microservice in a local docker container, follow these steps:

1. Run this command in the server directory

    ```bash
    docker ...
    ```

## Testing

Provide instructions on how to perform tests from the test suite here.
````