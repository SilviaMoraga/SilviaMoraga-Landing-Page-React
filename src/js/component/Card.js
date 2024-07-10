import React from 'react';

const Card = ({title, description, imgUrl}) => {

    return (
            <div className="card pt-3 m-3" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
    )
};

export default Card;