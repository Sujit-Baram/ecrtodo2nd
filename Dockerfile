# Use an official Node.js runtime as a parent image
FROM node:14

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Expose port 3000 (adjust as needed)
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
