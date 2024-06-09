FROM node:10

WORKDIR /home/node/app

# Tüm dosyaları kopyala
COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE 3000
