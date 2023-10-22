FROM node:18-alpine3.17 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx nx run pet-store-frontend:build

FROM nginx:stable-alpine
COPY --from=builder /app/dist/apps/pet-store-frontend /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]