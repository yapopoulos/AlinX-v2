// ============ DONNÉES PROGRAMMES ============

var PROGRAMMES = [
  {
    id: "niveau1",
    nom: "Niveau 1",
    soustitre: "D\u00e9butant",
    description: "De 0 \u00e0 15 tractions",
    duree: "16 semaines",
    seances: 5,
    cycles: 4,
    prereqs: null,
    cycles_detail: [
      { id: "c1", nom: "Cycle 1 \u2014 Fondation", semaines: 4 },
      { id: "c2", nom: "Cycle 2 \u2014 Construction", semaines: 4 },
      { id: "c3", nom: "Cycle 3 \u2014 Progression", semaines: 4 },
      { id: "c4", nom: "Cycle 4 \u2014 Transition", semaines: 4 }
    ]
  },
  {
    id: "niveau2",
    nom: "Niveau 2",
    soustitre: "Interm\u00e9diaire",
    description: "Force et volume progressifs",
    duree: "12 semaines",
    seances: 6,
    cycles: 3,
    prereqs: [
      "15 tractions strictes",
      "25 dips",
      "35 pompes",
      "2\u20134 Muscle Up"
    ],
    cycles_detail: [
      { id: "c1", nom: "Cycle 1 \u2014 Accumulation", semaines: 4 },
      { id: "c2", nom: "Cycle 2 \u2014 Force", semaines: 4 },
      { id: "c3", nom: "Cycle 3 \u2014 Skill", semaines: 4 }
    ]
  },
  {
    id: "niveau3",
    nom: "Niveau 3",
    soustitre: "Confirm\u00e9",
    description: "Volume \u00e9lev\u00e9, lestage, figures avanc\u00e9es",
    duree: "12 semaines",
    seances: 6,
    cycles: 3,
    prereqs: [
      "20 tractions",
      "40 dips",
      "50 pompes",
      "5 Muscle Up"
    ],
    cycles_detail: [
      { id: "c1", nom: "Cycle 1 \u2014 Accumulation", semaines: 4 },
      { id: "c2", nom: "Cycle 2 \u2014 Force", semaines: 4 },
      { id: "c3", nom: "Cycle 3 \u2014 Skill", semaines: 4 }
    ]
  },
  {
    id: "niveau4",
    nom: "Niveau 4",
    soustitre: "Expert",
    description: "Planche, Croix de fer, One Arm",
    duree: "18 semaines",
    seances: 7,
    cycles: 3,
    prereqs: [
      "25 tractions",
      "50 dips",
      "60 pompes",
      "8 Muscle Up"
    ],
    cycles_detail: [
      { id: "c1", nom: "Cycle 1 \u2014 Accumulation", semaines: 6 },
      { id: "c2", nom: "Cycle 2 \u2014 Force", semaines: 6 },
      { id: "c3", nom: "Cycle 3 \u2014 Skill", semaines: 6 }
    ]
  }
];

// ============ GESTION ÉTAT PROGRAMMES ============

function getEtatProgramme(id) {
  return JSON.parse(localStorage.getItem("programme_" + id) || "null");
}

function getProgrammeActif() {
  for (var i = 0; i < PROGRAMMES.length; i++) {
    var etat = getEtatProgramme(PROGRAMMES[i].id);
    if (etat && etat.statut === "en_cours") return { prog: PROGRAMMES[i], etat: etat };
  }
  return null;
}

function estDebloque(prog) {
  if (!prog.prereqs) return true;
  var debloques = JSON.parse(localStorage.getItem("prereqs_" + prog.id) || "[]");
  return debloques.length === prog.prereqs.length;
}

function estTermine(id) {
  var etat = getEtatProgramme(id);
  return etat && etat.statut === "termine";
}

function progressionGlobale(prog, etat) {
  if (!etat) return 0;
  var totalSemaines = prog.cycles_detail.reduce(function(acc, c) { return acc + c.semaines; }, 0);
  var semaineActuelle = etat.semaine_globale || 1;
  return Math.round(((semaineActuelle - 1) / totalSemaines) * 100);
}