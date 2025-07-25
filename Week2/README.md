# Simple Calculator Web Application

This is a simple calculator web application developed as part of Task 2.2P SIT725 - Applied Software Engineering course. The application provides a user-friendly interface to perform basic arithmetic operations including addition, subtraction, multiplication, and division.

## Features

- Clean and responsive UI using Materialize CSS
- Performs four basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Error handling for invalid inputs
- RESTful API endpoints for calculator operations
- Responsive design that works on various screen sizes

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
  - Materialize CSS framework

- **Backend**:
  - Node.js
  - Express.js

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install express
```

## Running the Application

Start the server with:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## API Endpoints

### GET Endpoints

- **GET /add**
  - Adds two numbers
  - Query parameters: `a` and `b`
  - Example: `/add?a=5&b=3`

- **GET /subtract**
  - Subtracts second number from first
  - Query parameters: `a` and `b`
  - Example: `/subtract?a=5&b=3`

- **GET /multiply**
  - Multiplies two numbers
  - Query parameters: `a` and `b`
  - Example: `/multiply?a=5&b=3`

- **GET /divide**
  - Divides first number by second
  - Query parameters: `a` and `b`
  - Example: `/divide?a=6&b=3`

### POST Endpoint

- **POST /calculate**
  - Performs calculation based on provided operation
  - Request body: JSON with `a`, `b`, and `operation` fields
  - Operation values: "add", "subtract", "multiply", "divide"
  - Example request body:
    ```json
    {
      "a": 10,
      "b": 5,
      "operation": "add"
    }
    ```

## Project Structure

```
Week2/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── scripts.js
│   └── index.html
├── server.js
├── package.json
├── LICENSE
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Thi Thu Suong Ngo