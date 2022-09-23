import React from 'react';
import './Catalog.css';

const categoryApi = [
    {id: 1, title: "Samsung", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 2, title: "Redmi", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 3, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 4, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 5, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 6, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 7, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
    {id: 8, title: "Noutbook", img: "https://banner2.cleanpng.com/20180617/sk/kisspng-acer-laptop-computer-repair-technician-desktop-com-laptop-png-5b25f0a9170e49.4363407015292130970945.jpg"},
]

function Catalog(props) {
    return (
        <div className='catalog'>
                   {
                    categoryApi.map(el => (
                       <div className='cart' key={el.id}>
                          <img src={el.img} alt={el.title} />
                          <p className='text-center my-2'>{el.title}</p>
                       </div> 
                    ))
                   }
        </div>
        
    );
}

export default Catalog;