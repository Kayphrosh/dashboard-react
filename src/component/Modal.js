import React from 'react'
import './Modal.css';
import productImg_1 from '../../public/images/product-2.png'

function Modal() {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="product-img">
          <img src={productImg_1} />
          <span className="other-images">
            <img src={productImg_1}/>
                        <img src={productImg_1} />
          </span>
        </div>
        <div className="product-details-container">
          <div className="product-details">
            <p>
              <span className="title">Product Name:</span>
              <span>White Champagne:</span>
            </p>
            <p>
              <span className="title">Product Price:</span>
              <span>NGN2,000 - $5.40 - GBP 4.40</span>
            </p>
            <p>
              <span className="title">Description:</span>
              <span>
                We want to be the largest collection in the polygon network!
              </span>
            </p>
            <p>
              <span className="title">Type Of Product:</span>
              <span>Special collections</span>
            </p>
            <p>
              <span className="title">Number of product in family:</span>
              <span>08</span>
            </p>
          </div>
          <button className="save-btn">Add Product & Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
