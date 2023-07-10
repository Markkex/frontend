#Stage 1
FROM node:18-alpine3.18 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install react-scripts@4.0.3 -g --silent
RUN npm install --silent
COPY . . 
RUN npm run build

#Stage 2 
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]