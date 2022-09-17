import React from 'react';
import './Carusel.css'
function Carusel(props) {
    return (
        <div id="carouselExampleIndicators" class="carousel slide mt-3 " data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src="https://avatars.mds.yandex.net/i?id=2a000001833e614f91622e7378148f1bc788-1439138-fast-images&n=13" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://avatars.mds.yandex.net/i?id=c1dd07bfe36c8a7e8221894aaa924208-5282542-images-thumbs&n=13" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://avatars.mds.yandex.net/i?id=f9a8773d6e19b42ef1579f7223a13c43-4836432-images-thumbs&n=13" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
}

export default Carusel;