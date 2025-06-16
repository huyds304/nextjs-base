# Use an official node image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# # Build the application
# RUN npm run build

# # Use a lightweight web server to serve the built application
# FROM nginx:alpine

# # Copy the built application from the previous stage
# COPY --from=0 /app/dist /usr/share/nginx/html

# # Copy custom Nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copy the .htpasswd file to the container
# COPY .htpasswd /etc/nginx/.htpasswd

# # Expose port 80
# EXPOSE 80

# # Start the web server
# CMD ["nginx", "-g", "daemon off;"]