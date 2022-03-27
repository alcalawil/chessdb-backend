import { setupServer, startServer } from './server';
import { makeUsersModule, makeGamesModule } from './modules';
import { startDb } from './db';

async function main() {
  const server = setupServer();

  // instance modules
  makeUsersModule(server);
  makeGamesModule(server);

  await startDb();
  startServer();
}

main();
