import React from "react";
import './sobre.css';
import imgSobre1 from '../../assets/images/sobre2.jpeg';
import imgSobre2 from '../../assets/images/sobre3.jpeg';

function Sobre() {
    return (
        <section className="sobre">
            <div className="sobre-item">
                <img src={imgSobre1} alt="" className="imagem-sobre"/>
                <div className="texto-sobre">
                    <h2>Sobre a Nossa Asseguradora</h2>
                    <p>Na Porto Seguro, somos dedicados a proteger o que é mais importante para você. Com anos de experiência no setor, oferecemos uma ampla gama de produtos de seguros personalizados para atender às suas necessidades específicas. Nosso compromisso é fornecer cobertura confiável e suporte excepcional para garantir a sua tranquilidade em todos os momentos.</p>
                </div>
            </div>
            <div className="sobre-item">
                <img src={imgSobre2} alt="Descrição da Imagem 2" className="imagem-sobre"/>
                <div className="texto-sobre">
                    <h2>Nossa Missão</h2>
                    <p>A missão da Porto Seguro é oferecer segurança e paz de espírito aos nossos clientes por meio de soluções de seguros abrangentes e acessíveis. Nosso objetivo é ser a escolha preferida em seguros, reconhecida pela excelência no atendimento ao cliente e pela qualidade de nossas coberturas.</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
