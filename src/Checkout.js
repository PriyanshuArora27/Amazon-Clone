import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const[{basket}]=useStateValue();

    return (
        <div className="checkout">
           <div className="checkout__left"> 
            <img className="checkout__ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Nirali/New_offer/Aug21/Ingress/NP_CBCC_ILM_640x45._CB644736787_.jpg"             
            alt=" "/>
            {basket?.length===0 ?(
               <div>
                   <h2>Your shopping basket is empty</h2>
                   <p>
                   You have no items in your basket. To buy one or more items 
                   click "Add to basket" next to the item.
                   </p>

               </div>    
            ):(

              <div>
                  <h2 className="checkout__title">Your basket</h2>
                  {basket?.map(item=>(
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                    />

                  ))}
                  
              </div>


            )}
          </div> 
          {basket.length>0 &&(
            <div className="checkout__right">
                 <Subtotal/>
                
               
            </div>    
          )} 

            
        </div>
    )
}

export default Checkout
