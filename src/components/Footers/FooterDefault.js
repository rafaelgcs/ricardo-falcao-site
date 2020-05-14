import React from "react";

const FooterDefault = () => {
    const logo = require('../../assets/img/logo_azul.png');
    return (
        <footer className="page-footer font-small blue-grey lighten-5">
            <div className="light-blue">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Fique ligado em minhas redes sociais!</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row indigo-text">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic" href="https://facebook.com" target="_blank">
                                <i className="fab fa-facebook-f fa-lg indigo-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="tw-ic" href="https://twitter.com" target="_blank">
                                <i className="fab fa-twitter fa-lg indigo-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg indigo-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="ins-ic" href="https://instagram.com/coach_ricardofalcao" target="_blank">
                                <i className="fab fa-instagram fa-lg indigo-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 dark-grey-text">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <img src={logo} height="160" />
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Produtos</h6>
                        <hr className="teal indigo mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <a className="dark-grey-text" href="#!">Personal Trainer</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Consultoria Semi-Presencial</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Consultoria Online</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Mentoria para profissionais da área de saúde</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Gestão de academias e similares</a>
                        </p>

                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Links Úteis</h6>
                        <hr className="teal indigo mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <a className="dark-grey-text" href="#!">Área do Aluno</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">FAQ</a>
                        </p>
                        <p>
                            <a className="dark-grey-text" href="#!">Marque uma consulta</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contato</h6>
                        <hr className="teal indigo-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', borderColor: '#295dab' }} />
                        <p>
                            <i className="fas fa-envelope mr-3"></i> <a className="indigo-text" href="mailto:contato@ricardofalcao.com.br" target="_blank">contato@ricardofalcao.com.br</a>
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> <a className="indigo-text" href="tel:71993104517" target="_blank">+55 71 9 9310-4517</a>
                        </p>
                    </div>


                </div>
            </div>
            <div className="footer-copyright text-center text-black-50 py-3"> © {new Date().getFullYear()} Copyright:
    <a className="dark-grey-text" href="#"> Ricardo Falcão</a>, feito com{" "}
                <i className="fa fa-heart heart dark-grey-text" /> por <a href="https://rafaelgcs.github.io" target="_blank" className="dark-grey-text">Rafael Guimarães</a>
            </div>


        </footer>
    );
    // return (
    //     <MDBFooter color="blue" className="font-small pt-4">
    //         <MDBContainer fluid className="text-center text-md-left">
    //             <MDBRow>
    //                 <MDBCol md="6" className="text-center">
    //                     <img src={logo} height="60" />
    //                     <h5 className="title">
    //                         Ricardo Falcão dos Santos
    //                     </h5>
    //                 </MDBCol>
    //                 <MDBCol md="6">
    //                     <h5 className="title">Links</h5>
    //                     <ul>
    //                         <li className="list-unstyled">
    //                             <a href="#!">Link 1</a>
    //                         </li>
    //                         <li className="list-unstyled">
    //                             <a href="#!">Link 2</a>
    //                         </li>
    //                         <li className="list-unstyled">
    //                             <a href="#!">Link 3</a>
    //                         </li>
    //                         <li className="list-unstyled">
    //                             <a href="#!">Link 4</a>
    //                         </li>
    //                     </ul>
    //                 </MDBCol>
    //             </MDBRow>
    //         </MDBContainer>
    //         <div className="footer-copyright text-center py-3">
    //             <MDBContainer fluid>
    //                 &copy; {new Date().getFullYear()} Copyright: <a href="/"> Ricardo Falcão </a> by: Rafael Guimarães
    //             </MDBContainer>
    //         </div>
    //     </MDBFooter>
    // );
}

export default FooterDefault;