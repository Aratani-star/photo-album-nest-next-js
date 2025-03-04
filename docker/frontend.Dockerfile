# Use an official Node.js runtime as a base image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy monorepo dependencies
# COPY package.json package-lock.json ./
COPY apps/frontend /app
# COPY packages packages # If you have shared libraries

# Install dependencies
RUN npm install

# Build Next.js app
RUN npm run build #--workspace=frontend

# Use lightweight runtime for production
FROM node:20-alpine
WORKDIR /app

# Copy built output
COPY --from=builder /app ./

# Expose the application port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
