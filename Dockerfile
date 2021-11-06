FROM node:14.18-alpine as build-env

WORKDIR /app

ADD schema.gql /app/schema.gql
ADD tsconfig.json /app/tsconfig.json
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn install

ADD src /app/src
RUN yarn build

FROM node:14.18-alpine

WORKDIR /app

COPY --from=build-env /app/schema.gql /app/schema.gql
COPY --from=build-env /app/package.json /app/package.json
COPY --from=build-env /app/yarn.lock /app/yarn.lock

RUN yarn install --production

COPY --from=build-env /app/dist /app/dist

CMD [ "yarn", "start:prod" ]
