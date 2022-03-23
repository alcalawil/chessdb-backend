import * as controllers from '../controllers';

export function createRoutes(server: any) {
	server.post('/api/users', controllers.createUser);
}
