# Chessdb

MVP Chess online database

### Docker use

- `docker build -t chessdb:1.0 .`
- `docker run -it -d --env-file .env -p 3000:3000 chessdb:1.0`
- go to localhost:3000 and see the magic


### To Do

- Add db indexes
- Add a robust filter (allow filtering by name, last name, uppercase, lowercase, date, elo, etc)
- Add frontend project
