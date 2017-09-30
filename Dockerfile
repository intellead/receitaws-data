FROM node

ENV HOME=/home/intellead/receitaws-data

ENV PORT=3000

ENV REGISTRY_URL=localhost

ENV REGISTRY_PORT=8761

COPY app.js package.json $HOME/app/

COPY bin/ $HOME/app/bin

COPY public/stylesheets/ $HOME/app/public/stylesheets

COPY routes/ $HOME/app/routes

COPY views/ $HOME/app/views

RUN cd $HOME/app && npm install --silent --progress=false --production

EXPOSE 3000

WORKDIR $HOME/app

CMD ["npm", "start"]