FROM --platform=linux/amd64 node:latest
COPY . /formulario
WORKDIR /formulario
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]