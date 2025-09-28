# Projeto Estações de Tratamento

## Descrição
Aplicação web para gerenciamento de **estações de tratamento de resíduos**, permitindo que o usuário:

- Cadastre novas estações de tratamento, fornecendo informações como nome, descrição, endereço, capacidade e tipos de resíduos aceitos.  
- Visualize todas as estações cadastradas em cards interativos.  
- Pesquise estações pelo nome.  
- Edite ou exclua estações existentes.  
- Preencha automaticamente os campos de endereço ao digitar o CEP, utilizando a API [ViaCEP](https://viacep.com.br/).

O front-end foi desenvolvido em **React** com **React Router** para navegação. O back-end fornece endpoints para login, cadastro, edição e listagem das estações.

---

## Funcionalidades

1. **Cadastro de Estações**
   - Nome, descrição, URL da imagem de capa, endereço completo (CEP, logradouro, bairro, cidade, estado, número, complemento), capacidade em toneladas, tipo de tratamento, data de início da operação.

2. **Pesquisa e Listagem**
   - Campo de pesquisa por nome da estação.  
   - Exibição em cards com imagem, descrição e endereço.

3. **Edição e Exclusão**
   - É possível editar os dados preenchidos ou excluir uma estação existente.

4. **Integração com API externa**
   - Consulta de endereço via CEP usando a API [ViaCEP](https://viacep.com.br/).

---

## Tecnologias Utilizadas

- **Front-end:** React, React Router, Bootstrap  

## Como Iniciar a Aplicação

### 1. Clonar o repositório
```bash
git clone https://github.com/meyreanusia/estacao-de-tratamento.git
cd estacao-de-tratamento
npm install
npm run dev
