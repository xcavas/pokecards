import { useState, useEffect } from 'react';

export function ApiPokemon(url_api) {
  const [pokemones, setPokemones] = useState([]);
  useEffect(() => {
                      // Funcion Asincrona por el uso de promesas con "await"
                      const getPokemones = async () => 
                        {
                          // Promesa Obtener Listado Pokemones
                          const response = await fetch(url_api)
                          // Convertir Json La Respuesta del Api
                          const listaPokemones = await response.json()
                          // Desestructurar Variable Results del Json
                          const { results } = listaPokemones
                          // Capturar los detalles del Pokemon
                          const detallespokes =  results.map( async (pokedatos) => 
                                                {
                                                  const response = await fetch(pokedatos.url)
                                                  const pokedata = await response.json()

                                                  return{
                                                          id:     pokedata.id,
                                                          height: pokedata.height,
                                                          weight: pokedata.weight,
                                                          name:   pokedata.name,
                                                          types:  pokedata.types,
                                                          svg:    pokedata.sprites.other.dream_world.front_default
                                                        }
                                                }) 
                          // Establecer Contenido de Respuesta al Render
                          setPokemones(await Promise.all(detallespokes))
                        }
                        getPokemones()
                  }, []);
  return (pokemones );
       
};