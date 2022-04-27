import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div className="row  bg-blue">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-5">
                        <div className="card" style={{ minWidth: "300px" }}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p>specie:{item.species}</p>
                                <p>location:{item.location.name}</p>
                            </div>
                        </div>

                    </div>
                ))}
        </div>
    )
}

export default Characters;