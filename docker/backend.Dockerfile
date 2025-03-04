# Use an official Node.js runtime as a base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy monorepo dependencies
# COPY package.json package-lock.json ./
COPY apps/backend /app
# COPY packages packages # If you have shared libraries

# Install dependencies
RUN npm install #--only=production

# Produce environment file
RUN cp .env.example .env

# Build NestJS app
RUN npm run build

# Use a lightweight image for production
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app ./

# Expose the application port
EXPOSE 3001

# Start the backend
CMD ["node", "/app/dist/main"]