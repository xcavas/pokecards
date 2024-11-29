import { Image } from './Image'
import { Btn } from './Btn'

export function MiniCard(props){
    return (
                <div className={props.css}>
                    <Image src={props.src} alt={props.alt} />
                    <span>{props.alt}</span>
                    <Btn val='Ampliar' />
                </div>
            )
}