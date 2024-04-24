FROM node:lts
# Set working directory
WORKDIR /app/hw5

# install node modules
COPY ./package*.json .
RUN npm install

# Copy all files from current directory to working dir in image
COPY . .

ENV PORT 80

CMD [ "npm", "start"]