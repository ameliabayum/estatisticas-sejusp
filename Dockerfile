FROM node:16 as builder
WORKDIR /home/app/fontend
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.23.3-alpine as production
ENV NODE_ENV production
COPY --from=builder /home/app/fontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]