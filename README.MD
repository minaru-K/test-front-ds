This is test frontend project for https://github.com/breeeaaad/dynamic-segmentation 

===== SERVER LINK =====
You must input link to server. You can make it in /src/services/db.service.js:

export const dbService = new DbService(
    "http://192.168.128.128:8080" ---> change
  );

Don't forget about CORS (if on backend CORS disabled, you will get errors in response from server).

=======================

npm run start - start project on localhost:8080
npm run prod - build project for production, files save in /src/dist
npm run serve - run project in preview mode (don't use it like server)
