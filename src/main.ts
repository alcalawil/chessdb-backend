import { setupServer } from './server';
import { makeUsersModule, makeGamesModule } from './modules';

async function main() {
  const server = setupServer();

  // instance modules
  makeUsersModule(server);
  makeGamesModule(server);
}

main();
