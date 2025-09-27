import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        setErro("E-mail ou senha incorretos");
        return;
      }

      const data = await response.json();
      console.log(data);
      

      // Salva o token no localStorage para usar depois
      localStorage.setItem("token", data.token);

      // Redireciona para a página de estações
      navigate("/estacoes");
    } catch (error) {
      setErro("Erro ao conectar ao servidor");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ minWidth: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>

        {erro && <div className="alert alert-danger">{erro}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#6c5ce7", border: "none" }}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



