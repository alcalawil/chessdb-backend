export interface IGameHeaders {
	White?: string;
	Black?: string;
	Result?: string;
	Event?: string;
	EventCountry?: String;
	Site?: string;
	Date?: string;
	Round?: string;
	WhiteElo?: string;
	BlackElo?: string;
	ECO?: string;
	WhiteTitle?: string;
	BlackTitle?: string;
	WhiteFideId?: string;
	BlackFideId?: string;
}

export interface IGame {
	id: string;
	headers: IGameHeaders;
	moves: string;
	pgn?: string;
	fenList?: string[];
}

export interface IGameStorage {
	createGame: (headers: IGameHeaders, moves: string) => Promise<IGame>;
	searchGames: (filter: IGameHeaders) => Promise<IGame[]>;
	deleteGames?: (filter: IGameHeaders) => Promise<IGame[]>;
	deleteGame?: (id: string) => Promise<IGame>;
	getGame?: (id: string) => Promise<IGame>;
	updateGame?: (id: string, headers: IGameHeaders, moves: string) => Promise<IGame>;
}