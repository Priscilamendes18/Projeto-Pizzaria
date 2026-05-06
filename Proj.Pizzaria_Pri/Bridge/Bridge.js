// IMPLEMENTOR (Borda)
class Borda {
    aplicarBorda() {
        throw new Error("Método aplicarBorda() deve ser implementado");
    }
}

// IMPLEMENTAÇÕES CONCRETAS (tipos de borda)
class BordaTradicional extends Borda {
    aplicarBorda() {
        return "Borda Tradicional";
    }
}

class BordaCatupiry extends Borda {
    aplicarBorda() {
        return "Borda de Catupiry";
    }
}

class SemBorda extends Borda {
    aplicarBorda() {
        return "Sem borda";
    }
}

// ABSTRAÇÃO (Pizza)
class Pizza {
    constructor(borda, sabores) {
        this.borda = borda;
        this.sabores = sabores;
    }

    montar() {
        throw new Error("Método montar() deve ser implementado");
    }
}

// REFINED ABSTRACTIONS (Tamanhos)
class PizzaBrotinho extends Pizza {
    montar() {
        console.log("=== Pizza Brotinho ===");
        this.exibir();
    }

    exibir() {
        this.validarSabores();
        console.log("Borda:", this.borda.aplicarBorda());
        console.log("Sabores:", this.sabores.join(", "));
    }

    validarSabores() {
        if (this.sabores.length > 3) {
            console.log("Erro: Máximo de 3 sabores!");
        }
    }
}

class PizzaTradicional extends Pizza {
    montar() {
        console.log("=== Pizza Tradicional ===");
        this.exibir();
    }

    exibir() {
        this.validarSabores();
        console.log("Borda:", this.borda.aplicarBorda());
        console.log("Sabores:", this.sabores.join(", "));
    }

    validarSabores() {
        if (this.sabores.length > 3) {
            console.log("Erro: Máximo de 3 sabores!");
        }
    }
}

class PizzaGrande extends Pizza {
    montar() {
        console.log("=== Pizza Grande ===");
        this.exibir();
    }

    exibir() {
        this.validarSabores();
        console.log("Borda:", this.borda.aplicarBorda());
        console.log("Sabores:", this.sabores.join(", "));
    }

    validarSabores() {
        if (this.sabores.length > 3) {
            console.log("Erro: Máximo de 3 sabores!");
        }
    }
}

// =======================
// TESTE
// =======================

// Criando tipos de borda
const borda1 = new BordaCatupiry();

// Criando pizzas com diferentes tamanhos e sabores
const pizza1 = new PizzaTradicional(borda2, ["Frango", "Catupiry", "Milho"]);

// Montando (executando)
pizza1.montar();
console.log("\n");