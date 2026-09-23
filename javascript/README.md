# 💱 Câmbio - Conversor de Moedas Offline

Um conversor de moedas moderno, rápido e responsivo, desenvolvido com tecnologias web fundamentais (**HTML5, CSS3 e JavaScript Vanilla**). O projeto foi projetado para funcionar de forma totalmente local e imediata, utilizando uma lógica de conversão matemática centralizada.

---

## 🚀 Funcionalidades

*   **Conversão Instantânea:** Cálculos matemáticos imediatos sem necessidade de requisições de rede.
*   **Design Moderno (Dark Mode):** Interface limpa e intuitiva baseada em tons escuros (*Slate*) com detalhes em azul neon e verde de sucesso.
*   **Dinamismo Visual:** Troca automática dos ícones das moedas de origem e destino em tempo real, acompanhada de uma animação suave de flutuação.
*   **Sistema de Segurança de Imagens (*Fallback*):** Caso uma imagem local falhe ou seja deletada da pasta, o sistema aciona automaticamente um link reserva da internet para evitar que a interface quebre.
*   **Formatação Inteligente:** Exibe os resultados formatados de acordo com o padrão monetário selecionado, incluindo suporte de precisão para criptomoedas (6 casas decimais para Bitcoin).

---

## 🧠 Como Funciona a Lógica?

O conversor utiliza uma **mática universal baseada no Real Brasileiro (BRL)** como moeda pivô. Todas as taxas internas refletem o valor de 1 unidade da moeda estrangeira convertida em Reais.

Quando o formulário é enviado, o JavaScript executa o cálculo em dois passos:

1.  **Conversão para a Moeda Base:** Multiplica o valor digitado pela taxa da moeda de origem para descobrir o equivalente em Reais.
2.  **Conversão para o Destino:** Divide o valor em Reais encontrado pela taxa da moeda de destino.

> **Exemplo Prático (USD para EUR):** 
> Se você converter \$100 Dólares para Euro, o sistema primeiro calcula quanto \$100 vale em Reais (Ex: R\$ 561,50) e depois divide esse valor pela taxa do Euro para entregar o resultado final em EUR.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica do formulário e contêineres dinâmicos.
*   **CSS3:** Estilização moderna, uso de variáveis de cor, layouts flexíveis (*Flexbox*) e animações com `@keyframes`.
*   **JavaScript (ES6):** Manipulação de eventos do DOM, lógica de cálculo matemático e validação de segurança de dados.
*   **Fontes:** Google Fonts (Roboto).

---

## 📂 Estrutura do Projeto

```text
├── assets/             # Imagens locais e ícones das moedas
├── estilo.css          # Estilização completa e animações
├── index.html          # Estrutura principal da página
├── script.js           # Lógica de conversão e comportamento dinâmico
└── README.md           # Documentação do projeto
```

---

## ⚙️ Como Executar o Projeto

Como o conversor foi feito em JavaScript puro e não possui dependências externas ou instaladores:

1. Faça o download ou clone este repositório.
2. Certifique-se de que a estrutura de arquivos e a pasta `assets/` estão no mesmo diretório.
3. Abra o arquivo `index.html` diretamente em qualquer navegador web de sua preferência.
