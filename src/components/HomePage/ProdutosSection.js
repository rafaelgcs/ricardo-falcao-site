import React from "react";
import { MDBView, MDBMask } from "mdbreact";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // <div className={className} style={{ ...style, display: 'block' }}>
        //     <MDBBtn gradient="blue" onClick={onClick}>
        //         <i class="fas fa-arrow-right"></i>
        //     </MDBBtn>
        // </div>
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
        // <div className={className}>
        //     <MDBBtn gradient="blue" onClick={onClick} style={{ ...style, display: 'block' }}>
        //         <i class="fas fa-arrow-left"></i>
        //     </MDBBtn>
        // </div>
    );
}
const ProdutosSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="text-center my-5 align-items-center indigo-text" style={{height: '100vh'}}>
            <h2 className="h1-responsive font-weight-bold my-5">
                Produtos
            </h2>
            <h6 className="h6-responsive mb-5">
                Conheça todos os meus produtos
            </h6>
            <Slider {...settings}>
                <div className="container">
                    <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center p-4" overlay="blue-strong">
                            <h3 className="white-text">Personal Trainer</h3>
                        </MDBMask>
                    </MDBView>
                </div>

                <div className="container">
                    <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center p-4" overlay="blue-strong">
                            <h3 className="white-text">Consultoria semi-presencial</h3>
                        </MDBMask>
                    </MDBView>
                </div>
                <div className="container">
                    <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center p-4" overlay="blue-strong">
                            <h3 className="white-text">Consultoria online</h3>
                        </MDBMask>
                    </MDBView>
                </div>
                <div className="container">
                    <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center p-4" overlay="blue-strong">
                            <h3 className="white-text">Mentoria para Profissionais da área de saúde</h3>
                        </MDBMask>
                    </MDBView>
                </div>
                <div className="container">
                    <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center p-4" overlay="blue-strong">
                            <h3 className="white-text">Gestão de academias e similares</h3>
                        </MDBMask>
                    </MDBView>
                </div>
            </Slider>

        </section>
    );
}

export default ProdutosSection;