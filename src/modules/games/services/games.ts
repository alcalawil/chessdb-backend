import { Chess } from 'chess.js';
import { IGameHeaders, IGameStorage } from '../../../types';
import { parseHeaders } from './helpers';

export function makeGameService(db: IGameStorage) {

	function createGame(pgn: string) {
		const chess = new Chess();

		if (!chess.load_pgn(pgn)) {
			throw new Error('Invalid PGN');
		}

		const headers = parseHeaders(chess.header());
		const moves = chess.history().join(' ');

		return db.createGame(headers, moves);
	}

	/* exportable functions only */
	async function addPGNGames(pgnArray: string[]) {
		const createdGames = pgnArray.map(createGame);
		return Promise.all(createdGames);
	}

	async function searchGames(filter: IGameHeaders) {
		/* any validations or transformations go here */
		return db.searchGames(filter);
	}

	return {
		createGame,
		addPGNGames,
		searchGames
	}
}
