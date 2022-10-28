import React from 'react';
import Star from '../images/star.png';


function ProductSlider(props){
    let currentStatus
    if ( props.item.openSpots === 0) {
        currentStatus = "SOLD OUT"
    }
    else if (props.item.status === "Online"){
        currentStatus = "ONLINE"
    }
    return(  
        <div className="card">
            {currentStatus && <div className="card--badge">{currentStatus}</div>}
            <img className="product-slider" src= {`../images/${props.item.coverImg}`} />
            <div className="card-stats">
                <img id="star-image" src={Star} width="15px"/>
                <span className="normal-text">{props.item.stats.rating} </span>&nbsp;
                <span className="light-text">({props.item.stats.reviewCount})&nbsp;🔴</span>
                <span className="light-text">{props.item.location}</span>
            </div>
            <p className="card--title normal-text" >{props.item.title}</p>
            <p className="card--price normal-text "><span className="bold-text">From ${props.item.price}</span>/ person</p>
            
        </div>

        
    )
}

export default ProductSlider