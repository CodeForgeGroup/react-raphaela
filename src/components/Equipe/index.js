import React from 'react';
import './equipe.css';
import imgFuncionario1 from '../../assets/images/funcionarios/funcionario1.jpeg';
import imgFuncionario2 from '../../assets/images/funcionarios/funcionario2.jpeg';
import imgFuncionario3 from '../../assets/images/funcionarios/funcionario3.jpeg';
import imgFuncionario4 from '../../assets/images/funcionarios/funcionario4.jpeg';

function Equipe() {
    return (
        <section className="equipe">
            <h2>Nossa Equipe</h2>
            <div className="equipe-container">
                <div className="equipe-item">
                    <img src={imgFuncionario1} alt="Funcionário 1" className="imagem-funcionario" />
                    <p className="cargo-funcionario">CEO</p>
                    <p className="nome-funcionario">Marcos</p>
                </div>
                <div className="equipe-item">
                    <img src={imgFuncionario2} alt="Funcionário 2" className="imagem-funcionario" />
                    <p className="cargo-funcionario">Consultora de Seguros</p>
                    <p className="nome-funcionario">Julia</p>
                </div>
                <div className="equipe-item">
                    <img src={imgFuncionario3} alt="Funcionário 3" className="imagem-funcionario" />
                    <p className="cargo-funcionario">Gerente Atuarial</p>
                    <p className="nome-funcionario">Daniel</p>
                </div>
                <div className="equipe-item">
                    <img src={imgFuncionario4} alt="Funcionário 4" className="imagem-funcionario" />
                    <p className="cargo-funcionario">Ajustadora de Sinistros</p>
                    <p className="nome-funcionario">Raphaela</p>
                </div>
            </div>
        </section>
    );
}

export default Equipe;
