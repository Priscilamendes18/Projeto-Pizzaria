# Projeto-Pizzaria

## 🍕 Proj.Pizzaria_Pri: Padrões de Projeto Estruturais
Este repositório contém uma implementação prática de dois padrões de projeto estruturais (Adapter e Bridge) aplicados a um sistema de gerenciamento de pizzaria desenvolvido em Node.js.

* Priscila de Carvalho Mendes
* RA: 2171392511039
* Desenvolvimento Web III
* Professor: VINICIUS HELTAI

### 🚀 Tecnologias Utilizadas

<div style="display: inline-block">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### 🛠️ Padrões Implementados
O projeto está dividido em duas abordagens principais para resolver problemas comuns de arquitetura de software:

1. Adapter (Adaptador)
Localizado em: /Adapter/Adapter.js

Este padrão é utilizado para permitir que classes com interfaces incompatíveis trabalhem juntas. No contexto da pizzaria:

* Problema: Temos um Sistema Antigo (PizzaSistemaAntigo) que possui um método complexo de criação. O novo padrão do sistema espera a interface montarPizza().

* Solução: O PizzaAdapter funciona como um tradutor. Ele recebe os dados no formato atual e os adapta para que o sistema antigo consiga processá-los.

* Regra de Negócio Adicional: O adaptador também valida se a pizza possui no máximo 3 sabores antes de enviar ao sistema legado.

2. Bridge (Ponte)
Localizado em: /Bridge/Bridge.js

Este padrão foca na composição em vez da herança, separando a abstração da sua implementação.

* Problema: Evitar a "explosão de classes". Se tivéssemos 3 tamanhos de pizza e 3 tipos de borda, usando herança comum poderíamos precisar de 9 classes diferentes (ex: PizzaGrandeComBordaCatupiry).

* Solução: Separamos a Pizza (Abstração) da Borda (Implementação).

As pizzas (Brotinho, Tradicional, Grande) apenas referenciam um objeto do tipo Borda.

Isso permite mudar o tipo de borda dinamicamente sem alterar a classe da pizza.

### 📁 Estrutura do Projeto
Plaintext
Proj.Pizzaria_Pri/
├── Adapter/
│   └── Adapter.js      # Implementação do padrão Adapter
├── Bridge/
│   └── Bridge.js       # Implementação do padrão Bridge
└── README.md           # Documentação do projeto
