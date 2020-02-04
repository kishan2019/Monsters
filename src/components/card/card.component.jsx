import React from 'react';
import './card.css';

export const Card = props => {
    return <div className="card-container">
        <img alt="monster" src={`https://robohash.org/AY${props.monster.id}.png?set=set2&size=180x180`} />
            <h3> {props.monster.name} </h3>
            <p>{props.monster.email} </p>
        </div>
};