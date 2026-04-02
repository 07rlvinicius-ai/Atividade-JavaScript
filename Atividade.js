class Exams {
  constructor() {
    this.questoes = [];
  }

    adicionarQuestao(numero, peso, resposta) {
        this.questoes.push({numero, peso, resposta});
  }

  calcularNota(respostasAluno) {
    let total_peso = 0;
    let pontos = 0;

    for (let i = 0; i < this.questoes.length; i++) {
      const questao = this.questoes[i];
      total_peso += questao.peso;

      if (respostasAluno[i] === questao.resposta) {
        pontos += questao.peso;
      }
    }

    const nota = (pontos / total_peso) * 10;

    return nota;
  }
}

const prova = new Exams();

prova.adicionarQuestao(1, 2, 'a');
prova.adicionarQuestao(2, 2, 'b');
prova.adicionarQuestao(3, 2, 'a');
prova.adicionarQuestao(4, 2, 'c');
prova.adicionarQuestao(5, 2, 'd');

const respostas_aluno = ['a', 'b', 'b', 'b', 'b'];

const notafinal = prova.calcularNota(respostas_aluno);

console.log("Nota final:", notafinal);
console.log(respostas_aluno)