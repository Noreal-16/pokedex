import "../Assets/css/card.css";

export const Card = ({descrciptionI, dataP, search}) => {

    return (
        <div className="container-card-group">
            {!search &&
                <div className="container-card" style={{borderColor: dataP.color}} onClick={() => descrciptionI(false)}>
                    <p style={{color: dataP.color}}>{`#00${dataP.id}`}</p>
                    <img alt="" className="img-card" src={dataP.image}/>
                    <div className="container-card-foot" style={{background: dataP.color}}>
                        <h2 className="h2-text-card">{dataP.name}</h2>
                    </div>
                </div>}
            {search === dataP.name &&
                <div className="container-card"  style={{borderColor: dataP.color}} onClick={() => descrciptionI(false)}>
                    <p style={{color: dataP.color}}>{`#00${dataP.id}`}</p>
                    <img alt="" className="img-card" src={dataP.image}/>
                    <div className="container-card-foot" style={{background: dataP.color}}>
                        <h2 className="h2-text-card">{dataP.name}</h2>
                    </div>
                </div>}

        </div>
    )
}