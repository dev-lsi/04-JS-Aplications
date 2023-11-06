import * as api from './api.js'

const endpoints={
recipies:'/data/recipes',
recipeById:'data/recipies/'
}

export function getAllrecipies(){

    return api.get(endpoints.recipies);
}

export function getById(id){
    return get(endpoints.recipeById+id);
}