import React from "react";
import "./All.sass";
import InputMask from "react-input-mask";

const All = () => {
  const [caixinha, setCaixinha] = React.useState(4476490);
  const [cep, setCep] = React.useState(null);
  const [rua, setRua] = React.useState(null);
  const [ddd, setDdd] = React.useState(null);
  const [bairro, setBairro] = React.useState(null);
  const [estado, setEstado] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const procurarCep = async () => {
    if (caixinha.length !== 9) {
      setCep(null);
      setRua(null);
      setDdd(null);
      setBairro(null);
      setEstado(null);
      setErro("Tamanho de Cep Inválido");
      setCarregando(false);
    } else {
      setErro(null);
      setCep(null);
      setRua(null);
      setDdd(null);
      setBairro(null);
      setEstado(null);

      setCarregando(true);
      const buscarCep = await fetch(
        `https://viacep.com.br/ws/${caixinha}/json `
      );
      const cepEmJson = await buscarCep.json();
      setCep(`Cep: ${cepEmJson.cep}`);

      setRua(`Rua: ${cepEmJson.logradouro}`);
      setDdd(`DDD: ${cepEmJson.ddd}`);
      setBairro(`Bairro: ${cepEmJson.bairro}`);
      setEstado(`Estado: ${cepEmJson.uf}`);
      setCarregando(false);
    }
  };
  return (
    <div className="mae">
      <h1>Buscador De Cep</h1>

      <div className="inputs">
        <InputMask
          mask="99999-999"
          placeholder="Seu Cep..."
          onChange={(e) => setCaixinha(e.target.value)}
        />

        <button onClick={() => procurarCep()}> Buscar CEP</button>
      </div>

      <section className="retornoDados">
        {carregando ? "Carregando..." : ""}

        {erro}

        <p className="cep">{cep}</p>
        <p className="rua">{rua}</p>
        <p className="ddd">{ddd}</p>
        <p className="bairro">{bairro}</p>
        <p className="estado">{estado}</p>
      </section>

      <p className="paragrafo">♥️ Feito com React. ♥️</p>
    </div>
  );
};

export default All;
