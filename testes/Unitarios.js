function testar(descricao, callback) {
  try {
    callback();
    registrarResultado(`✅ ${descricao}`);
  } catch (e) {
    registrarResultado(`❌ ${descricao} - ${e.message}`);
  }
}

function registrarResultado(texto) {
  const saida = document.getElementById("saidaTestes");
  saida.textContent += texto + "\n";
}

function runUnitTestsTarefas() {
  document.getElementById("saidaTestes").textContent = ""; // Limpa testes anteriores

  // Simula adicionar uma tarefa antes dos testes
  document.getElementById("tarefaInput").value = "Estudar JS";
  document.getElementById("prioridadeInput").value = "alta";
  adicionarTarefa();

  testar("UNIT - Marcar tarefa como concluída", () => {
    const tarefa = document.querySelector("li");
    const span = tarefa.querySelector("span");
    span.click();
    if (!tarefa.classList.contains("concluida")) throw new Error("Tarefa não foi marcada como concluída");
  });

  testar("UNIT - Filtrar apenas tarefas pendentes", () => {
    document.getElementById("filtro").value = "pendentes";
    filtrarTarefas();

    const tarefa = document.querySelector("li");
    if (tarefa.style.display !== "none") throw new Error("Tarefa concluída deveria estar oculta");
  });

  testar("UNIT - Filtrar todas as tarefas", () => {
    document.getElementById("filtro").value = "todas";
    filtrarTarefas();

    const tarefa = document.querySelector("li");
    if (tarefa.style.display === "none") throw new Error("Tarefa deveria estar visível");
  });

  testar("UNIT - Remover tarefa", () => {
    const botaoRemover = document.querySelector("li button");
    botaoRemover.click();

    const tarefas = document.querySelectorAll("#listaTarefas li");
    if (tarefas.length !== 0) throw new Error("Tarefa não foi removida");
  });
}
