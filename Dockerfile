FROM node:18-alpine

# set working directory
WORKDIR /dist

# copy files
COPY package*.json ./

# install all required packages
RUN npm install

# install vite
RUN npm i -g vite 

# build
RUN npm run build

# copy all other shit
COPY . .

# expose port 
EXPOSE 8080
CMD ["serve -s dist"]