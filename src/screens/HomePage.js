import React, { useEffect, useState } from 'react';
import {
    MDBBtn
} from 'mdbreact';
import FooterDefault from '../components/Footers/FooterDefault';
import ProdutosSection from '../components/HomePage/ProdutosSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import AboutSection from '../components/HomePage/AboutSection';


export default function HomePage() {
    const scrollToTop = () => window.scrollTo(0, 0);
    const [loadedPage, setLoadedPage] = useState(false);

    useEffect(() => {
        if (!loadedPage) {
            scrollToTop();
            setLoadedPage(true);
        }
    });
    return (
        <>
            <div style={{ backgroundImage: `url(${require('../assets/img/bg-02.jpg')})`, backgroundRepeat: 'none', backgroundSize: 'cover', backgroundPosition: 'fixed', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="row justify-content-md-center align-items-end" style={{ height: '100vh' }}>
                        <div className="col-md-6 text-center align-items-center">
                            <img src={require("../assets/img/logo_azul.png")} height="200" />
                            <div className="d-block d-md-none" style={{ height: '5vh' }}></div>
                            <h1 className="title d-none d-md-block">Ricardo Falcão dos Santos,</h1>
                            <p>
                                <b>
                                    Tem 35 anos, natural de Salvador-BA, sempre levado, desde menino é amante dos movimentos produzidos pelo corpo. Praticante nato de exercício físico, seu forte sempre foi pedalar, nadar, correr, trepar em árvores, zagueiro duro no futebol (rsrsrs), passou pelo Karatê, capoeira e outros esportes...
                                </b>
                            </p>
                            <div className="mt-2 mb-5">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" rounded color="indigo">Veja meus produtos</MDBBtn>
                                    </div>
                                    <div className="col-md-6">
                                        <MDBBtn className="w-100" outline color="indigo">Conheça-me Mais</MDBBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center d-none d-md-block">
                            <img src={require("../assets/img/ricardo.png")} style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="about">
                <AboutSection />
            </div>
            <div className="container" id="products">
                <ProdutosSection />
            </div>
            <div className="container" id="testimonials">
                <TestimonialsSection />
            </div>
            <FooterDefault />
        </>
    );
}
