//Creazione dell'oggetto

const carcere = {
  nomePrigione: "Gotham Prison",
  //creazione dell'array guardie dentro l'oggetto
  anagrGuardie: [
    {
      nome: "Simone",
      id: 0,
      eta: 34,
    },
    { nome: "Fabio", id: 1, eta: 55 },
    {
      nome: "Claudio",
      id: 2,
      eta: 38,
    },
  ],
  //creazione dell'array detenuti dentro l'oggetto
  anagrDetenuti: [
    {
      nome: "Andrea",
      id: 0,
      id_detenuto: 0,
      eta: 60,
    },
    { nome: "Sandro", id: 1, id_detenuto: 1, eta: 24 },
    {
      nome: "Paolo",
      id: 2,
      id_detenuto: 2,
      eta: 40,
    },
  ],
  //creazione dell'array fascicoli dentro l'oggetto
  fascicoli: [
    {
      nome: "Andrea",
      id: 0,
      id_detenuto: 0,
      data_carcerazione: new Date(2018, 05, 15),
      data_scarcerazione: new Date(2019, 6, 15),
      crimine: "Omicidio",
    },
    {
      nome: "Sandro",
      id: 1,
      id_detenuto: 1,
      data_carcerazione: new Date(2016, 01, 30),
      data_scarcerazione: new Date(2018, 11, 11),
      crimine: "Attentato",
    },

    {
      nome: "Paolo",
      id: 2,
      id_detenuto: 2,
      data_carcerazione: new Date(2016, 01, 30),
      data_scarcerazione: new Date(2018, 11, 11),
      crimine: "Diffamazione",
    },
  ],
};

//leggo tutto il contenuto dei vari array
console.log("leggo il contenuto delle guardie ->", carcere.anagrGuardie);
console.log("leggo il contenuto dei detenuti ->", carcere.anagrDetenuti);

console.log("leggo il contenuto dei fascicoli ->", carcere.fascicoli);

//Assumere nuove guardie.
carcere.anagrGuardie.push(
  {
    nome: "Pippo",
    id: 3,
    eta: 28,
  },
  { nome: "Andrea", id: 4, eta: 31 }
);
console.log(
  "Assumo nuovo personale alle Guardie ->",
  carcere.anagrGuardie[3],
  carcere.anagrGuardie[4]
);

//Schedare nuovi carcerati
carcere.anagrDetenuti.push(
  {
    nome: "Giuseppe",
    id: 3,
    id_detenuto: 3,
    eta: 65,
  },
  {
    nome: "Michele",
    id: 4,
    id_detenuto: 4,
    eta: 55,
  }
);
console.log(
  "Schedo nuovi carcerati ->",
  carcere.anagrDetenuti[3],
  carcere.anagrDetenuti[4]
);

// inserisco un nuovo "oggetto" nell'array fascicoli
carcere.fascicoli.push(
  {
    nome: "Giuseppe",
    id: 3,
    id_detenuto: 3,
    data_carcerazione: new Date(2020, 07, 14),
    data_scarcerazione: new Date(2021, 03, 10),
    crimine: "omicidio",
  },
  {
    nome: "Michele",
    id: 4,
    id_detenuto: 4,
    data_carcerazione: new Date(2016, 04, 25),
    data_scarcerazione: new Date(2020, 04, 04),
    crimine: "omicidio",
  }
);
console.log(
  "Aggiungo nuovi fascicoli ->",
  carcere.fascicoli[3],
  carcere.fascicoli[4]
);

//leggo l'oggetto.
console.log("Riassumo tutto l'oggetto della mia prigone->", carcere);

//Effettuare ricerche nei fascicoli per nome del detenuto
console.log(
  "leggo il nome del detenuto entrando nei loro fascicoli ->",
  carcere.fascicoli[0].nome,
  carcere.fascicoli[1].nome,
  carcere.fascicoli[2].nome,
  carcere.fascicoli[3].nome,
  carcere.fascicoli[4].nome
);

/*
carcere.anagrDetenuti.splice(2, 1);
console.log(
  "Ho subito un evasione da parte di Paolo, ed ora sono rimasti questi detenuti ->",
  carcere.anagrDetenuti
); */

// evasione di un detenuto
const detenuti = ["Andrea", "Sandro", "Paolo", "Giuseppe", "Michele"];

console.log(detenuti);

const index = detenuti.indexOf("Paolo");
if (index > -1) {
  detenuti.splice(index, 1);
}

console.log(
  "Ho subito un evasione da parte di Paolo, ed ora sono rimasti questi detenuti ->",
  detenuti
);

//decesso di detenuti
detenuti;
const index1 = detenuti.indexOf("Giuseppe", "Michele");
detenuti.indexOf("Giuseppe", "Michele");
if (index > -1) {
  detenuti.splice(index, 2);
}
console.log("Ho avuto due decessi, sono rimasti questi detenuti ->", detenuti);

//questa funzione si occuperà di stampare in console i dati importanti del carcere
function riepilogo() {
  console.log("stampo il riepilogo del carcere ->", carcere);
  console.log("il numero dei detenuti sono ->", index);
  console.log("il numero di detenuti evasi sono ->", detenuti.length - 1);
  console.log(
    "numero di detenuti deceduti all’interno della struttura -> ",
    index1
  );
}
riepilogo();
