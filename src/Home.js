import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
         <img 
         className="home__image"
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
         alt=""
         
         
         />

         <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Startup:How Constant Innovation creates Radically Succesful Bussiness Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />

            <Product
            id="12321345"
            title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)"
            price={341.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71LRBr1aLNS._AC_UL480_FMwebp_QL65_.jpg"
            />

         </div>
         
         <div className="home__row">
            <Product
                id="1232165"
                title="XPLORE 55 ltrs Rucksack Hiking Backpack with Rain Cover "
                price={15}
                rating={4}
                image="https://m.media-amazon.com/images/I/71hAJODGKiL._AC_UL480_FMwebp_QL65_.jpg"
                />
            <Product
                id="12321656"
                title="Sapiens: A Brief History of Humankind"
                price={12.5}
                rating={5}
                image="https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
                id="12321856"
                title="Myprotein Impact Whey Protein, Cookies and Cream, 1 Kg"
                price={25.7}
                rating={3}
                image="https://m.media-amazon.com/images/I/31YRR7gYk8L._AC_UL480_FMwebp_QL65_.jpg"
            />

         </div>

         <div className="home__row">
           <Product
            id="12321534"
            title="Nike Men's Blazer Low '77 VNTG Leather Sneaker"
            price={97.6}
            rating={5}
            image="https://m.media-amazon.com/images/I/614-hpu2i0S._UX675_.jpg"
            />
         </div>

         

        </div>
    )
}

export default Home
