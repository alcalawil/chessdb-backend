import { Game } from './models';
import { IGameHeaders, IGameStorage } from "../../../types";

export function makeGameStorage(): IGameStorage {

	function createGame(headers: IGameHeaders, moves: string) {
		const game = new Game({
			...headers,
			moves
		});
		return game.save();
	}

	async function searchGames(filter: IGameHeaders) {
		return await Game.find(filter);
	}

	return {
		createGame,
		searchGames
	}
}
