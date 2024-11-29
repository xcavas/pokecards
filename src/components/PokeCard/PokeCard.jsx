import { Image } from '../MiniCard/Image'

export function PC(props){
    return (
                <div className={props.css}>
                    <Image css='PokeImg' src={props.src} alt={props.alt} />
                    {/*
                    <img src={pokemon.svg} alt={pokemon.name} />
                    <div className='PokeData'>
                            <label>Id:</label>     <input type="text" value={pokemon.id} readOnly    />
                            <label>Nombre:</label> <input type="text" value={pokemon.name} readOnly  />
                            <label>Altura:</label> <input type="text" value={pokemon.height} readOnly />
                            <label>Peso:</label>   <input type="text" value={pokemon.weight} readOnly />
                                        
                            <label>Tipo:</label>   <select>{pokemon.types?.map(
                                                                                tipo => {
                                                                                return(
                                                                                    <option value={tipo.slot}>
                                                                                        {tipo.type.name}
                                                                                    </option>
                                                                                    )
                                                                                })
                                                            }
                                                </select>
                        </div>
                    */}                                                   
                </div>
            )
}