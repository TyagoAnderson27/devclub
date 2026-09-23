// 1. Mapeamento das imagens com links de reserva automáticos (caso falte o arquivo na pasta)
const currencyImages = {
    'BRL': './assets/real.png',
    'USD': './assets/dolar.png',
    'EUR': './assets/euro.png',
    'GBP': './assets/libra.png',
    'BTC': './assets/bitcoin.png'
};

const fallbackImages = {
    'BRL': 'https://icons8.com',
    'USD': 'https://icons8.com',
    'EUR': 'https://icons8.com',
    'GBP': 'https://icons8.com',
    'BTC': 'https://icons8.com'
};

// 2. TAXAS DE CÂMBIO FIXAS (Valores comerciais de fechamento de 21/09/2026)
// Esta tabela define o valor de 1 unidade de cada moeda estrangeira convertido em Reais (BRL)
const fixedRatesInBRL = {
    'BRL': 1.0000,          // 1 Real = R\$ 1,00
    'USD': 5.6150,          // 1 Dólar Comercial = R\$ 5,6150
    'EUR': 6.2230,          // 1 Euro = R\$ 6,2230
    'GBP': 7.4680,          // 1 Libra Esterlina = R\$ 7,4680
    'BTC': 354210.0000      // 1 Bitcoin = R\$ 354.210,00
};

// 3. Captura de elementos do DOM
const currencyForm = document.getElementById('currency-form');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const fromCurrencyIcon = document.getElementById('from-currency-icon');
const toCurrencyIcon = document.getElementById('to-currency-icon');
const resultDiv = document.getElementById('result');

// 4. Função segura para troca de ícones dinâmicos
function updateCurrencyIcons() {
    const fromValue = fromCurrencySelect.value;
    const toValue = toCurrencySelect.value;

    if (fromValue) {
        fromCurrencyIcon.src = currencyImages[fromValue];
        // Ativa o link reserva na internet se o arquivo local falhar
        fromCurrencyIcon.onerror = () => fromCurrencyIcon.src = fallbackImages[fromValue];
    } else {
        fromCurrencyIcon.src = currencyImages['BRL'];
    }

    if (toValue) {
        toCurrencyIcon.src = currencyImages[toValue];
        // Ativa o link reserva na internet se o arquivo local falhar
        toCurrencyIcon.onerror = () => toCurrencyIcon.src = fallbackImages[toValue];
    } else {
        toCurrencyIcon.src = currencyImages['USD'];
    }
}

// Escutadores de eventos para atualização visual imediata das moedas
fromCurrencySelect.addEventListener('change', updateCurrencyIcons);
toCurrencySelect.addEventListener('change', updateCurrencyIcons);

// 5. Lógica de Conversão Matemática Offline
currencyForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Validação de segurança básica
    if (isNaN(amount) || amount <= 0 || !fromCurrency || !toCurrency) {
        resultDiv.style.color = '#ef4444';
        resultDiv.innerText = "Por favor, insira um valor válido e selecione as moedas.";
        return;
    }

    // Se a moeda de origem e destino forem idênticas
    if (fromCurrency === toCurrency) {
        resultDiv.style.color = '#4ade80';
        resultDiv.innerText = `${amount.toFixed(2)} ${fromCurrency} = ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    // CÁLCULO MATEMÁTICO UNIVERSAL LOCAL (Sem buscas na rede)
    // Passo A: Multiplica o valor inserido pela taxa de origem para descobrir quanto ele vale em Reais
    const amountInBRL = amount * fixedRatesInBRL[fromCurrency];
    
    // Passo B: Divide esse montante em Reais pela taxa da moeda de destino
    const finalResult = amountInBRL / fixedRatesInBRL[toCurrency];

    // 6. Exibição e formatação estética do resultado na tela (Verde)
    resultDiv.style.color = '#4ade80';
    
    if (toCurrency === 'BTC') {
        resultDiv.innerText = `${amount.toLocaleString('pt-BR')} ${fromCurrency} = ${finalResult.toFixed(6)} BTC`;
    } else {
        resultDiv.innerText = `${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} ${fromCurrency} = ${finalResult.toLocaleString('pt-BR', { style: 'currency', currency: toCurrency }).replace('BRL', 'R$')}`;
    }
});

// Inicialização imediata das imagens de início
updateCurrencyIcons();
