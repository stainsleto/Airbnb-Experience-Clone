import React from 'react';
import Star from '../images/star.png';


function ProductSlider(props){
    return(  
        <div>
            <img className="product-slider" src= {`../images/${props.img}`} />
            <div className="card-stats">
                <img id="star-image" src={Star} width="17px"/>
                <span>{props.rating}</span>
                <span className="light-text">({props.reviewCount}).</span>
                <span className="light-text">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p ><span className="bold-text">From ${props.price}</span>/ person</p>
            
        </div>

        
    )
}

export default ProductSlider