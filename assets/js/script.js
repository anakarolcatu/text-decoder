const textArea = document.querySelector('.input_textarea');
const textOutput = document.querySelector('.aside_resultado_output');
const textInicial = document.querySelector('.aside_resultado_inicial');

/* Criterios de substituição das vogais */
function substituirVogais(valueCrip) {
  const mapKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  } 
  const cripto = valueCrip.replace(/[aeiou]/g, (vogal) => mapKeys[vogal]);
  /* O g neste caso, significa que pega todas as strings de mandeira global, sem ele, apenas a primeira aparição será substituida */
  exibirResultado(cripto);
}

function voltarVogais(valueCrip) {
  const mapKeys = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  }
  const decripto = valueCrip.replace(/ai|enter|imes|ober|ufat/g, (vogal) => mapKeys[vogal]);
  exibirResultado(decripto);
}

function transformarTexto(botao) {
    let valueCrip = (textArea.value).toLowerCase();
    let valorDoBotao = botao;
    if (valueCrip === '') {
      return alert('Por favor, insira um texto para continuar.');
    } 
    
    if (/[^a-z\s]/.test(valueCrip)) {
      alert('Por favor, insira apenas letras minúsculas e sem acento.');
      return false;
  }

    if (botao === 'cifra') {
      substituirVogais(valueCrip);
      textOutput.classList.remove('hidden');
      textArea.value = '';
    } else if(botao === 'decifra') {
      voltarVogais(valueCrip);
      textOutput.classList.remove('hidden');
      textArea.value = '';
    }

}

/*função de exibir/ocultar imagem*/
function exibirResultado(text) {
    textOutput.innerHTML = text;
    if (textOutput.innerHTML === '') {
        textInicial.classList.remove('hidden');
    } else {
        textInicial.classList.add('hidden');
    }

}

/* Botão copiar */
const botaoCopiar = document.querySelector('.aside_button_copy');
botaoCopiar.addEventListener('click', copiar = () => {
  let valueCopy = document.querySelector('.aside_resultado_output').textContent;
  navigator.clipboard.writeText(valueCopy)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
      // Adicionando um pequeno atraso antes de chamar exibirResultado
      setTimeout(() => {
        exibirResultado('');
      }, 100);
      textArea.value = '';
    })
    .catch(() => {
      alert("Erro inesperado ao copiar texto. Seu navegador pode não ser compatível com essa ação.");
    })
})
