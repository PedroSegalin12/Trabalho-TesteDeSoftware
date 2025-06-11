function runComponentTests() {
  limparSaida();

  testar("COMPONENT - Campo de tarefa existe", () => {
    const input = document.getElementById("tarefaInput");
    if (!input) throw new Error("Campo de tarefa não encontrado");
  });

  testar("COMPONENT - Botão Adicionar existe", () => {
    const botao = document.querySelector("button[onclick='adicionarTarefa()']");
    if (!botao) throw new Error("Botão Adicionar não encontrado");
  });

  testar("COMPONENT - Seletor de prioridade existe", () => {
    const seletor = document.getElementById("prioridadeInput");
    if (!seletor) throw new Error("Seletor de prioridade não encontrado");
  });

  testar("COMPONENT - Filtro aparece na página", () => {
    const filtro = document.getElementById("filtro");
    if (!filtro) throw new Error("Filtro de tarefas não encontrado");
  });

  testar("COMPONENT - Lista de tarefas existe", () => {
    const lista = document.getElementById("listaTarefas");
    if (!lista) throw new Error("Lista de tarefas não encontrada");
  });

  testar("COMPONENT - Botões de testes estão visíveis", () => {
    const b1 = document.querySelector("button[onclick='runUnitTests()']");
    const b2 = document.querySelector("button[onclick='runComponentTests()']");
    if (!b1 || !b2) throw new Error("Botões de testes não encontrados");
  });

  testar("COMPONENT - Botão Remover existe após adicionar tarefa", () => {
    // Limpa e adiciona uma nova tarefa
    document.getElementById("listaTarefas").innerHTML = "";
    document.getElementById("tarefaInput").value = "Teste de componentes";
    document.getElementById("prioridadeInput").value = "baixa";
    adicionarTarefa();

    const botao = document.querySelector("li button:nth-of-type(2)");
    if (!botao) throw new Error("Botão Remover não encontrado");
  });
}
