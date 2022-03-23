# Simple and dockerized nodejs + typescript boilerplate

Love using microservices? Start from this repo and extend as you want

### Docker use

- `docker build -t express-api-ts:1.0.0 .`
- `docker run -it -d --env-file ./env/production.env -p 3000:3000 express-api-ts:1.0.0`
- go to localhost:3000 and see the magic
