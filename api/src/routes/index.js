const { Router} = require('express');
const axios = require ("axios");
const morgan = require ("morgan");
const {Pokemon,Tipo} = require('../db');
const { get } = require('superagent');


// Importar todos los routers;

const router = Router();

router.use(morgan("default"));


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getTypes = async () =>{
    let types = await axios.get("https://pokeapi.co/api/v2/type");
    types = types.data.results.map(el =>{
        return el.name
    });
    // console.log(types);
    types = types.forEach(el =>{
        Tipo.findOrCreate({
            where: {tipo: el}
        })
    })
}

getTypes();

router.get("/types", async(req,res) =>{
    const typesDb = await Tipo.findAll();
    res.send(typesDb);
})

const getApiPokemonsAll = async () => {
    console.time("api");
    let apiData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=80&offset=0");
    let array = (Object.values(apiData.data.results));
    let pokemonArray = await Promise.all(array.map(async (el,i) => {
        let body = await axios.get(el.url);
        let pokemon = body.data;
        let tipos = pokemon.types.map(el =>{
            return el.type.name;
        });
        return {
            id: i+1,
            nombre: pokemon.name,
            vida:  pokemon.stats[0].base_stat,
            fuerza:  pokemon.stats[1].base_stat,
            defensa:  pokemon.stats[2].base_stat,
            velocidad:  pokemon.stats[5].base_stat,
            altura:  pokemon.height,
            peso:   pokemon.weight,
            img: pokemon.sprites.front_default,
            tipo:   tipos
        }    
    }))
    // console.log(pokemonArray);
    console.timeEnd("api");
    console.log("api =>",pokemonArray);
    return pokemonArray                 
} 

const getDbInfo = async () =>{
    return await Pokemon.findAll({
        include:{
            model: Tipo,
            attributes: ['tipo'],
            through: {
                attributes: [],
            }
        }
    })

    
}

const getAll = async () =>{
    let apiInfo = await getApiPokemonsAll();
    
    let dbInfo = await getDbInfo()
    console.log("TIPOOOOOOOOOOOOOO",apiInfo)

    console.log("TIPOOOOOOOOOOOOOO",dbInfo)
    let maped = dbInfo.map(el =>{
        return {
            nombre : el.nombre,
            fuerza : el.fuerza,
            defensa : el.defensa,
            velocidad : el.velocidad,
            altura : el.altura,
            peso : el.peso,
            img : el.img,
            tipo : [el.tipos[0].tipo,el.tipos[1].tipo],
            custom: el.custom
        }

    })
    const info = apiInfo.concat(maped);
    return info;
}


router.get("/pokemons", async(req,res)=> {
    const nombre = req.query.nombre;
    
    let pokemonsAll = await getAll();


    if(nombre){
        let pokemonName = pokemonsAll.filter(el =>{
            if (el.nombre.toLowerCase() === nombre.toLowerCase()) return el;
        })
        pokemonName.length 
        ? res.status(200).send(pokemonName) 
        : res.status(404).send('El pokemon solicitado no existe.');
    }

    else {
        res.status(200).send(pokemonsAll);
    }
})  


router.get("/pokemons/:id", async(req,res)=> {
    const id = parseInt(req.params.id); 
    console.log(id);
    let pokemonsAll = await getAll();
    console.log(pokemonsAll);

    if(id){
        let pokemonId = pokemonsAll.filter(el => el.id === id)
        pokemonId
        ? res.status(200).send(pokemonId) 
        : res.status(404).send('El pokemon solicitado no existe.');
    
    }
    else {
        res.status(200).send(pokemonsAll);
    }
});


router.post("/pokemons", async(req,res)=>{
    let {
        nombre,
        vida,
        fuerza,
        defensa,
        velocidad,
        altura,
        peso,
        img,
        tipo
    } = req.body;
    console.log(req.body);
    let pokemonCreation = await Pokemon.create({      
            nombre,
            vida,
            fuerza,
            defensa,
            velocidad,
            altura,
            peso,
            img,          
    });

    let tipoDb = await Tipo.findAll({ where: {tipo: tipo} })
    pokemonCreation.addTipo(tipoDb); //add Metodo de sequeliza --> add(tabla -> Tipo)
    res.send("Pokemon creado correctamente");
});
// console.log(getApiPokemonsById(1));
// console.log(poke);

module.exports = router;
