FROM node:lts-alpine
WORKDIR /app
COPY . /app
RUN yarn && yarn build
EXPOSE 5001
ENV NODE_ENV=production
ENTRYPOINT ["yarn", "start"]
