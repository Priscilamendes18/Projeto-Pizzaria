// TARGET (Interface esperada)
class PizzaTarget {
    montarPizza() {
        throw new Error("Método montarPizza() deve ser implementado");
    }
}

// CLIENTE
class Cliente {
    constructor(pizza) {
        this.pizza = pizza;
    }

    fazerPedido() {
        console.log("Cliente fazendo pedido...");
        this.pizza.montarPizza();
    }
}

// ADAPTEE (serviço existente)
class PizzaSistemaAntigo {
    criarPizzaDetalhada(tamanho, borda, sabores) {
        console.log("=== Pizza Criada (Sistema Antigo) ===");
        console.log("Tamanho:", tamanho);
        console.log("Borda:", borda);
        console.log("Sabores:", sabores.join(", "));
    }
}

// ADAPTER
class PizzaAdapter extends PizzaTarget {
    constructor(tamanho, borda, sabores) {
        super();
        this.tamanho = tamanho;
        this.borda = borda;
        this.sabores = sabores;

        this.sistemaAntigo = new PizzaSistemaAntigo();
    }

    montarPizza() {
        // Validação baseada na atividade
        if (this.sabores.length > 3) {
            console.log("Erro: Máximo de 3 sabores!");
            return;
        }

        this.sistemaAntigo.criarPizzaDetalhada(
            this.tamanho,
            this.borda,
            this.sabores
        );
    }
}

// ================== TESTE ==================

// Criando pizza com Adapter
const pizza = new PizzaAdapter(
    "Grande",
    "Catupiry",
    ["Calabresa", "Frango", "Mussarela"]
);

// Cliente usa o padrão esperado
const cliente = new Cliente(pizza);
cliente.fazerPedido();