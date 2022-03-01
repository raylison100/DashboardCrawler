FROM node:14-alpine as build-stage

WORKDIR /app

RUN npm install -g @vue/cli

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]