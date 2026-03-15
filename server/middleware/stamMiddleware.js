

export function stamMiddleware(req, res, next){
    console.log("il sont passer par stam!");
    next();
}