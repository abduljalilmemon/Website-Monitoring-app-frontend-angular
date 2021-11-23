FROM node:16

WORKDIR /app

COPY ./ /app

RUN npm install

RUN npm install -g @angular/cli

EXPOSE 5000

CMD ng serve --host 0.0.0.0 --port 5000

#FROM nginx:alpine
#COPY --from=node /usr/local/app /usr/share/nginx/html
