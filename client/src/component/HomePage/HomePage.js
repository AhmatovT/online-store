import React from 'react';
import './HomePage.css'
function HomePage(props) {
    return (
        <section>
            <div className='gallery'>

                
            <div className='content'>
                <img src='https://i.simpalsmedia.com/999.md/BoardImages/900x900/06df0f53041e19117a889a48e5f12db0.jpg'/>
                <h3>Iphone 13 pro max</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='price-more'>
                <h6>1600$</h6>
                <button className='buy-1'>More</button>
                </div>
            </div>
            <div className='content'>
                <img src='https://momblogsociety.com/wp-content/uploads/2015/06/ekids2.jpg'/>
                <h3>Naushnik IHome</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               
                <ul>
                    <li><i className="fa fa-solid fa-star checked"></i></li>
                    <li><i className="fa fa-solid fa-star "></i></li>
                    <li><i className="fa fa-solid fa-star "></i></li>
                    <li><i className="fa fa-solid fa-star "></i></li>
                    <li><i className="fa fa-solid fa-star"></i></li>
                </ul>
                <div className='price-more'>
                <h6>1600$</h6>
                <button className='buy-1'>More</button>
                </div>
            </div>
           
            </div>
        </section>
    );
}

export default HomePage;