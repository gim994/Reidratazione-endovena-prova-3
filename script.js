const singolaInfusioneBtn = document.getElementById('singolaInfusioneBtn');
const doppiaInfusioneBtn = document.getElementById('doppiaInfusioneBtn');
const numberOutput1Container = document.getElementById('numberOutput1Container');
const numberOutput2Container = document.getElementById('numberOutput2Container');
const numberOutput3Container = document.getElementById('numberOutput3Container');
const numberOutput4Container = document.getElementById('numberOutput4Container');
const numberOutput5Container = document.getElementById('numberOutput5Container');
const numberOutput6Container = document.getElementById('numberOutput6Container');
const doppiaInfusioneContainer = document.getElementById('doppiaInfusioneContainer');


doppiaInfusioneBtn.addEventListener('click', function() {
    setActiveInfusioneButton('doppiaInfusioneBtn');
      
    // Nascondi i container della singola infusione
    numberOutput0Container.style.display = 'none';    
	numberOutput1Container.style.display = 'none';
    numberOutput2Container.style.display = 'none';
    numberOutput3Container.style.display = 'none';
    numberOutput4Container.style.display = 'none';
    numberOutput5Container.style.display = 'none';
    numberOutput6Container.style.display = 'none';
    
    // Mostra il container della doppia infusione
    doppiaInfusioneContainer.style.display = 'block';
});

singolaInfusioneBtn.addEventListener('click', function() {
    setActiveInfusioneButton('singolaInfusioneBtn');
       
    // Mostra i container della singola infusione
    numberOutput0Container.style.display = 'none';
	numberOutput1Container.style.display = 'flex';
    numberOutput2Container.style.display = 'flex';
    numberOutput3Container.style.display = 'flex';
    numberOutput4Container.style.display = 'flex';
    numberOutput5Container.style.display = 'flex';
    numberOutput6Container.style.display = 'flex';
    
    // Nascondi il container della doppia infusione
    doppiaInfusioneContainer.style.display = 'none';
});


// AGGIORNAMENTO CONTAINER OUTPUT
let Galmeqlpart, Galglupercpart;
let mlNaClOutputValue;
let Galmeql1, Galmeql2, Galgluperc1, Galgluperc2; 
let mantenimentoMlh, mlh24ore, mlhxore, mantenimentoMl, mantenimentoMlkg, SommaDie24OreMl, SommaDie24OreMlkg, SommaDiexOreMl, SommaDiexOreMlkg;
let mlLinea124ore, mlLinea224ore, mlkgLinea124ore, mlkgLinea224ore, mlhLinea124ore, mlhLinea224ore, mgkgminLinea124ore, mgkgminLinea224ore, mgkgminDoppio24ore, mlLinea1xore, mlLinea2xore, mlkgLinea1xore, mlkgLinea2xore, mlhLinea1xore, mlhLinea2xore, mgkgminLinea1xore, mgkgminLinea2xore, mgkgminDoppioxore, mlLinea1mant, mlLinea2mant, mlkgLinea1mant, mlkgLinea2mant, mlhLinea1mant, mlhLinea2mant, mgkgminLinea1mant, mgkgminLinea2mant, mgkgminDoppiomant, mltotdoppiam, mlkgtotdoppiam, mltotdoppia24, mlkgtotdoppia24, mltotdoppiax, mlkgtotdoppiax;
let Correzioneh = 0;  
let Correzionedie = 0;
let birthWeight = 0

// Riferimenti agli elementi HTML
const infoBox = document.getElementById("infoBox");
const formuleBox = document.getElementById("formulebox");
const toggleInfoButton = document.getElementById("toggleInfoBox");
const formuleButton = document.getElementById("formuleBtn");
const closeButtonInfo = document.getElementById("closeButton");
const closeButtonFormule = document.getElementById("closeButton2");

tooltipIcon.addEventListener('mouseenter', () => {
    tooltipText.classList.add('show');
});

tooltipIcon.addEventListener('mouseleave', () => {
    tooltipText.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon2 = document.getElementById('tooltipIcon2');
const tooltipText2 = document.getElementById('tooltipText2');

tooltipIcon2.addEventListener('mouseenter', () => {
    tooltipText2.classList.add('show');
});

tooltipIcon2.addEventListener('mouseleave', () => {
    tooltipText2.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon3 = document.getElementById('tooltipIcon3');
const tooltipText3 = document.getElementById('tooltipText3');

tooltipIcon3.addEventListener('mouseenter', () => {
    tooltipText3.classList.add('show');
});

tooltipIcon3.addEventListener('mouseleave', () => {
    tooltipText3.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon4 = document.getElementById('tooltipIcon4');
const tooltipText4 = document.getElementById('tooltipText4');

tooltipIcon4.addEventListener('mouseenter', () => {
    tooltipText4.classList.add('show');
});

tooltipIcon4.addEventListener('mouseleave', () => {
    tooltipText4.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon5 = document.getElementById('tooltipIcon5');
const tooltipText5 = document.getElementById('tooltipText5');

tooltipIcon5.addEventListener('mouseenter', () => {
    tooltipText5.classList.add('show');
});

tooltipIcon5.addEventListener('mouseleave', () => {
    tooltipText5.classList.remove('show');
});

// Tooltip per output
const tooltipIcon6 = document.getElementById('tooltipIcon6');
const tooltipText6 = document.getElementById('tooltipText6');

tooltipIcon6.addEventListener('mouseenter', () => {
    tooltipText6.classList.add('show');
});

tooltipIcon6.addEventListener('mouseleave', () => {
    tooltipText6.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon7 = document.getElementById('tooltipIcon7');
const tooltipText7 = document.getElementById('tooltipText7');

tooltipIcon7.addEventListener('mouseenter', () => {
    tooltipText7.classList.add('show');
});

tooltipIcon7.addEventListener('mouseleave', () => {
    tooltipText7.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon8 = document.getElementById('tooltipIcon8');
const tooltipText8 = document.getElementById('tooltipText8');

tooltipIcon8.addEventListener('mouseenter', () => {
    tooltipText8.classList.add('show');
});

tooltipIcon8.addEventListener('mouseleave', () => {
    tooltipText8.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon9 = document.getElementById('tooltipIcon9');
const tooltipText9 = document.getElementById('tooltipText9');

tooltipIcon9.addEventListener('mouseenter', () => {
    tooltipText9.classList.add('show');
});

tooltipIcon9.addEventListener('mouseleave', () => {
    tooltipText9.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon10 = document.getElementById('tooltipIcon10');
const tooltipText10 = document.getElementById('tooltipText10');

tooltipIcon10.addEventListener('mouseenter', () => {
    tooltipText10.classList.add('show');
});

tooltipIcon10.addEventListener('mouseleave', () => {
    tooltipText10.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon11 = document.getElementById('tooltipIcon11');
const tooltipText11 = document.getElementById('tooltipText11');

tooltipIcon11.addEventListener('mouseenter', () => {
    tooltipText11.classList.add('show');
});

tooltipIcon11.addEventListener('mouseleave', () => {
    tooltipText11.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon12 = document.getElementById('tooltipIcon12');
const tooltipText12 = document.getElementById('tooltipText12');

tooltipIcon12.addEventListener('mouseenter', () => {
    tooltipText12.classList.add('show');
});

tooltipIcon12.addEventListener('mouseleave', () => {
    tooltipText12.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon13 = document.getElementById('tooltipIcon13');
const tooltipText13 = document.getElementById('tooltipText13');

tooltipIcon13.addEventListener('mouseenter', () => {
    tooltipText13.classList.add('show');
});

tooltipIcon13.addEventListener('mouseleave', () => {
    tooltipText13.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon14 = document.getElementById('tooltipIcon14');
const tooltipText14 = document.getElementById('tooltipText14');

tooltipIcon14.addEventListener('mouseenter', () => {
    tooltipText14.classList.add('show');
});

tooltipIcon14.addEventListener('mouseleave', () => {
    tooltipText14.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon15 = document.getElementById('tooltipIcon15');
const tooltipText15 = document.getElementById('tooltipText15');

tooltipIcon15.addEventListener('mouseenter', () => {
    tooltipText15.classList.add('show');
});

tooltipIcon15.addEventListener('mouseleave', () => {
    tooltipText15.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon16 = document.getElementById('tooltipIcon16');
const tooltipText16 = document.getElementById('tooltipText16');

tooltipIcon16.addEventListener('mouseenter', () => {
    tooltipText16.classList.add('show');
});

tooltipIcon16.addEventListener('mouseleave', () => {
    tooltipText16.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon17 = document.getElementById('tooltipIcon17');
const tooltipText17 = document.getElementById('tooltipText17');

tooltipIcon17.addEventListener('mouseenter', () => {
    tooltipText17.classList.add('show');
});

tooltipIcon17.addEventListener('mouseleave', () => {
    tooltipText17.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon18 = document.getElementById('tooltipIcon18');
const tooltipText18 = document.getElementById('tooltipText18');

tooltipIcon18.addEventListener('mouseenter', () => {
    tooltipText18.classList.add('show');
});

tooltipIcon18.addEventListener('mouseleave', () => {
    tooltipText18.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon19 = document.getElementById('tooltipIcon19');
const tooltipText19 = document.getElementById('tooltipText19');

tooltipIcon19.addEventListener('mouseenter', () => {
    tooltipText19.classList.add('show');
});

tooltipIcon19.addEventListener('mouseleave', () => {
    tooltipText19.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon20 = document.getElementById('tooltipIcon20');
const tooltipText20 = document.getElementById('tooltipText20');

tooltipIcon20.addEventListener('mouseenter', () => {
    tooltipText20.classList.add('show');
});

tooltipIcon20.addEventListener('mouseleave', () => {
    tooltipText20.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon21 = document.getElementById('tooltipIcon21');
const tooltipText21 = document.getElementById('tooltipText21');

tooltipIcon21.addEventListener('mouseenter', () => {
    tooltipText21.classList.add('show');
});

tooltipIcon21.addEventListener('mouseleave', () => {
    tooltipText21.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon22 = document.getElementById('tooltipIcon22');
const tooltipText22 = document.getElementById('tooltipText22');

tooltipIcon21.addEventListener('mouseenter', () => {
    tooltipText22.classList.add('show');
});

tooltipIcon21.addEventListener('mouseleave', () => {
    tooltipText22.classList.remove('show');
});


// Tooltip per il secondo campo
const tooltipIcon23 = document.getElementById('tooltipIcon23');
const tooltipText23 = document.getElementById('tooltipText23');

tooltipIcon23.addEventListener('mouseenter', () => {
    tooltipText23.classList.add('show');
});

tooltipIcon23.addEventListener('mouseleave', () => {
    tooltipText23.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon24 = document.getElementById('tooltipIcon24');
const tooltipText24 = document.getElementById('tooltipText24');

tooltipIcon24.addEventListener('mouseenter', () => {
    tooltipText24.classList.add('show');
});

tooltipIcon24.addEventListener('mouseleave', () => {
    tooltipText24.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon25 = document.getElementById('tooltipIcon25');
const tooltipText25 = document.getElementById('tooltipText25');

tooltipIcon25.addEventListener('mouseenter', () => {
    tooltipText25.classList.add('show');
});

tooltipIcon25.addEventListener('mouseleave', () => {
    tooltipText25.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon26 = document.getElementById('tooltipIcon26');
const tooltipText26 = document.getElementById('tooltipText26');

tooltipIcon26.addEventListener('mouseenter', () => {
    tooltipText26.classList.add('show');
});

tooltipIcon26.addEventListener('mouseleave', () => {
    tooltipText26.classList.remove('show');
});


// Tooltip per il secondo campo
const tooltipIcon28 = document.getElementById('tooltipIcon28');
const tooltipText28 = document.getElementById('tooltipText28');

tooltipIcon28.addEventListener('mouseenter', () => {
    tooltipText28.classList.add('show');
});

tooltipIcon28.addEventListener('mouseleave', () => {
    tooltipText28.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon29 = document.getElementById('tooltipIcon29');
const tooltipText29 = document.getElementById('tooltipText29');

tooltipIcon29.addEventListener('mouseenter', () => {
    tooltipText29.classList.add('show');
});

tooltipIcon29.addEventListener('mouseleave', () => {
    tooltipText29.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon30 = document.getElementById('tooltipIcon30');
const tooltipText30 = document.getElementById('tooltipText30');

tooltipIcon30.addEventListener('mouseenter', () => {
    tooltipText30.classList.add('show');
});

tooltipIcon30.addEventListener('mouseleave', () => {
    tooltipText30.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon31 = document.getElementById('tooltipIcon31');
const tooltipText31 = document.getElementById('tooltipText31');

tooltipIcon31.addEventListener('mouseenter', () => {
    tooltipText31.classList.add('show');
});

tooltipIcon31.addEventListener('mouseleave', () => {
    tooltipText31.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon32 = document.getElementById('tooltipIcon32');
const tooltipText32 = document.getElementById('tooltipText32');

tooltipIcon32.addEventListener('mouseenter', () => {
    tooltipText32.classList.add('show');
});

tooltipIcon32.addEventListener('mouseleave', () => {
    tooltipText32.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon33 = document.getElementById('tooltipIcon33');
const tooltipText33 = document.getElementById('tooltipText33');

tooltipIcon33.addEventListener('mouseenter', () => {
    tooltipText33.classList.add('show');
});

tooltipIcon33.addEventListener('mouseleave', () => {
    tooltipText33.classList.remove('show');
});

// Tooltip per il secondo campo
const tooltipIcon34 = document.getElementById('tooltipIcon34');
const tooltipText34 = document.getElementById('tooltipText34');

tooltipIcon34.addEventListener('mouseenter', () => {
    tooltipText34.classList.add('show');
});

tooltipIcon34.addEventListener('mouseleave', () => {
    tooltipText34.classList.remove('show');
});

// Mostra infoBox e nasconde formuleBox quando si preme il pulsante "Info"
toggleInfoButton.addEventListener("click", function() {
    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block";
        formuleBox.style.display = "none";
    } else {
        infoBox.style.display = "none";
    }
});

// Mostra formuleBox e nasconde infoBox quando si preme il pulsante "Formule"
formuleButton.addEventListener("click", function() {
    if (formuleBox.style.display === "none" || formuleBox.style.display === "") {
        formuleBox.style.display = "block";
        infoBox.style.display = "none";
    } else {
        formuleBox.style.display = "none";
    }
});

// Nasconde infoBox quando si preme "Ok ho letto"
closeButtonInfo.addEventListener("click", function() {
    infoBox.style.display = "none";
});

// Nasconde formuleBox quando si preme "Chiudi"
closeButtonFormule.addEventListener("click", function() {
    formuleBox.style.display = "none";
});


document.getElementById('solutionType').addEventListener('change', function() {
    const solutionType = document.getElementById('solutionType').value;
    console.log(`Solution type selected: ${solutionType}`);
});

document.getElementById('infusionepartType').addEventListener('change', function() {
    const infusionepartType = document.getElementById('infusionepartType').value;
    console.log(`Solution type selected: ${infusionepartType}`);
});

document.getElementById('advancedBtn').addEventListener('click', function() {
    let advancedContainer = document.getElementById('advancedContainer');
    advancedContainer.classList.toggle('hidden');
    
    this.textContent = advancedContainer.classList.contains('hidden') ? 'Avanzato' : 'Nascondi Avanzato';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('glicemia').value = 100;
    setActiveButton('dateButton');
    document.getElementById('dateInputContainer').style.display = 'block';
    document.getElementById('ageInputContainer').style.display = 'none';
    document.getElementById('birthWeightContainer').classList.add('hidden');
    setActiveInfusioneButton('singolaInfusioneBtn');
    numberOutput1Container.style.display = 'flex';
    numberOutput2Container.style.display = 'flex';
    numberOutput3Container.style.display = 'flex';
    numberOutput4Container.style.display = 'flex';
    numberOutput5Container.style.display = 'flex';
    numberOutput6Container.style.display = 'flex';	
    doppiaInfusioneContainer.classList.add('hidden');
    document.getElementById('glucosioNormaleOutputValuedoppia').textContent = glucosioNormaleOutputValuedoppia;
	    // Assicurati che il DOM sia caricato prima di accedere agli elementi
    var infusione1Type = document.getElementById('infusione1Type');
    var infusione2Type = document.getElementById('infusione2Type');

    // Gestisci l'aggiornamento dei contenitori per infusione 1
    if (infusione1Type) {
        infusione1Type.addEventListener('change', function() {
            var selectedValue = this.value;
            var galmeqlContainer1 = document.getElementById('GalmeqlContainer1');
            var galpercgluContainer1 = document.getElementById('GalpercgluContainer1');

            if (selectedValue === 'Gal') {
                galmeqlContainer1?.classList.remove('hidden');
                galpercgluContainer1?.classList.remove('hidden');
            } else {
                galmeqlContainer1?.classList.add('hidden');
                galpercgluContainer1?.classList.add('hidden');
            }
        });
    }

    // Gestisci l'aggiornamento dei contenitori per infusione 2
    if (infusione2Type) {
        infusione2Type.addEventListener('change', function() {
            var selectedValue = this.value;
            var galmeqlContainer2 = document.getElementById('GalmeqlContainer2');
            var galpercgluContainer2 = document.getElementById('GalpercgluContainer2');

            if (selectedValue === 'Gal') {
                galmeqlContainer2?.classList.remove('hidden');
                galpercgluContainer2?.classList.remove('hidden');
            } else {
                galmeqlContainer2?.classList.add('hidden');
                galpercgluContainer2?.classList.add('hidden');
            }
        });
    }
		
    document.getElementById('mlhSelect').addEventListener('change', function() {
        aggiornaMlHOutput();
        aggiornaMlOutput();    
    });
    document.getElementById('mlSelect').addEventListener('change', function() {
        aggiornaMlOutput();
    });
    document.getElementById('doppiainfSelect').addEventListener('change', function() {
        aggiornaMlOutput();
		aggiornaDoppiaInfusioneOutput();		
    });
    aggiornaSpecificheTable();  // Questa chiamata assicura che tutto sia calcolato e aggiornato correttamente all'inizio
});

document.getElementById('dateButton').addEventListener('click', function() {
    setActiveButton('dateButton');
    document.getElementById('dateInputContainer').style.display = 'block';
    document.getElementById('ageInputContainer').style.display = 'none';
    document.getElementById('birthWeightContainer').classList.add('hidden');
});

document.getElementById('menuButton').addEventListener('click', function() {
    setActiveButton('menuButton');
    document.getElementById('dateInputContainer').style.display = 'none';
    document.getElementById('ageInputContainer').style.display = 'block';
    document.getElementById('birthWeightContainer').classList.add('hidden');
});

document.getElementById('birthdate').addEventListener('change', function() {
    calculateAgeFromBirthdate(new Date(this.value));
    aggiornaSpecificheTable();
});

document.getElementById('ageValue').addEventListener('input', function() {
    const ageType = document.getElementById('ageType').value;
    const ageValue = parseInt(this.value);
    if (!isNaN(ageValue)) {
        calculateAgeFromValue(ageType, ageValue);
        aggiornaSpecificheTable();
    }
});

function setActiveButton(buttonId) {
    document.getElementById('dateButton').classList.remove('active');
    document.getElementById('menuButton').classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
}

let calculatedAge = {
    value: 0,
    unit: 'giorni'
};

function setCalculatedAge(age, unit) {
    calculatedAge.value = age;
    calculatedAge.unit = unit;
}

function calculateAgeFromBirthdate(birthdate) {
    const today = new Date();
    const diffTime = Math.abs(today - birthdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = diffDays / 30.44;
    const diffYears = diffMonths / 12;

    let age, unit;
    if (diffDays <= 30) {
        age = diffDays;
        unit = 'giorni';
    } else if (diffMonths < 12) {
        age = Math.round(diffMonths);
        unit = 'mesi';
    } else {
        age = Math.round(diffYears);
        unit = 'anni';
    }

    setCalculatedAge(age, unit);
    showCalculatedAge(age, unit);
}

function calculateAgeFromValue(type, value) {
    const today = new Date();
    let birthdate = new Date();

    if (type === 'years') {
        birthdate.setFullYear(today.getFullYear() - value);
    } else if (type === 'months') {
        birthdate.setMonth(today.getMonth() - value);
    } else if (type === 'days') {
        birthdate.setDate(today.getDate() - value);
    }

    const diffTime = Math.abs(today - birthdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = diffDays / 30.44;
    const diffYears = diffMonths / 12;

    let age, unit;
    if (type === 'days') {
        age = value;
        unit = 'giorni';
    } else if (type === 'months') {
        age = value;
        unit = 'mesi';
    } else {
        age = value;
        unit = 'anni';
    }

    setCalculatedAge(age, unit);
    showCalculatedAge(age, unit);
}

function showCalculatedAge(age, unit) {
    if (unit === 'giorni' && age <= 30) {
        document.getElementById('birthWeightContainer').classList.remove('hidden');
    } else {
        document.getElementById('birthWeightContainer').classList.add('hidden');
    }

    const ageCell = document.querySelector('#Specifichetable tr:nth-child(13) td:nth-child(2)');
    if (ageCell) {
        ageCell.textContent = `${age} ${unit}`;
    }

    if (document.getElementById('calculatedAge')) {
        document.getElementById('calculatedAge').textContent = `${age} ${unit}`;
    }
    if (document.getElementById('resultContainer')) {
        document.getElementById('resultContainer').style.display = 'block';
    }
}

function setActiveInfusioneButton(buttonId) {
    singolaInfusioneBtn.classList.remove('active');
    doppiaInfusioneBtn.classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
}

function getAcquaPerc() { 
    if (calculatedAge.unit === 'giorni' && calculatedAge.value <= 30) {
        return 0.7;
    } else if (calculatedAge.unit === 'anni' && calculatedAge.value > 65) {
        return 0.5;
    } else {
        return 0.6;
    }
}


function aggiornaScoretable() {
    let scoreElements = [
        'condizioniGenerali',
        'refill',
        'lacrime',
        'mucose',
        'occhi',
        'respiro',
        'polso',
        'elasticitaCutanea',
        'frequenzaCardiaca',
        'urine'
    ];

    let totalScore = 0;

    scoreElements.forEach((id, index) => {
        let value = parseFloat(document.getElementById(id).value) || 0;
        totalScore += value;
        document.getElementById(`score${index + 1}`).innerText = value;
    });

    document.getElementById('totalScore').innerText = totalScore;

    if (pesoBenessereBtn.classList.contains('active')) {
        let WA = parseFloat(document.getElementById('WA').value) || 0;
        let WWs = (100 * WA / (100 - totalScore)).toFixed(2);
        document.getElementById('WWs').value = WWs;
    } else if (pesoAttualeBtn.classList.contains('active')) {
        let WW = parseFloat(document.getElementById('WW').value) || 0;
        let WWs = (WW * (100 - totalScore) / 100).toFixed(2);
        document.getElementById('WWs').value = WWs;
    }
}

document.getElementById('ScoreBtn').addEventListener('click', function() {
    toggleVisibility('Scoretable', this, 'Score', 'Nascondi Score');
});

const pesoBenessereBtn = document.getElementById('pesoBenessereBtn');
const pesoAttualeBtn = document.getElementById('pesoAttualeBtn');

pesoBenessereBtn.addEventListener('click', function() {
    setActivePesoButton('pesoBenessereBtn');
    document.getElementById('scoreTitleRow').cells[0].textContent = 'Score di Gorelick per Peso in Benessere Sconosciuto, completare i campi per una stima';
    document.getElementById('pesoStimatoLabel').textContent = 'Peso in Benessere/ Working Weight stimato (Kg)';
});

pesoAttualeBtn.addEventListener('click', function() {
    setActivePesoButton('pesoAttualeBtn');
    document.getElementById('scoreTitleRow').cells[0].textContent = 'Score di Gorelick per Peso Attuale Sconosciuto, completare i campi per una stima';
    document.getElementById('pesoStimatoLabel').textContent = 'Peso Attuale Stimato (Kg)';
});

function setActivePesoButton(buttonId) {
    pesoBenessereBtn.classList.remove('active');
    pesoAttualeBtn.classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
}

document.getElementById('resetScoreBtn').addEventListener('click', function() {
    // Resetta i valori degli score
    document.querySelectorAll('.score-select').forEach(select => {
        select.value = '0';  // Resetta i dropdown agli score di base
    });
    document.getElementById('totalScore').innerText = '0';
    document.getElementById('WWs').value = '';
    aggiornaScoretable();  // Aggiorna la tabella con i valori resettati
});

document.getElementById('specificheBtn').addEventListener('click', function() {
    toggleVisibility('Specifichetable', this, 'Specifiche', 'Nascondi Specifiche');
    aggiornaSpecificheTable();
});

function toggleVisibility(containerId, button, showText, hideText) {
    let container = document.getElementById(containerId);
    container.classList.toggle('hidden');
    button.textContent = container.classList.contains('hidden') ? showText : hideText;
}

document.getElementById('solutionType').addEventListener('change', function() {
    var selectedValue = this.value;
    var galmeqlContainer = document.getElementById('GalmeqlContainer');

    if (selectedValue === 'Gal') {
        galmeqlContainer.classList.remove('hidden');
    } else {
        galmeqlContainer.classList.add('hidden');
    }
});

document.getElementById('solutionType').addEventListener('change', function() {
    var selectedValue = this.value;
    var GalpercgluContainer = document.getElementById('GalpercgluContainer');

    if (selectedValue === 'Gal') {
        GalpercgluContainer.classList.remove('hidden');
    } else {
        GalpercgluContainer.classList.add('hidden');
    }
});

document.getElementById('infusione1Type').addEventListener('change', function() {
    var selectedValue = this.value;
    var galmeqlContainer1 = document.getElementById('GalmeqlContainer1');

    if (selectedValue === 'Gal') {
        galmeqlContainer1.classList.remove('hidden');
    } else {
        galmeqlContainer1.classList.add('hidden');
    }
});

document.getElementById('infusione1Type').addEventListener('change', function() {
    var selectedValue = this.value;
    var GalpercgluContainer1 = document.getElementById('GalpercgluContainer1');

    if (selectedValue === 'Gal') {
        GalpercgluContainer1.classList.remove('hidden');
    } else {
        GalpercgluContainer1.classList.add('hidden');
    }
});

document.getElementById('infusione2Type').addEventListener('change', function() {
    var selectedValue = this.value;
    var galmeqlContainer2 = document.getElementById('GalmeqlContainer2');

    if (selectedValue === 'Gal') {
        galmeqlContainer2.classList.remove('hidden');
    } else {
        galmeqlContainer2.classList.add('hidden');
    }
});

document.getElementById('infusione2Type').addEventListener('change', function() {
    var selectedValue = this.value;
    var GalpercgluContainer2 = document.getElementById('GalpercgluContainer2');

    if (selectedValue === 'Gal') {
        GalpercgluContainer2.classList.remove('hidden');
    } else {
        GalpercgluContainer2.classList.add('hidden');
    }
});

document.getElementById('infusionepartType').addEventListener('change', function() {
    var selectedValue = this.value;
    var GalmeqlContainerpart = document.getElementById('GalmeqlContainerpart');

    if (selectedValue === 'Gal') {
        GalmeqlContainerpart.classList.remove('hidden');
    } else {
        GalmeqlContainerpart.classList.add('hidden');
    }
});

document.getElementById('infusionepartType').addEventListener('change', function() {
    var selectedValue = this.value;
    var GalpercgluContainerpart = document.getElementById('GalpercgluContainerpart');

    if (selectedValue === 'Gal') {
        GalpercgluContainerpart.classList.remove('hidden');
    } else {
        GalpercgluContainerpart.classList.add('hidden');
    }
});

function aggiornaSpecificheTable() {
    const WA = parseFloat(document.getElementById('WA').value) || 0;
    const WW = parseFloat(document.getElementById('WW').value) || 0;
    const Nai = parseFloat(document.getElementById('Nai').value) || 0;
    const Nap = parseFloat(document.getElementById('Nap').value) || 0;
    const vomiti = parseFloat(document.getElementById('vomiti').value) || 0;
    const diarrea = parseFloat(document.getElementById('diarrea').value) || 0;
    const temperatura = parseFloat(document.getElementById('temperatura').value) || 0;
    const glicemia = parseFloat(document.getElementById('glicemia').value) || 100;
    const febbre = temperatura < 38 ? 38 : temperatura;
	const mlsol = parseFloat(document.getElementById('mlsol').value) || 0;
const Galmeql = parseFloat(document.getElementById('Galmeql') ? document.getElementById('Galmeql').value : 0) || 0;
const Galgluperc = parseFloat(document.getElementById('Galgluperc') ? document.getElementById('Galgluperc').value : 0) || 0;
const Galmeql1 = parseFloat(document.getElementById('Galmeql1') ? document.getElementById('Galmeql1').value : 0) || 0;
const Galgluperc1 = parseFloat(document.getElementById('Galgluperc1') ? document.getElementById('Galgluperc1').value : 0) || 0;
const Galmeql2 = parseFloat(document.getElementById('Galmeql2') ? document.getElementById('Galmeql2').value : 0) || 0;
const Galgluperc2 = parseFloat(document.getElementById('Galgluperc2') ? document.getElementById('Galgluperc2').value : 0) || 0;
const Galmeqlpart = parseFloat(document.getElementById('Galmeqlpart') ? document.getElementById('Galmeqlpart').value : 0) || 0;
const Galglupercpart = parseFloat(document.getElementById('Galglupercpart') ? document.getElementById('Galglupercpart').value : 0) || 0;


    const Naig = Nai + 0.024 * (glicemia - 100);
    document.getElementById('naCorretto').value = Naig.toFixed(2);

function mantenimentoMeq() {
    let ageInMonths = 0;

    // Calcola l'età in mesi
    if (calculatedAge.unit === 'giorni') {
        ageInMonths = calculatedAge.value / 30; // Converti i giorni in mesi
    } else if (calculatedAge.unit === 'mesi') {
        ageInMonths = calculatedAge.value;
    } else if (calculatedAge.unit === 'anni') {
        ageInMonths = calculatedAge.value * 12; // Converti gli anni in mesi
    }

    let mantenimentoMeq = 0;  // Definisci la variabile mantenimentoMeq qui

    // Assegna il valore in base all'età
    if (ageInMonths < 6) {
        mantenimentoMeq = 2 * WW;
    } else if (ageInMonths >= 6 && ageInMonths < 36) {
        mantenimentoMeq = 3 * WW;
    } else if (ageInMonths >= 36) {
        mantenimentoMeq = 4 * WW;
    }

    // Limita il valore massimo a 87 mEQ (2 g/die di Na)
    return Math.min(mantenimentoMeq, 87);
}

	
    let ageInDays = calculateAgeInDays();
    let mantenimentoMl = 0;
if (WW <= 3 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 150 * WW;
} else if (WW > 3 && WW <= 10 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 450 + (100 * (WW - 3));
} else if (WW > 10 && WW <= 20 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 1150 + (50 * (WW - 10));
} else if (WW > 20 && WW <= 30 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 1500 + (25 * (WW - 20));
} else if (WW > 30 && WW <= 40 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 1750 + (12.5 * (WW - 30));
} else if (WW > 40 && birthWeight >= 0 && ageInDays >= 30) {
    mantenimentoMl = 2000;
} else if (WW <= 5 && birthWeight <1 && ageInDays === 1) {
    mantenimentoMl = 90 * WW;
} else if (WW <= 5 && birthWeight <1 && ageInDays === 2) {
    mantenimentoMl = 110 * WW;
} else if (WW <= 5 && birthWeight <1 && ageInDays === 3) {
    mantenimentoMl = 130 * WW;
} else if (WW <= 5 && birthWeight <1 && ageInDays === 4) {
    mantenimentoMl = 150 * WW;	
} else if (WW <= 5 && birthWeight <1 && ageInDays === 5) {
    mantenimentoMl = 170 * WW;
} else if (WW <= 5 && birthWeight <1 && ageInDays >=6 && ageInDays < 30 ) {
    mantenimentoMl = 150 * WW;
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays === 1) {
    mantenimentoMl = 80 * WW;
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays === 2) {
    mantenimentoMl = 100 * WW;
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays === 3) {
    mantenimentoMl = 120 * WW;
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays === 4) {
    mantenimentoMl = 140 * WW;	
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays === 5) {
    mantenimentoMl = 170 * WW;
} else if (WW <= 5 && birthWeight >=1 && birthWeight <=1.5 && ageInDays >=6 && ageInDays < 30 ) {
    mantenimentoMl = 150 * WW;
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays === 1) {
    mantenimentoMl = 70 * WW;
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays === 2) {
    mantenimentoMl = 90 * WW;
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays === 3) {
    mantenimentoMl = 110 * WW;
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays === 4) {
    mantenimentoMl = 130 * WW;	
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays === 5) {
    mantenimentoMl = 150 * WW;
} else if (WW <= 5 && birthWeight >1.5 && birthWeight <=2.5 && ageInDays >=6 && ageInDays < 30 ) {
    mantenimentoMl = 150 * WW;
} else if (WW <= 5 && birthWeight >2.5 && ageInDays === 1) {
    mantenimentoMl = 50 * WW;
} else if (WW <= 5 && birthWeight >2.5 && ageInDays === 2) {
    mantenimentoMl = 60 * WW;
} else if (WW <= 5 && birthWeight >2.5 && ageInDays === 3) {
    mantenimentoMl = 70 * WW;
} else if (WW <= 5 && birthWeight >2.5 && ageInDays === 4) {
    mantenimentoMl = 80 * WW;	
} else if (WW <= 5 && birthWeight >2.5 && ageInDays === 5) {
    mantenimentoMl = 120 * WW;
} else if (WW <= 5 && birthWeight >2.5 && ageInDays >=6 && ageInDays < 30 ) {
    mantenimentoMl = 155 * WW;		
}

    let mantenimentoMlkg = 0;
    if (WW > 0) {
        mantenimentoMlkg = mantenimentoMl / WW;
    } else {
        mantenimentoMlkg = 0; // Se WW è 0, impostiamo mantenimentoMlkg a 0
    }
  
function mantenimentoMeql() {
    let ageInDays = calculateAgeInDays();

    let mantenimentoMeql;

    if (ageInDays <= 30) { // Età <= 30 giorni
        mantenimentoMeql = mantenimentoMeq() / (mantenimentoMl / 1000);
    } else { // Età > 30 giorni
        mantenimentoMeql = 145;
    }

    return mantenimentoMeql;
}

    const infusionepartType = document.getElementById('infusionepartType').value;

    const infusionepart = {
        "SF0.9": { mEq: 154, glucosio: 0 },
        "S2": { mEq: 154, glucosio: 5 },
        "S3": { mEq: 77, glucosio: 2.5 },
        "SM": { mEq: 40, glucosio: 5.5 },
        "NR": { mEq: 140, glucosio: 5 },
        "NM": { mEq: 40, glucosio: 5 },		
        "R1": { mEq: 120, glucosio: 0 },
        "R2": { mEq: 133, glucosio: 0 },
        "R3": { mEq: 140, glucosio: 0 },
        "R": { mEq: 132, glucosio: 0 },
        "ESF0.45": { mEq: 77, glucosio: 0 },
        "I3": { mEq: 513, glucosio: 0 },
        "I13": { mEq: 500, glucosio: 0 },
        "I14": { mEq: 400, glucosio: 0 },
        "ACQUA": { mEq: 0, glucosio: 0 },
        "G2.5": { mEq: 0, glucosio: 2.5 },
        "G5": { mEq: 0, glucosio: 5 },
        "G10": { mEq: 0, glucosio: 10 },
        "B9324": { mEq: 16.96, glucosio: 9.7 },
        "B9325": { mEq: 2.91, glucosio: 9.7 },
		"FE": { mEq: 27, glucosio: 5.4 },
		"FL": { mEq: 2, glucosio: 6.5 },
		"FSPVC": { mEq: 0.3, glucosio: 10.2 },		
		"Gal": { mEq: Galmeql, glucosio: Galgluperc },
    };

    const infusioneparte = infusionepart[infusionepartType] || { mEq: 0, glucosio: 0 };

    const soluzioneMl = parseFloat(document.getElementById('soluzioneMl').value) || 0;
    const solutionType = document.getElementById('solutionType').value;
    const liquidiAggiuntiMl = parseFloat(document.getElementById('liquidiAggiuntiMl').value) || 0;
    const liquidiAggiuntiNa = parseFloat(document.getElementById('liquidiAggiuntiNa').value) || 0;
	const liquidiAggiuntiGlug = parseFloat(document.getElementById('liquidiAggiuntiGlug').value) || 0;

    const soluzioni = {
        "SF0.9": { mEq: 154, glucosio: 0 },
        "S2": { mEq: 154, glucosio: 5 },
        "S3": { mEq: 77, glucosio: 2.5 },
        "SM": { mEq: 40, glucosio: 5.5 },
        "NR": { mEq: 140, glucosio: 5 },
        "NM": { mEq: 40, glucosio: 5 },		
        "R1": { mEq: 120, glucosio: 0 },
        "R2": { mEq: 133, glucosio: 0 },
        "R3": { mEq: 140, glucosio: 0 },
        "R": { mEq: 132, glucosio: 0 },
        "ESF0.45": { mEq: 77, glucosio: 0 },
        "I3": { mEq: 513, glucosio: 0 },
        "I13": { mEq: 500, glucosio: 0 },
        "I14": { mEq: 400, glucosio: 0 },
        "ACQUA": { mEq: 0, glucosio: 0 },
        "G2.5": { mEq: 0, glucosio: 2.5 },
        "G5": { mEq: 0, glucosio: 5 },
        "G10": { mEq: 0, glucosio: 10 },
        "B9324": { mEq: 16.96, glucosio: 9.7 },
        "B9325": { mEq: 2.91, glucosio: 9.7 },
		"FE": { mEq: 27, glucosio: 5.4 },
		"FL": { mEq: 2, glucosio: 6.5 },
		"FSPVC": { mEq: 0.3, glucosio: 10.2 },		
		"Gal": { mEq: Galmeql, glucosio: Galgluperc },
    };

    const soluzione = soluzioni[solutionType] || { mEq: 0, glucosio: 0 };
    const soluzioneMeq = soluzioneMl * soluzione.mEq / 1000;
    const PerditeMl = (WW - WA) * 1000;
    const PerditeMlkg = PerditeMl / WW;
    const PerditeMeq = PerditeMl * 140 / 1000;
    const PerditeprevedibiliMl = ((vomiti * WA) + (diarrea * 50) + (10 * WA * (febbre - 38)));
    const PerditeprevedibiliMeq = PerditeprevedibiliMl * 140 / 1000;
    const PerditeprevedibiliMlkg = PerditeprevedibiliMl / WW;
    const AcquaPerc = getAcquaPerc();
    const Correzionedie = parseFloat(((Naig - 140) / (Naig - Nap)).toFixed(1));
    const Correzioneh = Correzionedie * 24;
    const SodioDaPerdereRecuperare = (Nap - Naig) * AcquaPerc * WW;
    const CalcoloAggiuntivo = (Nap - Naig) * AcquaPerc * WW;
    const SommaDie24OreMl = PerditeMl + PerditeprevedibiliMl + mantenimentoMl - soluzioneMl - liquidiAggiuntiMl;
    const SommaDie24OreMeq = PerditeMeq + PerditeprevedibiliMeq + SodioDaPerdereRecuperare + mantenimentoMeq() - soluzioneMeq - liquidiAggiuntiNa;
    const mlh24ore = SommaDie24OreMl / 24;
    let  Meql24ore = SommaDie24OreMeq / (SommaDie24OreMl / 1000);
	Meql24ore  = Math.max(Meql24ore, 0);
    const mantenimentoMlh = mantenimentoMl / 24;
    const soluzioneMlkg = soluzioneMl / WW;
    const liquidiAggiuntiMlkg = liquidiAggiuntiMl / WW;
    const liquidiAggiuntimeql = liquidiAggiuntiNa / (liquidiAggiuntiMl / 1000) || 0;
    const mgkgminmantenimento = (mantenimentoMl * 10 * infusioneparte.glucosio) / WW / 1440;
    const mgkgminmsoluzione = (soluzioneMl * 10 * soluzione.glucosio) / WW / 1440;
	const mgkgminliquidiaggiunti = (liquidiAggiuntiMl*10*(liquidiAggiuntiGlug*liquidiAggiuntiMl/100)) / WW / 1440 || 0;
    const mgkgmin24ore = ((SommaDie24OreMl * 10 * infusioneparte.glucosio) / WW / 1440) + mgkgminmsoluzione + mgkgminliquidiaggiunti;
    const SommaDiexOreMl = PerditeMl + PerditeprevedibiliMl + mantenimentoMl - soluzioneMl - liquidiAggiuntiMl;
    const SommaDiexOreMeq = ((PerditeMeq + CalcoloAggiuntivo)) + PerditeprevedibiliMeq + mantenimentoMeq() - soluzioneMeq - liquidiAggiuntiNa;
    const mlhxore = SommaDiexOreMl / 24;
    let Meqlxore = SommaDiexOreMeq / (SommaDiexOreMl / 1000);
	Meqlxore = Math.max(Meqlxore, 0);
	
	// Calcolo di mlNaClOutputValue basato sulla condizione
let mlNaClOutputValue;

if (Meqlxore >= infusioneparte.mEq) {
    mlNaClOutputValue = (Meqlxore * mlsol / 1000) - (infusioneparte.mEq * mlsol / 1000);
    // Cambia testo della label per la condizione >=
    document.querySelector('label[for="mlNaClOutputValue"]').innerHTML = `
        Quanti mEq di Na aggiungere alla soluzione di partenza?
        <div class="tooltip-icon" id="tooltipIcon19">?
            <div class="tooltip-text" id="tooltipText19">
                Questo valore indica quanti mEq aggiungere alla soluzione di partenza selezionata nel campo di input per arrivare alla concentrazione di Na (mEq/l) indicata nel campo superiore
            </div>
        </div>
    `;
} else {
    mlNaClOutputValue = (((infusioneparte.mEq/Meqlxore)*1000)-1000)*(mlsol/1000);
    // Cambia testo della label per la condizione <
    document.querySelector('label[for="mlNaClOutputValue"]').innerHTML = `
        Quanti ml di acqua per preparazioni iniettabili aggiungere alla soluzione di partenza?
        <div class="tooltip-icon" id="tooltipIcon19">?
            <div class="tooltip-text" id="tooltipText19">
                Questo valore indica quanta acqua per preparazioni iniettabili aggiungere alla soluzione di partenza selezionata nel campo di input per arrivare alla concentrazione di Na (mEq/l) indicata nel campo superiore
            </div>
        </div>
    `;
}	
	
    const mgkgminxore = ((SommaDiexOreMl * 10 * infusioneparte.glucosio) / WW / 1440) + mgkgminmsoluzione + mgkgminliquidiaggiunti;

    let SommaDie24OreMlkg = 0;
    if (WW > 0) {
        SommaDie24OreMlkg = SommaDie24OreMl / WW;
    } else {
        SommaDie24OreMlkg = 0; // Se WW è 0, impostiamo mantenimentoMlkg a 0
    }

    let SommaDiexOreMlkg = 0;
    if (WW > 0) {
        SommaDiexOreMlkg = SommaDiexOreMl / WW;
    } else {
        SommaDiexOreMlkg = 0; // Se WW è 0, impostiamo mantenimentoMlkg a 0
    }

    const sommaDieRow = document.getElementById('sommaDieRow');

    // Aggiornamento del contenuto della cella desiderata
    if (sommaDieRow) {
        sommaDieRow.cells[0].textContent = `Somma/die (${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} die)`;
    }
	
	// Aggiornamento del contenuto della cella desiderata
    if (xoreRow) {
        xoreRow.cells[0].textContent = `Somma/die (${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} die)`;
    }

  // Selezioni per i tipi di infusione
    const infusione1Type = document.getElementById('infusione1Type').value;
    const infusione2Type = document.getElementById('infusione2Type').value;
	
	    // Oggetti per i tipi di infusione
    const infusione1 = {
        "SF0.9": { mEq: 154, glucosio: 0 },
        "S2": { mEq: 154, glucosio: 5 },
        "S3": { mEq: 77, glucosio: 2.5 },
        "SM": { mEq: 40, glucosio: 5.5 },
        "NR": { mEq: 140, glucosio: 5 },
        "NM": { mEq: 40, glucosio: 5 },		
        "R1": { mEq: 120, glucosio: 0 },
        "R2": { mEq: 133, glucosio: 0 },
        "R3": { mEq: 140, glucosio: 0 },
        "R": { mEq: 132, glucosio: 0 },
        "ESF0.45": { mEq: 77, glucosio: 0 },
        "I3": { mEq: 513, glucosio: 0 },
        "I13": { mEq: 500, glucosio: 0 },
        "I14": { mEq: 400, glucosio: 0 },
        "ACQUA": { mEq: 0, glucosio: 0 },
        "G2.5": { mEq: 0, glucosio: 2.5 },
        "G5": { mEq: 0, glucosio: 5 },
        "G10": { mEq: 0, glucosio: 10 },
        "B9324": { mEq: 16.96, glucosio: 9.7 },
        "B9325": { mEq: 2.91, glucosio: 9.7 },
		"FE": { mEq: 27, glucosio: 5.4 },
		"FL": { mEq: 2, glucosio: 6.5 },
		"FSPVC": { mEq: 0.3, glucosio: 10.2 },			
		"Gal": { mEq: Galmeql1, glucosio: Galgluperc1 },		
    };
	
  const infusione2 = {
        "SF0.9": { mEq: 154, glucosio: 0 },
        "S2": { mEq: 154, glucosio: 5 },
        "S3": { mEq: 77, glucosio: 2.5 },
        "SM": { mEq: 40, glucosio: 5.5 },
        "NR": { mEq: 140, glucosio: 5 },
        "NM": { mEq: 40, glucosio: 5 },		
        "R1": { mEq: 120, glucosio: 0 },
        "R2": { mEq: 133, glucosio: 0 },
        "R3": { mEq: 140, glucosio: 0 },
        "R": { mEq: 132, glucosio: 0 },
        "ESF0.45": { mEq: 77, glucosio: 0 },
        "I3": { mEq: 513, glucosio: 0 },
        "I13": { mEq: 500, glucosio: 0 },
        "I14": { mEq: 400, glucosio: 0 },
        "ACQUA": { mEq: 0, glucosio: 0 },
        "G2.5": { mEq: 0, glucosio: 2.5 },
        "G5": { mEq: 0, glucosio: 5 },
        "G10": { mEq: 0, glucosio: 10 },
        "B9324": { mEq: 16.96, glucosio: 9.7 },
        "B9325": { mEq: 2.91, glucosio: 9.7 },
		"FE": { mEq: 27, glucosio: 5.4 },
		"FL": { mEq: 2, glucosio: 6.5 },
		"FSPVC": { mEq: 0.3, glucosio: 10.2 },			
		"Gal": { mEq: Galmeql2, glucosio: Galgluperc2 },		
    };	
	
	    // Estrazione dei dati dalle selezioni
    const Infusione1 = infusione1[infusione1Type] || { mEq: 0, glucosio: 0 };
    const Infusione2 = infusione2[infusione2Type] || { mEq: 0, glucosio: 0 };
	
    // Calcoli specifici per la doppia infusione
    let mlLinea124ore = ((Meql24ore * SommaDie24OreMl) - (Infusione2.mEq * SommaDie24OreMl)) / (Infusione1.mEq - Infusione2.mEq);
    let mlLinea224ore = SommaDie24OreMl - mlLinea124ore;
    const Infusione1Meq24ore = mlLinea124ore * Infusione1.mEq / 1000;
    const Infusione2Meq24ore = mlLinea224ore * Infusione2.mEq / 1000;
    const mlkgLinea124ore = mlLinea124ore / WW;
    const mlkgLinea224ore = mlLinea224ore / WW;
    const mlhLinea124ore = mlLinea124ore / 24;
    const mlhLinea224ore = mlLinea224ore / 24;
    const mgkgminLinea124ore = (mlLinea124ore * 10 * Infusione1.glucosio) / WW / 1440;
    const mgkgminLinea224ore = (mlLinea224ore * 10 * Infusione2.glucosio) / WW / 1440;
    const mgkgminDoppio24ore = mgkgminLinea124ore + mgkgminLinea224ore + mgkgminmsoluzione + mgkgminliquidiaggiunti;
	const mltotdoppia24 =  mlLinea124ore + mlLinea224ore
	const mlkgtotdoppia24 = mltotdoppia24/ WW
	
    // Calcoli per x ore
    let mlLinea1xore = ((Meqlxore * SommaDiexOreMl) - (Infusione2.mEq * SommaDiexOreMl)) / (Infusione1.mEq - Infusione2.mEq);
    let mlLinea2xore = SommaDiexOreMl - mlLinea1xore;
    const Infusione1Meqxore = mlLinea1xore * Infusione1.mEq / 1000;
    const Infusione2Meqxore = mlLinea2xore * Infusione2.mEq / 1000;
    const mlkgLinea1xore = mlLinea1xore / WW;
    const mlkgLinea2xore = mlLinea2xore / WW;
    const mlhLinea1xore = mlLinea1xore / 24;
    const mlhLinea2xore = mlLinea2xore / 24;
    const mgkgminLinea1xore = (mlLinea1xore * 10 * Infusione1.glucosio) / WW / 1440;
    const mgkgminLinea2xore = (mlLinea2xore * 10 * Infusione2.glucosio) / WW / 1440;
    const mgkgminDoppioxore = mgkgminLinea1xore + mgkgminLinea2xore + mgkgminmsoluzione + mgkgminliquidiaggiunti;
	const mltotdoppiax =  mlLinea1xore + mlLinea2xore
    const mlkgtotdoppiax = mltotdoppiax/ WW

    // Calcoli per mantenimento
    let mlLinea1mant = ((mantenimentoMeql() * mantenimentoMl) - (Infusione2.mEq * mantenimentoMl)) / (Infusione1.mEq - Infusione2.mEq);
    let mlLinea2mant = mantenimentoMl - mlLinea1mant;
    const Infusione1Meqmant = mlLinea1mant * Infusione1.mEq / 1000;
    const Infusione2Meqmant = mlLinea2mant * Infusione2.mEq / 1000;
    const mlkgLinea1mant = mlLinea1mant / WW;
    const mlkgLinea2mant = mlLinea2mant / WW;
    const mlhLinea1mant = mlLinea1mant / 24;
    const mlhLinea2mant = mlLinea2mant / 24;
    const mgkgminLinea1mant = (mlLinea1mant * 10 * Infusione1.glucosio) / WW / 1440;
    const mgkgminLinea2mant = (mlLinea2mant * 10 * Infusione2.glucosio) / WW / 1440;
    const mgkgminDoppiomant = mgkgminLinea1mant + mgkgminLinea2mant + mgkgminmsoluzione + mgkgminliquidiaggiunti;
	const mltotdoppiam =  mlLinea1mant + mlLinea2mant
	const mlkgtotdoppiam = mltotdoppiam/ WW
	
    const mlhSelect = document.getElementById('mlhSelect');
    const mlSelect = document.getElementById('mlSelect');
    const selectedMlhOption = mlhSelect.value;
    const selectedMlOption = mlSelect.value;

const doppiainfSelect = document.getElementById('doppiainfSelect').value || '';
const mlSelect1 = document.getElementById('mlSelect1').value;
const mlSelect2 = document.getElementById('mlSelect2').value;
const mlSelecttot = document.getElementById ('mlSelecttot').value;

const infusione1MlH = document.getElementById('infusione1MlH');
const infusione2MlH = document.getElementById('infusione2MlH');
const infusione1Ml = document.getElementById('infusione1Ml'); // Campo per ml
const infusione2Ml = document.getElementById('infusione2Ml'); // Campo per ml
const infusione1mgkgmin = document.getElementById('infusione1mgkgmin');
const infusione2mgkgmin = document.getElementById('infusione2mgkgmin');
const infusionedoppiamgkgmintot = document.getElementById('infusionedoppiamgkgmintot');

if (doppiainfSelect && infusione1MlH && infusione2MlH && infusione1Ml && infusione2Ml && infusione1mgkgmin && infusione2mgkgmin && infusionedoppiamgkgmintot && mlSelecttot) {
    let outputInfusione1MlH, outputInfusione2MlH;
    let outputTotValueLinea1, outputTotValueLinea2;
    let outputInfusione1mgkgmin, outputInfusione2mgkgmin;
	let outputmgkgmintot, outputmltot;

    // Gestisci l'output per la doppia infusione
    if (doppiainfSelect === 'doppioMantenimento') {
        outputInfusione1MlH = mlhLinea1mant.toFixed(1);
        outputInfusione2MlH = mlhLinea2mant.toFixed(1);
		outputmgkgmintot = mgkgminDoppiomant.toFixed(1);
		
        if (mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea1mant.toFixed(1); // Totale ml
        } else if (mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea1mant.toFixed(1); // ml/kg
        }

        if (mlSelect2 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea2mant.toFixed(1); // Totale ml
        } else if (mlSelect2 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea2mant.toFixed(1); // ml/kg
        }

        outputInfusione1mgkgmin = mgkgminLinea1mant ? mgkgminLinea1mant.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea2mant ? mgkgminLinea2mant.toFixed(1) : 0.0;

    } else if (doppiainfSelect === 'doppio24ore') {
        outputInfusione1MlH = mlhLinea124ore.toFixed(1);
        outputInfusione2MlH = mlhLinea224ore.toFixed(1);
		outputmgkgmintot = mgkgminDoppio24ore.toFixed(1);
		
        if (mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea124ore.toFixed(1); // Totale ml
        } else if (mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea124ore.toFixed(1); // ml/kg
        }

        if (mlSelect2 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea224ore.toFixed(1); // Totale ml
        } else if (mlSelect2 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea224ore.toFixed(1); // ml/kg
        }

        outputInfusione1mgkgmin = mgkgminLinea124ore ? mgkgminLinea124ore.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea224ore ? mgkgminLinea224ore.toFixed(1) : 0.0;

    } else if (doppiainfSelect === 'doppioxore') {
        outputInfusione1MlH = mlhLinea1xore.toFixed(1);
        outputInfusione2MlH = mlhLinea2xore.toFixed(1);
		outputmgkgmintot = mgkgminDoppioxore.toFixed(1);
		
		// attenzione
        if (mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea1xore.toFixed(1); // Totale ml
        } else if (mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea1xore.toFixed(1); // ml/kg
        }

        if (mlSelect2 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea2xore.toFixed(1); // Totale ml
        } else if (mlSelect2 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea2xore.toFixed(1); // ml/kg
        }

        outputInfusione1mgkgmin = mgkgminLinea1xore ? mgkgminLinea1xore.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea2xore ? mgkgminLinea2xore.toFixed(1) : 0.0;
    }
	
	if (doppiainfSelect === 'doppioMantenimento' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppiam.toFixed(1);
		 } else if (doppiainfSelect === 'doppioMantenimento' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppiam.toFixed(1);
		 } else if (doppiainfSelect === 'doppio24ore' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppia24.toFixed(1);
		 } else if (doppiainfSelect === 'doppio24ore' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppia24.toFixed(1);
		 } else if (doppiainfSelect === 'doppioxore' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppiax.toFixed(1);
		 } else if (doppiainfSelect === 'doppioxore' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppiax.toFixed(1);
		}				
	   // Aggiornamento di glucosioNormaleOutputValuedoppia in base alle condizioni
	let glucosioNormaleOutputValuedoppia;

    
	if (ageInDays > 30 && ageInDays <3600) {
        if (outputmgkgmintot < 2) {
            glucosioNormaleOutputValuedoppia = "Tendenza al calo glicemico, vn tra 2 e 5 mg/kg/min";
        } else if (outputmgkgmintot > 6) {
            glucosioNormaleOutputValuedoppia = "Tendenza all'aumento glicemico, vn tra 2 e 5 mg/kg/min";
        } else {
            glucosioNormaleOutputValuedoppia = "In range, vn tra 2 e 5 mg/kg/min";
        }
	}	
	if (ageInDays < 30) {
        if (outputmgkgmintot < 4) {
            glucosioNormaleOutputValuedoppia = "Tendenza al calo glicemico, vn tra 4 e 8 mg/kg/min";
        } else if (outputmgkgmintot > 8) {
            glucosioNormaleOutputValuedoppia = "Tendenza all'aumento glicemico, vn tra 4 e 8 mg/kg/min";
        } else {
            glucosioNormaleOutputValuedoppia = "In range, vn tra 4 e 8 mg/kg/min";
        }
    }
	if (ageInDays > 3600) {
        if (outputmgkgmintot < 2) {
            glucosioNormaleOutputValuedoppia = "Tendenza al calo glicemico, vn tra 2 e 3 mg/kg/min";
        } else if (outputmgkgmintot > 3) {
            glucosioNormaleOutputValuedoppia = "Tendenza all'aumento glicemico, vn tra 2 e 3 mg/kg/min";
        } else {
            glucosioNormaleOutputValuedoppia = "In range, vn tra 2 e 3 mg/kg/min";
        }
	}

    // Aggiorna gli output sulla pagina per ml/h, ml, e mg/kg/min
    infusione1MlH.textContent = outputInfusione1MlH;
    infusione2MlH.textContent = outputInfusione2MlH;
    infusione1Ml.textContent = outputTotValueLinea1;
    infusione2Ml.textContent = outputTotValueLinea2;
    infusione1mgkgmin.textContent = outputInfusione1mgkgmin;
    infusione2mgkgmin.textContent = outputInfusione2mgkgmin;
    infusionedoppiamgkgmintot.textContent = outputmgkgmintot;	
	document.getElementById('glucosioNormaleOutputValuedoppia').textContent = glucosioNormaleOutputValuedoppia;
	infusionedoppiamltot.textContent = outputmltot;
}

// roba singola infusione
    let outputMlHValue;
    let outputMlValue;

    // Determina l'output per ml/h
    if (selectedMlhOption === 'soloMantenimento') {
        outputMlHValue = mantenimentoMlh.toFixed(1);
    } else if (selectedMlhOption === '24ore') {
        outputMlHValue = mlh24ore.toFixed(1);
    } else if (selectedMlhOption === 'xore') {
        outputMlHValue = mlhxore.toFixed(1);
    }

    // Determina l'output per ml e ml/kg
    if (selectedMlOption === 'mlDie') {
        if (selectedMlhOption === 'soloMantenimento') {
            outputMlValue = mantenimentoMl.toFixed(1);
        } else if (selectedMlhOption === '24ore') {
            outputMlValue = SommaDie24OreMl.toFixed(1);
        } else if (selectedMlhOption === 'xore') {
            outputMlValue = SommaDiexOreMl.toFixed(1);
        }
    } else if (selectedMlOption === 'mlKgDie') {
        if (selectedMlhOption === 'soloMantenimento') {
            outputMlValue = mantenimentoMlkg.toFixed(1);
        } else if (selectedMlhOption === '24ore') {
            outputMlValue = SommaDie24OreMlkg.toFixed(1);
        } else if (selectedMlhOption === 'xore') {
            outputMlValue = SommaDiexOreMlkg.toFixed(1);
        }
    }

    // Aggiorna gli output sulla pagina
    document.getElementById('mlhOutputValue').textContent = outputMlHValue;
    document.getElementById('mlOutputValue').textContent = outputMlValue;

    // Aggiorna i valori di glucosio e sodio in base alla selezione mlh
    let glucosioOutputValue, naOutputValue;

    if (selectedMlhOption === 'soloMantenimento') {
        glucosioOutputValue = mgkgminmantenimento.toFixed(1);
        naOutputValue = mantenimentoMeql().toFixed(1); 
    } else if (selectedMlhOption === '24ore') {
        glucosioOutputValue = mgkgmin24ore.toFixed(1);
        naOutputValue = Meql24ore.toFixed(1);
    } else if (selectedMlhOption === 'xore') {
        glucosioOutputValue = mgkgminxore.toFixed(1);
        naOutputValue = Meqlxore.toFixed(1);
    }

    // Aggiornamento di glucosioNormaleOutputValue in base alle condizioni
    let glucosioNormaleOutputValue;

	if (ageInDays > 30 && ageInDays <3600) {
        if (glucosioOutputValue < 2) {
            glucosioNormaleOutputValue = "Tendenza al calo glicemico, vn tra 2 e 5 mg/kg/min";
        } else if (glucosioOutputValue > 6) {
            glucosioNormaleOutputValue = "Tendenza all'aumento glicemico, vn tra 2 e 5 mg/kg/min";
        } else {
            glucosioNormaleOutputValue = "In range, vn tra 2 e 5 mg/kg/min";
        }
	}	
	if (ageInDays < 30) {
        if (glucosioOutputValue < 4) {
            glucosioNormaleOutputValue = "Tendenza al calo glicemico, vn tra 4 e 8 mg/kg/min";
        } else if (glucosioOutputValue > 8) {
            glucosioNormaleOutputValue = "Tendenza all'aumento glicemico, vn tra 4 e 8 mg/kg/min";
        } else {
            glucosioNormaleOutputValue = "In range, vn tra 4 e 8 mg/kg/min";
        }
    }
	if (ageInDays > 3600) {
        if (glucosioOutputValue < 2) {
            glucosioNormaleOutputValue = "Tendenza al calo glicemico, vn tra 2 e 3 mg/kg/min";
        } else if (glucosioOutputValue > 3) {
            glucosioNormaleOutputValue = "Tendenza all'aumento glicemico, vn tra 2 e 3 mg/kg/min";
        } else {
            glucosioNormaleOutputValue = "In range, vn tra 2 e 3 mg/kg/min";
        }
	}	


    // Aggiorna gli output sulla pagina
    document.getElementById('glucosioOutputValue').textContent = glucosioOutputValue;
    document.getElementById('naOutputValue').textContent = naOutputValue;
    document.getElementById('glucosioNormaleOutputValue').textContent = glucosioNormaleOutputValue;

	
	 // Nuova assegnazione per mlNaClOutputValue
    document.getElementById('mlNaClOutputValue').textContent = mlNaClOutputValue.toFixed(1);
	
    // Aggiorna il testo dell'opzione per "x ore o xx die"
    const doppioxoreOption = document.querySelector('#doppiainfSelect option[value="doppioxore"]');
    doppioxoreOption.textContent = `${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} giorni`;

	
	    // Aggiorna il testo dell'opzione per "x ore o xx die"
    const xoreOption = mlhSelect.querySelector('option[value="xore"]');
    xoreOption.textContent = `${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} giorni`;

    // Aggiorna la tabella come già fai nel resto della funzione
    const tableRows = document.querySelectorAll('#Specifichetable tr');

    if (tableRows.length > 2) {
        tableRows[2].cells[1].textContent = PerditeMl.toFixed(1);
        tableRows[2].cells[2].textContent = PerditeMeq.toFixed(1);
        tableRows[2].cells[3].textContent = PerditeMlkg.toFixed(1);
    }

    if (tableRows.length > 3) {
        tableRows[3].cells[1].textContent = PerditeprevedibiliMl.toFixed(1);
        tableRows[3].cells[2].textContent = PerditeprevedibiliMeq.toFixed(1);
        tableRows[3].cells[3].textContent = PerditeprevedibiliMlkg.toFixed(1);
    }

    if (tableRows.length > 4) {
        tableRows[4].cells[1].textContent = mantenimentoMl.toFixed(1);
        tableRows[4].cells[2].textContent = mantenimentoMeq().toFixed(1);
        tableRows[4].cells[3].textContent = mantenimentoMlkg.toFixed(1);
        tableRows[4].cells[4].textContent = mantenimentoMlh.toFixed(1);
        tableRows[4].cells[5].textContent = mantenimentoMeql().toFixed(1);
        tableRows[4].cells[6].textContent = mgkgminmantenimento.toFixed(1);
    }

    if (tableRows.length > 5) {
        tableRows[5].cells[2].textContent = CalcoloAggiuntivo.toFixed(1);
    }

    if (tableRows.length > 6) {
        tableRows[6].cells[1].textContent = soluzioneMl.toFixed(1);
        tableRows[6].cells[2].textContent = soluzioneMeq.toFixed(1);
        tableRows[6].cells[3].textContent = soluzioneMlkg.toFixed(1);
        tableRows[6].cells[5].textContent = soluzione.mEq.toFixed(1);
        tableRows[6].cells[6].textContent = mgkgminmsoluzione.toFixed(1);
    }

    if (tableRows.length > 7) {
        tableRows[7].cells[1].textContent = liquidiAggiuntiMl.toFixed(1);
        tableRows[7].cells[2].textContent = liquidiAggiuntiNa.toFixed(1);
        tableRows[7].cells[3].textContent = liquidiAggiuntiMlkg.toFixed(1);
        tableRows[7].cells[5].textContent = liquidiAggiuntimeql.toFixed(1);
        tableRows[7].cells[6].textContent =	mgkgminliquidiaggiunti.toFixed(1);
    }

    if (tableRows.length > 8) {
        tableRows[8].cells[1].textContent = SommaDie24OreMl.toFixed(1);
        tableRows[8].cells[2].textContent = SommaDie24OreMeq.toFixed(1);
        tableRows[8].cells[3].textContent = SommaDie24OreMlkg.toFixed(0);
        tableRows[8].cells[4].textContent = mlh24ore.toFixed(0);
        tableRows[8].cells[5].textContent = Meql24ore.toFixed(0);
        tableRows[8].cells[6].textContent = mgkgmin24ore.toFixed(1);
    }

    if (tableRows.length > 9) {
        tableRows[9].cells[1].textContent = SommaDiexOreMl.toFixed(1);
        tableRows[9].cells[2].textContent = SommaDiexOreMeq.toFixed(1);
        tableRows[9].cells[3].textContent = SommaDiexOreMlkg.toFixed(0);
        tableRows[9].cells[4].textContent = mlhxore.toFixed(0);
        tableRows[9].cells[5].textContent = Meqlxore.toFixed(0);
        tableRows[9].cells[6].textContent = mgkgminxore.toFixed(1);
    }

    if (tableRows.length > 12) {
        tableRows[12].cells[0].textContent = AcquaPerc;
        tableRows[12].cells[1].textContent = `${calculatedAge.value} ${calculatedAge.unit}`;
        tableRows[12].cells[2].textContent = Correzionedie.toFixed(1);
        tableRows[12].cells[3].textContent = Correzioneh.toFixed(0);
    }

    // Aggiorna le righe della tabella specifiche per la doppia infusione e mantenimento

    if (tableRows.length > 15) {
        tableRows[15].cells[2].textContent = mlLinea124ore.toFixed(1);
        tableRows[15].cells[3].textContent = Infusione1Meq24ore.toFixed(1);
        tableRows[15].cells[4].textContent = mlkgLinea124ore.toFixed(1);
        tableRows[15].cells[5].textContent = mlhLinea124ore.toFixed(1);
        tableRows[15].cells[6].textContent = Infusione1.mEq.toFixed(1);
        tableRows[15].cells[7].textContent = mgkgminLinea124ore.toFixed(1);
        tableRows[15].cells[8].textContent = mgkgminDoppio24ore.toFixed(1);
    }

    if (tableRows.length > 16) {
        tableRows[16].cells[1].textContent = mlLinea224ore.toFixed(1);
        tableRows[16].cells[2].textContent = Infusione2Meq24ore.toFixed(1);
        tableRows[16].cells[3].textContent = mlkgLinea224ore.toFixed(1);
        tableRows[16].cells[4].textContent = mlhLinea224ore.toFixed(1);
        tableRows[16].cells[5].textContent = Infusione2.mEq.toFixed(1);
        tableRows[16].cells[6].textContent = mgkgminLinea224ore.toFixed(1);
    }

    if (tableRows.length > 17) {
        tableRows[17].cells[2].textContent = mlLinea1xore.toFixed(1);
        tableRows[17].cells[3].textContent = Infusione1Meqxore.toFixed(1);
        tableRows[17].cells[4].textContent = mlkgLinea1xore.toFixed(1);
        tableRows[17].cells[5].textContent = mlhLinea1xore.toFixed(1);
        tableRows[17].cells[6].textContent = Infusione1.mEq.toFixed(1);
        tableRows[17].cells[7].textContent = mgkgminLinea1xore.toFixed(1);
        tableRows[17].cells[8].textContent = mgkgminDoppioxore.toFixed(1);
    }

    if (tableRows.length > 18) {
        tableRows[18].cells[1].textContent = mlLinea2xore.toFixed(1);
        tableRows[18].cells[2].textContent = Infusione2Meqxore.toFixed(1);
        tableRows[18].cells[3].textContent = mlkgLinea2xore.toFixed(1);
        tableRows[18].cells[4].textContent = mlhLinea2xore.toFixed(1);
        tableRows[18].cells[5].textContent = Infusione2.mEq.toFixed(1);
        tableRows[18].cells[6].textContent = mgkgminLinea2xore.toFixed(1);
    }

    if (tableRows.length > 19) {
        tableRows[19].cells[2].textContent = mlLinea1mant.toFixed(1);
        tableRows[19].cells[3].textContent = Infusione1Meqmant.toFixed(1);
        tableRows[19].cells[4].textContent = mlkgLinea1mant.toFixed(1);
        tableRows[19].cells[5].textContent = mlhLinea1mant.toFixed(1);
        tableRows[19].cells[6].textContent = Infusione1.mEq.toFixed(1);
        tableRows[19].cells[7].textContent = mgkgminLinea1mant.toFixed(1);
        tableRows[19].cells[8].textContent = mgkgminDoppiomant.toFixed(1);
    }

    if (tableRows.length > 20) {
        tableRows[20].cells[1].textContent = mlLinea2mant.toFixed(1);
        tableRows[20].cells[2].textContent = Infusione2Meqmant.toFixed(1);
        tableRows[20].cells[3].textContent = mlkgLinea2mant.toFixed(1);
        tableRows[20].cells[4].textContent = mlhLinea2mant.toFixed(1);
        tableRows[20].cells[5].textContent = Infusione2.mEq.toFixed(1);
        tableRows[20].cells[6].textContent = mgkgminLinea2mant.toFixed(1);
    }
    aggiornaMlHOutput();
    aggiornaMlOutput();
	aggiornaDoppiaInfusioneOutput();
	aggiornamlNaClOutputValue();
}

function calculateAgeInDays() {
    let ageInDays = 0;

    if (calculatedAge.unit === 'giorni') {
        ageInDays = calculatedAge.value;
    } else if (calculatedAge.unit === 'mesi') {
        ageInDays = calculatedAge.value * 30.44; // Converti mesi in giorni
    } else if (calculatedAge.unit === 'anni') {
        ageInDays = calculatedAge.value * 365.25; // Converti anni in giorni
    }

    return ageInDays;
}

function aggiornaMlHOutput(Correzioneh, Correzionedie) {
    const mlhSelect = document.getElementById('mlhSelect');
    const selectedOption = mlhSelect.value;

    let outputValue;

    if (selectedOption === 'soloMantenimento') {
        outputValue = mantenimentoMlh.toFixed(1);
    } else if (selectedOption === '24ore') {
        outputValue = mlh24ore.toFixed(1);
    } else if (selectedOption === 'xore') {
        outputValue = mlhxore.toFixed(1);
    }

    if (!isNaN(Correzioneh) && !isNaN(Correzionedie)) {
        const xoreOption = mlhSelect.querySelector('option[value="xore"]');
        xoreOption.textContent = `${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} giorni`;
    } else {
        console.error("Correzioneh o Correzionedie non sono definiti o non sono numerici");
    }

    document.getElementById('mlhOutputValue').textContent = outputValue;
}


function aggiornaMlOutput(Correzioneh) {
    const mlhSelect = document.getElementById('mlhSelect');
    const mlSelect = document.getElementById('mlSelect');
    const selectedMlhOption = mlhSelect.value;
    const selectedMlOption = mlSelect.value;

    let outputValue;

    // Determina SommaDieMl e SommaDieMlkg in base a mlhSelect
    if (selectedMlhOption === 'soloMantenimento' && selectedMlOption === 'mlDie') {
        outputValue = mantenimentoMl.toFixed(1);
    } else if (selectedMlhOption === 'soloMantenimento' && selectedMlOption === 'mlKgDie') {     
        outputValue = mantenimentoMlkg.toFixed(1);
    } else if (selectedMlhOption === '24ore' && selectedMlOption === 'mlDie') {
        outputValue = SommaDie24OreMl.toFixed(1);
    } else if (selectedMlhOption === '24ore' && selectedMlOption === 'mlKgDie') {    
        outputValue = SommaDie24OreMlkg.toFixed(0);
    } else if (selectedMlhOption === 'xore' && selectedMlOption === 'mlDie') {
        outputValue = SommaDiexOreMl.toFixed(1);
    } else if (selectedMlhOption === 'xore' && selectedMlOption === 'mlKgDie') {    
        outputValue = SommaDiexOreMlkg.toFixed(0);
    }
    document.getElementById('mlOutputValue').textContent = outputValue;
}

function aggiornaDoppiaInfusioneOutput() {
    const doppiainfSelect = document.getElementById('doppiainfSelect').value;
    const infusione1MlH = document.getElementById('infusione1MlH');
    const infusione2MlH = document.getElementById('infusione2MlH');
    const infusione1mgkgmin = document.getElementById('infusione1mgkgmin');
    const infusione2mgkgmin = document.getElementById('infusione2mgkgmin');
	const infusionedoppiamgkgmintot = document.getElementById('infusionedoppiamgkgmintot');
	const infusionedoppiamltot = document.getElementById('infusionedoppiamltot');

    let outputInfusione1MlH = '';
    let outputInfusione2MlH = '';
    let outputInfusione1mgkgmin = '';
    let outputInfusione2mgkgmin = '';
	let outputmgkgmintot = '';

    if (doppiainfSelect === 'doppioMantenimento') {
        outputInfusione1MlH = mlhLinea1mant ? mlhLinea1mant.toFixed(1) : 0.0;
        outputInfusione2MlH = mlhLinea2mant ? mlhLinea2mant.toFixed(1) : 0.0;
        outputInfusione1mgkgmin = mgkgminLinea1mant ? mgkgminLinea1mant.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea2mant ? mgkgminLinea2mant.toFixed(1) : 0.0;
		outputmgkgmintot = mgkgminDoppiomant ? mgkgminDoppiomant.toFixed(1) : 0.0;
    } else if (doppiainfSelect === 'doppio24ore') {
        outputInfusione1MlH = mlhLinea124ore ? mlhLinea124ore.toFixed(1) : 0.0;
        outputInfusione2MlH = mlhLinea224ore ? mlhLinea224ore.toFixed(1) : 0.0;
        outputInfusione1mgkgmin = mgkgminLinea124ore ? mgkgminLinea124ore.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea224ore ? mgkgminLinea224ore.toFixed(1) : 0.0;
		outputmgkgmintot = mgkgminDoppio24ore ? mgkgminDoppio24ore.toFixed(1) : 0.0;
    } else if (doppiainfSelect === 'doppioxore') {
        outputInfusione1MlH = mlhLinea1xore ? mlhLinea1xore.toFixed(1) : 0.0;
        outputInfusione2MlH = mlhLinea2xore ? mlhLinea2xore.toFixed(1) : 0.0;
        outputInfusione1mgkgmin = mgkgminLinea1xore ? mgkgminLinea1xore.toFixed(1) : 0.0;
        outputInfusione2mgkgmin = mgkgminLinea2xore ? mgkgminLinea2xore.toFixed(1) : 0.0;
		outputmgkgmintot = mgkgminDoppioxore ? mgkgminDoppioxore.toFixed(1) : 0.0;
    }

let outputmltot

	if (doppiainfSelect === 'doppioMantenimento' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppiam.toFixed(1);
		 } else if (doppiainfSelect === 'doppioMantenimento' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppiam.toFixed(1);
		 } else if (doppiainfSelect === 'doppio24ore' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppia24.toFixed(1);
		 } else if (doppiainfSelect === 'doppio24ore' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppia24.toFixed(1);
		 } else if (doppiainfSelect === 'doppioxore' && mlSelecttot === 'mlDietot') {
			outputmltot = mltotdoppiax.toFixed(1);
		 } else if (doppiainfSelect === 'doppioxore' && mlSelecttot === 'mlKgDietot') {
			outputmltot = mlkgtotdoppiax.toFixed(1);
		}				

let outputTotValueLinea1
        if (doppiainfSelect === 'doppioMantenimento' && mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea1mant.toFixed(1); 
        } else if (doppiainfSelect === 'doppioMantenimento' && mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea1mant.toFixed(1); 
        } else if (doppiainfSelect === 'doppio24ore' && mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea124ore.toFixed(1); 
        } else if (doppiainfSelect === 'doppio24ore' && mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea124ore.toFixed(1); 
        } else if (doppiainfSelect === 'doppioxore' && mlSelect1 === 'mlDie1') {
            outputTotValueLinea1 = mlLinea1xore.toFixed(1); 
        } else if (doppiainfSelect === 'doppioxore' && mlSelect1 === 'mlKgDie1') {
            outputTotValueLinea1 = mlkgLinea1xore.toFixed(1); 					
        }

let outputTotValueLinea2
        if (doppiainfSelect === 'doppioMantenimento' && mlSelect1 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea2mant.toFixed(1); 
        } else if (doppiainfSelect === 'doppioMantenimento' && mlSelect1 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea2mant.toFixed(1); 
        } else if (doppiainfSelect === 'doppio24ore' && mlSelect1 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea224ore.toFixed(1); 
        } else if (doppiainfSelect === 'doppio24ore' && mlSelect1 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea224ore.toFixed(1); 
        } else if (doppiainfSelect === 'doppioxore' && mlSelect1 === 'mlDie2') {
            outputTotValueLinea2 = mlLinea2xore.toFixed(1); 
        } else if (doppiainfSelect === 'doppioxore' && mlSelect1 === 'mlKgDie2') {
            outputTotValueLinea2 = mlkgLinea2xore.toFixed(1); 					
        }
 

    infusione1MlH.textContent = outputInfusione1MlH;
    infusione2MlH.textContent = outputInfusione2MlH;
    infusione1mgkgmin.textContent = outputInfusione1mgkgmin;
    infusione2mgkgmin.textContent = outputInfusione2mgkgmin;
	infusionedoppiamgkgmintot.textContent = outputmgkgmintot;
	infusionedoppiamltot.textContent = outputmltot;
	infusione2Ml.textContent = outputTotValueLinea1;
	infusione1Ml.textContent = outputTotValueLinea2;
}

    // Aggiorna il testo dell'opzione "xore" per doppia infusione, se Correzioneh e Correzionedie sono definiti
    if (!isNaN(Correzioneh) && !isNaN(Correzionedie)) {
        const xoreOption = doppiainfSelect.querySelector('option[value="doppioxore"]');
        xoreOption.textContent = `Doppia Infusione (${Correzioneh.toFixed(0)} ore o ${Correzionedie.toFixed(1)} giorni)`;
    } else {
        console.error("Correzioneh o Correzionedie non sono definiti o non sono numerici");
    }

document.getElementById('WA').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('WW').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Nai').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Nap').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('infusionepartType').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('vomiti').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('diarrea').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('temperatura').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('soluzioneMl').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('solutionType').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('liquidiAggiuntiMl').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('liquidiAggiuntiNa').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('liquidiAggiuntiGlug').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Nai').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('glicemia').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galmeql').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galgluperc').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galmeql1').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galgluperc1').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galmeql2').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galgluperc2').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galmeqlpart').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galglupercpart').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('mlsol').addEventListener('input', aggiornaSpecificheTable);

document.getElementById('mlhSelect').addEventListener('change', function() {
    aggiornaSpecificheTable();
    aggiornaMlHOutput();
    aggiornaMlOutput();
});

document.getElementById('mlSelect').addEventListener('change', function() {
    aggiornaSpecificheTable();
    aggiornaMlOutput();
});

document.getElementById('infusione1Type').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('infusione2Type').addEventListener('change', aggiornaSpecificheTable);

document.getElementById('doppiainfSelect').addEventListener('change', function() {
    aggiornaSpecificheTable();
	aggiornaDoppiaInfusioneOutput();
    aggiornaMlHOutput();
    aggiornaMlOutput();
});

document.getElementById('mlSelecttot').addEventListener('change', function() {
	aggiornaDoppiaInfusioneOutput();
    aggiornaSpecificheTable();
});

document.getElementById('mlSelect1').addEventListener('change', function() {
	aggiornaDoppiaInfusioneOutput();
    aggiornaSpecificheTable();
});

document.getElementById('mlSelect2').addEventListener('change', function() {
	aggiornaDoppiaInfusioneOutput();
    aggiornaSpecificheTable();
});

document.querySelectorAll('.score-select').forEach(select => {
    select.addEventListener('change', aggiornaScoretable);
});

document.getElementById('Nai').addEventListener('input', function() {
    const nai = parseFloat(this.value);
    const napSelect = document.getElementById('Nap');
    napSelect.innerHTML = '';

    if (!isNaN(nai)) {
        let minNap, maxNap;

        if (nai <= 105) {
            minNap = nai + 1;
            maxNap = nai + 6;
        } else if (nai > 105 && nai <= 135) {
            minNap = nai + 1;
            maxNap = nai + 12;
        } else if (nai > 135 && nai <= 145) {
            minNap = nai;
            maxNap = nai;
        } else if (nai > 145 && nai < 175) {
            minNap = nai - 12;
            maxNap = nai - 1;
        } else if (nai >= 175) {
            minNap = nai - 6;
            maxNap = nai - 1;
        }

        for (let i = minNap; i <= maxNap; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            napSelect.appendChild(option);
        }
    }
});

//possibile errore di grafica
singolaInfusioneBtn.addEventListener('click', function() {
    setActiveInfusioneButton('singolaInfusioneBtn');
    numberOutput1Container.style.display = 'flex';
    numberOutput2Container.style.display = 'flex';
    numberOutput3Container.style.display = 'flex';
    numberOutput4Container.style.display = 'flex';
    numberOutput5Container.style.display = 'flex';
    numberOutput6Container.style.display = 'flex';
    doppiaInfusioneContainer.classList.add('hidden');	
});

doppiaInfusioneBtn.addEventListener('click', function() {
    setActiveInfusioneButton('doppiaInfusioneBtn');
    numberOutput1Container.style.display = 'none';
    numberOutput2Container.style.display = 'none';
    numberOutput3Container.style.display = 'none';	
    numberOutput4Container.style.display = 'none';
    numberOutput5Container.style.display = 'none';
    numberOutput6Container.style.display = 'none';	
    doppiaInfusioneContainer.classList.remove('hidden');
});
//possibile errore di grafica

document.getElementById('resetAllBtn').addEventListener('click', function() {
    // Resetta tutti i campi di input
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'number') {
            input.value = '';
        } else if (input.type === 'date') {
            input.value = '';
        }
    });

    // Resetta i dropdown selezionati
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    // Resetta gli output
    document.querySelectorAll('.output-field').forEach(output => {
        output.value = '';
        output.textContent = '';
    });

    // Nascondi tutti i container che devono essere nascosti inizialmente
    document.getElementById('advancedContainer').classList.add('hidden');
    document.getElementById('birthWeightContainer').classList.add('hidden');
    document.getElementById('doppiaInfusioneContainer').classList.add('hidden');
    document.getElementById('Scoretable').classList.add('hidden');
    document.getElementById('Specifichetable').classList.add('hidden');

    // Resetta la selezione dei pulsanti
    setActiveButton('dateButton');
    setActiveInfusioneButton('singolaInfusioneBtn');
    setActivePesoButton('pesoBenessereBtn');

    // Assicurati che i container siano nascosti
    document.getElementById('advancedContainer').classList.add('hidden');
    document.getElementById('Scoretable').classList.add('hidden');
    document.getElementById('Specifichetable').classList.add('hidden');

    // Resetta i testi dei pulsanti a quelli iniziali
    document.getElementById('advancedBtn').textContent = 'Avanzato';
    document.getElementById('ScoreBtn').textContent = 'Score';
    document.getElementById('specificheBtn').textContent = 'Specifiche';

    // Aggiorna eventuali calcoli che potrebbero essere necessari dopo il reset
    aggiornaScoretable();
    aggiornaSpecificheTable();
});	
