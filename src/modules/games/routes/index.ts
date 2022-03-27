import * as controllers from '../controllers';

export function createRoutes(server: any) {
	server.post('/api/games', controllers.addPGNGames);
	server.get('/api/games', controllers.searchGame);
}
