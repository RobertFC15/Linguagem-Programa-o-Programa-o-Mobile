class CadastroUsuarios {
    constructor() {
      this.usuarios = [];
    }
  
    incluirUsuario(cpf, nome, dataNascimento, email) {
      if (this.usuarios.some(user => user.cpf === cpf)) {
        console.log("Erro: CPF já cadastrado!");
        return;
      }
  
      const usuario = { cpf, nome, dataNascimento, email };
      this.usuarios.push(usuario);
      console.log("Usuário cadastrado com sucesso!");
    }
  
    alterarUsuario(cpf, novoNome, novaDataNascimento, novoEmail) {
      const usuario = this.usuarios.find(user => user.cpf === cpf);
  
      if (!usuario) {
        console.log("Usuário não encontrado!");
        return;
      }
  
      usuario.nome = novoNome || usuario.nome;
      usuario.dataNascimento = novaDataNascimento || usuario.dataNascimento;
      usuario.email = novoEmail || usuario.email;
  
      console.log("Usuário atualizado com sucesso!");
    }
  
    excluirUsuario(cpf) {
      const index = this.usuarios.findIndex(user => user.cpf === cpf);
  
      if (index === -1) {
        console.log("Usuário não encontrado!");
        return;
      }
  
      this.usuarios.splice(index, 1);
      console.log("Usuário excluído com sucesso!");
    }
  
    pesquisarUsuario(nome) {
      const encontrados = this.usuarios.filter(user => user.nome.toLowerCase().includes(nome.toLowerCase()));
  
      if (encontrados.length === 0) {
        console.log("Nenhum usuário encontrado com esse nome.");
        return;
      }
  
      console.log("Usuários encontrados:", encontrados);
    }
  
    listarUsuarios() {
      if (this.usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
      }
  
      console.log("Lista de usuários cadastrados:", this.usuarios);
    }
  }
  
  const cadastro = new CadastroUsuarios();
  
  cadastro.incluirUsuario("123.456.789-00", "João Silva", "1990-05-15", "joao@email.com");
  cadastro.incluirUsuario("987.654.321-00", "Maria Souza", "1985-10-20", "maria@email.com");
  
  cadastro.listarUsuarios();
  
  cadastro.alterarUsuario("123.456.789-00", "João Pedro", null, "joao.novo@email.com");
  
  cadastro.pesquisarUsuario("Maria");
  
  cadastro.excluirUsuario("987.654.321-00");
  
  cadastro.listarUsuarios();
  