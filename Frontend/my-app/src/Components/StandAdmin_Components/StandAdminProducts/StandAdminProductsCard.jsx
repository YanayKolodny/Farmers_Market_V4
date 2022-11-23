import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductAsync } from '../../../Slices/productsSlice'
import { selectToken } from '../../../Slices/loginSlice'

import UpdateProductModal from '../AdminUpdateModals/UpdateProductModal';

import '../../../StyleSheets/AdminProducts.css'
import { MDBBtn, } from 'mdb-react-ui-kit';

// This component is the card that contains a product from a stand - for the stand owner uses.
export default function StandAdminProductsCard(props) {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  return (
    <div >
      <div key={props._id} className="box" style={{ width: "200px", height: "350px" }}>

        <img className="product_img" src={`http://127.0.0.1:8000${props.image}`} alt="product" />
        <div className="content">

          <div className="title">
            <span>{props.prodName}</span>
          </div>

          <div className="desc">
            Description:<span>{props.desc}</span>
          </div>

          <div className="price">
            Price:<span>{props.price}₪</span>
          </div>

          <div className="category">
            Category:<span>{props.category_id.categoryName}</span>
          </div>

          <div className="inStock">
            {props.inStock === true ?
              (<span><b>In stock</b></span>)
              :
              (<span><b>Out Of Stock</b></span>)}

          </div>

        </div>
      </div>

      <UpdateProductModal {...props} />
      <MDBBtn
        style={{ width: "290px", borderRadius: "20px", border: "2px solid", borderColor: "white" }}
        onClick={() => dispatch(deleteProductAsync({ token: token, id: props._id }))}>
        Delete Item
      </MDBBtn>
    </div>
  );
}
