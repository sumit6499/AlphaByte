
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
            "firstName":"Rushi",
            "companyName":"Tonape",
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
                "firstName": "Rushi",
                "lastName": "Tonape",
                "email": "rushikeshtonape2002@gmail.com",
                "studentId": "20UCS110",
                "additionalDetails": "658ed0da083ba7e6b41ae626",
                "paymentDonebyUser": "658ed0da083ba7e6b41ae628",
                "accountType": "Student",
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
        "user": {
            "_id": "658ed0da083ba7e6b41ae62a",
            "firstName": "Rushi",
            "lastName": "Tonape",
            "email": "rushikeshtonape2002@gmail.com",
            "studentId": "20UCS110",
            "password": "$2b$10$WDz6X8oaFPNXmd9aG0teEuYsIZ1EH.ttlESnIH0n7u5AiqIslvLHi",
            "additionalDetails": "658ed0da083ba7e6b41ae626",
            "paymentDonebyUser": "658ed0da083ba7e6b41ae628",
            "accountType": "Student",
            "tokens": [
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM4NTg0NTQsImV4cCI6MTcwMzk0NDg1NH0.-vqLtTApgSIpOcZ_1rPygpHDjUXTsRfHilcIIb4hbU0",
                    "_id": "658ed116083ba7e6b41ae62d"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5MzQxMjAsImV4cCI6MTcwNDAyMDUyMH0.UEKJwuQ9xXwTUG8HSBJjsG6LhcneuwN5kTYlCQw1NHI",
                    "_id": "658ff8a83c785b5a2515f9f6"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5MzY2NDEsImV4cCI6MTcwNDAyMzA0MX0.aqtnBrYPkXMYn7OOOQT3oxa-EnYLUjeKwNasYi_JNxs",
                    "_id": "65900281302c388f5f1710b2"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5MzgzMDQsImV4cCI6MTcwNDAyNDcwNH0.u6vqgfGjYHFz3Fpd_SKli-OSQCV9mrYuN1JDxX58An8",
                    "_id": "65900900e3803ad0e9b31979"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5MzgzNDgsImV4cCI6MTcwNDAyNDc0OH0.5-HwDaNzdz1fFyYZ773RAwhAmLcxAhjhSB_YPUacQ9U",
                    "_id": "6590092c39bd778ca6f46617"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5NTA2NTYsImV4cCI6MTcwNDAzNzA1Nn0.5LFseJSds8OMArfghkrfz7D7hwq9ezvyabxmvHONKwY",
                    "_id": "6590394024a7bd3464a8f90a"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5NTA4MDcsImV4cCI6MTcwNDAzNzIwN30.wKFMa6K_w2E6DiDj2s4rYALE7gsozM6KkIPb_F-vOt0",
                    "_id": "659039d780cec7d377da6ab4"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5NTEwNTIsImV4cCI6MTcwNDAzNzQ1Mn0.akN8vsDsV337jx_gjw-eRGo-PGOLTNEy_J0H8EDKS-o",
                    "_id": "65903acc657d743efb78f6fa"
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpa2VzaHRvbmFwZTIwMDJAZ21haWwuY29tIiwiaWQiOiI2NThlZDBkYTA4M2JhN2U2YjQxYWU2MmEiLCJhY2NvdW50VHlwZSI6IlN0dWRlbnQiLCJpYXQiOjE3MDM5NjAxNDcsImV4cCI6MTcwNDA0NjU0N30.NM5LgE3yAxdptn2BicFB4meJnXrQy4f6HvG5ZglqRWU",
                    "_id": "65905e53bdad5ced6510b234"
                }
            ],
            "__v": 9
        },
        "studentProfile": {
            "_id": "658ed0da083ba7e6b41ae626",
            "year": null,
            "branch": null,
            "route": null,
            "phno": null,
            "busno": null,
            "address": null,
            "bussPass": [
                {
                    "busPassId": "DKTE2278",
                    "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                    "_id": "658ed146083ba7e6b41ae632",
                    "aaplyDate": "2023-12-29T14:01:42.015Z"
                },
                {
                    "busPassId": "DKTE7413",
                    "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                    "_id": "658ed164083ba7e6b41ae638",
                    "aaplyDate": "2023-12-29T14:02:12.351Z"
                },
                {
                    "busPassId": "DKTE5010",
                    "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                    "_id": "658ed167083ba7e6b41ae63f",
                    "aaplyDate": "2023-12-29T14:02:15.785Z"
                },
                {
                    "busPassId": "DKTE1780",
                    "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                    "_id": "659043f74c91c6236365ce97",
                    "aaplyDate": "2023-12-30T16:23:19.632Z"
                }
            ],
            "__v": 4
        },
        "PaymentDetails": {
            "_id": "658ed0da083ba7e6b41ae628",
            "paymentDone": [
                {
                    "amount": 100,
                    "studentId": "20UCS110",
                    "email": "rushikeshtonape2002@gmail.com",
                    "response": {
                        "id": "order_NIBf5ik4LiS8FB",
                        "entity": "order",
                        "amount": 100,
                        "amount_paid": 0,
                        "amount_due": 100,
                        "currency": "INR",
                        "receipt": "e8hG6oAum",
                        "offer_id": null,
                        "status": "created",
                        "attempts": 0,
                        "notes": {
                            "studentId": "College Bus Pass Payment"
                        },
                        "created_at": 1703858584
                    },
                    "createdAt": "2023-12-29T14:03:02.500Z",
                    "_id": "658ed196083ba7e6b41ae64b"
                }
            ],
            "__v": 1
        }
    }
    }
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
    ```

    Response

    ```json
    {
        {
            "success": true,
            "message": "Bus Pass Applied Successfully",
            "data": {
                "_id": "658ed0da083ba7e6b41ae626",
                "year": null,
                "branch": null,
                "route": null,
                "phno": null,
                "busno": null,
                "address": null,
            "bussPass": [
            {
                "busPassId": "DKTE2278",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed146083ba7e6b41ae632",
                "aaplyDate": "2023-12-29T14:01:42.015Z"
            },
            {
                "busPassId": "DKTE7413",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed164083ba7e6b41ae638",
                "aaplyDate": "2023-12-29T14:02:12.351Z"
            },
            {
                "busPassId": "DKTE5010",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed167083ba7e6b41ae63f",
                "aaplyDate": "2023-12-29T14:02:15.785Z"
            },
            {
                "busPassId": "DKTE1780",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "659043f74c91c6236365ce97",
                "aaplyDate": "2023-12-30T16:23:19.632Z"
            },
            {
                "busPassId": "DKTE7308",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "659061f0bdad5ced6510b315",
                "aaplyDate": "2023-12-30T18:31:12.982Z"
            }
        ],
        "__v": 5
    }
    }
    }
    ```

#### Update Student Profile

-   **URL**: `http://localhost:3000/api/v1/auth/updateStudentDetails`
-   **Method**: `POST`
-   **Description**: update student profile.
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
            "studentId":"20UCS100",
            "year":"FE",
            "branch":"Computer Science",
            "phno":"9876543210",
            "route":"Ichalkaranji",
            "address":"ichalkaranji kolhapur"
        }
    }
    ```

    Response

    ```json
    {
        {
            "success": true,
            "message": "Student Details Updated Successfully",
            "data": {
                "_id": "658ed0da083ba7e6b41ae626",
                "year": "FE",
                "branch": "Computer Science",
                "route": "Ichalkaranji",
                "phno": "9876543210",
                "address": "ichalkaranji kolhapur",
            "bussPass": [
            {
                "busPassId": "DKTE2278",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed146083ba7e6b41ae632",
                "aaplyDate": "2023-12-29T14:01:42.015Z"
            },
            {
                "busPassId": "DKTE7413",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed164083ba7e6b41ae638",
                "aaplyDate": "2023-12-29T14:02:12.351Z"
            },
            {
                "busPassId": "DKTE5010",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "658ed167083ba7e6b41ae63f",
                "aaplyDate": "2023-12-29T14:02:15.785Z"
            },
            {
                "busPassId": "DKTE1780",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "659043f74c91c6236365ce97",
                "aaplyDate": "2023-12-30T16:23:19.632Z"
            },
            {
                "busPassId": "DKTE7308",
                "validDate": "Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time)",
                "_id": "659061f0bdad5ced6510b315",
                "aaplyDate": "2023-12-30T18:31:12.982Z"
            }
        ],
        "__v": 5
    }
    }
    }
    ```




### Database Type

MongoDB is a document database. It stores data in a type of JSON format.

### Database Schema

The following tables constitute the database schema: ![Alt text](docs/dbschema.png)

#### Student Table

Stores information about users.

| Column              | Type    | Description                  |
| ------------------- | ------- | ---------------------------- |
| `firstName`         | String  | User's first name            |
| `lastName`          | String  | User's last name             |
| `email    `         | String  | Unique user email            |
| `studentId`         | String  | Unique user PRN no           |
| `password`          | String  | User's password              |
| `additionalDetails` | VARCHAR | student Profile details      |
| `paymentDonebyUser` | VARCHAR | Payment History details      |
| `accountType`       | VARCHAR | Student, Admin               |

#### User Sessions Table

Stores user sessions and jw tokens.

| Column         | Type     | Description                           |
| -------------- | -------- | ------------------------------------- |
| `id`           | INT      | Unique session identifier             |
| `userid`       | INT      | Foreign Key session owner's id        |
| `sessiontoken` | VARCHAR  | jwt session token                     |
| `expiration`   | DATETIME | Expiration date of the user's session |



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
AWS_BUCKET_NAME = bytesync-app
AWS_ACCOUNT_REGION = ap-southeast-1
AWS_ACCOUNT_ACCESS_KEY = AKIA4EYMNT6XYZNDQ6OB
AWS_ACCOUNT_SECRET_ACCESS_KEY = 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

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