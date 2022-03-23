import { createRoutes } from './routes';

export function makeUsersModule(server: any) {
	createRoutes(server);
}