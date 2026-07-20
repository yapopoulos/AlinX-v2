// ============ SÉANCES NIVEAU 1 — DÉBUTANT ============
// 16 semaines — 4 cycles — 5 séances/semaine

var SEANCES_NIVEAU1 = {

  // ===== CYCLE 1 — FONDATION =====
  c1: {
    nom: "Cycle 1 \u2014 Fondation",
    objectif: "Apprendre les mouvements fondamentaux. Grip, Australian pull-ups, n\u00e9gatifs, premi\u00e8res tractions assist\u00e9es.",
    semaines: {

      // --- SEMAINE 1 ---
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Fondation",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, note: "prise pronation", objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Australian Pull-ups", series: 4, reps: "max", repos: 120, objectif: 6 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 4, reps: "max", repos: 90, note: "s\u2019arr\u00eater avant l\u2019\u00e9chec", objectif: 10 },
              { nom: "Dips \u00e9lastique", series: 4, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 30 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 20 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Tractions assist\u00e9es",
            duree: 55,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, note: "prise pronation", objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Australian Pull-ups", series: 4, reps: "max", repos: 120, objectif: 6 },
              { nom: "Tractions \u00e9lastique fort", series: 4, reps: 5, repos: 150, note: "mont\u00e9e lente, descente contr\u00f4l\u00e9e" },
              { nom: "Pompes classiques", series: 4, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 4, reps: 8, repos: 90 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, note: "menton au-dessus de la barre", objectif: 8 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 30 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit",
            duree: 55,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 6 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 4, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 4, reps: 10, repos: 90 },
              { nom: "Circuit finisher", series: 3, reps: "10 pompes / 5 Australian / 10 dips", repos: 120 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 30 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Isometrie",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Tractions \u00e9lastique fort", series: 5, reps: 5, repos: 150, note: "descente contr\u00f4l\u00e9e 3 secondes" },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 8 },
              { nom: "Pompes classiques", series: 4, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 4, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 30 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 20 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 5, reps: "tentatives", repos: 60, note: "focus placement mains et \u00e9paules" },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 4, reps: "max temps", repos: 90, note: "dos au mur", objectif: 15 },
              { nom: "Pike push-ups", series: 4, reps: 8, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0, note: "chaque c\u00f4t\u00e9" },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0, note: "chaque c\u00f4t\u00e9" }
            ]
          }
        }
      }

      // --- SEMAINE 2 ---
      ,s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Progression",
            duree: 55,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, note: "prise pronation", objectif: 16 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30, note: "chaque sens" },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 7 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 9 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 31 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 21 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Tractions assist\u00e9es",
            duree: 55,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 16 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 7 },
              { nom: "Tractions \u00e9lastique fort", series: 5, reps: 5, repos: 150, note: "descente contr\u00f4l\u00e9e" },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 9 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 10, repos: 90 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 9 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 31 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 16 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 7 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Tractions \u00e9lastique fort", series: 3, reps: 5, repos: 120 },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 9 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Circuit finisher", series: 3, reps: "10 pompes / 5 Australian / 10 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Isom\u00e9trie",
            duree: 55,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 16 },
              { nom: "Tractions \u00e9lastique fort", series: 5, reps: 6, repos: 150, note: "descente contr\u00f4l\u00e9e 3 secondes" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 9 },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 9 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 31 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 21 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 5, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 4, reps: "max temps", repos: 90, note: "dos au mur", objectif: 16 },
              { nom: "Pike push-ups", series: 4, reps: 10, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }

      // --- SEMAINE 3 ---
      ,s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 \u00c9lastique moyen",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 17 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 7 },
              { nom: "Tractions \u00e9lastique moyen", series: 4, reps: 4, repos: 150, note: "introduction \u00e9lastique moins fort" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 10 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 32 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 22 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Tentative traction",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 17 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 7 },
              { nom: "Tractions \u00e9lastique moyen", series: 5, reps: 5, repos: 150 },
              { nom: "Tentative traction sans \u00e9lastique", series: 3, reps: 1, repos: 180, note: "essayer, pas de panique si impossible" },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 10 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 10 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 32 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit intensif",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 17 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 7 },
              { nom: "Tractions \u00e9lastique moyen", series: 5, reps: 5, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 10 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "10 pompes / 5 Australian / 8 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Technique",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 17 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Tractions \u00e9lastique moyen", series: 5, reps: 6, repos: 150 },
              { nom: "Tentative traction sans \u00e9lastique", series: 3, reps: "1-2", repos: 180, note: "focus technique" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 10 },
              { nom: "Pompes classiques", series: 5, reps: "max", repos: 90, objectif: 10 },
              { nom: "Dips \u00e9lastique", series: 5, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 32 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, objectif: 22 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60, note: "focus \u00e9quilibre et gainage" },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, note: "dos au mur", objectif: 17 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "tentatives", repos: 90, note: "premiers essais d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 4, reps: 12, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }

      // --- SEMAINE 4 — DÉLOAD ---
      ,s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 6 },
              { nom: "Tractions \u00e9lastique moyen", series: 3, reps: 4, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 3, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 3, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 2, reps: "max temps", repos: 60, objectif: 28 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 6 },
              { nom: "Tractions \u00e9lastique moyen", series: 3, reps: 5, repos: 150 },
              { nom: "Tentative traction sans \u00e9lastique", series: 2, reps: 1, repos: 180 },
              { nom: "Pompes classiques", series: 3, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 3, reps: 10, repos: 90 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 2, reps: "max temps", repos: 90, objectif: 8 },
              { nom: "Gainage planche", series: 2, reps: "max temps", repos: 60, objectif: 28 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 6 },
              { nom: "Tractions \u00e9lastique moyen", series: 3, reps: 5, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 3, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 3, reps: 10, repos: 90 },
              { nom: "Circuit finisher", series: 2, reps: "8 pompes / 4 Australian / 8 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 15 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Traction \u00e9lastique moyen", series: 3, reps: 5, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 3, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 2, reps: "max temps", repos: 90, objectif: 8 },
              { nom: "Pompes classiques", series: 3, reps: "max", repos: 90, objectif: 8 },
              { nom: "Dips \u00e9lastique", series: 3, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 2, reps: "max temps", repos: 60, objectif: 28 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, objectif: 18 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9 D\u00e9load",
            duree: 35,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 4, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 3, reps: "max temps", repos: 90, note: "dos au mur", objectif: 14 },
              { nom: "Pike push-ups", series: 3, reps: 8, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }
    }
  }
  // ===== CYCLE 2 — CONSTRUCTION =====
  ,c2: {
    nom: "Cycle 2 \u2014 Construction",
    objectif: "Premi\u00e8res vraies tractions, dips sans \u00e9lastique, augmenter le volume pompes, handstand \u00e9loign\u00e9 du mur.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 \u00c9lastique fin",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, note: "corps plus horizontal qu\u2019en Cycle 1", objectif: 8 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 4, repos: 150, note: "descente contr\u00f4l\u00e9e 3 secondes" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: 15, repos: 90 },
              { nom: "Dips \u00e9lastique fin", series: 4, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 33 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 23 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Tentative traction",
            duree: 60,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 5, reps: "max", repos: 120, objectif: 8 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 5, repos: 150 },
              { nom: "Tentative traction sans \u00e9lastique", series: 4, reps: "1-2", repos: 180, note: "focus technique" },
              { nom: "Pompes classiques", series: 5, reps: 15, repos: 90 },
              { nom: "Dips \u00e9lastique fin", series: 4, reps: 12, repos: 90 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 11 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 33 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 8 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 5, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: 15, repos: 90 },
              { nom: "Dips \u00e9lastique fin", series: 4, reps: 12, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "10 pompes / 5 Australian / 10 dips \u00e9lastique fin", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Technique",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 6, repos: 150 },
              { nom: "Tentative traction sans \u00e9lastique", series: 4, reps: 2, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 11 },
              { nom: "Pompes classiques", series: 5, reps: 15, repos: 90 },
              { nom: "Dips \u00e9lastique fin", series: 4, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 33 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, objectif: 23 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60, note: "focus alignement et gainage" },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, note: "dos au mur", objectif: 18 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "tentatives", repos: 90, note: "chercher l\u2019\u00e9quilibre libre" },
              { nom: "Pike push-ups", series: 4, reps: 12, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Premi\u00e8res tractions",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 19 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 9 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 5, repos: 150 },
              { nom: "Traction sans \u00e9lastique", series: 4, reps: 2, repos: 180, note: "qualit\u00e9 absolue" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: 18, repos: 90 },
              { nom: "Dips \u00e9lastique fin", series: 5, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 34 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, objectif: 24 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Dips sans \u00e9lastique",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 19 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 9 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 6, repos: 150 },
              { nom: "Traction sans \u00e9lastique", series: 4, reps: "2-3", repos: 180 },
              { nom: "Pompes classiques", series: 5, reps: 18, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 4, reps: 8, repos: 120, note: "premi\u00e8re s\u00e9ance sans assistance" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 12 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 34 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit tractions",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 19 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 9 },
              { nom: "Tractions \u00e9lastique fin", series: 5, reps: 6, repos: 150 },
              { nom: "Traction sans \u00e9lastique", series: 4, reps: "2-3", repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 5, reps: 18, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 4, reps: 8, repos: 120 },
              { nom: "Circuit finisher", series: 4, reps: "10 pompes / 3 tractions / 8 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force pure",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 19 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Traction sans \u00e9lastique", series: 5, reps: 3, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 6, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 12 },
              { nom: "Pompes classiques", series: 5, reps: 18, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 4, reps: 10, repos: 120 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 34 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, objectif: 24 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, note: "dos au mur", objectif: 19 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 6, reps: "tentatives", repos: 90, note: "chercher 2-3 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 4, reps: 14, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Surcharge maximale",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 20 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 10 },
              { nom: "Traction sans \u00e9lastique", series: 5, reps: 3, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 6, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 6, reps: 20, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 5, reps: 10, repos: 120 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 35 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 25 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Volume",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 20 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 10 },
              { nom: "Traction sans \u00e9lastique", series: 5, reps: 4, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 6, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 6, reps: 20, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 5, reps: 10, repos: 120 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 13 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 35 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit intensif",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 20 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 6, reps: "max", repos: 120, objectif: 10 },
              { nom: "Traction sans \u00e9lastique", series: 5, reps: 4, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 6, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 6, reps: 20, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 5, reps: 12, repos: 120 },
              { nom: "Circuit finisher", series: 4, reps: "12 pompes / 3 tractions / 10 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force maximale",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 20 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Traction sans \u00e9lastique", series: 5, reps: 5, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 4, reps: 6, repos: 150 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 13 },
              { nom: "Pompes classiques", series: 6, reps: 20, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 5, reps: 12, repos: 120 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 35 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 25 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9",
            duree: 50,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, objectif: 20 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 8, reps: "tentatives", repos: 90, note: "viser 3-5 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 5, reps: 15, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 8 },
              { nom: "Traction sans \u00e9lastique", series: 3, reps: 3, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 3, reps: 15, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 3, reps: 8, repos: 120 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 32 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 8 },
              { nom: "Traction sans \u00e9lastique", series: 3, reps: 3, repos: 180 },
              { nom: "Tractions \u00e9lastique fin", series: 3, reps: 5, repos: 150 },
              { nom: "Pompes classiques", series: 3, reps: 15, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 3, reps: 8, repos: 120 },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 11 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 32 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Australian Pull-ups", series: 3, reps: "max", repos: 120, objectif: 8 },
              { nom: "Traction sans \u00e9lastique", series: 3, reps: 3, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pompes classiques", series: 3, reps: 15, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 3, reps: 8, repos: 120 },
              { nom: "Circuit finisher", series: 2, reps: "8 pompes / 2 tractions / 8 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 18 },
              { nom: "Rotation d\u2019\u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Traction sans \u00e9lastique", series: 3, reps: 3, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 11 },
              { nom: "Pompes classiques", series: 3, reps: 15, repos: 90 },
              { nom: "Dips sans \u00e9lastique", series: 3, reps: 8, repos: 120 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 32 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, objectif: 22 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + Mobilit\u00e9 D\u00e9load",
            duree: 35,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 4, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 3, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 4, reps: "tentatives", repos: 90 },
              { nom: "Pike push-ups", series: 3, reps: 10, repos: 90 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }
    }
  }
  // ===== CYCLE 3 — PROGRESSION =====
  ,c3: {
    nom: "Cycle 3 \u2014 Progression",
    objectif: "Atteindre 8-10 tractions propres, pyramides tractions/dips, introduction lest l\u00e9ger, handstand 10-15 secondes libre, premiers n\u00e9gatifs muscle up.",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 22 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45, note: "introduction mouvement scapulaire" },
              { nom: "Pyramide Tractions", series: 1, reps: "1/2/3/4/3/2/1", repos: 120, note: "repos 2 min entre chaque palier" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/4/2", repos: 90, note: "repos 1 min 30 entre chaque palier" },
              { nom: "Pompes classiques", series: 5, reps: 20, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 36 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, note: "chaque c\u00f4t\u00e9", objectif: 26 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Max tractions",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 22 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 5, reps: "max", repos: 150, note: "s\u2019arr\u00eater \u00e0 2 reps de l\u2019\u00e9chec", objectif: 4 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 14 },
              { nom: "Dips", series: 5, reps: 12, repos: 120 },
              { nom: "Pompes classiques", series: 5, reps: 20, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 36 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Pyramides \u00e9tendues",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 22 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "1/2/3/4/5/4/3/2/1", repos: 120, note: "repos 2 min entre chaque palier" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/8/6/4/2", repos: 90, note: "repos 1 min 30 entre chaque palier" },
              { nom: "Pompes classiques", series: 5, reps: 20, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "10 pompes / 3 tractions / 10 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Lest pompes",
            duree: 65,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 22 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 5, reps: "max", repos: 150, objectif: 4 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 14 },
              { nom: "Dips", series: 5, reps: 12, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 4, reps: 10, repos: 90, note: "introduction lest pompes" },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 36 },
              { nom: "Gainage lat\u00e9ral", series: 3, reps: "max temps", repos: 45, objectif: 26 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + N\u00e9gatifs MU",
            duree: 50,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, objectif: 22 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 8, reps: "tentatives", repos: 90, note: "viser 5-10 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 5, reps: 15, repos: 90 },
              { nom: "N\u00e9gatifs Muscle Up", series: 3, reps: 3, repos: 150, note: "monter avec saut, descendre lentement" },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides + lest pompes",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 23 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "1/2/3/4/5/4/3/2/1", repos: 120 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/8/6/4/2", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 37 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 27 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Tractions lest\u00e9es",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 23 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 5 },
              { nom: "Tractions lest\u00e9es +2,5kg", series: 3, reps: 4, repos: 180, note: "introduction lest tractions" },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 15 },
              { nom: "Dips", series: 5, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 37 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Grande pyramide",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 23 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/5/4/3/2/1", repos: 120 },
              { nom: "Tractions lest\u00e9es +2,5kg", series: 3, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/8/10/8/6/4/2", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "12 pompes / 4 tractions / 12 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force lest\u00e9e",
            duree: 70,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 23 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 5 },
              { nom: "Tractions lest\u00e9es +2,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 15 },
              { nom: "Dips", series: 5, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 4, reps: 12, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 37 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 27 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + N\u00e9gatifs MU",
            duree: 50,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, objectif: 23 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 8, reps: "tentatives", repos: 90, note: "viser 10 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 5, reps: 15, repos: 90 },
              { nom: "N\u00e9gatifs Muscle Up", series: 3, reps: 4, repos: 150 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Surcharge maximale",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 24 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/8/6/4/2", repos: 120 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/12/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 38 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 28 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Volume max",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 24 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 6 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 16 },
              { nom: "Dips", series: 6, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 38 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit intensif",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 24 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/8/6/4/2", repos: 120 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/12/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "12 pompes / 5 tractions / 12 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force maximale",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 24 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 6 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 16 },
              { nom: "Dips", series: 6, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 38 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 28 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU assist\u00e9",
            duree: 55,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 5, reps: "max temps", repos: 90, objectif: 24 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 10, reps: "tentatives", repos: 90, note: "viser 10-15 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 5, reps: 15, repos: 90 },
              { nom: "N\u00e9gatifs Muscle Up", series: 4, reps: 4, repos: 150 },
              { nom: "MU assist\u00e9 \u00e9lastique fort", series: 3, reps: 2, repos: 150, note: "introduction" },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load",
            duree: 45,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 21 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "1/2/3/4/3/2/1", repos: 120 },
              { nom: "Tractions lest\u00e9es +2,5kg", series: 3, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/4/2", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 34 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 D\u00e9load",
            duree: 45,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 21 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 4, reps: "max", repos: 150, objectif: 4 },
              { nom: "Tractions lest\u00e9es +2,5kg", series: 3, reps: 3, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 14 },
              { nom: "Dips", series: 3, reps: 12, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 34 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 D\u00e9load",
            duree: 45,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 21 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "1/2/3/4/3/2/1", repos: 120 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "2/4/6/4/2", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Circuit finisher", series: 2, reps: "10 pompes / 3 tractions / 10 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 D\u00e9load",
            duree: 45,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 21 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 4, reps: "max", repos: 150, objectif: 4 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 14 },
              { nom: "Dips", series: 3, reps: 12, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 10, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 34 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, objectif: 24 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand D\u00e9load",
            duree: 40,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 4, reps: "tentatives", repos: 60 },
              { nom: "Gainage \u00e9paules en appui renvers\u00e9", series: 3, reps: "max temps", repos: 90 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 5, reps: "tentatives", repos: 90 },
              { nom: "Pike push-ups", series: 3, reps: 10, repos: 90 },
              { nom: "N\u00e9gatifs Muscle Up", series: 3, reps: 3, repos: 150 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }
    }
  }
  // ===== CYCLE 4 — TRANSITION =====
  ,c4: {
    nom: "Cycle 4 \u2014 Transition",
    objectif: "Atteindre 12-15 tractions propres, pyramides lest\u00e9es, MU assist\u00e9 \u00e9lastique moyen, handstand 15-20 secondes. \u00c0 la fin de ce cycle : pr\u00eat pour le Niveau 2 !",
    semaines: {
      s1: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides lest\u00e9es",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 26 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/8/6/4/2", repos: 120 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/12/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 40 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 30 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Volume lest\u00e9",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 26 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 7 },
              { nom: "Tractions lest\u00e9es +5kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 17 },
              { nom: "Dips", series: 6, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 4, reps: "max temps", repos: 60, objectif: 40 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Grande pyramide",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 26 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "3/5/7/9/7/5/3", repos: 120 },
              { nom: "Tractions lest\u00e9es +5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/12/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "12 pompes / 5 tractions / 12 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force maximale",
            duree: 75,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 26 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 7 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 4, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 4, reps: "max temps", repos: 90, objectif: 17 },
              { nom: "Dips", series: 6, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 40 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 30 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 8, reps: "tentatives", repos: 90, note: "viser 15 secondes" },
              { nom: "Pike push-ups", series: 5, reps: 15, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "N\u00e9gatifs MU", series: 4, reps: 4, repos: 150 },
              { nom: "MU assist\u00e9 \u00e9lastique moyen", series: 4, reps: 2, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 4, repos: 120 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s2: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Pyramides +7,5kg",
            duree: 80,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 27 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "3/5/7/9/7/5/3", repos: 120 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 4, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "4/7/10/14/10/7/4", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 18, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 41 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 31 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Volume +7,5kg",
            duree: 80,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 27 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 8 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Dips", series: 6, reps: 18, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 18, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 41 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit intensif",
            duree: 80,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 27 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "3/5/7/9/7/5/3", repos: 120 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "4/7/10/14/10/7/4", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 18, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "15 pompes / 6 tractions / 15 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force +10kg",
            duree: 80,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 27 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 8 },
              { nom: "Tractions lest\u00e9es +10kg", series: 4, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 18 },
              { nom: "Dips", series: 6, reps: 18, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 5, reps: 18, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 41 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 31 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU",
            duree: 60,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 8, reps: "tentatives", repos: 90, note: "viser 15-20 secondes" },
              { nom: "Pike push-ups", series: 5, reps: 18, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "N\u00e9gatifs MU", series: 4, reps: 5, repos: 150 },
              { nom: "MU assist\u00e9 \u00e9lastique moyen", series: 4, reps: 3, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 4, reps: 5, repos: 120 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s3: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 Surcharge maximale",
            duree: 85,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 28 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "4/6/8/10/8/6/4", repos: 120 },
              { nom: "Tractions lest\u00e9es +10kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "4/7/10/14/10/7/4", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 6, reps: 20, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 42 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 32 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 Volume max",
            duree: 85,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 28 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 9 },
              { nom: "Tractions lest\u00e9es +10kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 19 },
              { nom: "Dips", series: 6, reps: 20, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 6, reps: 20, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 42 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 Circuit final",
            duree: 85,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 28 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "4/6/8/10/8/6/4", repos: 120 },
              { nom: "Tractions lest\u00e9es +10kg", series: 5, reps: 5, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "5/8/12/16/12/8/5", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 6, reps: 20, repos: 90 },
              { nom: "Circuit finisher", series: 4, reps: "15 pompes / 8 tractions / 15 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 Force +12,5kg",
            duree: 85,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 28 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 6, reps: "max", repos: 150, objectif: 9 },
              { nom: "Tractions lest\u00e9es +12,5kg", series: 4, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 5, reps: 5, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 5, reps: "max temps", repos: 90, objectif: 19 },
              { nom: "Dips", series: 6, reps: 20, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 6, reps: 20, repos: 90 },
              { nom: "Gainage planche", series: 5, reps: "max temps", repos: 60, objectif: 42 },
              { nom: "Gainage lat\u00e9ral", series: 4, reps: "max temps", repos: 45, objectif: 32 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU max",
            duree: 65,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 6, reps: "tentatives", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 10, reps: "tentatives", repos: 90, note: "viser 20 secondes d\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 5, reps: 20, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "N\u00e9gatifs MU", series: 5, reps: 5, repos: 150 },
              { nom: "MU assist\u00e9 \u00e9lastique moyen", series: 5, reps: 3, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 5, reps: 5, repos: 120 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      },
      s4: {
        seances: {
          s1: {
            jour: "Lundi",
            nom: "S\u00e9ance 1 \u2014 D\u00e9load final",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/8/6/4/2", repos: 120 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 3, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 38 }
            ]
          },
          s2: {
            jour: "Mardi",
            nom: "S\u00e9ance 2 \u2014 D\u00e9load final",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 4, reps: "max", repos: 150, objectif: 7 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 3, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 17 },
              { nom: "Dips", series: 4, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 38 }
            ]
          },
          s3: {
            jour: "Jeudi",
            nom: "S\u00e9ance 3 \u2014 D\u00e9load final",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Pyramide Tractions", series: 1, reps: "2/4/6/8/6/4/2", repos: 120 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Pyramide Dips", series: 1, reps: "3/6/9/6/3", repos: 90 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 15, repos: 90 },
              { nom: "Circuit finisher", series: 2, reps: "10 pompes / 5 tractions / 10 dips", repos: 120 }
            ]
          },
          s4: {
            jour: "Vendredi",
            nom: "S\u00e9ance 4 \u2014 D\u00e9load final",
            duree: 50,
            exercices: [
              { nom: "Suspension \u00e0 la barre", series: 3, reps: "max temps", repos: 45, objectif: 25 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "Tractions", series: 4, reps: "max", repos: 150, objectif: 7 },
              { nom: "Tractions lest\u00e9es +7,5kg", series: 3, reps: 4, repos: 180 },
              { nom: "N\u00e9gatifs tractions", series: 3, reps: 4, repos: 150, note: "descente 5 secondes" },
              { nom: "Curl isom\u00e9trique \u00e0 la barre", series: 3, reps: "max temps", repos: 90, objectif: 17 },
              { nom: "Dips", series: 4, reps: 15, repos: 120 },
              { nom: "Pompes lest\u00e9es +5kg", series: 3, reps: 15, repos: 90 },
              { nom: "Gainage planche", series: 3, reps: "max temps", repos: 60, objectif: 38 },
              { nom: "Gainage lat\u00e9ral", series: 2, reps: "max temps", repos: 45, objectif: 28 }
            ]
          },
          s5: {
            jour: "Samedi",
            nom: "S\u00e9ance 5 \u2014 Handstand + MU D\u00e9load",
            duree: 45,
            exercices: [
              { nom: "Rotation poignets", series: 2, reps: 10, repos: 30 },
              { nom: "Rotation \u00e9paules", series: 2, reps: 10, repos: 30 },
              { nom: "Gainage planche", series: 2, reps: "30s", repos: 45 },
              { nom: "Kick up mur", series: 4, reps: "tentatives", repos: 60 },
              { nom: "Handstand \u00e9loign\u00e9 du mur", series: 6, reps: "tentatives", repos: 90, note: "consolider l\u2019\u00e9quilibre" },
              { nom: "Pike push-ups", series: 3, reps: 15, repos: 90 },
              { nom: "Scapular tractions", series: 2, reps: 10, repos: 45 },
              { nom: "N\u00e9gatifs MU", series: 3, reps: 4, repos: 150 },
              { nom: "MU assist\u00e9 \u00e9lastique moyen", series: 3, reps: 2, repos: 150 },
              { nom: "Tractions explosives poitrine haute", series: 3, reps: 4, repos: 120 },
              { nom: "\u00c9tirements \u00e9paules", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements poignets", series: 3, reps: "30s", repos: 0 },
              { nom: "\u00c9tirements dorsaux", series: 3, reps: "30s", repos: 0 },
              { nom: "Rotation thoracique", series: 3, reps: 10, repos: 0 }
            ]
          }
        }
      }
    }
  }
};