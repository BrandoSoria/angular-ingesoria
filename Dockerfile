#Primera Etapa
FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

FROM node:10-alpine

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Compilar la aplicación Angular
RUN ng build

#Segunda Etapa
FROM nginx:1.17.1-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist/angular_ingesoria /usr/share/nginx/html