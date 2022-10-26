import React from 'react';
import ProductImage from '../images/image12.png';
import Wedding from '../images/wedding.png';
import Star from '../images/star.png';
import Bike from '../images/bike.png';

function ProductSlider(){
    return(
        <div className="product-main">
            <div>
                <div className="product-text">
                    <img className="product-slider" src={ProductImage} />
                    <p><img id="star-image" src={Star} width="17px"/>5.0 <span className="light-text">(6).USA</span></p>
                    <p>Life lessons with Katie Zaferes</p>
                    <p ><span className="bold-text">From $136</span>/ person</p>
                </div>
            </div>

            <div>
                <div className="product-text">
                    <img className="product-slider" src={Wedding} />
                    <p><img id="star-image" src={Star} width="17px"/>5.0 <span className="light-text">(30).USA</span></p>
                    <p>Learn wedding photography</p>
                    <p ><span className="bold-text">From $125</span>/ person</p>
                </div>
            </div>

            <div>
                <div className="product-text">
                    <img className="product-slider" src={Bike} />
                    <p><img id="star-image" src={Star} width="17px"/>4.8 <span className="light-text">(2).USA</span></p>
                    <p>Group Mountain Biking</p>
                    <p ><span className="bold-text">From $125</span>/ person</p>
                </div>
            </div>


        </div>
    )
}

export default ProductSlider