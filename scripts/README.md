# API Service

A high-performance RESTful API service built with modern technologies.

## Features

- RESTful endpoints
- JWT authentication
- Rate limiting
- Request validation
- Database integration
- Logging

## Requirements

- Node.js 18+
- npm 9+
- MongoDB 6+

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

## Running the Service

Start in development mode:

```bash
npm run dev
```

Start in production mode:

```bash
npm start
```

## Testing

Run unit tests:

```bash
npm test
```

Run integration tests:

```bash
npm run test:integration
```

## Documentation

API documentation is available at `/docs` endpoint when the service is running.

## License

MIT