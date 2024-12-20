const numberOutput1Container = document.getElementById('numberOutput1Container');
const numberOutput2Container = document.getElementById('numberOutput2Container');
const numberOutput3Container = document.getElementById('numberOutput3Container');
const numberOutput4Container = document.getElementById('numberOutput4Container');
const numberOutput5Container = document.getElementById('numberOutput5Container');


// AGGIORNAMENTO CONTAINER OUTPUT
let Galmeqlpart, Galglupercpart;
let TotMl, Totmgkgmin, TotMeq, Totmlh, TotMeql;
let mantenimentoMlh, mlh, mantenimentoMl, mantenimentoMlkg, TotaleMl, TotaleMlkg;
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

// Tooltip per il campo peso attuale
const tooltipIcon2 = document.getElementById('tooltipIcon2');
const tooltipText2 = document.getElementById('tooltipText2');

tooltipIcon2.addEventListener('mouseenter', () => {
    tooltipText2.classList.add('show');
});

tooltipIcon2.addEventListener('mouseleave', () => {
    tooltipText2.classList.remove('show');
});

// Tooltip per il campo peso in benessere 
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

tooltipIcon22.addEventListener('mouseenter', () => {
    tooltipText22.classList.add('show');
});

tooltipIcon22.addEventListener('mouseleave', () => {
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
    numberOutput1Container.style.display = 'flex';
    numberOutput2Container.style.display = 'flex';
    numberOutput3Container.style.display = 'flex';
    numberOutput4Container.style.display = 'flex';
    numberOutput5Container.style.display = 'flex';	
	    
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

// formato data americano/europeo
    // Rileva la lingua del browser
    const userLang = navigator.language || navigator.userLanguage;

    // Seleziona l'elemento input
    const dateInput = document.getElementById('birthdate');

    // Imposta il valore iniziale in base alla lingua rilevata
    if (userLang === "en-US") {
        // Formato americano MM/DD/YYYY
        dateInput.setAttribute("placeholder", "MM/DD/YYYY");
    } else {
        // Formato europeo DD/MM/YYYY
        dateInput.setAttribute("placeholder", "DD/MM/YYYY");
    }

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
    document.getElementById('scoreTitleRow').cells[0].textContent = 'Score di Gorelick per Peso in Benessere non noto, completa i campi';
    document.getElementById('pesoStimatoLabel').textContent = 'Peso in Benessere/ Working Weight stimato (Kg)';
});

pesoAttualeBtn.addEventListener('click', function() {
    setActivePesoButton('pesoAttualeBtn');
    document.getElementById('scoreTitleRow').cells[0].textContent = 'Score di Gorelick per Peso Attuale non noto, completa i campi';
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
    toggleVisibility('Specifichetable', this, 'Dettaglio', 'Nascondi Dettaglio');
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
	const Galmeql = parseFloat(document.getElementById('Galmeql') ? document.getElementById('Galmeql').value : 0) || 0;
	const Galgluperc = parseFloat(document.getElementById('Galgluperc') ? document.getElementById('Galgluperc').value : 0) || 0;


    const Naig = Nai + 0.024 * (glicemia - 100);
    document.getElementById('naCorretto').value = Naig.toFixed(0);



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

    return mantenimentoMeq;
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

    let mantenimentoMeql = mantenimentoMeq() / (mantenimentoMl / 1000);

    if (ageInDays <= 30) { // Età <= 30 giorni
        return mantenimentoMeql; // Restituisce il valore calcolato
    } else { // Età > 30 giorni
        // Restringe mantenimentoMeql tra 40 e 154
        return Math.max(40, Math.min(mantenimentoMeql, 154));
    }
}


const infusionepercentgluType = document.getElementById('infusionepercentgluType').value;
const infusionepercentglu = {
        "G0": { glucosio: 0 },
		"G2.5": { glucosio: 2.5 },
        "G5": { glucosio: 5 },
        "G10": { glucosio: 10 },
    };		
    const infusionipercentglu = infusionepercentglu[infusionepercentgluType] || { glucosio: 0 };

    const soluzioneMl = parseFloat(document.getElementById('soluzioneMl').value) || 0;
    const solutionType = document.getElementById('solutionType').value;
    const liquidiAggiuntiMl = parseFloat(document.getElementById('liquidiAggiuntiMl').value) || 0;
    const liquidiAggiuntiNa = parseFloat(document.getElementById('liquidiAggiuntiNa').value) || 0;

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
    const mantenimentoMlh = mantenimentoMl / 24;
    const soluzioneMlkg = soluzioneMl / WW;
    const liquidiAggiuntiMlkg = liquidiAggiuntiMl / WW;
    const liquidiAggiuntimeql = liquidiAggiuntiNa / (liquidiAggiuntiMl / 1000) || 0;
    const mgkgminmantenimento = (mantenimentoMl * 10 * infusionipercentglu.glucosio) / WW / 1440;
    const mgkgminmsoluzione = (soluzioneMl * 10 * soluzione.glucosio) / WW / 1440;
	const TotMl = PerditeMl + PerditeprevedibiliMl + mantenimentoMl - soluzioneMl - liquidiAggiuntiMl;
	
		if (Naig >= 135 && Naig <= 145) {
    SodioDaPerdereRecuperare = 0;
} else {
    SodioDaPerdereRecuperare = (Nap - Naig) * AcquaPerc * WW;
}
	
    const TotMeq = ((PerditeMeq + SodioDaPerdereRecuperare)) + PerditeprevedibiliMeq + mantenimentoMeq() - soluzioneMeq - liquidiAggiuntiNa;
    const Totmgkgmin = ((TotMl * 10 * infusionipercentglu.glucosio) / WW / 1440) + mgkgminmsoluzione;
    const Totmlh = TotMl / 24;
	
	let  TotMeql = TotMeq / (TotMl / 1000);
    TotMeql = Math.max(TotMeql, 0);
	
    let TotMlkg = 0;
    if (WW > 0) {
        TotMlkg = TotMl / WW;
    } else {
        TotMlkg = 0; // Se WW è 0, impostiamo mantenimentoMlkg a 0
    }
	


document.getElementById('nameqOutputValue').textContent = TotMeq.toFixed(0);	
document.getElementById('naOutputValue').textContent = TotMeql.toFixed(0);
document.getElementById('mlhOutputValue').textContent = Totmlh.toFixed(0);
document.getElementById('mlOutputValue').textContent = TotMl.toFixed(0);
document.getElementById('glucosioOutputValue').textContent = Totmgkgmin.toFixed(0);

	
	
    // Aggiorna la tabella come già fai nel resto della funzione
    const tableRows = document.querySelectorAll('#Specifichetable tr');

    if (tableRows.length > 2) {
        tableRows[2].cells[1].textContent = PerditeMl.toFixed(0);
        tableRows[2].cells[2].textContent = PerditeMeq.toFixed(0);
        tableRows[2].cells[3].textContent = PerditeMlkg.toFixed(0);
    }

    if (tableRows.length > 3) {
        tableRows[3].cells[1].textContent = PerditeprevedibiliMl.toFixed(0);
        tableRows[3].cells[2].textContent = PerditeprevedibiliMeq.toFixed(0);
        tableRows[3].cells[3].textContent = PerditeprevedibiliMlkg.toFixed(0);
    }

    if (tableRows.length > 4) {
        tableRows[4].cells[1].textContent = mantenimentoMl.toFixed(0);
        tableRows[4].cells[2].textContent = mantenimentoMeq().toFixed(0);
        tableRows[4].cells[3].textContent = mantenimentoMlkg.toFixed(0);
        tableRows[4].cells[4].textContent = mantenimentoMlh.toFixed(0);
        tableRows[4].cells[5].textContent = mantenimentoMeql().toFixed(0);
        tableRows[4].cells[6].textContent = mgkgminmantenimento.toFixed(0);
    }

    if (tableRows.length > 5) {
        tableRows[5].cells[2].textContent = SodioDaPerdereRecuperare.toFixed(0);
    }

    if (tableRows.length > 6) {
        tableRows[6].cells[1].textContent = soluzioneMl.toFixed(0);
        tableRows[6].cells[2].textContent = soluzioneMeq.toFixed(0);
        tableRows[6].cells[3].textContent = soluzioneMlkg.toFixed(0);
        tableRows[6].cells[5].textContent = soluzione.mEq.toFixed(0);
        tableRows[6].cells[6].textContent = mgkgminmsoluzione.toFixed(0);
    }

    if (tableRows.length > 7) {
        tableRows[7].cells[1].textContent = liquidiAggiuntiMl.toFixed(0);
        tableRows[7].cells[2].textContent = liquidiAggiuntiNa.toFixed(0);
        tableRows[7].cells[3].textContent = liquidiAggiuntiMlkg.toFixed(0);
        tableRows[7].cells[5].textContent = liquidiAggiuntimeql.toFixed(0);
    }

    if (tableRows.length > 8) {
        tableRows[8].cells[1].textContent = TotMl.toFixed(0);
        tableRows[8].cells[2].textContent = TotMeq.toFixed(0);
        tableRows[8].cells[3].textContent = TotMlkg.toFixed(0);
        tableRows[8].cells[4].textContent = Totmlh.toFixed(0);
        tableRows[8].cells[5].textContent = TotMeql.toFixed(0);
        tableRows[8].cells[6].textContent = Totmgkgmin.toFixed(0);
    }
	
	    if (tableRows.length > 12) {
        tableRows[10].cells[0].textContent = AcquaPerc;
        tableRows[10].cells[1].textContent = `${calculatedAge.value} ${calculatedAge.unit}`;
        tableRows[10].cells[2].textContent = Correzionedie.toFixed(0);
        tableRows[10].cells[3].textContent = Correzioneh.toFixed(0);
    }
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
	
document.getElementById('WA').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('WW').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Nai').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Nap').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('vomiti').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('diarrea').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('temperatura').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('soluzioneMl').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('solutionType').addEventListener('change', aggiornaSpecificheTable);
document.getElementById('liquidiAggiuntiMl').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('liquidiAggiuntiNa').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('glicemia').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galmeql').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('Galgluperc').addEventListener('input', aggiornaSpecificheTable);
document.getElementById('infusionepercentgluType').addEventListener('change', aggiornaSpecificheTable);

document.querySelectorAll('.score-select').forEach(select => {
    select.addEventListener('change', aggiornaScoretable);
});

document.getElementById('Nai').addEventListener('input', function() {
    const Naig = parseFloat(this.value);
    const napSelect = document.getElementById('Nap');
    napSelect.innerHTML = '';

    if (!isNaN(Naig)) {
        let minNap, maxNap;

        if (Naig <= 105) {
            minNap = Naig + 1;
            maxNap = Naig + 6;
        } else if (Naig > 105 && Naig <= 115) {
            minNap = Naig + 1;
            maxNap = Naig + 12;
        } else if (Naig > 115 && Naig < 135) {
            minNap = Naig + 1;
            maxNap = Naig + 24;			
			
        } else if (Naig >= 135 && Naig <= 145) {
            Nap = Naig;
        } else if (Naig > 145 && Naig < 165) {
            minNap = Naig - 24;
            maxNap = Naig - 1;			
        } else if (Naig >= 165 && Naig < 175) {
            minNap = Naig - 12;
            maxNap = Naig - 1;
        } else if (Naig >= 175) {
            minNap = Naig - 6;
            maxNap = Naig - 1;
        }

        for (let i = minNap; i <= maxNap; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            napSelect.appendChild(option);
        }
    }
});

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
	document.getElementById('Scoretable').classList.add('hidden');
    document.getElementById('Specifichetable').classList.add('hidden');

    // Resetta la selezione dei pulsanti
    setActiveButton('dateButton');
    setActivePesoButton('pesoBenessereBtn');

    // Assicurati che i container siano nascosti
    document.getElementById('advancedContainer').classList.add('hidden');
    document.getElementById('Scoretable').classList.add('hidden');
    document.getElementById('Specifichetable').classList.add('hidden');

    // Resetta i testi dei pulsanti a quelli iniziali
    document.getElementById('advancedBtn').textContent = 'Avanzato';
    document.getElementById('ScoreBtn').textContent = 'Score';
    document.getElementById('specificheBtn').textContent = 'Dettaglio';

    // Aggiorna eventuali calcoli che potrebbero essere necessari dopo il reset
    aggiornaScoretable();
    aggiornaSpecificheTable();
});	

