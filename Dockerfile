FROM node
    LABEL maintainer aaron.nole@tecsup.edu.pe
    RUN git clone -q https://github.com/aaronnole/express-docker-app.git
    COPY package*.json ./
    WORKDIR /app
    RUN npm install --production 
    EXPOSE 5000
    CMD [ "node", "app.js" ]