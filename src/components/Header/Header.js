import React from 'react'
import './Header.css'
import car from '../../sources/img/1.jpg'
import image2 from '../../sources/img/2.jpg'
import image3 from '../../sources/img/3.jpg'



function Header() {
    return (
        <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active" style={{backgroundImage: `url(${car})`}}>
              <div className="carousel-caption d-none d-md-block">
                <h3 className="display-4">O que é COVID-19</h3>
                <p className="lead description">Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, incluindo camelos, gado, gatos e morcegos.
                 Raramente. Recentemente, em dezembro de 2019, houve a transmissão de um novo coronavírus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida 
                  pessoa a pessoa.</p>
              </div>
            </div>


            <div className="carousel-item" style={{backgroundImage: `url(${image2})`}}>
              <div className="carousel-caption d-none d-md-block">
                <h3 className="display-4">O que é COVID-19</h3>
                <p className="lead description">A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves. </p>
              </div>
            </div>

            <div className="carousel-item" style={{backgroundImage: `url(${image3})`}}>
              <div className="carousel-caption d-none d-md-block">
                <h3 className="display-4">Como é transmitido</h3>
                <p className="lead description" >A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:

Toque do aperto de mão contaminadas;
Gotículas de saliva;
Espirro;
Tosse;
Catarro;
Objetos ou superfícies contaminadas, como celulares, mesas, talheres, maçanetas, brinquedos, teclados de computador etc.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
        </div>
      </header>
    )
}

export default Header
