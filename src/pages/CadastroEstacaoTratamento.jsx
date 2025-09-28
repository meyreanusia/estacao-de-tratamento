import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";


function CadastroEstacaoTratamento(){

    const location = useLocation();
    const navigate = useNavigate();

     const estacaoParaEditar = location.state?.estacao;

    const [form, setForm] = useState(
      estacaoParaEditar || {
        nome: "",
        descricao: "",
        urlImagem: "",
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        complemento: "",
        capacidadeToneladas: "",
        tipoTratamento: "",
        dataInicioOperacao: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleCepBlur = async () => {
      const cepLimpo = form.cep.replace(/\D/g, "");
    if (cepLimpo.length < 8) return;
    
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await response.json();
    if (!data.erro) {
      setForm({
        ...form,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
       const url = estacaoParaEditar
      ? `http://localhost:3000/estacoes/${estacaoParaEditar.id}` // Update
      : "http://localhost:3000/estacoes"; // Create

      const method = estacaoParaEditar ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Estação cadastrada com sucesso!");
      navigate("/estacoes");
    } else {
      alert("Erro ao cadastrar a estação");
    }
  };
    return(
        <form onSubmit={handleSubmit} className="container m-0 p-0">

            <div className="d-flex justify-content-between">
            <h3>Cadastro de Estação de Tratamento</h3>
             <Link to="/estacoes">Voltar</Link>
            </div>

            <div className="container-cadastro d-flex gap-4">
                <div className="col-5">
                    <input className="form-control mb-2" name="nome" value={form.nome} placeholder="Nome" onChange={handleChange} />
                    <textarea className="form-control mb-2" name="descricao" value={form.descricao} placeholder="Descrição" onChange={handleChange} />
                    <input className="form-control mb-2" name="urlImagem" value={form.urlImagem} placeholder="URL da Imagem" onChange={handleChange} />
                    <input type="number" className="form-control mb-2" name="capacidadeToneladas" value={form.capacidadeToneladas} placeholder="Capacidade (Toneladas)" onChange={handleChange} />
                    <input className="form-control mb-2" name="tipoTratamento" placeholder="Tipo de Tratamento" value={form.tipoTratamento} onChange={handleChange} />
                    <input type="date" className="form-control mb-2" name="dataInicioOperacao" value={form.dataInicioOperacao} onChange={handleChange} />   
                </div>


                <div  className="col-5">
                    <input className="form-control mb-2" name="cep" placeholder="CEP" onBlur={handleCepBlur} onChange={handleChange} />
                    <input className="form-control mb-2" name="logradouro" placeholder="Logradouro" value={form.logradouro} onChange={handleChange} />
                    <input className="form-control mb-2" name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} />
                    <input className="form-control mb-2" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
                    <div className="d-flex gap-3">
                        <input className="form-control mb-2" name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} />
                         <input className="form-control mb-2" name="numero" placeholder="Número" value={form.numero} onChange={handleChange} />
                    </div>
                    
                    <input className="form-control mb-2" name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} />
                </div>

            </div>


            <button className="btn btn-success mt-2" type="submit"  style={{ backgroundColor: "#6c5ce7", border: "none" }}>Cadastrar</button>


        </form>
    )
}

export default CadastroEstacaoTratamento;