# Automação de Relatórios com Google Sheets e Gmail

Este projeto utiliza o Google Apps Script para automatizar a geração e envio de relatórios diários a partir de dados em uma planilha do Google Sheets. O relatório é enviado por e-mail em formato HTML, contendo totais de vendas, despesas, saldo e os últimos registros.

## 🚀 Funcionalidades

- **Leitura de dados**: Extrai dados de uma planilha do Google Sheets.
- **Processamento**: Calcula totais de vendas, despesas e saldo.
- **Relatório HTML**: Gera um e-mail formatado com tabelas e valores.
- **Envio automático**: Envia o relatório por e-mail diariamente.
- **Tratamento de erros**: Notifica por e-mail em caso de falhas.

## 📋 Pré-requisitos

- Uma planilha do Google Sheets com dados estruturados.
- Uma conta do Google com acesso ao Gmail e Google Drive.
- Permissões para executar scripts no Google Apps Script.

## ⚙️ Configuração

1. **Planilha**:
   - Crie uma aba chamada `Dados`.
   - Preencha com os dados necessários (exemplo: Data, Vendas, Despesas).

2. **Script**:
   - Abra o editor do Apps Script (Extensões > Apps Script).
   - Cole o código do script.
   - Ajuste os nomes das colunas e e-mails no código.

3. **Permissões**:
   - Autorize o script a acessar o Google Sheets e Gmail.

4. **Trigger**:
   - Execute a função `createTrigger` para agendar o envio diário.

## 📄 Estrutura do Código

- `mainFunction`: Função principal que orquestra o processo.
- `processData`: Processa os dados da planilha.
- `generateReport`: Gera o HTML do relatório.
- `sendEmail`: Envia o e-mail com o relatório.
- `createTrigger`: Configura o envio automático diário.

## 📧 Exemplo de E-mail

O e-mail enviado contém:
- Título: `Relatório Diário - [Data]`
- Corpo:
  - Total de Vendas
  - Total de Despesas
  - Saldo
  - Tabela com os últimos 5 registros

## 📜 Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 💡 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:
- E-mail: danielcguimaraes@gmail.com
- GitHub: [@dencode7](https://github.com/dencode7)
