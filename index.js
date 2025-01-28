// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome; // Nome do herói
      this.idade = idade; // Idade do herói
      this.tipo = tipo; // Tipo do herói (guerreiro, mago, etc.)
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Define o ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque desconhecido'; // Caso o tipo seja inválido
          break;
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criação de heróis
  const mago = new Heroi('Merlin', 80, 'mago');
  const guerreiro = new Heroi('Artur', 30, 'guerreiro');
  const monge = new Heroi('Jack', 50, 'monge');
  const ninja = new Heroi('Jiraya', 17, 'ninja');
  
  // Testando os ataques
  mago.atacar(); // "O mago atacou usando magia"
  guerreiro.atacar(); // "O guerreiro atacou usando espada"
  monge.atacar(); // "O monge atacou usando artes marciais"
  ninja.atacar(); // "O ninja atacou usando shuriken"
  