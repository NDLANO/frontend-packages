FROM node:8.6-alpine
LABEL name "designmanual"

ENV HOME=/home/app
ENV APP_PATH=$HOME/designmanual

COPY yarn.lock lerna.json .babelrc package.json $APP_PATH/

WORKDIR $APP_PATH
RUN yarn

COPY packages $APP_PATH/packages
COPY scripts $APP_PATH/scripts

WORKDIR $APP_PATH
RUN yarn run build-storybook
EXPOSE 5000
CMD ["yarn", "run", "serve-storybook"]
