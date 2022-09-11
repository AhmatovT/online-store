import './Footer.css'
export default function Footer(){

    return(
       <div className='body'>
         <footer>
         <ul className='social_icon'>
                <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
         <ul className='menu'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Aboute</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Contact</a></li>    
            </ul>
            
            <p>2022 WebDevwlopers company| All Right Reserved</p>
        </footer>
       </div>
    )
}