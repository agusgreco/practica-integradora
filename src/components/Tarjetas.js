
function Tarjetas(props){
    return(
<div className="tarjeta">
                    <div className="tarjeta-text">
                        <div className="image"> 
                          <img  src={props.tarjetaAMostrar.image}/> 
                        </div>
                        <div className="name font-weight-bold words"> {props.tarjetaAMostrar.name} </div>
                        <div className="statusandspecies words">{props.tarjetaAMostrar.status} - {props.tarjetaAMostrar.species}</div>
                        <div className="origin words">{props.tarjetaAMostrar.origin.name} </div>
                    </div>
</div>    
)}

export default Tarjetas;