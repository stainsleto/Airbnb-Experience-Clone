import React from 'react';
import Star from '../images/star.png';


function ProductSlider(props){
    let currentStatus
    if ( props.openSpots === 0) {
        currentStatus = "SOLD OUT"
    }
    else if (props.location === "Online"){
        currentStatus = "ONLINE"
    }
    return(  
        <div className="card">
            {currentStatus && <div className="card--badge">{currentStatus}</div>}
            <img className="product-slider" src= {`../images/${props.img}`} />
            <div className="card-stats">
                <img id="star-image" src={Star} width="17px"/>
                <span>{props.rating}</span>
                <span className="light-text">({props.reviewCount}).</span>
                <span className="light-text">{props.country}</span>
            </div>
            <p className="card--title" >{props.title}</p>
            <p className="card--price"><span className="bold-text">From ${props.price}</span>/ person</p>
            
        </div>

        
    )
}

export default ProductSlider