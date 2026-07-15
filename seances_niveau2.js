// ============ SÉANCES NIVEAU 2 — ACCUMULATION / FORCE / SKILL ============
// 12 semaines — 3 cycles — 6 séances/semaine (Lundi au Samedi)

var SEANCES_NIVEAU2 = {

  // ===== CYCLE 1 — ACCUMULATION =====
  c1: {
    nom: "Cycle 1 \u2014 Accumulation",
    objectif: "D\u00e9velopper le volume et l\u2019endurance musculaire. Progression semaine apr\u00e8s semaine sur les reps et la densit\u00e9.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides",
            duree: 70,
            exercices: [
              { nom: "Pyramide Tractions", series: 1, reps: "5/10/12/10/5 = 42 reps", repos: 105, note: "repos 1min30 \u00e0 2min" },
              { nom: "Pyramide Dips", series: 1, reps: "5/10/18/10/5 = 48 reps", repos: 75, note: "repos 1min \u00e0 1min30" },
              { nom: "Pyramide Pompes", series: 1, reps: "10/20/25/20/10 = 85 reps", repos: 60 },
              { nom: "Pyramide Montante Compl\u00e8te \u2014 2tr/3dips/4pu \u2192 4tr/6dips/8pu \u2192 max", series: 1, reps: "montante", repos: 90 },
              { nom: "Finisher \u2014 Iso Tractions : 10'' t\u00eate en haut / 10'' dessous / 10'' bras tendus", series: 2, reps: "iso", repos: 30 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu", series: 4, reps: "max temps", repos: 60, objectif: 30 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 60, objectif: 20 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Mont\u00e9e/descente croix de fer", series: 4, reps: 3, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +5kg", series: 3, reps: 8, repos: 90 },
              { nom: "Finisher \u2014 Tuck barres parall\u00e8les", series: 5, reps: "max", repos: 60, objectif: 8 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Circuits + Isom\u00e9trie",
            duree: 75,
            exercices: [
              { nom: "Circuit 1 \u2014 15 dips / 10 tractions / 20 pompes", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit 2 \u2014 8 dips / 8 pompes / 8 dips", series: 3, reps: "circuit", repos: 90 },
              { nom: "Circuit 3 \u2014 4 pompes / 5 dips / 4 pompes / 5 dips / 4 pompes / 5 dips", series: 3, reps: "circuit", repos: 60 },
              { nom: "Routine 1 \u2014 4 tr / 3'' iso menton haut / 4 tr / 3'' iso t\u00eate dessous / 4 tr / 3'' iso bas", series: 2, reps: "routine", repos: 120 },
              { nom: "Routine 2 \u2014 10'' iso menton haut / 10'' iso t\u00eate dessous / 10'' bras tendus +5kg / max tr", series: 2, reps: "routine", repos: 120 },
              { nom: "EMOM 6 min \u2014 Tour 1 : Dips iso 10'' bas/milieu/tendus \u2014 Tour 2 : Pompes iso 12'' bas/milieu/tendus", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Barre Deadstop EMOM",
            duree: 65,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"tractions", valeur:6}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:4}, {label:"tractions", valeur:4}, {label:"iso t\u00eate dessus (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:2}, {label:"tractions", valeur:2}, {label:"iso t\u00eate dessus (s)", valeur:10}] }
                ]
              },
              { nom: "Routine Traction \u2014 12 tractions / 1-2-3-4-5 deadstop 1'' au-dessus / 8 tractions", series: 2, reps: "routine", repos: 120 },
              { nom: "Routine Dips \u2014 18 dips / 2-4-6-8 deadstop 1'' \u00e0 90\u00b0 / 10 dips", series: 2, reps: "routine", repos: 90 },
              { nom: "EMOM 5 min \u2014 10'' iso pompes + 10 pompes", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Muscle Up",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 5, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU assist\u00e9 \u00e9lastique", series: 5, reps: 2, repos: 120 },
              { nom: "N\u00e9gatifs MU", series: 4, reps: 3, repos: 120 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 4, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Vitesse + Deadstop + Finisher",
            duree: 70,
            exercices: [
              { nom: "Circuit Vitesse \u2014 10 pompes / 5 tractions / 10 dips", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit Isom\u00e9trie \u2014 1 MU / 10'' t\u00eate au-dessus / 10'' t\u00eate dessous / 10'' bras tendus / 15 dips / 10 tr", series: 3, reps: "circuit", repos: 150 },
              {
                nom: "Circuit Deadstop",
                lignes: [
                  { repos: 120, mouvements: [{label:"tractions", valeur:5}, {label:"dips", valeur:10}, {label:"pompes", valeur:15}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:4}, {label:"dips", valeur:9}, {label:"pompes", valeur:14}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:3}, {label:"dips", valeur:8}, {label:"pompes", valeur:13}] }
                ]
              },
              {
                nom: "Finisher",
                lignes: [
                  { repos: 90, mouvements: [{label:"dips bar", valeur:10}, {label:"pompes", valeur:20}, {label:"dips", valeur:10}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:8}, {label:"pompes", valeur:18}, {label:"dips", valeur:8}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:6}, {label:"pompes", valeur:16}, {label:"dips", valeur:6}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:4}, {label:"pompes", valeur:14}, {label:"dips", valeur:4}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:6}, {label:"pompes", valeur:16}, {label:"dips", valeur:6}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:8}, {label:"pompes", valeur:18}, {label:"dips", valeur:8}] },
                  { repos: 90, mouvements: [{label:"dips bar", valeur:10}, {label:"pompes", valeur:20}, {label:"dips", valeur:10}] }
                ]
              }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Volume + MU",
            duree: 75,
            exercices: [
              { nom: "Muscle Ups", series: 6, reps: 1, repos: 120, note: "focus technique transition et descente" },
              { nom: "Tractions", series: 6, reps: 10, repos: 90, note: "= 60 reps" },
              { nom: "Dips", series: 6, reps: 18, repos: 90, note: "= 108 reps" },
              { nom: "Pompes", series: 6, reps: 30, repos: 60, note: "= 180 reps" },
              { nom: "Tractions \u2014 6 +5kg / 6 pdc / 6 \u00e9lastique max explo", series: 3, reps: "tri-set", repos: 120 },
              { nom: "Dips \u2014 9 +5kg / 9 contre \u00e9lastique / 9 pdc", series: 3, reps: "tri-set", repos: 120 },
              { nom: "Pompes \u2014 12 +10kg / 12 contre \u00e9lastique / 12 pdc", series: 3, reps: "tri-set", repos: 90 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu", series: 4, reps: "max temps", repos: 60, objectif: 32 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 60, objectif: 22 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 16 },
              { nom: "Mont\u00e9e/descente croix de fer", series: 4, reps: 3, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Finisher \u2014 Tuck barres parall\u00e8les", series: 5, reps: "max", repos: 60, objectif: 9 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Circuits intensifs",
            duree: 75,
            exercices: [
              { nom: "Circuit 1 \u2014 1 MU / 18 dips / 12 tractions / 25 pompes", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit 2 \u2014 10'' t\u00eate en haut +5kg / 10 pompes / 10 tractions / 10 pompes / 10'' t\u00eate dessous +5kg", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit 3 \u2014 15'' bras tendus / 5 dips +5kg / 5 tractions +5kg / 5 dips +5kg / 15'' bras tendus", series: 3, reps: "circuit", repos: 120 },
              { nom: "EMOM 6 min \u2014 Tour 1 : 6'' t\u00eate en haut + 3 tr deadstop \u2014 Tour 2 : 6'' t\u00eate dessous + 3 tr deadstop", series: 1, reps: "EMOM", repos: 0 },
              { nom: "EMOM 6 min \u2014 10'' iso bas dips + 6 dips", series: 1, reps: "EMOM", repos: 0 },
              { nom: "Finisher Pompes \u2014 10'' iso milieu / 10 pompes / 5'' bras tendus / 5 pompes / 10'' iso milieu / 10 pompes", series: 1, reps: "finisher", repos: 90 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Set sur barre + Pauses",
            duree: 70,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips bar", valeur:12}, {label:"tractions", valeur:12}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"tractions", valeur:6}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:4}, {label:"tractions", valeur:4}, {label:"iso t\u00eate dessus (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:2}, {label:"tractions", valeur:2}, {label:"iso t\u00eate dessus (s)", valeur:10}] }
                ]
              },
              { nom: "Tractions avec pauses \u2014 2 tr 5'' pause / 3 / 4 / 5 / 6 / max iso menton au-dessus", series: 1, reps: "progressive", repos: 120 },
              { nom: "Dips avec pauses \u2014 4 dips 5'' pause / 5 / 6 / 7 / 8 / max iso basse", series: 1, reps: "progressive", repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 5, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU assist\u00e9 \u00e9lastique", series: 5, reps: 3, repos: 120 },
              { nom: "N\u00e9gatifs MU", series: 4, reps: 3, repos: 120 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 5, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Pyramides Iso",
            duree: 65,
            exercices: [
              {
                nom: "Pyramide Iso Tractions",
                lignes: [
                  { repos: 120, mouvements: [{label:"haut (s)", valeur:20}, {label:"dessous (s)", valeur:20}, {label:"tendus (s)", valeur:20}] },
                  { repos: 120, mouvements: [{label:"haut +5kg (s)", valeur:15}, {label:"dessous +5kg (s)", valeur:15}, {label:"tendus +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"haut +10kg (s)", valeur:10}, {label:"dessous +10kg (s)", valeur:10}, {label:"tendus +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"haut +5kg (s)", valeur:15}, {label:"dessous +5kg (s)", valeur:15}, {label:"tendus +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"haut (s)", valeur:20}, {label:"dessous (s)", valeur:20}, {label:"tendus (s)", valeur:20}] }
                ]
              },
              {
                nom: "Pyramide Iso Dips",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips bar 90\u00b0 (s)", valeur:20}, {label:"dips 90\u00b0 (s)", valeur:20}] },
                  { repos: 120, mouvements: [{label:"dips bar (s)", valeur:15}, {label:"dips +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips bar (s)", valeur:10}, {label:"dips +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"dips bar (s)", valeur:15}, {label:"dips +5kg (s)", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips bar (s)", valeur:20}, {label:"dips (s)", valeur:20}] }
                ]
              },
              { nom: "AMRAP 8 min \u2014 2 tractions + 10'' t\u00eate au-dessus + 2 dips + 10'' 90°", series: 1, reps: "AMRAP", repos: 0 },
              { nom: "Finisher \u2014 Max temps t\u00eate en dessous + Max temps 90° dips", series: 2, reps: "max temps", repos: 120, objectif: 15 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides MU + lest\u00e9es",
            duree: 80,
            exercices: [
              { nom: "Pyramide Muscle Ups \u2014 1/2/3/2/1", series: 1, reps: "pyramide", repos: 150 },
              { nom: "Pyramide Tractions +10kg \u2014 2/4/6/8/10", series: 1, reps: "pyramide", repos: 120 },
              { nom: "Pyramide Dips +10kg \u2014 4/8/12/18", series: 1, reps: "pyramide", repos: 120 },
              { nom: "Pyramide Pompes +10kg \u2014 10/15/20/25", series: 1, reps: "pyramide", repos: 90 },
              {
                nom: "Routine",
                lignes: [
                  { repos: 90, mouvements: [{label:"tractions", valeur:8}, {label:"pompes", valeur:18}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:6}, {label:"pompes", valeur:16}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:4}, {label:"pompes", valeur:14}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:2}, {label:"pompes", valeur:12}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:4}, {label:"pompes", valeur:14}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:6}, {label:"pompes", valeur:16}] },
                  { repos: 90, mouvements: [{label:"tractions", valeur:8}, {label:"pompes", valeur:18}] }
                ]
              },
              { nom: "Finisher \u2014 1 MU / 15 dips / 10'' t\u00eate au-dessus \u00d7 3 (haut/dessous/haut)", series: 3, reps: "finisher", repos: 120 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu", series: 4, reps: "max temps", repos: 60, objectif: 34 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 60, objectif: 24 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 17 },
              { nom: "Mont\u00e9e/descente croix de fer", series: 4, reps: 4, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +5kg", series: 3, reps: 12, repos: 90 },
              { nom: "Finisher \u2014 Tuck barres parall\u00e8les", series: 5, reps: "max", repos: 60, objectif: 10 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Sets complexes + Pyramide invers\u00e9e",
            duree: 80,
            exercices: [
              {
                nom: "Set 1",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions one shot", valeur:2}, {label:"pompes", valeur:5}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions one shot", valeur:4}, {label:"pompes", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"tractions one shot", valeur:6}, {label:"pompes", valeur:15}, {label:"dips", valeur:15}] }
                ]
              },
              { nom: "Set 2 \u2014 1 MU / 10 iso dips + 10 dips / 10 iso t\u00eate + 5 tr + 10'' bras tendus + 5 tr", series: 2, reps: "compos\u00e9", repos: 150 },
              {
                nom: "Pyramide Invers\u00e9e",
                lignes: [
                  { repos: 120, mouvements: [{label:"tractions", valeur:14}, {label:"dips", valeur:21}, {label:"pompes", valeur:32}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:12}, {label:"dips", valeur:18}, {label:"pompes", valeur:28}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:10}, {label:"dips", valeur:15}, {label:"pompes", valeur:24}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:8}, {label:"dips", valeur:12}, {label:"pompes", valeur:20}] },
                  { repos: 120, mouvements: [{label:"tractions", valeur:2}, {label:"dips", valeur:3}, {label:"pompes", valeur:4}] }
                ],
                note: "descendre progressivement jusqu\u2019\u00e0 2/3/4"
              }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Circuits lest\u00e9s + EMOM",
            duree: 70,
            exercices: [
              { nom: "Circuit lest\u00e9 d\u00e9gressif \u2014 8 tr +5kg / 10 dips +5kg / 20 pu / 8 tr / 10 dips", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit lest\u00e9 deadstop \u2014 5 tr +5kg / 5 dips +5kg / 15'' t\u00eate +5kg / 15'' 90° +5kg / 5 tr / 5 dips", series: 3, reps: "circuit", repos: 120 },
              { nom: "Circuit pdc deadstop \u2014 20'' t\u00eate / 10 dips / 20 pu / 10 dips / 20'' t\u00eate", series: 2, reps: "circuit", repos: 90 },
              { nom: "EMOM 6 min \u2014 Tour 1 : 10'' t\u00eate +10kg + 5 dips \u2014 Tour 2 : 10'' dessous +10kg + 5 dips", series: 1, reps: "EMOM", repos: 0 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 5, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 24 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU assist\u00e9 \u00e9lastique fin", series: 5, reps: 3, repos: 120 },
              { nom: "N\u00e9gatifs MU", series: 4, reps: 4, repos: 120 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 5, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Volume lest\u00e9 + Routines Iso",
            duree: 70,
            exercices: [
              {
                nom: "Tractions",
                lignes: [
                  { repos: 120, mouvements: [{label:"tractions +10kg", valeur:5}, {label:"tractions pdc", valeur:10}] },
                  { repos: 120, mouvements: [{label:"tractions +10kg", valeur:5}, {label:"tractions pdc", valeur:10}] },
                  { repos: 120, mouvements: [{label:"tractions +10kg", valeur:5}, {label:"tractions pdc", valeur:10}] },
                  { repos: 120, mouvements: [{label:"tractions +10kg", valeur:5}, {label:"tractions pdc", valeur:10}] }
                ]
              },
              {
                nom: "Dips",
                lignes: [
                  { repos: 120, mouvements: [{label:"dips +10kg", valeur:10}, {label:"dips pdc", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips +10kg", valeur:10}, {label:"dips pdc", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips +10kg", valeur:10}, {label:"dips pdc", valeur:15}] },
                  { repos: 120, mouvements: [{label:"dips +10kg", valeur:10}, {label:"dips pdc", valeur:15}] }
                ]
              },
              {
                nom: "Pompes",
                lignes: [
                  { repos: 90, mouvements: [{label:"pompes +10kg", valeur:20}, {label:"pompes pdc", valeur:25}] },
                  { repos: 90, mouvements: [{label:"pompes +10kg", valeur:20}, {label:"pompes pdc", valeur:25}] },
                  { repos: 90, mouvements: [{label:"pompes +10kg", valeur:20}, {label:"pompes pdc", valeur:25}] },
                  { repos: 90, mouvements: [{label:"pompes +10kg", valeur:20}, {label:"pompes pdc", valeur:25}] }
                ]
              },
              { nom: "Routine Iso Tractions \u2014 20'' t\u00eate au-dessus / 10'' t\u00eate dessous / 20'' t\u00eate + max tractions", series: 2, reps: "routine", repos: 120 },
              { nom: "Routine Iso Dips \u2014 20'' bras tendus / 15'' 90° / 20'' bras tendus + max dips", series: 2, reps: "routine", repos: 120 },
              { nom: "Routine Iso Pompes \u2014 20'' bras tendus / 20'' 90° / 20'' bras tendus + max pompes", series: 2, reps: "routine", repos: 90 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load volume maintenu",
            duree: 60,
            exercices: [
              { nom: "Muscle Ups", series: 3, reps: 3, repos: 120, note: "= 9 reps" },
              { nom: "Tractions", series: 3, reps: 14, repos: 90, note: "= 42 reps" },
              { nom: "Dips", series: 3, reps: 24, repos: 90, note: "= 72 reps" },
              { nom: "Pompes", series: 3, reps: 34, repos: 60, note: "= 102 reps" },
              {
                nom: "Routine lest\u00e9e",
                lignes: [
                  { repos: 120, mouvements: [{label:"tr prise MU", valeur:1}, {label:"tractions +5kg", valeur:10}, {label:"dips +5kg", valeur:10}] },
                  { repos: 120, mouvements: [{label:"tr prise MU", valeur:1}, {label:"tractions +5kg", valeur:8}, {label:"dips bar +5kg", valeur:8}] },
                  { repos: 120, mouvements: [{label:"tr prise MU", valeur:1}, {label:"tractions +5kg", valeur:6}, {label:"dips +5kg", valeur:6}] },
                  { repos: 120, mouvements: [{label:"tr prise MU", valeur:1}, {label:"tractions +5kg", valeur:4}, {label:"dips bar +5kg", valeur:4}] },
                  { repos: 120, mouvements: [{label:"tr prise MU", valeur:1}, {label:"tractions +5kg", valeur:2}, {label:"dips +5kg", valeur:2}] }
                ]
              }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Gainage tendu", series: 3, reps: "max temps", repos: 60, objectif: 28 },
              { nom: "L-sit", series: 3, reps: "max temps", repos: 60, objectif: 18 },
              { nom: "Tuck Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Mont\u00e9e/descente croix de fer", series: 3, reps: 3, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s", series: 2, reps: 8, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Stress + Intermittent",
            duree: 65,
            exercices: [
              { nom: "Stress Traction \u2014 4 pdc / 4 +5kg / 4 +10kg / 4 +5kg / 4 pdc", series: 1, reps: "stress", repos: 180 },
              { nom: "Max tractions one shot +5kg", series: 1, reps: "max", repos: 180 },
              { nom: "5 tr +5kg / 5 tr +10kg / 5 tr +5kg", series: 1, reps: "set", repos: 180 },
              { nom: "Max tractions one shot pdc", series: 1, reps: "max", repos: 0 },
              { nom: "Stress Dips \u2014 6 pdc / 6 +5kg / 6 +10kg / 6 +5kg / 6 pdc", series: 1, reps: "stress", repos: 180 },
              { nom: "Max dips one shot +5kg", series: 1, reps: "max", repos: 180 },
              { nom: "8 dips +5kg / 8 dips +10kg / 8 dips +5kg", series: 1, reps: "set", repos: 180 },
              { nom: "Intermittent Tractions \u2014 5 \u00d7 4 tractions (5'' repos)", series: 1, reps: "intermittent", repos: 0 },
              { nom: "Intermittent Dips \u2014 5 \u00d7 6 dips (5'' repos)", series: 1, reps: "intermittent", repos: 0 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Set sur barre + Routine lest\u00e9e",
            duree: 70,
            exercices: [
              {
                nom: "Set sur barre",
                lignes: [
                  { repos: 120, mouvements: [{label:"MU", valeur:3}, {label:"dips bar", valeur:14}, {label:"tractions", valeur:14}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips bar", valeur:12}, {label:"tractions", valeur:12}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:2}, {label:"dips bar", valeur:10}, {label:"tractions", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:8}, {label:"tractions", valeur:8}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:6}, {label:"tractions", valeur:6}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:4}, {label:"tractions", valeur:4}, {label:"iso t\u00eate dessus (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"MU", valeur:1}, {label:"dips bar", valeur:2}, {label:"tractions", valeur:2}, {label:"iso t\u00eate dessus (s)", valeur:10}] }
                ]
              },
              {
                nom: "Routine d\u00e9gressive",
                lignes: [
                  { repos: 0, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:20}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] },
                  { repos: 0, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:18}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] },
                  { repos: 0, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:16}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] },
                  { repos: 0, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:14}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] },
                  { repos: 0, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:12}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] },
                  { repos: 120, mouvements: [{label:"tr prise MU +10kg", valeur:1}, {label:"pompes", valeur:10}, {label:"iso t\u00eate dessus +10kg (s)", valeur:10}] }
                ]
              }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU assist\u00e9 \u00e9lastique", series: 3, reps: 2, repos: 120 },
              { nom: "N\u00e9gatifs MU", series: 3, reps: 3, repos: 120 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Circuits D\u00e9load + Iso",
            duree: 60,
            exercices: [
              { nom: "Circuit 1 \u2014 3 MU / 20 dips / 12 tr / 32 pu / 3 tr prise MU", series: 1, reps: "circuit", repos: 150 },
              { nom: "Circuit 2 \u2014 2 MU / 15 dips / 10 tr / 28 pu / 2 tr prise MU", series: 1, reps: "circuit", repos: 120 },
              { nom: "Circuit 3 \u2014 1 MU / 10 dips / 8 tr / 24 pu / 1 tr prise MU", series: 1, reps: "circuit", repos: 120 },
              { nom: "Iso Tractions \u2014 20'' t\u00eate au-dessus / 10'' t\u00eate dessous / 20'' t\u00eate + max tractions (+5kg)", series: 2, reps: "iso", repos: 120 },
              { nom: "Iso Dips \u2014 20'' bras tendus / 15'' 90° / 20'' bras tendus + max dips (+5kg)", series: 2, reps: "iso", repos: 120 },
              { nom: "Iso Pompes \u2014 20'' bras tendus / 20'' 90° / 20'' bras tendus + max pompes (+5kg)", series: 2, reps: "iso", repos: 90 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 2 — FORCE =====
  c2: {
    nom: "Cycle 2 \u2014 Force",
    objectif: "D\u00e9velopper la force maximale. Charges lourdes, faible volume, longs temps de repos. Semaine 4 = intensit\u00e9 maximale.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 4, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+7,5\u2192+10\u2192max\u2192descente encha\u00een\u00e9e", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 10'' t\u00eate en haut / 10'' milieu / 10'' bras tendus +5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 6 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Force",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +5kg", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Tuck Front Lever lest\u00e9 +2,5kg", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "Tractions anneaux lest\u00e9es +5kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +5kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Dips Force",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs", series: 6, reps: 4, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+7,5\u2192+10\u2192max\u2192descente encha\u00een\u00e9e", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 10'' bas / 10'' milieu / 10'' bras tendus +5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 10 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u00e9lastique moyen", series: 6, reps: 1, repos: 150 },
              { nom: "Tractions lest\u00e9es lourdes \u2014 charge max", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds \u2014 charge max", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 12 },
              { nom: "Tuck Front Lever lest\u00e9 +2,5kg", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 10 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU Force",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise MU lest\u00e9es +5kg", series: 5, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +2,5kg", series: 5, reps: 3, repos: 180 },
              { nom: "MU assist\u00e9 \u00e9lastique fin", series: 5, reps: 2, repos: 150 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 + Iso",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 4, repos: 150 },
              { nom: "Iso Tractions \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips explosifs", series: 6, reps: 4, repos: 150 },
              { nom: "Iso Dips \u2014 3'' mont\u00e9e / 3'' maintien / 3'' descente + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot pdc \u2192 Dips max one shot pdc", series: 1, reps: "max", repos: 120 }
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
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+7,5\u2192+10\u2192+12,5\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 15'' t\u00eate en haut / 15'' milieu / 15'' bras tendus +5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 7 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Force +10%",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +7,5kg", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Tuck Front Lever lest\u00e9 +5kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "Tractions anneaux lest\u00e9es +7,5kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +7,5kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Dips Force +10%",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+7,5\u2192+10\u2192+12,5\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 15'' bas / 15'' milieu / 15'' bras tendus +5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 11 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e +10%",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u00e9lastique fin", series: 6, reps: 1, repos: 150 },
              { nom: "Tractions lest\u00e9es lourdes +12,5kg", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds +12,5kg", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 13 },
              { nom: "Tuck Front Lever lest\u00e9 +5kg", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 11 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU Force +10%",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise MU lest\u00e9es +7,5kg", series: 5, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 5, reps: 3, repos: 180 },
              { nom: "MU assist\u00e9 \u00e9lastique fin", series: 5, reps: 2, repos: 150 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 + Iso +10%",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute", series: 6, reps: 5, repos: 150 },
              { nom: "Iso Tractions \u2014 3''/3''/3'' + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips explosifs", series: 6, reps: 5, repos: 150 },
              { nom: "Iso Dips \u2014 3''/3''/3'' + max reps pdc", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot pdc \u2192 Dips max one shot pdc", series: 1, reps: "max", repos: 120 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Tractions Force +25%",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Tractions Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+10\u2192+12,5\u2192+15\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 20'' t\u00eate en haut / 20'' milieu / 20'' bras tendus +7,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 8 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Force +25%",
            duree: 60,
            exercices: [
              { nom: "Gainage tendu lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "L-sit", series: 4, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Tuck Front Lever lest\u00e9 +7,5kg", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tractions anneaux lest\u00e9es +10kg", series: 4, reps: 5, repos: 150 },
              { nom: "Dips anneaux lest\u00e9s +10kg", series: 4, reps: 6, repos: 150 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Dips Force +25%",
            duree: 65,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs +2,5kg", series: 6, reps: 5, repos: 150 },
              { nom: "Pyramide Dips Lest\u00e9e \u2014 pdc\u2192+2,5\u2192+5\u2192+10\u2192+12,5\u2192+15\u2192max\u2192descente", series: 1, reps: "pyramide", repos: 180 },
              { nom: "Iso Dips Lest\u00e9e \u2014 20'' bas / 20'' milieu / 20'' bras tendus +7,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 3, reps: "max", repos: 150, objectif: 12 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force compos\u00e9e +25%",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u00e9lastique tr\u00e8s fin", series: 6, reps: 1, repos: 150 },
              { nom: "Tractions lest\u00e9es lourdes +15kg", series: 5, reps: 3, repos: 240 },
              { nom: "Dips lest\u00e9s lourds +15kg", series: 5, reps: 3, repos: 240 },
              { nom: "Relev\u00e9s de jambes", series: 5, reps: "max", repos: 60, objectif: 14 },
              { nom: "Tuck Front Lever lest\u00e9 +7,5kg", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 12 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU Force +25%",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions prise MU lest\u00e9es +10kg", series: 5, reps: 4, repos: 150 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +7,5kg", series: 5, reps: 3, repos: 180 },
              { nom: "MU assist\u00e9 \u00e9lastique tr\u00e8s fin", series: 5, reps: 2, repos: 150 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 + Iso +25%",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute +2,5kg", series: 6, reps: 5, repos: 150 },
              { nom: "Iso Tractions \u2014 3''/3''/3'' + max reps +2,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Dips explosifs +2,5kg", series: 6, reps: 5, repos: 150 },
              { nom: "Iso Dips \u2014 3''/3''/3'' + max reps +2,5kg", series: 3, reps: "iso", repos: 120 },
              { nom: "Finisher \u2014 Tractions max one shot +2,5kg \u2192 Dips max one shot +2,5kg", series: 1, reps: "max", repos: 120 }
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
              { nom: "Tractions explosives poitrine haute +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Tractions lest\u00e9es force pure \u2014 6 \u00d7 2 charge max", series: 6, reps: 2, repos: 240 },
              { nom: "Iso Tractions Lest\u00e9e \u2014 20'' haut / 20'' milieu / 20'' bras tendus +10kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Finisher \u2014 Tractions max one shot pdc", series: 2, reps: "max", repos: 180, objectif: 6 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Gainage tendu", series: 3, reps: "max temps", repos: 60, objectif: 22 },
              { nom: "L-sit", series: 3, reps: "max temps", repos: 60, objectif: 22 },
              { nom: "Tuck Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "Tractions anneaux lest\u00e9es +5kg", series: 3, reps: 4, repos: 120 },
              { nom: "Dips anneaux lest\u00e9s +5kg", series: 3, reps: 5, repos: 120 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Dips Force Max",
            duree: 60,
            exercices: [
              { nom: "Dips pdc \u00e9chauffement", series: 2, reps: 10, repos: 45 },
              { nom: "Dips explosifs +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Dips lest\u00e9s force pure \u2014 6 \u00d7 2 charge max", series: 6, reps: 2, repos: 240 },
              { nom: "Iso Dips Lest\u00e9e \u2014 20'' bas / 20'' milieu / 20'' bras tendus +10kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Finisher \u2014 Dips max one shot pdc", series: 2, reps: "max", repos: 180, objectif: 9 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 MU + Force Max",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u2014 tentative sans \u00e9lastique", series: 6, reps: 1, repos: 180 },
              { nom: "Tractions lest\u00e9es \u2014 charge max du cycle", series: 4, reps: 2, repos: 300 },
              { nom: "Dips lest\u00e9s \u2014 charge max du cycle", series: 4, reps: 2, repos: 300 },
              { nom: "Tuck Front Lever lest\u00e9 +10kg", series: 4, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 8 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU n\u00e9gatifs lest\u00e9s +5kg", series: 3, reps: 3, repos: 180 },
              { nom: "MU tentative sans \u00e9lastique", series: 4, reps: 1, repos: 180 }
            ]
          },
          s6: {
            jour: "Samedi",
            nom: "S\u00e9ance 6 \u2014 Explosivit\u00e9 + Iso Max",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions explosives poitrine haute +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Iso Tractions \u2014 3''/3''/3'' + max reps +5kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Dips explosifs +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "Iso Dips \u2014 3''/3''/3'' + max reps +5kg", series: 3, reps: "iso", repos: 150 },
              { nom: "Finisher \u2014 Tractions max charge max \u2192 Dips max charge max", series: 1, reps: "max", repos: 180 }
            ]
          }
        }
      }
    }
  },
  // ===== CYCLE 3 — SKILL =====
  c3: {
    nom: "Cycle 3 \u2014 Skill",
    objectif: "Ma\u00eetriser les figures techniques. Muscle up sans \u00e9lastique, Front Lever, Tuck Planche, Handstand.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Tuck Planche",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u2014 sans \u00e9lastique (focus transition + descente contr\u00f4l\u00e9e)", series: 6, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 3, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 5, repos: 150 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "Tuck Planche", series: 4, reps: "max temps", repos: 120, objectif: 12 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche Anneaux", series: 5, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tuck Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever Anneaux", series: 3, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "L-sit Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Gainage tendu Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 28 },
              { nom: "Dips Anneaux pdc", series: 4, reps: 8, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 65,
            exercices: [
              { nom: "Kick up mur", series: 4, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 5, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 3, repos: 150 },
              { nom: "Tractions lest\u00e9es +10kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +10kg", series: 3, reps: 3, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Tuck Planche + Front Lever",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 5, repos: 120, note: "pousser vers l\u2019avant depuis tuck planche" },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 10 },
              { nom: "Front Lever Raises", series: 3, reps: 5, repos: 120 },
              { nom: "Tractions prise MU pdc", series: 4, reps: 6, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU + Rappel Force",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Travail \u00e9quilibre libre", series: 6, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 4, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 3, reps: 3, repos: 150 },
              { nom: "Tractions lest\u00e9es +10kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +10kg", series: 3, reps: 3, repos: 150 }
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
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0, note: "indispensable pour la progression planche" },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0, note: "chaque c\u00f4t\u00e9" }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Tuck Planche",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u2014 sans \u00e9lastique (focus encha\u00eenement)", series: 6, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 4, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 6, repos: 150 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 13 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche Anneaux", series: 5, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tuck Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "One Leg Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "L-sit Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Gainage tendu Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 29 },
              { nom: "Dips Anneaux pdc", series: 4, reps: 10, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 65,
            exercices: [
              { nom: "Kick up mur", series: 4, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 26 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 6, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 4, repos: 150 },
              { nom: "Tractions lest\u00e9es +12,5kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +12,5kg", series: 3, reps: 3, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Tuck Planche + Front Lever",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 6, repos: 120 },
              { nom: "Tuck Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "Front Lever Raises", series: 3, reps: 6, repos: 120 },
              { nom: "Tractions prise MU pdc", series: 4, reps: 7, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU + Rappel Force",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 23 },
              { nom: "Travail \u00e9quilibre libre", series: 8, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 5, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 3, reps: 4, repos: 150 },
              { nom: "Tractions lest\u00e9es +12,5kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +12,5kg", series: 3, reps: 3, repos: 150 }
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
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Tuck Planche Surcharge",
            duree: 75,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u2014 sans \u00e9lastique (focus encha\u00eenement)", series: 6, reps: 2, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 6, repos: 150 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Front Lever Raises", series: 4, reps: 6, repos: 120 },
              { nom: "Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 14 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux Skill Surcharge",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions anneaux", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche Anneaux", series: 6, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Front Lever Raises Anneaux", series: 3, reps: 6, repos: 120 },
              { nom: "L-sit Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Gainage tendu Anneaux", series: 4, reps: "max temps", repos: 90, objectif: 30 },
              { nom: "Dips Anneaux pdc", series: 4, reps: 12, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force Surcharge",
            duree: 70,
            exercices: [
              { nom: "Kick up mur", series: 4, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "max temps", repos: 90, objectif: 27 },
              { nom: "Travail \u00e9quilibre libre", series: 12, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 6, reps: 2, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 4, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +15kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +15kg", series: 3, reps: 3, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Tuck Planche + Front Lever Surcharge",
            duree: 70,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche", series: 6, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 4, reps: 7, repos: 120 },
              { nom: "One Leg Front Lever", series: 4, reps: "max temps", repos: 120, objectif: 12 },
              { nom: "Front Lever Raises", series: 4, reps: 7, repos: 120 },
              { nom: "Tentative Full Front Lever", series: 3, reps: "max temps", repos: 150, objectif: 5 },
              { nom: "Tractions prise MU pdc", series: 4, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU + Rappel Force Surcharge",
            duree: 65,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 5, reps: 2, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +15kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +15kg", series: 3, reps: 3, repos: 150 }
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
            nom: "S\u00e9ance 1 \u2014 MU + Front Lever + Tuck Planche Consolidation",
            duree: 65,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Muscle Up \u2014 sans \u00e9lastique (qualit\u00e9 absolue)", series: 8, reps: 1, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 3, reps: 6, repos: 150 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tentative Full Front Lever", series: 4, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 15 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Anneaux D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Tuck Planche Anneaux", series: 4, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tuck Front Lever Anneaux", series: 3, reps: "max temps", repos: 120, objectif: 14 },
              { nom: "One Leg Front Lever Anneaux", series: 3, reps: "max temps", repos: 120, objectif: 11 },
              { nom: "L-sit Anneaux", series: 3, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Dips Anneaux pdc", series: 3, reps: 8, repos: 90 }
            ]
          },
          s3: {
            jour: "Mercredi",
            nom: "S\u00e9ance 3 \u2014 Handstand + MU + Rappel Force",
            duree: 60,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "max temps", repos: 90, objectif: 28 },
              { nom: "Travail \u00e9quilibre libre", series: 10, reps: "tentatives", repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 6, reps: 2, repos: 180 },
              { nom: "MU N\u00e9gatifs", series: 3, reps: 5, repos: 150 },
              { nom: "Tractions lest\u00e9es +12,5kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +12,5kg", series: 3, reps: 3, repos: 150 }
            ]
          },
          s4: {
            jour: "Jeudi",
            nom: "S\u00e9ance 4 \u2014 Tuck Planche + Front Lever",
            duree: 60,
            exercices: [
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tuck Planche", series: 5, reps: "max temps", repos: 120, objectif: 15 },
              { nom: "Tuck Planche Pouss\u00e9e", series: 3, reps: 7, repos: 120 },
              { nom: "One Leg Front Lever", series: 3, reps: "max temps", repos: 120, objectif: 13 },
              { nom: "Tentative Full Front Lever", series: 4, reps: "max temps", repos: 150, objectif: 6 },
              { nom: "Front Lever Raises", series: 3, reps: 7, repos: 120 },
              { nom: "Tractions prise MU pdc", series: 3, reps: 8, repos: 90 }
            ]
          },
          s5: {
            jour: "Vendredi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Kick up mur", series: 3, reps: "max temps", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 3, reps: "max temps", repos: 90, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "MU sans \u00e9lastique \u2014 tentatives", series: 4, reps: 1, repos: 180 },
              { nom: "Tractions lest\u00e9es +10kg", series: 3, reps: 3, repos: 150 },
              { nom: "Dips lest\u00e9s +10kg", series: 3, reps: 3, repos: 150 }
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