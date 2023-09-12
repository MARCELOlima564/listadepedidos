class Cadastro {
    constructor(cliente, mesa, descricao) {
      this.id = this.gerarId();
      this.cliente = cliente;
      this.mesa = mesa;
      this.descricao = descricao;
    }
    gerarId() {
        return Math.floor(Math.random() * 1000);
      }
}

class ListaCadastro {
    constructor() {
      this.cadastros = [];
    }
  
    adicionarCadastro(parametro) {
      this.cadastros.push(parametro);
    }
  
    listarCadastros() {
      return this.cadastros;
    }
  
    listarCadastrosPorId(parametro) {
      return this.cadastros.find((cadastro) => cadastros.id == parametro);
    }
  
    atualizarEquipe(id, cliente,mesa, descricao) {
      const cadastro = this.listarCadastrosPorId(id);
  
      cadastro.cliente = cliente;
      cadastro.mesa = mesa;
      cadastro.descricao = descricao;
     
      return cadastro;
    }
  
    deletarCadastro(parametro) {
      return (this.cadastros = this.cadastros.filter(
        (cadastro) => cadastro.id != parametro
      ));
    }
  }
  const listaCadastro = new ListaCadastro();

  function criarCadastro() {
    const cliente = document.getElementById("cliente").value;
    const mesa = document.getElementById("mesa").value;
    const descricao = document.getElementById("descricao").value;

  
    const novoCadastro = new Cadastro(cliente, mesa, descricao);
  
    listaCadastro.adicionarCadastro(novoCadastro);

    listarCadastros();
    limparInputs();
  }

  function listarCadastros() {
    const cadastros = ListaCadastro.listaCadastros();
  
    const elementoLista = document.getElementById("listarCadastros");
    elementoLista.innerHTML = "";
  
    let content = "";
  
    equipes.forEach((cadastro) => {
      content += `
      <div(${cadastro.id})">
        <p>Cliente: ${cadastro.cliente}</p>
        <p>Mesa: ${cadastro.mesa}</p>
        <p>Descrição: ${cadastro.descricao}</p>
      </div>
      `;
    });
  
    elementoLista.innerHTML = content;
  }

  let aux = null;

function atualizarCadastro(id) {
  const cadastro = ListaCadastro.listarCadastrosPorId(id);

  document.getElementById("cliente").value = cadastro.cliente;
  document.getElementById("mesa").value = cadastro.mesa;
  document.getElementById("descricao").value = cadastro.descricao;

  document.getElementById("cliente").classList.add("hidden");
  document.getElementById("mesa").classList.add("hidden");
  document.getElementById("descricao").classList.add("hidden");

  aux = id;
}
function editarCadastro() {
  const cliente = document.getElementById("cliente").value;
  const mesa = document.getElementById("mesa").value;
  const descricao = document.getElementById("descricao").value;

  ListaCadastro.atualizarCadastro(aux, cliente, mesa, descricao);

  listarEquipes();

  document.getElementById("cliente").classList.remove("hidden");
  document.getElementById("mesa").classList.remove("hidden");
  document.getElementById("descricao").classList.remove("hidden");

  document.getElementById("cadastroUnico").classList.add("hidden");
  limparInputs();

  aux = null;
}
function limparInputs() {
  document.getElementById("cliente").value = "";
  document.getElementById("mesa").value = "";
  document.getElementById("descricao").value = "";
}
  function deletarCadastro(id) {
  ListaCadastro.deletarCadastro(id);

  listaCadastro();

  document.getElementById("cadastroUnico").classList.add("hidden");
}

  
