import React from "react";

const AboutSection = () => {

    return (
        <>
            <section className="text-center my-5 align-items-center indigo-text transparent" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold my-5">
                                Um pouco sobre mim...
                        </h2>
                            <p>
                                Graduado em Educação Física pela Faculdade de Tecnologia e Ciências (FTC, 2008) e Líder Coach pela Sociedade Brasileira de Coaching através da Cozex (2017). Professor e Personal Trainer desde 2008. Ampla experiência em musculação, liderança e gestão de equipes técnicas e operacionais, coordenação de programas de bem-estar, com foco em prevenção de doenças ocupacionais, dicas ergonômicas, elaboração de atividades físicas para melhoria da motivação e relação interpessoal no trabalho.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="missao" className="text-center my-5 align-items-center white-text indigo rounded" style={{ height: '90vh', backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 align-items-center">
                            <h2 className="h1-responsive font-weight-bold my-5">
                                A minha missão...
                            </h2>
                            <p>
                                Utilizar do exercício físico como forma de melhorar a qualidade de vida do indivíduo/ da pessoa humana e fazer com que o mesmo/a mesma pense em todas esferas relacionadas ao seu bem-estar, realizando essa tarefa livre de qualquer julgamento, por acreditar que mudar e/ou praticar exercício físico vai para além de um padrão. O foco é a nossa trajetória, curtir cada etapa do processo, se parabenizar, estender a mão quando for preciso, metas tangíveis, para que no “fim” da viagem seja algo tão bacana que você vai perceber que se transformou em um hábito sustentável e prazeroso. Deste modo, contribuir com a transformação de vidas na direção da qualidade integrada da saúde e bem-estar, além de formar e capacitar profissionais de Educação Física com o mesmo propósito.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutSection;