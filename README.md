# Kaypak Finder

A Next.js application for tracking and finding Kaypak.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection (Required)
MONGODB_URI=your_mongodb_connection_string

# NextAuth Configuration (Required)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Optional Analytics Configuration (Optional)
ANALYTICS_API_KEY=your_analytics_api_key
```

### Environment Variables Description

- `MONGODB_URI`: MongoDB connection string for database access
- `NEXTAUTH_URL`: The canonical URL of your site
- `NEXTAUTH_SECRET`: Secret key for NextAuth.js session encryption (Generate with `openssl rand -base64 32`)
- `ANALYTICS_API_KEY`: API key for analytics integration (optional)

## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Deployment

1. Build the Docker image:

```bash
docker build -t kaypakfinder .
```

2. Run the container:

```bash
docker run -p 3000:3000 \
  -e MONGODB_URI=your_mongodb_uri \
  -e NEXTAUTH_URL=http://your-domain.com \
  -e NEXTAUTH_SECRET=your_nextauth_secret \
  kaypakfinder
```

### Docker Compose (Alternative)

Create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=your_mongodb_uri
      - NEXTAUTH_URL=http://your-domain.com
      - NEXTAUTH_SECRET=your_nextauth_secret
```

Then run:

```bash
docker-compose up -d
```

## Features

- User authentication
- Location tracking
- Analytics dashboard
- Profile management
- Settings configuration
