import { Gerente } from "./models/gerente";
import { Mecanico } from "./models/mecanico";
import { Especialista } from "./models/especialista";
import { Funcionario } from "./models/funcionario";
import './style.css'


// Lista de funcionários
const funcionarios: Funcionario[] = [
  new Gerente(1, "Carlos Silva", 5),
  new Mecanico(2, "João Souza", 10),
  new Especialista(3, "Germana Meira", "motor"),
  new Especialista(4, "Pedro Lima", "freios"),
  new Especialista(5, "Mariana Alves", "eletrica"),
  new Mecanico(1,"Gabriel Sousa", 6)
];

// Seleciona o container
const container = document.getElementById("cards") as HTMLElement;

// Define classe CSS baseada no tipo
function getTipoClasse(func: Funcionario): string {
  if (func instanceof Gerente) return "gerente";
  if (func instanceof Mecanico) return "mecanico";
  if (func instanceof Especialista) return "especialista";
  return "";
}

// Renderiza os cards
function renderFuncionarios() {
  container.innerHTML = "";

  funcionarios.forEach((func) => {
    const card = document.createElement("div");

    const tipoClasse = getTipoClasse(func);
    card.className = `card ${tipoClasse}`;

    card.innerHTML = `
      <h2>${func.nome}</h2>
      <p class="cargo">${func.cargo}</p>
      <p class="descricao">${func.getDescricao()}</p>
    `;

    container.appendChild(card);
  });
}

// Inicializa
renderFuncionarios();