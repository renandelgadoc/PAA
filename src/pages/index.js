import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  const tree = ['12 <= 0.50', '28 <= 0.50', '37 <= 0.50', '38 <= 0.50', '25 <= 0.50', '68 <= 0.50', '27 <= 0.50', '10 <= 0.50', '6 <= 0.50', '18 <= 0.50', '55 <= 0.50', '3 <= 0.50', '52 <= 0.50', '69 <= 0.50', '16 <= 0.50', '74 <= 0.50', '1 <= 0.50', '34 <= 0.50', '29 <= 0.50', '53 <= 0.50', '22 <= 0.50', '45 <= 0.50', '71 <= 0.50', '48 <= 0.50', '50 <= 0.50', '9 <= 0.50', '0 <= 0.50', '77 <= 0.50', '14 <= 0.50', 'class: Rodrigo Bonifácio de Almeida', '14 >  0.50', 'class: Li Weigang', '77 >  0.50', '60 <= 0.50', 'class: Edna Dias Canedo', '60 >  0.50', 'class: Leticia Lopes Leite', '0 >  0.50', 'class: Alba Cristina Magalhaes Alves de Melo', '9 >  0.50', '41 <= 0.50', 'class: Camilo Chang Dórea', '41 >  0.50', 'class: Ricardo L. de Queiroz', '50 >  0.50', '7 <= 0.50', 'class: Fernando Albuquerque', '7 >  0.50', 'class: Joao Jose Costa Gondim', '48 >  0.50', 'class: Jan Mendonca Correa', '71 >  0.50', 'class: Dibio Leandro Borges', '45 >  0.50', 'class: Eduardo Adilo Pelinson Alchieri', '22 >  0.50', 'class: Flavio Barros Vidal', '53 >  0.50', 'class: Flavio Leonardo Cavalcanti Moura', '29 >  0.50', 'class: Marcus Vinicius Lamar', '34 >  0.50', 'class: Guilherme N. Ramos', '1 >  0.50', 'class: Marcos Fagundes Caetano', '74 >  0.50', 'class: Germana Menezes da Nobrega', '16 >  0.50', 'class: Bruno Macchiavello', '69 >  0.50', 'class: Thiago Paulo Faleiros', '52 >  0.50', 'class: Roberta Barbosa Oliveira', '3 >  0.50', 'class: Ricardo Pezzuol Jacobi', '55 >  0.50', 'class: Carla Cavalcante Koike', '18 >  0.50', 'class: Jorge C. Lucero', '6 >  0.50', 'class: Carla Denise Castanho', '10 >  0.50', 'class: Marcelo Marotta', '27 >  0.50', 'class: Aleteia Patricia Favacho de Araujo', '68 >  0.50', 'class: Marcelo Ladeira', '25 >  0.50', 'class: Vinicius Ruela Pereira Borges', '38 >  0.50', 'class: Edison Ishikawa', '37 >  0.50', 'class: Marcelo Grandi Mandelli', '28 >  0.50', 'class: Jorge Henrique Cabral Fernandes', '12 >  0.50', 'class: Maria de Fatima R. Brandao']
  
  const atributos = {'0': 'topico interesse Biologia Computacional', '1': 'topico interesse Computação Paralela', '2': 'topico interesse Engenharia de Software', '3': 'topico interesse Hardware', '4': 'topico interesse Informática na Educação', '5': 'topico interesse Inteligência Artificial', '6': 'topico interesse Jogos de Computador', '7': 'topico interesse Lógica', '8': 'topico interesse Métodos Formais', '9': 'topico interesse Processamento Digital de Sinais e Multimídia', '10': 'topico interesse Redes de Computadores', '11': 'topico interesse Sistemas Distribuídos', '12': 'topico interesse Sistemas de Software', '13': 'graduacao Fundação Educacional de Fernandópolis', '14': 'graduacao He Hai University', '15': 'graduacao Instituto Militar de Engenharia', '16': 'graduacao Pontifica Universidad Católica del Perú', '17': 'graduacao Pontifícia Universidade Católica do Rio Grande do Sul', '18': 'graduacao Universidad Nacional de Córdoba', '19': 'graduacao Universidade Federal da Paraíba', '20': 'graduacao Universidade Federal de Goiás', '21': 'graduacao Universidade Federal de Itajubá', '22': 'graduacao Universidade Federal de Juiz de Fora', '23': 'graduacao Universidade Federal de Pernambuco', '24': 'graduacao Universidade Federal de Santa Catarina', '25': 'graduacao Universidade Federal de Uberlândia', '26': 'graduacao Universidade Federal do Ceará', '27': 'graduacao Universidade Federal do Pará', '28': 'graduacao Universidade Federal do Rio Grande do Norte', '29': 'graduacao Universidade Federal do Rio Grande do Sul', '30': 'graduacao Universidade Salgado de Oliveira Goiás', '31': 'graduacao Universidade de Brasília', '32': 'graduacao Universidade de Passo Fundo',
   '33': 'mestrado Instituto Nacional de Pesquisas Espaciais', '34': 'mestrado Instituto de Tecnologia de Tóquio', '35': 'mestrado Nagoya Institute Of Technology', '36': 'mestrado Nanjing University', '37': 'mestrado Pontifícia Universidade Católica do Rio Grande do Sul', '38': 'mestrado Pontifícia Universidade Católica do Rio de Janeiro', '39': 'mestrado Shizuoka University', '40': 'mestrado Universidade Estadual Paulista', '41': 'mestrado Universidade Estadual de Campinas', '42': 'mestrado Universidade Federal da Paraíba', '43': 'mestrado Universidade Federal de Campina Grande', '44': 'mestrado Universidade Federal de Pernambuco', '45': 'mestrado Universidade Federal de Santa Catarina', '46': 'mestrado Universidade Federal de Uberlândia', '47': 'mestrado Universidade Federal do Rio Grande do Sul', '48': 'mestrado Universidade de Brasília', '49': 'mestrado Universidade de São Paulo', '50': 'mestrado University of London', '51': 'mestrado University of Maryland at College Park', '52': 'doutorado Faculdade de Engenharia da Universidade do Porto', '53': 'doutorado Heriot-Watt University', '54': 'doutorado Institut National Polytechnique Grenoble', '55': 'doutorado Institut National Polytechnique de Grenoble', '56': 'doutorado Instituto Tecnológico da Aeronáutica', '57': 'doutorado Instituto de Tecnologia de Tóquio', '58': 'doutorado Nagoya Institute Of Technology', '59': 'doutorado Nagoya Institute of Technology', '60': 'doutorado Pontifícia Universidade Católica do Rio Grande do Sul', '61': 'doutorado Pontifícia Universidade Católica do Rio de Janeiro', '62': 'doutorado Shizuoka University', '63': 'doutorado Universidade Federal de Pernambuco', '64': 'doutorado Universidade Federal de Santa Catarina',
   '65': 'doutorado Universidade Federal do Rio Grande do Sul', '66': 'doutorado Universidade Federal do Rio de Janeiro', '67': 'doutorado Universidade de Brasília', '68': 'doutorado Universidade de Lisboa e Universidade Federal do Rio Grande do Sul', '69': 'doutorado Universidade de São Paulo', '70': 'doutorado Universitat Politecnica de Catalunya', '71': 'doutorado University of Edinburgh', '72': 'doutorado University of Texas at Arlington', '73': 'doutorado Université Catholique de Louvain', '74': 'doutorado Université Montpellier II', '75': 'doutorado Université de Montpellier', '76': 'genero Homem', '77': 'genero Mulher', '78': 'disciplinas ministradas ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES', '79': 'disciplinas ministradas AUTÔMATOS E COMPUTABILIDADE', '80': 'disciplinas ministradas CIRCUITOS LÓGICOS', '81': 'disciplinas ministradas COMPILADORES', '82': 'disciplinas ministradas COMPUTAÇÃO EXPERIMENTAL', '83': 'disciplinas ministradas ENGENHARIA DE SOFTWARE', '84': 'disciplinas ministradas ESTRUTURAS DE DADOS', '85': 'disciplinas ministradas FORMAÇÃO DOCENTE EM COMPUTAÇÃO', '86': 'disciplinas ministradas FUNDAMENTOS DE SISTEMAS INTELIGENTES', '87': 'disciplinas ministradas FUNDAMENTOS DE SISTEMAS OPERACIONAIS', '88': 'disciplinas ministradas FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO', '89': 'disciplinas ministradas INFORMATICA APLICADA A EDUCACAO', '90': 'disciplinas ministradas INFORMATICA E SOCIEDADE', '91': 'disciplinas ministradas INTRODUCAO A INTELIGENCIA ARTIFICIAL', '92': 'disciplinas ministradas INTRODUCAO AO PROCESSAMENTO DE IMAGENS', '93': 'disciplinas ministradas INTRODUÇÃO A SISTEMAS OPERACIONAIS', '94': 'disciplinas ministradas INTRODUÇÃO AO AMBIENTE UNIVERSITÁRIO NA COMPUTAÇÃO', '95': 'disciplinas ministradas INTRODUÇÃO AO DESENVOLVIMENTO DE JOGOS', '96': 'disciplinas ministradas INTRODUÇÃO AOS SISTEMAS COMPUTACIONAIS', '97': 'disciplinas ministradas INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO', '98': 'disciplinas ministradas LABORATÓRIO DE CIRCUITOS LÓGICOS', '99': 'disciplinas ministradas LINGUAGENS DE PROGRAMACAO',
    '100': 'disciplinas ministradas LÓGICA COMPUTACIONAL 1', '101': 'disciplinas ministradas METODOLOGIA CIENTÍFICA', '102': 'disciplinas ministradas MÉTODOS DE PESQUISA NA LICENCIATURA EM COMPUTAÇÃO', '103': 'disciplinas ministradas MÉTODOS DE PROGRAMAÇÃO', '104': 'disciplinas ministradas ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES', '105': 'disciplinas ministradas PROGRAMAÇÃO COMPETITIVA', '106': 'disciplinas ministradas PROGRAMAÇÃO CONCORRENTE', '107': 'disciplinas ministradas PROJETO E ANÁLISE DE ALGORITMOS', '108': 'disciplinas ministradas PROJETO INTERDISCIPLINAR DE LICENCIATURA EM COMPUTAÇÃO', '109': 'disciplinas ministradas PRÁTICA EXTENSIONISTA EM COMPUTAÇÃO A', '110': 'disciplinas ministradas REDES DE COMPUTADORES', '111': 'disciplinas ministradas SEGURANÇA COMPUTACIONAL', '112': 'disciplinas ministradas SISTEMAS DE TEMPO REAL', '113': 'disciplinas ministradas SISTEMAS DIGITAIS INTEGRADOS', '114': 'disciplinas ministradas SISTEMAS OPERACIONAIS', '115': 'disciplinas ministradas SOFTWARE BASICO', '116': 'disciplinas ministradas SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 1', '117': 'disciplinas ministradas SUPERVISÃO DE PRODUÇÃO DE MATERIAL DIDÁTICO', '118': 'disciplinas ministradas SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 1', '119': 'disciplinas ministradas SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 2', '120': 'disciplinas ministradas SUPRVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 2', '121': 'disciplinas ministradas SUPRVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 3', '122': 'disciplinas ministradas TECNICAS DE PROGRAMAÇÃO 1', '123': 'disciplinas ministradas TECNICAS DE PROGRAMAÇÃO 2', '124': 'disciplinas ministradas TELEINFORMÁTICA E REDES 1', '125': 'disciplinas ministradas TEORIA DA COMPUTACAO', '126': 'disciplinas ministradas TEORIA E APLICAÇÃO DE GRAFOS', '127': 'disciplinas ministradas TOPICOS AVANCADOS EM COMPUTADORES', '128': 'disciplinas ministradas TÓPICOS ESPECIAIS EM PROGRAMAÇÃO COMPETITIVA'}
  
    const [i, setI] = useState(0)

  const [mostraBotoes, setMostraBotoes] = useState(true)

  const [pergunta, setPergunta] = useState('topico interesse Biologia Computacional')

  const percorreArvoreSim= () => {
    let atributo = tree[i].split(" ")[0]
    for (let j = i + 1; j < tree.length; j++) {
      if (tree[j].includes(atributo)) {
        setI(j + 1)
      }
    }
  }

  const percorreArvoreNao = () => {
    setI(i + 1)
  }

  useEffect(() => {
    let no = tree[i]
    if (no.includes("class")) {
      setMostraBotoes(false)
    } else{
      setPergunta(atributos[tree[i].split(" ")[0]] + "?")
    }
  }, [i]);

  useEffect(() => {
    if(!mostraBotoes){
      setPergunta(tree[i].replace("class: ",""))
    }
  }, [mostraBotoes])

  return (
    <>
      <div class="container">
          <div class="col-md-6 mx-auto mt-5">
              <div class="card p-3 shadow-sm">
                  <div class="card-body">
                      <h2 class="card-title">Advinhe o professor do CIC</h2>
                      <form>
                          <div class="row">
                              <p class="fs-4 text-center">{pergunta}</p>
                          </div>
                          <div class="row">
                              <div class="d-grid gap-2">
                              {mostraBotoes && <button onClick={percorreArvoreSim} type="button" class="btn btn-dark btn-lg btn-block">
                                      Sim
                                  </button>}
                              {mostraBotoes &&  <button onClick={percorreArvoreNao} type="button" class="btn btn-dark btn-lg btn-block">
                                  Não
                              </button>}
                              {!mostraBotoes && <p>Recarregue a página para reiniciar</p>}
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>


    </>
  )
}
