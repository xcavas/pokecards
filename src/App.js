import { ApiPokemon } from './hooks/getPokemones';
import { MiniCard } from './components/MiniCard/MiniCard';
import { PokeCard } from './components/PokeCard/PokeCard';
import './assets/App.css';

function App() {
  const pokemones = ApiPokemon("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  return (
          <>
          <h1>Pokédex</h1>
          <div className="App">
              
              {
                pokemones?.map(
                               pokemon => {return(
                                                  <MiniCard 
                                                            css='MiniCard' 
                                                            src={pokemon.svg} 
                                                            alt={pokemon.name}>
                                                  </MiniCard>
                                                  )})
              }
          </div>
          </>
         );
};

export default App;