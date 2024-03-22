console.log("bobek");


// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.



const justFood = (pocetOsob) =>{

    const cena = pocetOsob*100;

    return `Catering od Just Food pro ${pocetOsob} lidí za ${cena} Kč `
}

const yourMama = (pocetOsob) =>{

    const cena = pocetOsob*250;

    return `Catering od Your Mama pro ${pocetOsob} lidí za ${cena} Kč `
}

const flavourHaven = (pocetOsob) =>{

    const cena = pocetOsob*500;

    return `Catering od Flavour Haven pro ${pocetOsob} lidí za ${cena} Kč `
}


document.body.innerHTML += `<p>${justFood(5)}</p>`;

document.body.innerHTML += `<p>${yourMama(15)}</p>`;

document.body.innerHTML += `<p>${flavourHaven(25)}</p>`;


const createEvent = (udalost, fce) => {
    return  `${udalost} s ${fce}`
}

document.body.innerHTML += `<p>${createEvent("Svatba",flavourHaven(150))}</p>`;
