FROM alpine:3.14

# Set the working directory in the container
WORKDIR /app

# Install Node.js and npm
RUN apk --no-cache add nodejs npm

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your application code to the container
COPY . .

# Expose a port if your GraphQL server is running on a specific port
EXPOSE 4000

# Command to start your GraphQL server
CMD ["npm", "start"]