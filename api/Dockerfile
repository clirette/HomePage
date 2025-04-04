# Use the official Bun image as the base image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, bun.lock, and tsconfig.json to the container
COPY package.json bun.lock tsconfig.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "dev"]