# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./client
COPY package-lock.json ./client
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3000

# add app
COPY . /client

# start app
CMD ["npm", "start"]
