import * as api from './api.js'

const endpoints={
recipies:'/data/recipes'
}

export function getAllrecipies(){

    return api.get(endpoints.recipies);
}