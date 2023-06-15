# Use the official Nginx base image
FROM nginx

# Install JQ
RUN apt-get update && \
    apt-get install -y jq

# Copy your Nginx configuration files to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]