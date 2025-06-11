function runUnitTests() {
  limparSaida();

  testar("UNIT - Adição de tarefa", () => {
    document.getElementById("tarefaInput").value = "Teste 1";
    document.getElementById("prioridadeInput").value = "alta";
    adicionarTarefa();
    const tarefas = document.querySelectorAll("#listaTarefas li");
    if (tarefas.length === 0) throw new Error("Tarefa não foi adicionada");
  });

  testar("UNIT - Remoção de tarefa", () => {
    const botaoRemover = document.querySelector("li button:nth-of-type(2)");
    if (!botaoRemover) throw new Error("Botão de remover não encontrado");
    botaoRemover.click();
    const tarefas = document.querySelectorAll("#listaTarefas li");
    if (tarefas.length !== 0) throw new Error("Tarefa não foi removida");
  });

  testar("UNIT - Conclusão de tarefa", () => {
    document.getElementById("tarefaInput").value = "Teste 2";
    document.getElementById("prioridadeInput").value = "média";
    adicionarTarefa();
    const botaoConcluir = document.querySelector("li button:nth-of-type(1)");
    botaoConcluir.click();
    const li = document.querySelector("#listaTarefas li");
    if (li.getAttribute("data-concluida") !== "true") {
      throw new Error("Tarefa não foi marcada como concluída");
    }
  });

  testar("UNIT - Filtro de tarefas", () => {
    document.getElementById("filtro").value = "concluidas";
    filtrarTarefas();
    const tarefasVisiveis = Array.from(
      document.querySelectorAll("#listaTarefas li")
    ).filter((el) => el.style.display !== "none");
    if (tarefasVisiveis.length === 0)
      throw new Error("Filtro não funcionou corretamente");
  });

  testar("UNIT - Prioridade atribuída", () => {
    const span = document.querySelector("#listaTarefas span");
    if (!span || !span.textContent.includes("(média)")) {
      throw new Error("Prioridade não atribuída corretamente");
    }
  });

  testar("UNIT - Campo de input está vazio após adicionar", () => {
    document.getElementById("tarefaInput").value = "Limpar quarto";
    document.getElementById("prioridadeInput").value = "alta";
    adicionarTarefa();
    const valorAtual = document.getElementById("tarefaInput").value;
    if (valorAtual !== "") throw new Error("Campo não foi limpo");
  });
}
