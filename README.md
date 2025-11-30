# MinimalistColors Project

Este projeto é uma aplicação Full Stack com React (Vite) e Express.

## 🚀 Como rodar (Modo Fácil - Windows)

Para facilitar, criei um arquivo que faz tudo para você.

1.  Dê um duplo clique no arquivo **`run.bat`** na pasta do projeto.
2.  Ele vai instalar tudo automaticamente e abrir o servidor.
3.  Acesse `http://localhost:5000` no seu navegador.

---

## 💻 Como rodar (Modo Manual)

Se preferir usar o terminal:

### Pré-requisitos
- Node.js (versão 20 ou superior recomendada)

### Passo a Passo

1.  **Abra o PowerShell** na pasta do projeto.

2.  **Configuração Inicial (Apenas na primeira vez):**
    Se você encontrar erros de "execução de scripts desabilitada", rode este comando:
    ```powershell
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o projeto:**
    ```bash
    npm run dev
    ```

5.  **Acesse:**
    Abra `http://localhost:5000`

## ⚠️ Observações Importantes

- **Armazenamento:** O projeto usa memória temporária. Se fechar a janela preta do servidor, os dados salvos (cadastros, etc) somem.
- **Banco de Dados:** Configurado para PostgreSQL futuro, mas roda sem ele por enquanto.
