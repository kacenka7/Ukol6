console.log("bobek");


// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.


const justFood = (pocetOsob) =>{

    const cena = pocetOsob*100;

    return `<p> Catering od Just Food pro ${pocetOsob} lidí za ${cena} Kč </p>`
}

const yourMama = (pocetOsob) =>{

    const cena = pocetOsob*250;

    return `<p>Catering od Your Mama pro ${pocetOsob} lidí za ${cena} Kč </p>`
}

const flavourHaven = (pocetOsob) =>{

    const cena = pocetOsob*500;

    return `<p> Catering od Flavour Haven pro ${pocetOsob} lidí za ${cena} Kč </p>`
}

document.body.innerHTML += justFood(20);

document.body.innerHTML += yourMama(15);

document.body.innerHTML += flavourHaven(25);

const createEvent = (udalost, pocetOsob, cattering, cena) =>{
    return udalost + `s catering` + cattering + `za ` + cena
}

document.body.innerHTML += createEvent("Svatba ", 150,`  Flavour Haven za `, flavourHaven(150) );
