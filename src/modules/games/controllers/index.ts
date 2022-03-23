import { Request, Response } from 'express';

export function createGames(req: Request, res: Response) {
	res.status(201).json({ message: 'createGames' });
}

export function searchGame(req: Request, res: Response) {
	res.status(200).json({ message: 'searchGame' });
}
