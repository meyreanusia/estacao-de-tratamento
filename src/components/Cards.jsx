function Cards({estacao}){
    return(
        <div className="card text-bg-dark mt-5" style={{ minHeight: "200px", backgroundColor: "white" }}>
            <img src={estacao.urlImagem} className="card-img" alt=""/>
            <div className="card-img-overlay">
                <h5 className="card-title">{estacao.descricao}</h5>
                <p className="card-text"><small>{estacao.logradouro} - {estacao.cidade}</small></p>
            </div>
        </div>
    )
}

export default Cards;