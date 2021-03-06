import { Request, Response } from 'express';
import { gameService } from '../services';

export async function addPGNGames(req: Request, res: Response) {
	try {
		const pgnArray = req.body.map((encodedPgn: string) => {
			return Buffer.from(encodedPgn, 'base64').toString('utf8');;  
		});

		// TODO: Validate pgnArray

		const result = await gameService.addPGNGames(pgnArray);
		res.status(201).json({ message: 'createGames', result });
	} catch (e: any) {
		console.log(e);
		res.status(500).json({ error: e.message });
	}
}

export async function searchGame(req: Request, res: Response) {
	try {
		const filter = req.query;
		
		const games = await gameService.searchGames(filter);
		res.status(200).json({ message: `found ${games.length} games`, games });
	} catch (e: any) {
		console.log(e);
		res.status(500).json({ error: e.message });
	}
}
