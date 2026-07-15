// ============ SÉANCES NIVEAU 4 — AVANCÉ ============
// 18 semaines — 3 cycles — 7 séances/semaine

var SEANCES_NIVEAU4 = {

  // ===== CYCLE 1 — ACCUMULATION =====
  c1: {
    nom: "Cycle 1 \u2014 Accumulation",
    objectif: "D\u00e9velopper le volume et la densit\u00e9. 6 semaines avec d\u00e9load int\u00e9gr\u00e9 semaine 6. Rappels figures en fin de s\u00e9ance.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Set sur barre + Rappel Front Lever",
            duree: 74,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:5}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:4}, {label:"dips bar", valeur:9}, {label:"tractions", valeur:9}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips bar", valeur:7}, {label:"tractions", valeur:7}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"tractions", valeur:6}] }
                ]
              },
              {
                nom: "MU + Tractions +10kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU", valeur:5}, {label:"tractions +10kg", valeur:15}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:4}, {label:"tractions +10kg", valeur:14}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:3}, {label:"tractions +10kg", valeur:13}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"tractions +10kg", valeur:12}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:1}, {label:"tractions +10kg", valeur:11}] }
                ]
              },
              { nom: "Isom\u00e9trie \u2014 20'' t\u00eate au-dessus + 10'' milieu + 20'' bras tendus +10kg", series: 4, reps: "iso", repos: 120 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Circuit",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:30}, {label:"tractions", valeur:18}, {label:"pompes", valeur:40}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:25}, {label:"tractions", valeur:16}, {label:"pompes", valeur:35}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:20}, {label:"tractions", valeur:14}, {label:"pompes", valeur:30}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:15}, {label:"tractions", valeur:12}, {label:"pompes", valeur:25}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:10}, {label:"tractions", valeur:10}, {label:"pompes", valeur:20}, {label:"MU", valeur:2}] }
                ]
              },
              { nom: "D\u00e9gressif Dips \u2014 8 +10kg / 12 +5kg / 20 pdc = 40 dips", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "D\u00e9gressif Pompes \u2014 12 +10kg / 18 +5kg / 20 pdc = 50 pompes", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Back Lever", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Cluster MU + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "Cluster MU \u2014 1 MU / 5'' / 2 MU / 5'' / 3 MU / 5'' / 3 MU = 9 MU", series: 3, reps: "cluster", repos: 240 },
              { nom: "Protocole Tractions \u2014 22 tractions", series: 1, reps: 22, repos: 0 },
              { nom: "Protocole Tractions \u2014 18 tractions", series: 1, reps: 18, repos: 0 },
              { nom: "Protocole Tractions \u2014 12 tractions", series: 1, reps: 12, repos: 0 },
              { nom: "Protocole Tractions \u2014 10 tractions", series: 1, reps: 10, repos: 150 },
              {
                nom: "Isom\u00e9trie t\u00eate en haut + MU deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"iso (s)", valeur:20}, {label:"MU deadstop", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso (s)", valeur:18}, {label:"MU deadstop", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso (s)", valeur:16}, {label:"MU deadstop", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso (s)", valeur:14}, {label:"MU deadstop", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso (s)", valeur:12}, {label:"MU deadstop", valeur:1}] }
                ]
              },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Dips/Pompes + Rappel OAH",
            duree: 76,
            exercices: [
              {
                nom: "Dips/Pompes +10kg deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips", valeur:30}, {label:"pompes +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:25}, {label:"pompes +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:20}, {label:"pompes +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:20}, {label:"pompes +10kg", valeur:10}] }
                ]
              },
              {
                nom: "Pompes/Dips +10kg deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"pompes", valeur:40}, {label:"dips +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:35}, {label:"dips +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:30}, {label:"dips +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:25}, {label:"dips +10kg", valeur:10}] }
                ]
              },
              {
                nom: "Routine dips bar + pompes diamants TEMPO 2/1/X/1",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips bar", valeur:20}, {label:"pompes diamants", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips bar", valeur:15}, {label:"pompes diamants", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips bar", valeur:10}, {label:"pompes diamants", valeur:10}] }
                ]
              },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 4, reps: 10, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 2, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +2,5kg", series: 4, reps: 3, repos: 180 },
              { nom: "Weighted MU +2,5kg", series: 4, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique \u2014 position full planche", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90, note: "entrer et sortir lentement" }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Set sur barre +2kg + Rappel Front Lever",
            duree: 74,
            exercices: [
              {
                nom: "Set sur barre +2kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:5}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:4}, {label:"dips bar", valeur:9}, {label:"tractions", valeur:9}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:7}, {label:"tractions", valeur:7}] }
                ]
              },
              {
                nom: "MU + Tractions +12kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU", valeur:6}, {label:"tractions +12kg", valeur:14}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:5}, {label:"tractions +12kg", valeur:13}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:4}, {label:"tractions +12kg", valeur:12}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:3}, {label:"tractions +12kg", valeur:11}] }
                ]
              },
              { nom: "Isom\u00e9trie \u2014 10'' t\u00eate au-dessus +10kg + 10'' t\u00eate au-dessus contre \u00e9lastique + 10'' t\u00eate au-dessus pdc", series: 4, reps: "iso", repos: 120 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits +2kg + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Circuit +2kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU +2kg", valeur:1}, {label:"MU", valeur:2}, {label:"dips +10kg", valeur:5}, {label:"dips", valeur:10}, {label:"tractions +10kg", valeur:4}, {label:"tractions", valeur:8}, {label:"pompes", valeur:30}] },
                  { repos: 150, mouvements: [{label:"MU +2kg", valeur:2}, {label:"dips +2kg", valeur:20}, {label:"tractions +2kg", valeur:16}, {label:"pompes +5kg", valeur:30}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU +2kg", valeur:2}, {label:"dips +2kg", valeur:15}, {label:"tractions +2kg", valeur:14}, {label:"pompes +5kg", valeur:25}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU +2kg", valeur:2}, {label:"dips +2kg", valeur:10}, {label:"tractions +2kg", valeur:12}, {label:"pompes +5kg", valeur:20}, {label:"MU", valeur:2}] }
                ]
              },
              { nom: "D\u00e9gressif Dips \u2014 10 +10kg / 14 +5kg / 22 pdc = 46 dips", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "D\u00e9gressif Pompes \u2014 14 +10kg / 20 +5kg / 22 pdc = 56 pompes", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Back Lever", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Cluster MU +1kg + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "Cluster MU +1kg \u2014 1 MU / 5'' / 2 MU / 5'' / 3 MU / 5'' / 3 MU = 9 MU", series: 2, reps: "cluster", repos: 240 },
              { nom: "Protocole Tractions +2kg \u2014 22 tractions", series: 1, reps: 22, repos: 0 },
              { nom: "Protocole Tractions +2kg \u2014 18 tractions", series: 1, reps: 18, repos: 0 },
              { nom: "Protocole Tractions +2kg \u2014 12 tractions", series: 1, reps: 12, repos: 0 },
              { nom: "Protocole Tractions +2kg \u2014 10 tractions", series: 1, reps: 10, repos: 150 },
              { nom: "Finisher \u2014 4 tractions / 10'' t\u00eate au-dessus / 4 tractions / 10'' t\u00eate en dessous / 4 tractions / 20'' bras tendus", series: 3, reps: "finisher", repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Dips/Pompes +15kg + Rappel OAH",
            duree: 76,
            exercices: [
              {
                nom: "Dips/Pompes +15kg deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips", valeur:35}, {label:"pompes +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:30}, {label:"pompes +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:25}, {label:"pompes +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:20}, {label:"pompes +15kg", valeur:8}] }
                ]
              },
              {
                nom: "Pompes/Dips +15kg deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"pompes", valeur:45}, {label:"dips +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:40}, {label:"dips +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:35}, {label:"dips +15kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:30}, {label:"dips +15kg", valeur:8}] }
                ]
              },
              { nom: "EMOM Dips Bar 6 min \u2014 10 dips bar contre \u00e9lastique", series: 6, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 3, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Weighted MU +2,5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique \u2014 position full planche", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90, note: "entrer et sortir lentement" }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Set sur barre +4kg + Rappel Front Lever",
            duree: 74,
            exercices: [
              {
                nom: "Set sur barre +4kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:5}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:4}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] }
                ]
              },
              {
                nom: "MU + Tractions +15kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU", valeur:7}, {label:"tractions +15kg", valeur:13}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:6}, {label:"tractions +15kg", valeur:12}] },
                  { repos: 150, mouvements: [{label:"MU", valeur:5}, {label:"tractions +15kg", valeur:11}] }
                ]
              },
              { nom: "Contraste de puissance \u2014 8 tractions contre \u00e9lastique + 8 tractions avec \u00e9lastique", series: 4, reps: "contraste", repos: 120 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits +4kg + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Circuit +4kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU +4kg", valeur:2}, {label:"dips +5kg", valeur:20}, {label:"tractions +5kg", valeur:16}, {label:"pompes +10kg", valeur:30}, {label:"MU", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU +4kg", valeur:2}, {label:"dips +5kg", valeur:15}, {label:"tractions +5kg", valeur:14}, {label:"pompes +10kg", valeur:25}, {label:"MU +2kg", valeur:2}] },
                  { repos: 150, mouvements: [{label:"MU +4kg", valeur:2}, {label:"dips +5kg", valeur:10}, {label:"tractions +5kg", valeur:12}, {label:"pompes +10kg", valeur:20}, {label:"MU +2kg", valeur:2}] }
                ]
              },
              { nom: "D\u00e9gressif Dips \u2014 8 +15kg / 12 +10kg / 20 +2kg = 40 dips", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "D\u00e9gressif Pompes \u2014 12 +15kg / 18 +10kg / 20 contre \u00e9lastique = 50 pompes", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Back Lever", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Potentiation Traction + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "Potentiation Traction bonus \u2014 3 pdc / 3 +20kg / 1 +30kg / 1 +40kg", series: 1, reps: "potentiation", repos: 90 },
              { nom: "Protocole Tractions +4kg \u2014 22 tractions", series: 1, reps: 22, repos: 0 },
              { nom: "Protocole Tractions +4kg \u2014 18 tractions", series: 1, reps: 18, repos: 0 },
              { nom: "Protocole Tractions +4kg \u2014 12 tractions", series: 1, reps: 12, repos: 0 },
              { nom: "Protocole Tractions +4kg \u2014 10 tractions", series: 1, reps: 10, repos: 150 },
              {
                nom: "Dips + dips lest\u00e9s +20kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips", valeur:40}, {label:"dips +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:30}, {label:"dips +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:20}, {label:"dips +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"dips", valeur:20}, {label:"dips +20kg", valeur:5}] }
                ]
              },
              {
                nom: "Pompes + pompes lest\u00e9es +20kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"pompes", valeur:50}, {label:"pompes +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:40}, {label:"pompes +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:30}, {label:"pompes +20kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"pompes", valeur:30}, {label:"pompes +20kg", valeur:5}] }
                ]
              },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Cluster MU +2kg + Rappel OAH",
            duree: 76,
            exercices: [
              { nom: "Cluster MU +2kg \u2014 1 MU / 5'' / 2 MU / 5'' / 3 MU / 5'' / 2 MU = 8 MU", series: 2, reps: "cluster", repos: 270 },
              { nom: "Technique Muscle Up \u2014 1 MU + 1 MU t\u00eate en dessous", series: 6, reps: "technique", repos: 120 },
              { nom: "EMOM 6 min \u2014 8'' isom\u00e9trie milieu dips bar + 5 dips bar max de puissance", series: 6, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +7,5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Weighted MU +5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique \u2014 position full planche", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90, note: "entrer et sortir lentement" }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Top Set +5kg + Rappel Front Lever",
            duree: 74,
            exercices: [
              {
                nom: "Top Set +5kg",
                lignes: [
                  { repos: 180, mouvements: [{label:"MU", valeur:6}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] }
                ]
              },
              { nom: "Transition \u2014 10 tractions + 1 MU / 8 tractions + 1 MU / 6 tractions + 1 MU", series: 3, reps: "transition", repos: 120 },
              {
                nom: "MU + Tractions +17kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"MU +1kg", valeur:6}, {label:"tractions +17kg", valeur:12}] },
                  { repos: 150, mouvements: [{label:"MU +1kg", valeur:5}, {label:"tractions +17kg", valeur:11}] },
                  { repos: 150, mouvements: [{label:"MU +1kg", valeur:4}, {label:"tractions +17kg", valeur:10}] }
                ]
              },
              { nom: "EMOM 8 min \u2014 Tours alternant t\u00eate dessous/dessus +5kg puis +10kg", series: 8, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits +5kg + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Circuit +5kg",
                lignes: [
                  { repos: 180, mouvements: [{label:"MU +5kg", valeur:2}, {label:"dips +5kg", valeur:30}, {label:"tractions +5kg", valeur:18}, {label:"pompes +10kg", valeur:35}, {label:"MU +1kg", valeur:2}] },
                  { repos: 180, mouvements: [{label:"MU +5kg", valeur:2}, {label:"dips +5kg", valeur:20}, {label:"tractions +5kg", valeur:16}, {label:"pompes +10kg", valeur:30}, {label:"MU +2kg", valeur:2}] },
                  { repos: 180, mouvements: [{label:"MU +5kg", valeur:2}, {label:"dips +5kg", valeur:15}, {label:"tractions +5kg", valeur:14}, {label:"pompes +10kg", valeur:25}, {label:"MU", valeur:2}] }
                ]
              },
              { nom: "D\u00e9gressif Dips \u2014 10 +15kg / 15 +10kg / 25 pdc = 50 dips", series: 2, reps: "d\u00e9gressif", repos: 180 },
              { nom: "D\u00e9gressif Pompes \u2014 15 +15kg / 20 +10kg / 25 contre \u00e9lastique = 60 pompes", series: 2, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Back Lever", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Potentiation Traction + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "Potentiation Traction bonus \u2014 3 pdc / 3 +20kg / 1 +30kg / 1 +40kg", series: 1, reps: "potentiation", repos: 90 },
              { nom: "Protocole Tractions +6kg \u2014 22 tractions", series: 1, reps: 22, repos: 0 },
              { nom: "Protocole Tractions +6kg \u2014 18 tractions", series: 1, reps: 18, repos: 0 },
              { nom: "Protocole Tractions +6kg \u2014 12 tractions", series: 1, reps: 12, repos: 0 },
              { nom: "Protocole Tractions +6kg \u2014 10 tractions", series: 1, reps: 10, repos: 150 },
              { nom: "Dips +5kg \u2014 45 dips", series: 1, reps: 45, repos: 120 },
              { nom: "Dips +5kg \u2014 38 dips", series: 1, reps: 38, repos: 120 },
              { nom: "Dips +5kg \u2014 32 dips", series: 1, reps: 32, repos: 120 },
              { nom: "EMOM 6 min Pompes \u2014 10'' isom\u00e9trie milieu + 8 pompes", series: 6, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Cluster MU +2kg + Rappel OAH",
            duree: 76,
            exercices: [
              { nom: "Cluster MU +2kg \u2014 1 MU / 5'' / 2 MU / 5'' / 3 MU / 5'' / 3 MU = 9 MU", series: 2, reps: "cluster", repos: 270 },
              { nom: "Technique Muscle Up +1kg \u2014 1 MU + 1 MU t\u00eate en dessous", series: 3, reps: "technique", repos: 120 },
              { nom: "EMOM 5 min +2kg \u2014 8'' isom\u00e9trie milieu dips bar + 5 dips bar max de puissance", series: 5, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +7,5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Weighted MU +5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique \u2014 position full planche", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90, note: "entrer et sortir lentement" }
            ]
          }
        }
      },
      s5: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Set sur barre d\u00e9gressif + Rappel Front Lever",
            duree: 74,
            exercices: [
              { nom: "Set sur barre d\u00e9gressif 1 \u2014 4 MU / 4 dips bar / 4 tractions +5kg / 4 MU / 4 dips bar / 4 tractions pdc / 4 MU / 4 dips bar / 4 tractions \u00e9lastique", series: 1, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Set sur barre d\u00e9gressif 2 \u2014 3 MU / 3 dips bar / 3 tractions +5kg / 3 MU / 3 dips bar / 3 tractions pdc / 3 MU / 3 dips bar / 3 tractions \u00e9lastique", series: 1, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Transition \u2014 8 tractions + 1 MU", series: 2, reps: "transition", repos: 120 },
              {
                nom: "MU / Tractions +20kg",
                lignes: [
                  { repos: 150, mouvements: [{label:"tractions", valeur:20}, {label:"tractions +20kg", valeur:3}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:18}, {label:"tractions +20kg", valeur:4}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:16}, {label:"tractions +20kg", valeur:5}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:14}, {label:"tractions +20kg", valeur:6}] }
                ]
              },
              {
                nom: "Finisher \u2014 t\u00eate au-dessus + chest to bar +5kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"iso t\u00eate dessus (s)", valeur:20}, {label:"chest to bar +5kg", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso t\u00eate dessus (s)", valeur:15}, {label:"chest to bar +5kg", valeur:1}] },
                  { repos: 120, mouvements: [{label:"iso t\u00eate dessus (s)", valeur:10}, {label:"chest to bar +5kg", valeur:1}] }
                ]
              },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Circuit",
                lignes: [
                  { repos: 180, mouvements: [{label:"MU", valeur:4}, {label:"dips", valeur:40}, {label:"tractions", valeur:15}, {label:"pompes", valeur:50}, {label:"MU", valeur:4}] },
                  { repos: 180, mouvements: [{label:"MU", valeur:3}, {label:"dips", valeur:35}, {label:"tractions", valeur:12}, {label:"pompes", valeur:45}, {label:"MU deadstop", valeur:1}] },
                  { repos: 180, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:30}, {label:"tractions", valeur:9}, {label:"pompes", valeur:40}, {label:"MU deadstop", valeur:1}] }
                ]
              },
              { nom: "D\u00e9gressif Dips \u2014 30 dips / 10 dips deadstop +20kg", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "D\u00e9gressif Pompes \u2014 40 pompes / 10 pompes deadstop +20kg", series: 3, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +7,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Back Lever", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Potentiation Traction + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "Potentiation Traction bonus \u2014 3 pdc / 3 +20kg / 1 +30kg / 1 +40kg", series: 1, reps: "potentiation", repos: 90 },
              { nom: "Protocole Tractions +8kg \u2014 22 tractions", series: 1, reps: 22, repos: 0 },
              { nom: "Protocole Tractions +8kg \u2014 18 tractions", series: 1, reps: 18, repos: 0 },
              { nom: "Protocole Tractions +8kg \u2014 12 tractions", series: 1, reps: 12, repos: 0 },
              { nom: "Protocole Tractions +8kg \u2014 10 tractions", series: 1, reps: 10, repos: 150 },
              { nom: "Dips +5kg \u2014 45 dips", series: 1, reps: 45, repos: 120 },
              { nom: "Dips +5kg \u2014 40 dips", series: 1, reps: 40, repos: 120 },
              { nom: "Dips +5kg \u2014 35 dips", series: 1, reps: 35, repos: 120 },
              { nom: "Dips +5kg \u2014 30 dips", series: 1, reps: 30, repos: 120 },
              { nom: "EMOM 6 min Pompes \u2014 10'' isom\u00e9trie milieu + 8 pompes", series: 6, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 MU + Rappel OAH",
            duree: 76,
            exercices: [
              { nom: "Muscle Ups \u2014 7 MU + 2 MU deadstop +2kg", series: 3, reps: "cluster", repos: 240 },
              { nom: "Technique Muscle Up \u2014 1 MU + 1 MU t\u00eate au-dessus", series: 3, reps: "technique", repos: 120 },
              { nom: "Technique Muscle Up +1kg \u2014 1 MU + 1 MU t\u00eate en dessous", series: 3, reps: "technique", repos: 120 },
              { nom: "EMOM 5 min contre \u00e9lastique \u2014 8'' isom\u00e9trie milieu dips bar + 5 dips bar max de puissance", series: 5, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +10kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 5, repos: 180 },
              { nom: "Weighted MU +5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique \u2014 position full planche", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90, note: "entrer et sortir lentement" }
            ]
          }
        }
      },
      s6: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load + Rappel Front Lever",
            duree: 74,
            exercices: [
              { nom: "Set sur barre d\u00e9gressif 1 \u2014 5 MU / 5 dips bar / 5 tractions +5kg / 5 MU / 5 dips bar / 5 tractions pdc", series: 1, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Set sur barre d\u00e9gressif 2 \u2014 4 MU / 4 dips bar / 4 tractions +5kg / 4 MU / 4 dips bar / 4 tractions pdc", series: 1, reps: "d\u00e9gressif", repos: 180 },
              { nom: "Transition \u2014 8 tractions + 1 MU", series: 2, reps: "transition", repos: 120 },
              {
                nom: "Tractions + isom\u00e9trie t\u00eate au-dessus",
                lignes: [
                  { repos: 150, mouvements: [{label:"tractions", valeur:25}, {label:"iso t\u00eate dessus (s)", valeur:20}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:20}, {label:"iso t\u00eate dessus (s)", valeur:20}] },
                  { repos: 150, mouvements: [{label:"tractions +10kg", valeur:10}, {label:"iso t\u00eate dessus (s)", valeur:15}] },
                  { repos: 150, mouvements: [{label:"tractions +10kg", valeur:10}, {label:"iso t\u00eate dessus (s)", valeur:15}] }
                ]
              },
              { nom: "EMOM 6 min \u2014 Tour 1: 10'' iso t\u00eate en dessous + 3 tractions / Tour 2: 20'' bras tendus + 2 tractions deadstop", series: 6, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Enchainement d\u00e9load + Rappel Planche",
            duree: 77,
            exercices: [
              {
                nom: "Enchainement d\u00e9load",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips", valeur:40}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions", valeur:20}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"pompes", valeur:50}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips +5kg", valeur:20}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions +5kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"pompes +10kg", valeur:25}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions +10kg", valeur:5}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"pompes +20kg", valeur:10}] }
                ]
              },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux + Croix de fer d\u00e9load",
            duree: 71,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer d\u00e9load \u2014 Isom\u00e9trie position actuelle", series: 3, reps: "max temps", repos: 180 },
              { nom: "Croix de fer d\u00e9load \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer d\u00e9load \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180 },
              { nom: "L-sit anneaux", series: 2, reps: "max temps", repos: 90 },
              { nom: "Back Lever", series: 2, reps: "max temps", repos: 120 },
              { nom: "Dips anneaux lest\u00e9s +10kg", series: 2, reps: 8, repos: 120 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 EMOM d\u00e9load + Rappel HSPU",
            duree: 75,
            exercices: [
              { nom: "EMOM 5 min \u2014 1 chest pull up prise muscle up contre \u00e9lastique", series: 5, reps: "emom", repos: 0 },
              { nom: "EMOM 5 min \u2014 8 dips contre \u00e9lastique max de vitesse", series: 5, reps: "emom", repos: 0 },
              { nom: "EMOM 5 min \u2014 5 tractions contre \u00e9lastique", series: 5, reps: "emom", repos: 0 },
              { nom: "EMOM 5 min \u2014 10 pompes contre \u00e9lastique", series: 5, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Technique MU d\u00e9load + Rappel OAH",
            duree: 76,
            exercices: [
              { nom: "Cluster MU +2kg \u2014 1 MU / 5'' / 2 MU / 5'' / 3 MU / 5'' / 3 MU = 9 MU", series: 2, reps: "cluster", repos: 270 },
              { nom: "Technique Muscle Up +1kg \u2014 1 MU + 1 MU t\u00eate en dessous", series: 3, reps: "technique", repos: 120 },
              { nom: "EMOM 5 min +2kg \u2014 8'' isom\u00e9trie milieu dips bar + 5 dips bar max de puissance", series: 5, reps: "emom", repos: 0 },
              { nom: "Rappel \u2014 OAH main dominante", series: 3, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 3, reps: "max temps", repos: 150, objectif: 3 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU d\u00e9load",
            duree: 79,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 6, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 4, reps: 3, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 180 },
              { nom: "Weighted MU +2,5kg", series: 3, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "MU technique \u2014 focus transition", series: 8, reps: 1, repos: 90, note: "s'arr\u00eater en haut, analyser la position" },
              { nom: "MU deadstop \u2014 bras tendus complets", series: 6, reps: 1, repos: 120, note: "repartir de z\u00e9ro" }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche d\u00e9di\u00e9e d\u00e9load",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Straddle Planche", series: 3, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 2 — FORCE =====
  c2: {
    nom: "Cycle 2 \u2014 Force",
    objectif: "D\u00e9passer les records actuels. Tractions max +55kg \u2192 +60kg+. Dips max +72kg \u2192 +80kg+. MU max +10kg \u2192 +12kg+. Principe pyramide : monter au max, descente ench\u00ee\u00een\u00e9e sans repos.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +35kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +7kg", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +20kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +40kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +45kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +7kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +25kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +55kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux 100% Croix de fer",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +35kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +5kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +25kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +40kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +45kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +5kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +30kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +55kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions +10% + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +42kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +8kg", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +22kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +47kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips +10% + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +55kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +8kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +28kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +65kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux 100% Croix de fer",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +42kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +6kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +28kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +47kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +55kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +6kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +35kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +65kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions +15% + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +48kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +9kg", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +25kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +53kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips +15% + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +63kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +9kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +32kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +72kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux 100% Croix de fer",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +7,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +48kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +7kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +32kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +53kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +63kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +7kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +40kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +72kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions surcharge max + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +53kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +10kg", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +28kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +58kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips surcharge max + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +70kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +10kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +38kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +78kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux 100% Croix de fer",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +10kg", series: 3, reps: "max temps", repos: 180, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +53kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +8kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +35kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +58kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +70kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +8kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +45kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +78kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      },
      s5: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions PR week + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +58kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +12kg", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +30kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +62kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips PR week + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +76kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s +12kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +42kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +83kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux 100% Croix de fer",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +12,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +58kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +10kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +38kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +62kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +76kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s +10kg", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +48kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +83kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 6, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 6, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 5, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      },
      s6: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramide Tractions d\u00e9load + Rappel Front Lever",
            duree: 88,
            exercices: [
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +35kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s pdc", series: 6, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Iso Tractions Lest\u00e9e +20kg \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +40kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Pyramide Dips d\u00e9load + Rappel Planche",
            duree: 85,
            exercices: [
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc \u2192 +10kg \u2192 +20kg \u2192 +30kg \u2192 +45kg \u2014 descente ench\u00ee\u00een\u00e9e sans repos", series: 1, reps: "pyramide", repos: 180, note: "3min en mont\u00e9e entre chaque palier" },
              { nom: "MU Lest\u00e9s pdc", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +25kg \u2014 15'' bas / 15'' milieu / 15'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +55kg", series: 4, reps: 3, repos: 180, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux Croix de fer d\u00e9load",
            duree: 52,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer d\u00e9load \u2014 Isom\u00e9trie position actuelle", series: 3, reps: "max temps", repos: 180 },
              { nom: "Croix de fer d\u00e9load \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer d\u00e9load \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Force pure Tractions d\u00e9load + Rappel Front Lever",
            duree: 86,
            exercices: [
              { nom: "Tractions lest\u00e9es +35kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s pdc", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e +20kg \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Tractions Lest\u00e9s +40kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 3, reps: 5, repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force pure Dips d\u00e9load + Rappel Planche",
            duree: 90,
            exercices: [
              { nom: "Dips lest\u00e9s +45kg", series: 5, reps: 3, repos: 240 },
              { nom: "MU Lest\u00e9s pdc", series: 5, reps: 1, repos: 180 },
              { nom: "Iso Dips Lest\u00e9e +25kg \u2014 20'' bas / 20'' milieu / 20'' bras tendus", series: 3, reps: "iso", repos: 150 },
              { nom: "N\u00e9gatifs Dips Lest\u00e9s +55kg", series: 4, reps: 2, repos: 210, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Rappel \u2014 Planche Lean avec \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 Tractions d\u00e9load + Rappel HSPU",
            duree: 79,
            exercices: [
              { nom: "Tractions explosives poitrine haute +10kg", series: 4, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 4, reps: 2, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Tractions contre \u00e9lastique fort", series: 3, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 HSPU strict", series: 4, reps: "max", repos: 150, objectif: 6 },
              { nom: "Rappel \u2014 HSPU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Rappel \u2014 HSPU d\u00e9ficit sur parallettes", series: 3, reps: "max", repos: 150, objectif: 5 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Explosivit\u00e9 Dips d\u00e9load + Rappel OAH + Planche",
            duree: 86,
            exercices: [
              { nom: "Dips explosifs +15kg", series: 4, reps: 5, repos: 150 },
              { nom: "MU explosifs pdc \u2014 vitesse maximale", series: 4, reps: 2, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips contre \u00e9lastique fort", series: 3, reps: 5, repos: 120 },
              { nom: "Rappel \u2014 OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Rappel \u2014 OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "Rappel \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Rappel \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 20 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 3 — SKILL =====
  c3: {
    nom: "Cycle 3 \u2014 Skill",
    objectif: "Progresser sur les figures techniques. Planche priorit\u00e9 absolue 4x/semaine. Croix de fer 2x/semaine. OAH 3x/semaine. HSPU 2x/semaine. Traction 1 bras 2x/semaine. Front Lever 2x/semaine.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 6, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 },
              { nom: "Straddle Planche", series: 4, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 4, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 6 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 8 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 6, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 },
              { nom: "Straddle Planche", series: 4, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 4, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 6 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 8 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 6, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +12,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +7,5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 },
              { nom: "Straddle Planche", series: 4, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 4, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 6 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +12,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +7,5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 8 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 6, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +12,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +7,5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 },
              { nom: "Straddle Planche", series: 4, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 4, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 6 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +12,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +7,5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +5kg", series: 3, reps: "max temps", repos: 180, objectif: 8 }
            ]
          }
        }
      },
      s5: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 6, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 5, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 5, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 4, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +15kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +10kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 },
              { nom: "Straddle Planche", series: 4, reps: "max temps", repos: 150, objectif: 18 },
              { nom: "Planche \u00e9lastique", series: 4, reps: "max temps", repos: 120, objectif: 25 },
              { nom: "Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer \u2014 Isom\u00e9trie position actuelle", series: 5, reps: "max temps", repos: 180, objectif: 6 },
              { nom: "Croix de fer \u2014 Descentes lentes", series: 4, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer \u2014 Excentriques lourds", series: 3, reps: 1, repos: 210, note: "descente tr\u00e8s lente" },
              { nom: "Croix de fer \u2014 Weighted support +7,5kg", series: 3, reps: "max temps", repos: 180, objectif: 10 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 7 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +15kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +10kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 6, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "OAH main non dominante", series: 6, reps: "max temps", repos: 150, objectif: 4 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 5 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 5 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +7,5kg", series: 3, reps: "max temps", repos: 180, objectif: 8 }
            ]
          }
        }
      },
      s6: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Traction 1 bras + Front Lever d\u00e9load + Rappel Force",
            duree: 90,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 jambes pli\u00e9es, main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180, note: "tout donner" },
              { nom: "Front Lever \u2014 Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Rappel Force \u2014 Tractions lest\u00e9es +55kg", series: 3, reps: 3, repos: 210 },
              { nom: "Rappel Force \u2014 Dips lest\u00e9s +72kg", series: 3, reps: 3, repos: 210 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Planche + HSPU d\u00e9load",
            duree: 86,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Pseudo pompes planche", series: 2, reps: 8, repos: 60 },
              { nom: "Straddle Planche", series: 3, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 6 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 OAH + Planche d\u00e9load",
            duree: 76,
            exercices: [
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 4 },
              { nom: "Straddle Planche", series: 3, reps: "max temps", repos: 150, objectif: 15 },
              { nom: "Planche \u00e9lastique", series: 3, reps: "max temps", repos: 120, objectif: 20 },
              { nom: "Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Straddle Planche dynamique", series: 2, reps: 5, repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Croix de fer + Planche l\u00e9g\u00e8re d\u00e9load",
            duree: 74,
            exercices: [
              { nom: "Support anneaux gainage", series: 3, reps: "20s", repos: 45, note: "bras tendus corps gain\u00e9" },
              { nom: "Croix de fer d\u00e9load \u2014 Isom\u00e9trie position actuelle", series: 3, reps: "max temps", repos: 180 },
              { nom: "Croix de fer d\u00e9load \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer d\u00e9load \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 3, reps: "max temps", repos: 90, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 3, reps: "max temps", repos: 90, objectif: 15 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 HSPU + OAH d\u00e9load",
            duree: 82,
            exercices: [
              { nom: "HSPU strict", series: 5, reps: "max", repos: 150, objectif: 6 },
              { nom: "HSPU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "HSPU d\u00e9ficit sur parallettes +5kg", series: 4, reps: "max", repos: 150, objectif: 5 },
              { nom: "HSPU isom\u00e9trie pdc", series: 3, reps: "max temps", repos: 120, note: "tenir \u00e0 mi-chemin" },
              { nom: "Handstand libre \u2014 \u00e9quilibre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "OAH main dominante", series: 4, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "OAH main non dominante", series: 4, reps: "max temps", repos: 150, objectif: 3 },
              { nom: "OAH 2 doigts \u2014 les deux mains ench\u00ee\u00een\u00e9es", series: 4, reps: "max temps", repos: 120, objectif: 4 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Front Lever + Traction 1 bras l\u00e9g\u00e8re",
            duree: 73,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Rappel \u2014 Full Front Lever tentatives", series: 5, reps: "max temps", repos: 150, objectif: 10 },
              { nom: "Rappel \u2014 Straddle Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Rappel \u2014 Front Lever Raises", series: 4, reps: 5, repos: 120 },
              { nom: "Front Lever N\u00e9gatifs", series: 4, reps: 1, repos: 120, note: "descente tr\u00e8s lente" },
              { nom: "Traction 1 bras \u00e9lastique fin \u2014 main droite + main gauche ench\u00ee\u00een\u00e9es", series: 4, reps: "1bras", repos: 180 },
              { nom: "N\u00e9gatifs 1 bras \u2014 main droite + main gauche", series: 3, reps: "1bras", repos: 180, note: "descente 8 secondes" },
              { nom: "Tentatives libres \u2014 main droite + main gauche", series: 2, reps: "1bras", repos: 180 }
            ]
          },
          s7: {
            jour: "Dimanche",
            nom: "S\u00e9ance 7 \u2014 Planche l\u00e9g\u00e8re + Croix de fer l\u00e9g\u00e8re",
            duree: 65,
            exercices: [
              { nom: "Protraction scapulaire", series: 2, reps: 10, repos: 45 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Planche \u00e9lastique", series: 4, reps: "max temps", repos: 90, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Advanced Tuck Planche", series: 4, reps: "max temps", repos: 90, objectif: 15 },
              { nom: "Planche l\u00e9g\u00e8re \u2014 Straddle Planche dynamique", series: 3, reps: 5, repos: 90 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Rotation \u00e9paules anneaux", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Isom\u00e9trie position actuelle", series: 4, reps: "max temps", repos: 180, objectif: 4 },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Descentes lentes", series: 3, reps: 3, repos: 180, note: "descendre 1-2 cm, tenir 3s, remonter" },
              { nom: "Croix de fer l\u00e9g\u00e8re \u2014 Weighted support +2,5kg", series: 3, reps: "max temps", repos: 180, objectif: 6 }
            ]
          }
        }
      }
    }
  }
};