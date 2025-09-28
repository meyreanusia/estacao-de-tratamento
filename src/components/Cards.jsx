function Cards({estacao, onEdit, onDelete}){
    return(
        <div className="card text-bg-dark mt-5" style={{ maxHeight: "300px", backgroundColor: "white", width: "40%" }}>
            <img src={estacao.urlImagem} className="card-img" alt="" style={{ height: "300px", objectFit: "cover" }}/>
            <div className="card-img-overlay">
                <h5 className="card-title" style={{ color: "#6c5ce7"}}>{estacao.descricao}</h5>
                <p className="card-text" style={{ color: "#6c5ce7"}}><small style={{ color: "#6c5ce7"}}>{estacao.logradouro} - {estacao.cidade}</small></p>
            </div>
            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "5px" }}>
                    <button
                        className="btn btn-sm btn-warning"
                        onClick={() => onEdit(estacao)}
                    >
                        Editar
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(estacao.id)}
                    >
                        Deletar
                    </button>
        </div>
        </div>
    )
}

export default Cards;