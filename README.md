# Projeto-Pizzaria

Com certeza! Aqui está o conteúdo estruturado em Markdown, pronto para você copiar e colar no seu arquivo README.md do GitHub.

🍕 Proj.Pizzaria_Pri: Padrões de Projeto Estruturais
Este repositório contém uma implementação prática de dois padrões de projeto estruturais (Adapter e Bridge) aplicados a um sistema de gerenciamento de pizzaria desenvolvido em Node.js.

🛠️ Padrões Implementados
O projeto está dividido em duas abordagens principais para resolver problemas comuns de arquitetura de software:

1. Adapter (Adaptador)
Localizado em: /Adapter/Adapter.js

Este padrão é utilizado para permitir que classes com interfaces incompatíveis trabalhem juntas. No contexto da pizzaria:

Problema: Temos um Sistema Antigo (PizzaSistemaAntigo) que possui um método complexo de criação. O novo padrão do sistema espera a interface montarPizza().

Solução: O PizzaAdapter funciona como um tradutor. Ele recebe os dados no formato atual e os adapta para que o sistema antigo consiga processá-los.

Regra de Negócio Adicional: O adaptador também valida se a pizza possui no máximo 3 sabores antes de enviar ao sistema legado.

2. Bridge (Ponte)
Localizado em: /Bridge/Bridge.js

Este padrão foca na composição em vez da herança, separando a abstração da sua implementação.

Problema: Evitar a "explosão de classes". Se tivéssemos 3 tamanhos de pizza e 3 tipos de borda, usando herança comum poderíamos precisar de 9 classes diferentes (ex: PizzaGrandeComBordaCatupiry).

Solução: Separamos a Pizza (Abstração) da Borda (Implementação).

As pizzas (Brotinho, Tradicional, Grande) apenas referenciam um objeto do tipo Borda.

Isso permite mudar o tipo de borda dinamicamente sem alterar a classe da pizza.

📁 Estrutura do Projeto
Plaintext
Proj.Pizzaria_Pri/
├── Adapter/
│   └── Adapter.js      # Implementação do padrão Adapter
├── Bridge/
│   └── Bridge.js       # Implementação do padrão Bridge
└── README.md           # Documentação do projeto
🚀 Como Executar
Pré-requisitos: Ter o Node.js instalado.

Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Execute o exemplo de Adapter:

Bash
node Adapter/Adapter.js
Execute o exemplo de Bridge:

Bash
node Bridge/Bridge.js
📝 Detalhes Técnicos
Validações de Sabores
Ambas as implementações garantem a integridade do pedido:

No Adapter: Verificação feita dentro do método montarPizza() do adaptador.

No Bridge: Verificação feita através do método validarSabores() presente nas abstrações refinadas (tamanhos de pizza).
