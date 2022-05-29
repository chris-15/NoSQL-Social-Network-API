# NoSQL-Social-Network-API - Weekly Challenge 18

![badge](https://img.shields.io/badge/license-MIT%20License-blue)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Description

This weeks challenge was to create an API for a social network application using Express.js, MongoDB, and Mongoose. Moment.js was also used to format dates. The users can post thoughts and add friends, while also being able to post reactions to thoughts.

Below are the challnege requirements:

- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

A video of the application in use:

[Demonstration Video](https://drive.google.com/file/d/1ItUwJPaRPZQ8DUeRnBEZFIeUvaMtIHny/view)


## Installation

In order to use the application you must install Node.js, Express.js, Mongoose, Moment.js. 

## Usage

To start the application, run the command <code>npm start</code> in the command line.

## Tests

No tests were conducted for this application.

## Credits

- Various Classmates
- TA's
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](http://expressjs.com/en/4x/api.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/manual/introduction/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [Moment.js Documentation](https://momentjs.com/docs/)

## License

MIT License

Copyright (c) [2022] [Christopher Sarmiento-Salas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.