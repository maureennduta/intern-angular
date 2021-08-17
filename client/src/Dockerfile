# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12-alpine

# Set the working directory
WORKDIR /usr/client/app

# Add the source code to app
COPY . .

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM nginx:latest

# Copy the build output to replace the default nginx contents.
#COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80