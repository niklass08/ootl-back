FROM node:lts AS base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY src ./src
COPY types ./types
COPY tsconfig.json .
RUN npm install && npm run build-prod

CMD ["node" ,"./build/ootl-back.js"]

