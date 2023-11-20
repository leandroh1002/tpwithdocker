# Dockerfile para proyecto con estructura cliente-servidor separada

# Etapa 1: Construir el cliente
FROM node:21-alpine as client

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/ .

RUN npm run dev


# Etapa 2: Construir el servidor 
FROM node:21-alpine as server

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/ .

# Exponer el puerto del servidor
EXPOSE 3232

# Etapa 3: Combinar el cliente y el servidor
FROM node:21-alpine

WORKDIR /app

# Copiar el cliente construido desde la etapa del cliente
COPY --from=client /app/client /app/client

# Copiar el servidor
COPY --from=server /app/server .

# Exponer el puerto del servidor
EXPOSE 3232

# Definir el comando para ejecutar el servidor
CMD ["npm", "start"]
