import { makeGameService } from './games';
import { gameStorage } from '../../../storage';
export const gameService = makeGameService(gameStorage);

