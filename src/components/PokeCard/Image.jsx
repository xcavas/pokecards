
export function Image(props){
    return (
                <div className={props.css}>
                   <img src={props.src} alt={props.alt} />
                </div>
            )
}