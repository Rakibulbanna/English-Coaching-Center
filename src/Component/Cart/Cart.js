import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import './Cart.css';

const Cart = (props) => {


    //console.log(cart);
    let BeforeTaxTotal = 0;

    for (const product of props.cart) {
        BeforeTaxTotal += product.price;
        //console.log(product);

    }
    let shippingCharge = BeforeTaxTotal > 0 ? 15 : 0;


    const Tax = (BeforeTaxTotal + shippingCharge) * 0.10;
    const AfterTaxTotal = (BeforeTaxTotal + Tax + shippingCharge).toFixed(2);

    //const [cnt,setcnt] = useState([]);

    const uniqueNames = Array.from(new Set(props.cart));

    //    useEffect(() => {
    //         for (const i of cart) {

    //          for (const j of cnt){

    //             if (i!==j){
    //             setcnt(i);
    //             break;
    //             }

    //             }
    //         //cnt.push();
    //     } 
    //    }, [cart,cnt])


    //    console.log(cnt);

    /* */
    return (
        <div className="cart-container">
            <h2>order summary: </h2>
            <h5>Item ordered :
                {props.cart.length}
            </h5>
            <h5>Shipping Charge : ${shippingCharge}</h5>
            <h5>Before Tax : ${BeforeTaxTotal}</h5>
            <h5>Tax : ${Tax}</h5>
            <h2 className="orderTotal">Order Total : ${AfterTaxTotal} </h2>

            <h2>Order list</h2>

            {

                props.cart.map(cartShow =>

                    <div className="cart-selected-container">

                        <div className="cart-selected-header">
                            <p>{cartShow.name}</p>
                            <br />
                            {/* <button type="button" className="btn bt-background text-white" data-bs-toggle="modal"
                                onClick={() => props.handleDeleteCart(props.cart)} >
                                delete
                            </button> */}
                        </div >
                        <div>
                            <img src={cartShow.img} alt="" />
                        </div>
                    </div>
                )
            }
            {/* data-bs-target={`#${id}`} */}
            <Link exact to="/CheckOut">
            <button type="button" className="btn bt-background text-white mt-3" data-bs-toggle="modal" >
                check out
            </button>
            
            </Link>



        </div>
    );
};

export default Cart;