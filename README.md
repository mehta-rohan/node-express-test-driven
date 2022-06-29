# Museum Visitor Counter

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Chai] - Testing framework
- [Mocha] - Testing framework

## Installation

Museum Visitor Counter requires [Node.js] to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/mehta-rohan/node-express-test-driven.git
cd node-express-test-driven
npm i
node run start
```
## Test cases

```sh
npm run test
```

## Server running @
```sh
127.0.0.1:3030
```

## All requests and responses
```sh
GET /api/visitors?date=1404198000000&ignore=avila_adobe HTTP/1.1
Host: localhost:3030
Respose:

{
    "attendance": {
        "month": "July",
        "year": 2014,
        "ignored": {
            "museum": "avila_adobe",
            "visitors": 32378
        },
        "highest": {
            "museum": "america_tropical_interpretive_center",
            "visitors": 13490
        },
        "lowest": {
            "museum": "hellman_quon",
            "visitors": 120
        },
        "total": 28157
    }
}
```
```sh
GET /api/visitors?date=1404198000000&ignore=avila_adob1 HTTP/1.1
Host: localhost:3030
Response:
{
    "attendance": {
        "month": "July",
        "year": 2014,
        "highest": {
            "museum": "avila_adobe",
            "visitors": 32378
        },
        "lowest": {
            "museum": "hellman_quon",
            "visitors": 120
        },
        "total": 60535
    }
}
```


```sh
GET /api/visitors?date=q1404198000000&ignore=avila_adob1 HTTP/1.1
Host: localhost:3030
Response
{
    "message": "Invalid date"
}
400 Bad Request
```


```sh
GET /api/visitors HTTP/1.1
Host: localhost:3030
400 Bad Request
```

