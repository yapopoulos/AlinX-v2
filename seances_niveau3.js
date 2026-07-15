// ============ SÉANCES NIVEAU 3 — CONFIRMÉ — ACCUMULATION / FORCE / SKILL ============
// 12 semaines — 3 cycles — 6 séances/semaine (Lundi au Samedi)

var SEANCES_NIVEAU3 = {

  // ===== CYCLE 1 — ACCUMULATION =====
  c1: {
    nom: "Cycle 1 \u2014 Accumulation",
    objectif: "D\u00e9velopper le volume et la densit\u00e9 d\u2019entra\u00eenement sur des volumes \u00e9lev\u00e9s. Semaine 4 = d\u00e9load sur les s\u00e9ances Anneaux et Handstand/MU uniquement.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides",
            duree: 70,
            exercices: [
              { nom: "Pyramide Muscle Ups \u2014 1/2/3/2/1 = 9 reps", series: 1, reps: "pyramide", repos: 150 },
              { nom: "Pyramide Tractions \u2014 5/10/15/10/5 = 45 reps", series: 1, reps: "pyramide", repos: 120 },
              { nom: "Pyramide Dips \u2014 10/20/30/20/10 = 90 reps", series: 1, reps: "pyramide", repos: 90 },
              { nom: "Pyramide Pompes \u2014 15/25/35/25/15 = 115 reps", series: 1, reps: "pyramide", repos: 60 },
              { nom: "Volume Tractions/Pompes/Dips \u2014 10 tractions + 20 pompes + iso, ench\u00ee\u00een\u00e9 sans repos", series: 4, reps: "volume", repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits",
            duree: 65,
            exercices: [
              { nom: "Circuit 1 \u2014 2 MU / 25 dips / 14 tractions / 30 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 2 \u2014 1 MU / 20 dips / 12 tractions / 25 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 3 \u2014 1 traction prise MU +10kg / 15 dips / 10 tractions / 20 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Routine 1 \u2014 5 tractions / 5'' iso menton haut / 5 tractions / 5'' iso dessous / 5 tractions / 5'' iso bas", series: 2, reps: "routine", repos: 120 },
              { nom: "Routine 2 \u2014 10'' iso menton haut / 10'' iso t\u00eate dessous / 10'' bras tendus +10kg", series: 1, reps: "routine", repos: 120 },
              { nom: "Routine 3 \u2014 10'' iso menton haut / 10'' iso t\u00eate dessous / 10'' bras tendus", series: 1, reps: "routine", repos: 120 },
              { nom: "EMOM 6 min \u2014 Tour 1 : Dips iso 10'' milieu + 6 dips \u2014 Tour 2 : Pompes iso 10'' milieu + 10 pompes", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "Tuck Front Lever lest\u00e9 +5kg", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tractions anneaux lest\u00e9es +10kg", series: 4, reps: 6, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +10kg", series: 4, reps: 8, repos: 150 },
              { nom: "Finisher \u2014 Mont\u00e9e/descente croix de fer", series: 4, reps: 4, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Set sur barre",
            duree: 70,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:5}, {label:"MU", valeur:1}, {label:"dips bar", valeur:5}, {label:"tractions", valeur:15}, {label:"iso t\u00eate dessus (s)", valeur:6}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"tractions", valeur:13}, {label:"iso t\u00eate dessus (s)", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:7}, {label:"MU", valeur:1}, {label:"dips bar", valeur:7}, {label:"tractions", valeur:11}, {label:"iso t\u00eate dessus (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:9}, {label:"iso t\u00eate dessus (s)", valeur:12}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:9}, {label:"MU", valeur:1}, {label:"dips bar", valeur:9}, {label:"tractions", valeur:7}, {label:"iso t\u00eate dessus (s)", valeur:14}] }
                ]
              },
              { nom: "D\u00e9gressif Muscle Up \u2014 1 MU +2kg / 2 MU pdc / 3 MU \u00e9lastique", series: 3, reps: "d\u00e9gressif", repos: 150 },
              { nom: "D\u00e9gressif Traction \u2014 8 +5kg / 8 pdc / 8 \u00e9lastique", series: 1, reps: "d\u00e9gressif", repos: 120 },
              { nom: "D\u00e9gressif Dips \u2014 15 +5kg / 15 contre \u00e9lastique / 15 pdc", series: 1, reps: "d\u00e9gressif", repos: 120 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Circuits Vitesse + Deadstop",
            duree: 60,
            exercices: [
              { nom: "Circuit Vitesse 1 \u2014 10 pompes / 5 tractions / 10 dips puis +10kg", series: 1, reps: "circuit", repos: 120 },
              { nom: "Circuit Vitesse 2 \u2014 5 tractions +10kg / 10 dips +10kg / 10 pompes puis pdc", series: 1, reps: "circuit", repos: 120 },
              { nom: "Circuit Deadstop 1 \u2014 5 tr / 10 pu / 15 dips puis +10kg invers\u00e9", series: 1, reps: "circuit", repos: 120 },
              { nom: "Circuit Deadstop 2 \u2014 5 tr +10kg / 5 tr pdc / 10 dips +10kg / 10 dips / 10 pu +10kg / 10 pu", series: 1, reps: "circuit", repos: 120 },
              { nom: "AMRAP 10 min \u2014 10'' t\u00eate au-dessus +15kg / 10'' 90° dips +15kg / 5 tractions deadstop / 5 dips deadstop", series: 1, reps: "AMRAP", repos: 0 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 4, reps: 10, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 2, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +2,5kg", series: 4, reps: 3, repos: 180 },
              { nom: "Weighted MU +2,5kg", series: 4, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Routines + Finisher",
            duree: 70,
            exercices: [
              { nom: "Routine Muscle Ups \u2014 2 MU +2kg / 2 MU pdc", series: 4, reps: "bi-set", repos: 120 },
              { nom: "Routine Tractions \u2014 10 +10kg / 10 pdc", series: 3, reps: "bi-set", repos: 120 },
              { nom: "Routine Dips \u2014 20 +10kg / 20 pdc", series: 3, reps: "bi-set", repos: 120 },
              {
                nom: "Finisher",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips bar", valeur:15}, {label:"tractions ds", valeur:10}, {label:"dips", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips bar", valeur:12}, {label:"tractions ds", valeur:8}, {label:"dips", valeur:12}] },
                  { repos: 120, mouvements: [{label:"dips bar", valeur:9}, {label:"tractions ds", valeur:6}, {label:"dips", valeur:9}] },
                  { repos: 120, mouvements: [{label:"dips bar", valeur:6}, {label:"tractions ds", valeur:4}, {label:"dips", valeur:6}] }
                ]
              }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits",
            duree: 65,
            exercices: [
              { nom: "Circuit 1 \u2014 1 MU +2kg / 2 MU / 5 dips +10kg / 10 dips / 4 tractions +10kg / 8 tractions / 30 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 2 \u2014 15 tractions / 30 dips / 40 pompes / 45'' pause / 7 tr / 15 dips / 20 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 3 \u2014 20'' t\u00eate au-dessus +5kg / 20 dips / 20 pompes / 20'' t\u00eate dessous +5kg", series: 1, reps: "circuit", repos: 150 },
              { nom: "EMOM 6 min \u2014 Tour 1 : 6'' t\u00eate en haut + 4 tractions \u2014 Tour 2 : 6'' t\u00eate dessous + 4 tractions", series: 1, reps: "EMOM", repos: 0 },
              { nom: "EMOM 6 min \u2014 10'' iso bas dips + 10 dips", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +12,5kg", series: 4, reps: "max temps", repos: 90, objectif: 21 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 19 },
              { nom: "One Leg Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "Tuck Front Lever lest\u00e9 +7,5kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tractions anneaux lest\u00e9es +12,5kg", series: 4, reps: 6, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +12,5kg", series: 4, reps: 8, repos: 150 },
              { nom: "Finisher \u2014 Mont\u00e9e/descente croix de fer", series: 4, reps: 5, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Set sur barre",
            duree: 70,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:20}, {label:"tractions +2kg", valeur:16}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:20}, {label:"tractions pdc", valeur:16}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:15}, {label:"tractions +2kg", valeur:12}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:15}, {label:"tractions pdc", valeur:12}] }
                ]
              },
              {
                nom: "Routine Tractions/Bar dips",
                lignes: [
                  { repos: 120, mouvements: [{label:"iso t\u00eate dessus +10kg (s)", valeur:20}, {label:"dips bar", valeur:20}] },
                  { repos: 120, mouvements: [{label:"iso t\u00eate dessous +10kg (s)", valeur:20}, {label:"dips bar", valeur:20}] }
                ]
              },
              {
                nom: "Routine Dips/Tractions",
                lignes: [
                  { repos: 120, mouvements: [{label:"iso bas dips +10kg (s)", valeur:20}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"iso milieu dips +10kg (s)", valeur:20}, {label:"tractions", valeur:10}] }
                ]
              }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Pyramides Iso",
            duree: 65,
            exercices: [
              {
                nom: "Pyramide Iso Traction + Dips bar",
                lignes: [
                  { repos: 120, mouvements: [{label:"t\u00eate dessus (s)", valeur:10}, {label:"iso milieu dips bar +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessus (s)", valeur:15}, {label:"iso milieu dips bar +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessus (s)", valeur:20}, {label:"iso milieu dips bar (s)", valeur:20}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessus (s)", valeur:15}, {label:"iso milieu dips bar +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessus (s)", valeur:10}, {label:"iso milieu dips bar +10kg (s)", valeur:10}] }
                ]
              },
              {
                nom: "Tractions + Dips",
                lignes: [
                  { repos: 120, mouvements: [{label:"t\u00eate dessous (s)", valeur:10}, {label:"iso milieu dips bar +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessous (s)", valeur:15}, {label:"iso milieu dips bar +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessous (s)", valeur:20}, {label:"iso milieu dips bar (s)", valeur:20}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessous (s)", valeur:15}, {label:"iso milieu dips bar +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"t\u00eate dessous (s)", valeur:10}, {label:"iso milieu dips bar +10kg (s)", valeur:10}] }
                ]
              },
              { nom: "AMRAP 10 min \u2014 10'' t\u00eate dessous +5kg / 10 dips bar / 10'' t\u00eate au-dessus +5kg / 5 dips", series: 1, reps: "AMRAP", repos: 0 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 3, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Weighted MU +2,5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Volume max + Routine",
            duree: 75,
            exercices: [
              { nom: "EMOM 6 min \u2014 Transition muscle up : 1 MU / 1 MU t\u00eate en bas", series: 1, reps: "EMOM", repos: 0 },
              { nom: "Tractions", series: 4, reps: 18, repos: 120 },
              { nom: "Dips", series: 4, reps: 35, repos: 120 },
              { nom: "Pompes", series: 4, reps: 40, repos: 120 },
              {
                nom: "Routine +5kg",
                lignes: [
                  { repos: 120, mouvements: [{label:"tractions", valeur:12}, {label:"pompes", valeur:20}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:10}, {label:"pompes", valeur:18}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:8}, {label:"pompes", valeur:16}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:4}, {label:"pompes", valeur:14}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:8}, {label:"pompes", valeur:16}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:10}, {label:"pompes", valeur:18}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:12}, {label:"pompes", valeur:20}] }
                ]
              }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits",
            duree: 70,
            exercices: [
              { nom: "Circuit 1 \u2014 3 MU / 30 dips / 15 tractions / 40 pompes", series: 1, reps: "circuit", repos: 180 },
              { nom: "Circuit 2 \u2014 2 MU / 20 dips / 12 tractions / 30 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 3 \u2014 1 MU / 15 dips +5kg / 10 tractions +5kg / 20 pompes +5kg", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 4 \u2014 10 dips +10kg / 5 tractions +10kg / 15 pompes +10kg", series: 1, reps: "circuit", repos: 150 },
              { nom: "EMOM 6 min \u2014 5 tractions + 8 dips", series: 1, reps: "EMOM", repos: 0 },
              { nom: "EMOM 6 min \u2014 10 pompes + 5 tractions", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +15kg", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "One Leg Front Lever", series: 5, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tuck Front Lever lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Tractions anneaux lest\u00e9es +15kg", series: 4, reps: 6, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 4, reps: 8, repos: 150 },
              { nom: "Finisher \u2014 Mont\u00e9e/descente croix de fer", series: 5, reps: 5, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Sets composites",
            duree: 70,
            exercices: [
              {
                nom: "Set 1",
                lignes: [
                  { repos: 150, mouvements: [{label:"tractions", valeur:2}, {label:"MU one shot", valeur:1}, {label:"pompes", valeur:5}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:4}, {label:"MU one shot", valeur:2}, {label:"pompes", valeur:10}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:6}, {label:"MU", valeur:3}, {label:"pompes", valeur:15}] },
                  { repos: 150, mouvements: [{label:"tractions", valeur:8}, {label:"MU", valeur:4}, {label:"dips", valeur:20}] }
                ]
              },
              {
                nom: "Set 2",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"iso dips bar (s)", valeur:10}, {label:"dips bar +10kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"iso t\u00eate dessus (s)", valeur:10}, {label:"tractions", valeur:5}, {label:"bras tendus +5kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"iso dips bar (s)", valeur:10}, {label:"dips bar", valeur:20}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"iso t\u00eate dessus (s)", valeur:10}, {label:"tractions", valeur:10}, {label:"bras tendus (s)", valeur:10}] }
                ]
              },
              { nom: "EMOM 8 min \u2014 20'' bras tendus + 2 tractions tempo x/2/2/1", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Circuit Push",
            duree: 65,
            exercices: [
              {
                nom: "Circuit Push",
                lignes: [
                  { repos: 120, mouvements: [{label:"iso 90\u00b0 dips +10kg (s)", valeur:10}, {label:"dips", valeur:15}, {label:"pompes", valeur:15}, {label:"dips bar", valeur:15}, {label:"iso 90\u00b0 pompes +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"iso 90\u00b0 dips +10kg (s)", valeur:10}, {label:"dips", valeur:12}, {label:"pompes", valeur:12}, {label:"dips bar", valeur:12}, {label:"iso 90\u00b0 pompes +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"iso 90\u00b0 dips +10kg (s)", valeur:10}, {label:"dips", valeur:9}, {label:"pompes", valeur:9}, {label:"dips bar", valeur:9}, {label:"iso 90\u00b0 pompes +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"iso 90\u00b0 dips +10kg (s)", valeur:10}, {label:"dips", valeur:6}, {label:"pompes", valeur:6}, {label:"dips bar", valeur:6}, {label:"iso 90\u00b0 pompes +10kg (s)", valeur:10}] }
                ]
              },
              { nom: "EMOM Pompes 10 min \u2014 15 pompes + 5'' iso milieu", series: 1, reps: "EMOM", repos: 0 },
              { nom: "AMRAP 8 min \u2014 2 tractions + 5 dips + 10 pompes", series: 1, reps: "AMRAP", repos: 0 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 24 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +7,5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 6, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Weighted MU +5kg", series: 4, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides + Routines lest\u00e9es",
            duree: 65,
            exercices: [
              { nom: "Pyramide Muscle Ups \u2014 2/4/6/4/2", series: 1, reps: "pyramide", repos: 150 },
              { nom: "Pyramide Tractions \u2014 10/15/20/15/10", series: 1, reps: "pyramide", repos: 120 },
              { nom: "Pyramide Dips \u2014 20/30/40/30/20", series: 1, reps: "pyramide", repos: 120 },
              { nom: "Routine Tractions Lest\u00e9e \u2014 15 tractions / 2-4-6-8 deadstop +10kg / 12 tractions", series: 1, reps: "routine", repos: 120 },
              { nom: "Routine Dips Lest\u00e9e \u2014 30 dips / 4-8-12-16 deadstop +10kg / 20 dips", series: 1, reps: "routine", repos: 120 },
              { nom: "EMOM 8 min \u2014 10 bar dips", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Circuits",
            duree: 60,
            exercices: [
              { nom: "Circuit 1 \u2014 4 MU / 32 dips / 18 tractions / 42 pompes", series: 1, reps: "circuit", repos: 180 },
              { nom: "Circuit 2 \u2014 3 MU / 22 dips / 14 tractions / 32 pompes", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 3 \u2014 1 MU / 18 dips +5kg / 12 tractions +5kg / 20 pompes +5kg", series: 1, reps: "circuit", repos: 150 },
              { nom: "EMOM 5 min \u2014 5 tractions + 8 dips +5kg", series: 1, reps: "EMOM", repos: 0 },
              { nom: "EMOM 5 min \u2014 10 pompes + 5 tractions +5kg", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +10kg", series: 3, reps: "max temps", repos: 90 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120 },
              { nom: "Tuck Front Lever lest\u00e9 +7,5kg", series: 3, reps: "max temps", repos: 120 },
              { nom: "Tractions anneaux lest\u00e9es +10kg", series: 3, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +10kg", series: 3, reps: 6, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Set sur barre + Routines",
            duree: 70,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:4}, {label:"dips bar", valeur:15}, {label:"tractions", valeur:18}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:12}, {label:"tractions", valeur:16}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:14}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:12}] }
                ]
              },
              { nom: "Routine 1 \u2014 10 tractions + 20 pompes", series: 4, reps: "bi-set", repos: 120 },
              { nom: "Routine 2 \u2014 20 dips + 10 tractions", series: 4, reps: "bi-set", repos: 120 },
              { nom: "EMOM 6 min \u2014 Tour 1 : 10''/10''/10'' tractions \u2014 Tour 2 : 10''/10''/10'' dips", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Stress + Intermittent",
            duree: 70,
            exercices: [
              { nom: "Stress Traction \u2014 4 pdc / 4 +10kg / 4 +15kg / 4 +10kg / 4 pdc", series: 1, reps: "stress", repos: 210 },
              { nom: "Max tractions one shot +10kg", series: 1, reps: "max", repos: 210 },
              { nom: "5 tr +10kg / 5 tr +15kg / 5 tr +10kg", series: 1, reps: "set", repos: 210 },
              { nom: "Max tractions one shot pdc", series: 1, reps: "max", repos: 0 },
              { nom: "Stress Dips \u2014 6 pdc / 6 +10kg / 6 +15kg / 6 +10kg / 6 pdc", series: 1, reps: "stress", repos: 210 },
              { nom: "Max dips one shot +10kg", series: 1, reps: "max", repos: 210 },
              { nom: "8 dips +10kg / 8 dips +15kg / 8 dips +10kg", series: 1, reps: "set", repos: 210 },
              { nom: "Max dips one shot pdc", series: 1, reps: "max", repos: 0 },
              { nom: "Intermittent Tractions \u2014 5 \u00d7 5 (5'' repos)", series: 1, reps: "intermittent", repos: 0 },
              { nom: "Intermittent Dips \u2014 5 \u00d7 8 (5'' repos)", series: 1, reps: "intermittent", repos: 0 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90 },
              { nom: "Travail \u00e9quilibre libre", series: 6, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU strict sans \u00e9lastique", series: 4, reps: 3, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 180 },
              { nom: "Weighted MU +5kg", series: 3, reps: 1, repos: 180 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 2 — FORCE =====
  c2: {
    nom: "Cycle 2 \u2014 Force",
    objectif: "D\u00e9velopper la force maximale sur charges lourdes. Progression +10% S2, +15% S3 vs S2. Semaine 4 = intensit\u00e9 maximale / d\u00e9load anneaux et handstand.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+15\u2192+20\u2192max\u2192descente encha\u00een\u00e9e", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus +10kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +5kg", series: 5, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 8 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Dips Force",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+15\u2192+20\u2192max\u2192descente encha\u00een\u00e9e", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 15'' bas / 15'' milieu / 15'' bras tendus +10kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +5kg", series: 5, reps: 1, repos: 180 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 12 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux Force",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +15kg", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Tuck Front Lever lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "Tractions anneaux lest\u00e9es +15kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +5kg", series: 6, reps: 1, repos: 180, note: "focus technique" },
              { nom: "Tractions lest\u00e9es lourdes \u2014 charge max", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds \u2014 charge max", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 14 },
              { nom: "Tuck Front Lever lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 11 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force Sp\u00e9cifique MU",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise muscle up lest\u00e9es +10kg", series: 5, reps: 5, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 5, reps: 3, repos: 180 },
              { nom: "Weighted MU +5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU Force",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +7,5kg", series: 4, reps: 10, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +5kg", series: 5, reps: 2, repos: 180, note: "focus descente contr\u00f4l\u00e9e" },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Tractions prise MU lest\u00e9es +10kg", series: 5, reps: 5, repos: 150 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force +10%",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 6, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+15\u2192+20\u2192+22,5\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus +10kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 9 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Dips Force +10%",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs", series: 6, reps: 6, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+15\u2192+20\u2192+22,5\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 20'' bas / 20'' milieu / 20'' bras tendus +10kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 13 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux Force +10%",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +17,5kg", series: 4, reps: "max temps", repos: 90, objectif: 23 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 21 },
              { nom: "Tuck Front Lever lest\u00e9 +12,5kg", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tractions anneaux lest\u00e9es +17,5kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +17,5kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e +10%",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +7,5kg", series: 6, reps: 1, repos: 180 },
              { nom: "Tractions lest\u00e9es lourdes +22,5kg", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds +22,5kg", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 15 },
              { nom: "Tuck Front Lever lest\u00e9 +12,5kg", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 12 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force Sp\u00e9cifique MU +10%",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise muscle up lest\u00e9es +12,5kg", series: 5, reps: 5, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 5, reps: 3, repos: 180 },
              { nom: "Weighted MU +7,5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 6, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU Force +10%",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +7,5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +7,5kg", series: 5, reps: 2, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 4, repos: 180 },
              { nom: "Tractions prise MU lest\u00e9es +12,5kg", series: 5, reps: 5, repos: 150 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force +15%",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 6, reps: 6, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+17,5\u2192+22,5\u2192+25\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus +12,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +7,5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 10 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Dips Force +15%",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs +2,5kg", series: 6, reps: 6, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+5\u2192+10\u2192+17,5\u2192+22,5\u2192+25\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 20'' bas / 20'' milieu / 20'' bras tendus +12,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Weighted MU +7,5kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 14 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux Force +15%",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +20kg", series: 4, reps: "max temps", repos: 90, objectif: 24 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Tuck Front Lever lest\u00e9 +15kg", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tractions anneaux lest\u00e9es +20kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +20kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e +15%",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +10kg", series: 6, reps: 1, repos: 180 },
              { nom: "Tractions lest\u00e9es lourdes +25kg", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds +25kg", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 16 },
              { nom: "Tuck Front Lever lest\u00e9 +15kg", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 13 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force Sp\u00e9cifique MU +15%",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise muscle up lest\u00e9es +15kg", series: 5, reps: 5, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 5, reps: 3, repos: 180 },
              { nom: "Weighted MU +10kg", series: 5, reps: 2, repos: 180 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 6, reps: 6, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU Force +15%",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 28 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Pike push-ups lest\u00e9s +10kg", series: 4, reps: 12, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +10kg", series: 5, reps: 2, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +12,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Tractions prise MU lest\u00e9es +15kg", series: 5, reps: 5, repos: 150 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force Max",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "Tractions lest\u00e9es force pure \u2014 6 \u00d7 2 charge max", series: 6, reps: 2, repos: 240 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 25'' t\u00eate en haut / 25'' milieu / 25'' bras tendus +15kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Weighted MU +10kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 2, reps: "max", repos: 180, objectif: 7 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Dips Force Max",
            duree: 60,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "Dips lest\u00e9s force pure \u2014 6 \u00d7 2 charge max", series: 6, reps: 2, repos: 240 },
              { nom: "Iso Dips Lest\u00e9e \u2014 25'' bas / 25'' milieu / 25'' bras tendus +15kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Weighted MU +10kg", series: 5, reps: 2, repos: 180 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 2, reps: "max", repos: 180, objectif: 11 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +15kg", series: 3, reps: "max temps", repos: 90 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90 },
              { nom: "Tuck Front Lever lest\u00e9 +10kg", series: 3, reps: "max temps", repos: 120 },
              { nom: "Tractions anneaux lest\u00e9es +15kg", series: 3, reps: 4, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +15kg", series: 3, reps: 5, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force Max",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU \u2014 charge max du cycle", series: 6, reps: 1, repos: 180 },
              { nom: "Tractions lest\u00e9es \u2014 charge max du cycle", series: 4, reps: 2, repos: 300 },
              { nom: "Dips lest\u00e9s \u2014 charge max du cycle", series: 4, reps: 2, repos: 300 },
              { nom: "Tuck Front Lever lest\u00e9 +15kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 11 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force Sp\u00e9cifique MU Max",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise muscle up lest\u00e9es +17,5kg", series: 5, reps: 5, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +12,5kg", series: 5, reps: 3, repos: 180 },
              { nom: "Weighted MU \u2014 charge max", series: 5, reps: 1, repos: 210 },
              { nom: "Tractions explosives poitrine haute +5kg", series: 4, reps: 5, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Handstand + MU D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90 },
              { nom: "Travail \u00e9quilibre libre", series: 6, reps: "tentatives", repos: 45 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +7,5kg", series: 3, reps: 2, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 3, reps: 3, repos: 180 },
              { nom: "Tractions prise MU lest\u00e9es +12,5kg", series: 3, reps: 4, repos: 150 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 3 — SKILL =====
  c3: {
    nom: "Cycle 3 \u2014 Skill",
    objectif: "Ma\u00eetriser les figures techniques avanc\u00e9es. Weighted MU en s\u00e9ries, Full Front Lever, Advanced Tuck Planche, Handstand libre 30 secondes. Rappels force S3 et S5.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Planche",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +5kg", series: 6, reps: 2, repos: 180, note: "focus technique et descente contr\u00f4l\u00e9e" },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 6, repos: 150 },
              { nom: "Full Front Lever \u2014 tentatives", series: 4, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 14 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche Anneaux", series: 5, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Full Front Lever Anneaux \u2014 tentatives", series: 4, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "One Leg Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Gainage tendu anneaux", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Dips anneaux pdc", series: 4, reps: 10, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 28 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45, note: "viser 30 secondes" },
              { nom: "Pike push-ups lest\u00e9s +10kg", series: 4, reps: 12, repos: 90 },
              { nom: "Weighted MU +5kg", series: 5, reps: 2, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 4, repos: 150 },
              { nom: "Tractions lest\u00e9es +20kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +20kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Planche + Front Lever",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 8, repos: 120 },
              { nom: "Full Front Lever \u2014 tentatives", series: 4, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Front Lever Raises", series: 4, reps: 6, repos: 120 },
              { nom: "Tractions prise MU lest\u00e9es +5kg", series: 4, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force l\u00e9g\u00e8re + Rappel",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Weighted MU +5kg", series: 4, reps: 2, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 3, reps: 4, repos: 150 },
              { nom: "Tractions lest\u00e9es +20kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +20kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Cardio + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "AMRAP 20 min \u2014 10 burpees / 15 goblet squats / 20 mountain climbers / 10 thrusters / 10 pompes", series: 1, reps: "AMRAP 20min", repos: 0 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0, note: "chaque c\u00f4t\u00e9" },
              { nom: "\u00c9tirements pectoraux", series: 3, reps: "30s", repos: 0, note: "chaque c\u00f4t\u00e9" },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0, note: "indispensable pour la planche" },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0, note: "chaque c\u00f4t\u00e9" }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Planche",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +5kg", series: 6, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 6, repos: 150 },
              { nom: "Full Front Lever \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 7 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Advanced Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 15 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche Anneaux", series: 6, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Full Front Lever Anneaux \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 7 },
              { nom: "One Leg Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 23 },
              { nom: "Gainage tendu anneaux", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Dips anneaux pdc", series: 4, reps: 12, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 29 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45, note: "viser 30 secondes" },
              { nom: "Pike push-ups lest\u00e9s +10kg", series: 4, reps: 14, repos: 90 },
              { nom: "Weighted MU +5kg", series: 6, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +22,5kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +22,5kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Planche + Front Lever",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 10, repos: 120 },
              { nom: "Full Front Lever \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 7 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Front Lever Raises", series: 4, reps: 7, repos: 120 },
              { nom: "Tractions prise MU lest\u00e9es +7,5kg", series: 4, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force l\u00e9g\u00e8re + Rappel",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Weighted MU +5kg", series: 4, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +22,5kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +22,5kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Cardio + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "AMRAP 20 min \u2014 10 pompes / 15 squats / 10 fentes / 20 V-up / 30s gainage / 10 burpees", series: 1, reps: "AMRAP 20min", repos: 0 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements pectoraux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Planche Surcharge",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +7,5kg", series: 6, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 4, reps: 6, repos: 150 },
              { nom: "Full Front Lever \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Advanced Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 17 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill Surcharge",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche Anneaux", series: 6, reps: "max temps", repos: 120, objectif: 17 },
              { nom: "Full Front Lever Anneaux \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "One Leg Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "L-sit anneaux", series: 4, reps: "max temps", repos: 90, objectif: 24 },
              { nom: "Gainage tendu anneaux", series: 4, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Dips anneaux pdc", series: 4, reps: 14, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force Surcharge",
            duree: 70,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 12, reps: "tentatives", repos: 45, note: "viser 30 secondes" },
              { nom: "Pike push-ups lest\u00e9s +12,5kg", series: 4, reps: 14, repos: 90 },
              { nom: "Weighted MU +7,5kg", series: 6, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +25kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +25kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Planche + Front Lever Surcharge",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche", series: 7, reps: "max temps", repos: 120, objectif: 17 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 12, repos: 120 },
              { nom: "Full Front Lever \u2014 tentatives", series: 5, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Front Lever Raises", series: 4, reps: 8, repos: 120 },
              { nom: "Tractions prise MU lest\u00e9es +10kg", series: 4, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force l\u00e9g\u00e8re + Rappel Surcharge",
            duree: 65,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 28 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Weighted MU +7,5kg", series: 4, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +25kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +25kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Cardio + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Descente 15\u21921 burpees \u2014 apr\u00e8s chaque s\u00e9rie : 1 min corde \u00e0 sauter", series: 1, reps: "ladder", repos: 0 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements pectoraux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Planche Consolidation",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Weighted MU +10kg", series: 8, reps: 1, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 3, reps: 6, repos: 150 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 16 },
              { nom: "Full Front Lever \u2014 tentatives", series: 4, reps: "max temps", repos: 150, objectif: 9 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 18 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Advanced Tuck Planche Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 17 },
              { nom: "Full Front Lever Anneaux \u2014 tentatives", series: 3, reps: "max temps", repos: 150, objectif: 8 },
              { nom: "One Leg Front Lever Anneaux", series: 3, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "L-sit anneaux", series: 3, reps: "max temps", repos: 90, objectif: 23 },
              { nom: "Dips anneaux pdc", series: 3, reps: 10, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 60,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45, note: "viser 30 secondes" },
              { nom: "Weighted MU +7,5kg", series: 6, reps: 3, repos: 180 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +10kg", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +22,5kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +22,5kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Planche + Front Lever",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Advanced Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 18 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 3, reps: 12, repos: 120 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 16 },
              { nom: "Full Front Lever \u2014 tentatives", series: 4, reps: "max temps", repos: 150, objectif: 9 },
              { nom: "Front Lever Raises", series: 3, reps: 8, repos: 120 },
              { nom: "Tractions prise MU lest\u00e9es +7,5kg", series: 3, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Force l\u00e9g\u00e8re D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Weighted MU +5kg", series: 3, reps: 2, repos: 180 },
              { nom: "Tractions lest\u00e9es +20kg", series: 3, reps: 3, repos: 180 },
              { nom: "Dips lest\u00e9s +20kg", series: 3, reps: 3, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Cardio + Mobilit\u00e9",
            duree: 40,
            exercices: [
              { nom: "Ladder 1\u219220\u21921 \u2014 Squat + Jumping Jack", series: 1, reps: "ladder", repos: 0 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements pectoraux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }
    }
  }
};