import React from 'react';
import '../App.css';
import city1 from '../img/1-Berlin-Alemania.jpg';
import city2 from '../img/2-Brujas-Belgica.jpg';
import city3 from '../img/3-Copenhague-Dinamarca.jpg';
import city4 from '../img/4-Dublin-Irlanda.jpg';
import city5 from '../img/5-Ginebra-Suiza.jpg';
import city6 from '../img/6-Lisboa-Portugal.jpg';
import city7 from '../img/7-Vancouver-Canada.jpg';
import city8 from '../img/8-NuevaYork-USA.jpg';
import city9 from '../img/9-Phuket-Tailandia.jpg';
import city10 from '../img/10-Tokio-Japon.jpg';
import city11 from '../img/11-Toronto-Canada.jpg';
import city12 from '../img/12-Zurich-Suiza.jpg';
import { Carousel } from 'react-responsive-carousel';


class SectionCities extends React.Component {

    render() {

        return (
            <div className="Section-Cities">

                    <Carousel autoPlay>
                        <div>
                            <img src={city1} className="img-fluid" alt="city1" />
                            <p className="legend">Berlin, Alemania</p>
                        </div>

                        <div>
                            <img src={city2} className="img-fluid" alt="city2" />
                            <p className="legend">Brujas, Belgica</p>
                        </div>

                        <div>
                            <img src={city4} className="img-fluid" alt="city4" />
                            <p className="legend">Dublin, Irlanda</p>
                        </div>

                        <div>
                            <img src={city7} className="img-fluid" alt="city7" />
                            <p className="legend">Vancouver, Canada</p>
                        </div>

                        <div>
                            <img src={city8} className="img-fluid" alt="city8" />
                            <p className="legend">NuevaYork, USA</p>
                        </div>

                        <div>
                            <img src={city3} className="img-fluid" alt="city3" />
                            <p className="legend">Copenhague, Dinamarca</p>
                        </div>

                        <div>
                            <img src={city5} className="img-fluid" alt="city5" />
                            <p className="legend">Ginebra, Suiza</p>
                        </div>

                        <div>
                            <img src={city6} className="img-fluid" alt="city6" />
                            <p className="legend">Lisboa, Portugal</p>
                        </div>
                        <div>
                            <img src={city9} className="img-fluid" alt="city9" />
                            <p className="legend">Phuket, Tailandia</p>
                        </div>

                        <div>
                            <img src={city10} className="img-fluid" alt="city10" />
                            <p className="legend">Tokio, Japon</p>
                        </div>

                        <div>
                            <img src={city11} className="img-fluid" alt="city11" />
                            <p className="legend">Toronto, Canada</p>
                        </div>

                        <div>
                            <img src={city12} className="img-fluid" alt="city12" />
                            <p className="legend">Zurich, Suiza</p>
                        </div>

                    </Carousel>

            </div>
                );
        
            }
        }
        
        export default SectionCities;
        
