import Tarjetas from './Tarjetas'
import jason from '../rickandmorty.json';

function Tira(params){
    return(
        <div className="rowbody">
            {jason.map(function(unaTarjeta, idx){
                return (
                    <div className="unaTarjeta" key={idx}>
                      <Tarjetas tarjetaAMostrar={unaTarjeta}/>
                    </div>
            )})}  
       </div>
    );
}

export default Tira;