import { getUserData } from '../util.js';
import * as api from './api.js';
import { addOwner } from './data.js';

export async function getAllGames(){
  return api.get('/Games');
}

export function createGame(game){
    
    addOwner(game)
    return api.post('/Games',game);
}