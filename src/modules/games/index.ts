import { createRoutes } from './routes';

export function makeGamesModule(server: any) {
	createRoutes(server);
}