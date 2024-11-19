# 📋 Documentação do Frontend e API - Next.js, Styled Components e Chakra UI

## 🛠️ Tecnologias Utilizadas
- **Next.js**
- **Styled Components**
- **Chakra UI**
- **ESLint**


---

## 🚀 Iniciando o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos para Clonar e Rodar o Projeto

``bash
# Clone o repositório
git clone https://github.com/Rodriguesw/atividade-es3

# Acesse o diretório do projeto
cd atividade-es3

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Documentação da API Protheus

## Visão Geral

Esta API fornece endpoints para gerenciar clientes no sistema Protheus. A classe `TAB_CLIENTES` implementa métodos para listar, recuperar, atualizar, deletar e incluir registros de clientes.

## Classe: `TAB_CLIENTES`

### Endpoints

1. **Listar Todos os Clientes**
   - **Método:** `GET`
   - **Endpoint:** `/clientes/listar`
   - **Descrição:** Recupera uma lista de todos os clientes.
   - **Requisitos Funcionais:**
     - Retorna um array JSON de clientes.
     - Deve filtrar registros excluídos (`D_E_L_E_T_ = ' '`).
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Suporta paginação (tamanho da página padrão: 30).
     - O endpoint pode receber um parâmetro limit, que irá limitar o número de registros retornados na resposta.
     - O endpoint pode receber um parâmetro offset, que irá controlar a paginação, definindo a partir de qual registro os dados serão retornados, permitindo a navegação entre as páginas de resultados.
2. **Obter Informações do Cliente**

   - **Método:** `GET`
   - **Endpoint:** `/clientes/lista_cliente?codigo={?}&loja={?}`
   - **Descrição:** Recupera informações de um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Retorna um objeto JSON contendo os detalhes do cliente.
     - Deve retornar uma mensagem de erro se o cliente não for encontrado.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Acesso seguro para prevenir a recuperação não autorizada de informações.

3. **Atualizar Cliente**

   - **Método:** `PUT`
   - **Endpoint:** `/clientes/atualizar?codigo={?}&loja={?}`
   - **Descrição:** Atualiza as informações de um cliente específico.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com os detalhes do cliente a serem atualizados.
     - Deve validar a existência do cliente antes da atualização.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

4. **Deletar Cliente**

   - **Método:** `DELETE`
   - **Endpoint:** `/clientes/deletar?codigo={?}&loja={?}`
   - **Descrição:** Deleta um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Marca o registro do cliente como excluído, sem removê-lo fisicamente do banco de dados.
     - Deve retornar uma mensagem de sucesso após a exclusão bem-sucedida.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Garantir a integridade dos dados durante as operações de exclusão.

5. **Incluir Cliente**

   - **Método:** `POST`
   - **Endpoint:** `/clientes/incluir`
   - **Descrição:** Adiciona um novo cliente ao sistema.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com todos os campos obrigatórios para criar um novo cliente.
     - Deve validar os dados de entrada antes da inclusão.
     - **Codificação:** O corpo da requisição deve ser tratado com codificação `WIN1252`, ao invés de `UTF-8`.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

   **Requisição:**

   ```http
   POST /clientes/incluir
   Content-Type: application/json; charset=WIN1254
   {
    "codigo": "B1",
    "loja": "01",
    "nome": "MATHEUS",
    "pessoa": "F",
    "endereco": "Rua Francisco correa da silva, 505",
    "cep": "12345-678",
    "bairro": "Vila Rubens",
    "cidade": "ITAPETININGA",
    "estado": "SP",
    "cnpj": "37872595893",
    "status": "1",
    "tipo": "F",
    "email": "matheushr39@gmail.com",
    "ddd": "15",
    "telefone": "991601215",
    "pais": "023",
    "contato": "contato"
   }
   ```
  - https://www.bcb.gov.br/acessoinformacao/legado?url=https:%2F%2Fwww.bcb.gov.br%2Frex%2FCenso2000%2Fport%2Fmanual%2Fpais.asp%3Fidpai%3DCENSOCE //Lista de codigos de paises
# Documentação da API Protheus Clientes

## Visão Geral

Esta API fornece endpoints para gerenciar clientes no sistema Protheus. A classe `TAB_CLIENTES` implementa métodos para listar, recuperar, atualizar, deletar e incluir registros de clientes.