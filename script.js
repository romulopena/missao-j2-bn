const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como as profissões do futuro podem promover a inclusão digital enquanto contribuem para soluções em face do aquecimento global?",
        alternativas: [
            {
                texto: "Com a evolução das profissões e a  inclusão digital ao desenvolver tecnologias acessíveis para comunidades remotas pode reduzir a dependência de combustíveis fósseis e mitigando os efeitos do aquecimento global.",
                afirmacao: "Quanto maior o acesso a tecnologia da população, maior será a probabilidade de desenvolvimento  da sociedade."
            },
            {
                texto: "O pensamento evoluir faz-se crescer a buscar para soluções que levarão a evolução tanto da população quanto resolução de problemas complexos",
                afirmacao: "Com  a população crescendo e evoluindo se encontra soluções não vistas hoje sem existir as tecnologias e simples atualização e crescimento"
            },
        ]
    },
    {
        enunciado: "De que forma o Inclusão digital pode auxiliar na formação de novas  profissões que promovam um futuro mais sustentável?",
        alternativas: [
            {
                texto: "Acesso à Educação e Treinamento, empreendedorismo e inovação, Trabalho remoto e Freelancer",
                afirmacao: "Cursos online, tutoriais, impulsionam a inovação e a colaboração em prol de um futuro sustentável"
            },
            {
                texto: "Acessibilidade com tecnologias assistivas, comunidades online, facilitando o acesso ao conhecimento.",
                afirmacao: "Aplicativos de reciclagem ajudam as pessoas e encontrar pontos de coleta."
            },
        ]
    },
    {
        enunciado: "Nos dias atuais percebemos que diversas alterações climáticas estão causando desastres naturais com uma intensidade que era esperada para daqui a 20 anos. Cada vez mais estão se confirmando episódios de desastres naturais devido ao aquecimento global. Esse cenário demanda o surgimento de novas profissões que venham a mitigar esse quadro. Para o seu futuro, você escolherá qual tipo de profissão?",
        alternativas: [
            {
                texto: "Eu não acredito no aquecimento global é fake news! Eu me importo com uma profissão rentável!",
                afirmacao: "Com o avanço dos desastres naturais, condições básicas de existência se tornaram mais escassas (alimentos, água potável e saneamento)."
            },
            {
                texto: "Redução do surgimento de novas epidemias que tendem a surgir como consequênica do aquecimento global. Novos empregos surgem, novas possibilidades de trabalhos.",
                afirmacao: "Redução do surgimento de novas epidemias que tendem a surgir como consequênica do aquecimento global. Novos empregos surgem, novas possibilidades de trabalhos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}