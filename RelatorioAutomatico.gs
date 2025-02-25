/**
 * Função principal que orquestra a automação
 */
function mainFunction() {
  try {
    // 1. Acessar a planilha
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Dados"); // Altere para o nome da sua aba

    // 2. Obter dados da planilha
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();
    
    // 3. Processar dados
    const reportData = processData(data);
    
    // 4. Gerar relatório
    const reportHtml = generateReport(reportData);
    
    // 5. Enviar e-mail
    sendEmail(reportHtml);
    
  } catch (error) {
    // Enviar e-mail de erro
    GmailApp.sendEmail(
      "seu-email@dominio.com", // Substitua pelo seu e-mail
      "Erro na geração do relatório",
      `Ocorreu um erro: ${error.message}`
    );
  }
}

/**
 * Processa os dados brutos da planilha
 */
function processData(data) {
  const headers = data[0];
  const rows = data.slice(1);
  
  // Exemplo: Calcular totais
  let totalSales = 0;
  let totalExpenses = 0;
  
  rows.forEach(row => {
    totalSales += row[1]; // Supondo que as vendas estão na coluna B
    totalExpenses += row[2]; // Supondo que as despesas estão na coluna C
  });
  
  // Últimos 5 registros
  const lastEntries = rows.slice(-5).reverse();
  
  return {
    totalSales,
    totalExpenses,
    lastEntries,
    headers
  };
}

/**
 * Gera o HTML do relatório
 */
function generateReport(data) {
  const date = new Date().toLocaleDateString();
  
  // Criar tabela de últimos registros
  let tableContent = '';
  data.lastEntries.forEach(row => {
    tableContent += `
      <tr>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
        <td>${row[2]}</td>
      </tr>
    `;
  });
  
  return `
    <html>
      <body>
        <h2>Relatório Diário - ${date}</h2>
        <p><strong>Total de Vendas:</strong> R$ ${data.totalSales.toFixed(2)}</p>
        <p><strong>Total de Despesas:</strong> R$ ${data.totalExpenses.toFixed(2)}</p>
        <p><strong>Saldo:</strong> R$ ${(data.totalSales - data.totalExpenses).toFixed(2)}</p>
        
        <h3>Últimos 5 Registros</h3>
        <table border="1" cellpadding="5">
          <tr>
            ${data.headers.slice(0,3).map(h => `<th>${h}</th>`).join('')}
          </tr>
          ${tableContent}
        </table>
        
        <p>Atenciosamente,<br>Equipe de Relatórios</p>
      </body>
    </html>
  `;
}

/**
 * Envia o e-mail com o relatório
 */
function sendEmail(htmlBody) {
  const date = new Date().toLocaleDateString();
  
  GmailApp.sendEmail({
    to: "destinatario@dominio.com", // Substitua pelo e-mail do destinatário
    subject: `Relatório Diário - ${date}`,
    htmlBody: htmlBody,
    name: "Sistema de Relatórios Automáticos"
  });
}

/**
 * Cria trigger para execução diária
 */
function createTrigger() {
  ScriptApp.newTrigger('mainFunction')
    .timeBased()
    .atHour(9) // Hora de execução (ajuste conforme necessidade)
    .everyDays(1) // Frequência
    .create();
}
