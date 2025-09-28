import Cards from "../components/Cards"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Estacoes(){
const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate("/cadastro-estacoes");
  };
  const [estacoes, setEstacoes] = useState([]);
  const [erro, setErro] = useState("");
  const [search, setSearch] = useState("");

  const fetchEstacoes = async () => {
    try {
      const token = localStorage.getItem("token"); // pega o token salvo no login
      const response = await fetch("http://localhost:3000/estacoes", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar estações");
      }

      const data = await response.json();
      setEstacoes(data); 
      console.log(data);
      
    } catch (error) {
      setErro(error.message);
    }
  };

      useEffect(() => {
        fetchEstacoes();
      }, []);
        // Filtra as estações de acordo com o input
      const filteredEstacoes = estacoes.filter(estacao =>
        estacao.descricao.toLowerCase().includes(search.toLowerCase())
      );

      const handleEdit = (estacao) => {
      navigate(`/cadastro-estacoes/`, { state: { estacao } });
    };

    const handleDelete = async (id) => {
      const token = localStorage.getItem("token");
      if (!window.confirm("Deseja realmente deletar esta estação?")) return;

      try {
        const response = await fetch(`http://localhost:3000/estacoes/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Erro ao deletar estação");

        setEstacoes(estacoes.filter(est => est.id !== id));
      } catch (error) {
        alert(error.message);
      }
    };

    return(
        <div className="h-100">
            <div className="d-flex justify-content-between container-header col-12 mb-2">
                <div className=" col-6">
                    <div className="input-group flex-nowrap d-flex flex-column">
                         <h5 className="form-label">Estação de tratamento cadastradas</h5>
                        <input type="text" className="form-control w-100" placeholder="O que procuta?" aria-label="busca" aria-describedby="busca-estacap" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
        
                <div className="d-grid gap-2 col-2">
                        <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#6c5ce7", border: "none", maxHeight: "35px", textAlign: "center" }}
                        onClick={irParaCadastro}
                        >
                        Novo
                        </button>

                </div>
            </div>
             {erro && <div className="alert alert-danger">{erro}</div>}
            
            <section className="container-cards d-flex gap-5">
                {
                    filteredEstacoes.length > 0 ? (
                        filteredEstacoes.map(estacao => (
                            <Cards 
                              key={estacao.id}
                              estacao={estacao} 
                              onEdit={handleEdit}
                              onDelete={handleDelete}
                            />
                        )) 
                    ) : (<p>Nenhuma estação encontrada!</p>)
                }

            </section>
            
        </div>

        
    )
}

export default Estacoes