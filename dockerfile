FROM node:22-slim

ENV NODE_ENV development

WORKDIR /react-project

COPY . .

CMD ["npm","start"]
