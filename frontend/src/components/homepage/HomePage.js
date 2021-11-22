/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';
import {CarouselSlider} from '../homepage/CarouselSlider';
import { Carousel } from './Carousel';
import imgSomos from './image_somos.png';
import imgCompromiso from './image_comprosio.png';
import imgEmp01 from './image_emp_01.png';
import imgEmp02 from './image_emp_02.png';
import imgEmp03 from './image_emp_03.png';
import imgEmp04 from './image_emp_04.png';
import imgEmp05 from './image_emp_05.png';
import imgEmp06 from './image_emp_06.png';
import imgEmp07 from './image_emp_07.png';
import imgEmp08 from './image_emp_08.png';


export const HomePage = () => {
    
    return (
        <div>
            <NavbarComponent />
            <CarouselSlider />
            <body className="container">
                <section className="contenedor-inform">
                    <div className="row">
                        <div className="col-8 p-3">
                            <h2>Somos...</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with </p>
                        </div>
                        <img src={imgSomos} className="col-4 rounded img-fluid"/>
                    </div>
                </section>

                <section className="contenedor-inform">
                    <div className="row">
                        <img src={imgCompromiso} className="col-4 rounded img-fluid" max-width="100%"/>
                        <div className="col-8 p-3" >
                            <h2>Nuestro compromiso</h2>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page 
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                                    normal distribution of letters, as opposed to using 'Content here, content here', 
                                    making it look like readable English. Many desktop publishing </p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page 
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                                    distribution of letters, as opposed to using 'Content here, content here', making it look like 
                                    readable English. Many desktop publishing packages and web page editors.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contenedor-inform">
                    <h2>Nuestros Alumnos</h2>
                    <Carousel/>
                </section >
                

                <section>
                    <p className="text-center mt-5 display-6">Empresas increibles contratan a <br/><dl><dt>nuestros alumnos</dt></dl></p>
                    <div className= "contenedor-empresas ">
                        <div className="center">
                            <img src={imgEmp01} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp02} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp03} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp04} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp05} alt="Logo-Empresa" className="imagen-emp "/>
                        </div>
                        <div className="center">
                            <img src={imgEmp06} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp07} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                        <div className="center">
                            <img src={imgEmp08} alt="Logo-Empresa" className="imagen-emp " />
                        </div>
                    </div>
                </section>
            </body>
            
            <Footer />
        </div>
    )
}
