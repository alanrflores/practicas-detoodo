import React from 'react'

const Cards = ({ items }) => {

    return ( 
        <>
            {
            items.length > 0 && items.map((item, i) => (
                
                <div key={i} className="card border-success mb-3" style={{ width: "18rem" }}>
                    <div className="card-header">{item.id}</div>
                    <div className="card-body text-success">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.apellido}</p>
                    </div>
                </div>
                    ))         
                    
            }
       </>

            )
}

            export default Cards