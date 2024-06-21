const participantes = [
    { nome: "Maj BRANDELLO", presente: null },
    { nome: "Cap DE LIMA", presente: null },
    { nome: "Cap REZENDE", presente: null },
    { nome: "Cap EVANDRO", presente: null },
    { nome: "Cap AGNEZ", presente: null },
    { nome: "Cap LANES", presente: null },
    { nome: "1T SILVEIRA", presente: null },
    { nome: "1T JAYME", presente: null },
    { nome: "SO CANUTO", presente: null },
    { nome: "SO MONTEIRO", presente: null },
    { nome: "SO EDSON", presente: null },
    { nome: "1S GLAUBER", presente: null },
    { nome: "1S ALEX", presente: null },
    { nome: "1S WALTER", presente: null },
    { nome: "1S EDMAR", presente: null },
    { nome: "1S PINHEIRO", presente: null },
    { nome: "1S FLAVIO", presente: null },
    { nome: "1S HELLEN", presente: null },
    { nome: "2S AFFONSO", presente: null },
    { nome: "2S ALVARO", presente: null },
    { nome: "2S ALCANTARA", presente: null },
    { nome: "2S PATRICIA", presente: null },
    { nome: "2S MAXIMILIANO", presente: null },
    { nome: "2S ADAM", presente: null },
    { nome: "2S LEONARDO", presente: null },
    { nome: "2S CARLOS CUZ", presente: null },
    { nome: "2S ERICKSON", presente: null },
    { nome: "2S BRUNA", presente: null },
    { nome: "2S BANDEIRA", presente: null },
    { nome: "2S RAFAEL", presente: null },
    { nome: "3S ZAGO", presente: null },
    { nome: "3S FERNANDES", presente: null },
    { nome: "3S VITARI", presente: null },
    { nome: "3S BOUZADA", presente: null },
    { nome: "3S MARCOS", presente: null },
    { nome: "3S CONCEIÇAO", presente: null },
    { nome: "3S JACOMO", presente: null },
    { nome: "3S FRANÇA", presente: null },
    { nome: "3S CARLOS", presente: null },
    { nome: "3S ALVES", presente: null },
    { nome: "3S NERES", presente: null },
    { nome: "3S CRESPO", presente: null },
    { nome: "CB CAMPOS", presente: null },
    { nome: "CB ELÍDIO", presente: null },
    { nome: "CB SERRA", presente: null },
    { nome: "CB EDIVALDO", presente: null },
    { nome: "S1 LOPES JUNIOR", presente: null },
    { nome: "S1 MATHEUS", presente: null },
    { nome: "S1 ROMÁRIO", presente: null },
    { nome: "S1 COELHO", presente: null },
    { nome: "S2 PATRICK", presente: null },
    { nome: "S2 OLIVEIRA", presente: null },
    { nome: "S2 M. CODESSO", presente: null },
    { nome: "S2 FELIPE SILVA", presente: null },
    { nome: "S2 ANDREY", presente: null },
    { nome: "S2 DAVI MORAIS", presente: null },
    { nome: "S2 BAPTISTA", presente: null },
    { nome: "S2 FELICIANO", presente: null },
    { nome: "S2 QUERIDO", presente: null },
    { nome: "S2 MATHEUS SANTOS", presente: null },






    { nome: "", presente: null }
];

function marcarPresenca(nome) {
    const participante = participantes.find(p => p.nome === nome);
    if (participante) {
        participante.presente = true;
        atualizarLista();
    }
}

function marcarAusencia(nome) {
    const participante = participantes.find(p => p.nome === nome);
    if (participante) {
        participante.presente = false;
        atualizarLista();
    }
}

function atualizarLista() {
    const listaParticipantes = document.getElementById('listaParticipantes');
    listaParticipantes.innerHTML = '';

    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent = participante.nome;
        
        const buttonPresente = document.createElement('button');
        buttonPresente.textContent = 'Presente';
        buttonPresente.onclick = () => marcarPresenca(participante.nome);
        if (participante.presente === true) {
            buttonPresente.disabled = true;
        }

        const buttonAusente = document.createElement('button');
        buttonAusente.textContent = 'Ausente';
        buttonAusente.className = 'ausente';
        buttonAusente.onclick = () => marcarAusencia(participante.nome);
        if (participante.presente === false) {
            buttonAusente.disabled = true;
        }

        li.appendChild(buttonPresente);
        li.appendChild(buttonAusente);
        listaParticipantes.appendChild(li);
    });
}

// Inicializar a lista de participantes
document.addEventListener('DOMContentLoaded', atualizarLista);
