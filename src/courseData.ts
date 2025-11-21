export const courseData = {
  id: "mitarbeiterfuehrung_14tage",
  title: "Mitarbeiterführung & Personalmanagement",
  description: "14-Tage Sprint zur Prüfungsvorbereitung für Operative Professionals.",
  totalDays: 14,
  days: Array.from({ length: 14 }, (_, i) => {
    const dayNum = i + 1;

    if (dayNum === 1) {
      return {
        id: dayNum,
        title: "Führungsstile & Grundlagen",
        goal: "Unterscheidung autoritär, kooperativ und Laissez-faire.",
        theory:
          "Führung ist die zielorientierte Beeinflussung von Mitarbeitern. Die klassischen Führungsstile nach Kurt Lewin sind elementar: \\n\\n1. Autoritär: Vorgesetzter entscheidet allein.\\n2. Kooperativ: Mitarbeiter werden einbezogen.\\n3. Laissez-faire: Völlige Freiheit ohne Lenkung.\\n\\nModerne Ansätze (Situatives Führen) kombinieren diese je nach Reifegrad des Mitarbeiters.",
        cards: [
          {
            id: 1,
            q: "Was kennzeichnet den autoritären Führungsstil?",
            a: "Entscheidung allein durch Vorgesetzten, keine Einbindung der MA, klare Anweisungen."
          },
          {
            id: 2,
            q: "Nenne einen Nachteil des Laissez-faire Stils.",
            a: "Orientierungslosigkeit, mangelnde Disziplin, schwache Gruppenleistung."
          },
          {
            id: 3,
            q: "Was ist 'Situatives Führen'?",
            a: "Führungsverhalten wird an den Reifegrad (Wollen & Können) des Mitarbeiters angepasst."
          }
        ],
        quiz: [
          {
            id: 1,
            q: "Wer prägte die klassischen 3 Führungsstile?",
            options: ["Maslow", "Lewin", "Herzberg", "Pareto"],
            correct: 1
          },
          {
            id: 2,
            q: "Welcher Stil bietet die höchste Entscheidungsgeschwindigkeit?",
            options: ["Kooperativ", "Laissez-faire", "Autoritär", "Bürokratisch"],
            correct: 2
          },
          {
            id: 3,
            q: "Worauf basiert situatives Führen?",
            options: [
              "Nur auf Sympathie",
              "Auf dem Reifegrad des MA",
              "Auf dem Alter des Vorgesetzten",
              "Auf dem Gehalt"
            ],
            correct: 1
          }
        ]
      };
    }

    if (dayNum === 2) {
      return {
        id: dayNum,
        title: "Motivationstheorien",
        goal: "Verständnis von Maslow und Herzberg.",
        theory:
          "Motivation entsteht aus unbefriedigten Bedürfnissen.\\n\\nMaslowsche Pyramide: Physiologisch -> Sicherheit -> Sozial -> Ich -> Selbstverwirklichung.\\n\\nHerzberg (2-Faktoren): \\n- Hygienefaktoren (verhindern Unzufriedenheit, z.B. Gehalt)\\n- Motivatoren (schaffen Zufriedenheit, z.B. Anerkennung).",
        cards: [
          {
            id: 4,
            q: "Was sind Hygienefaktoren nach Herzberg?",
            a: "Faktoren, die Unzufriedenheit verhindern, aber nicht dauerhaft motivieren (z.B. Arbeitsbedingungen, Gehalt)."
          },
          { id: 5, q: "Nenne die oberste Stufe bei Maslow.", a: "Selbstverwirklichung." },
          {
            id: 6,
            q: "Was sind Motivatoren?",
            a: "Faktoren, die echte Zufriedenheit schaffen (z.B. Verantwortung, Erfolgserlebnis)."
          }
        ],
        quiz: [
          {
            id: 4,
            q: "Gehalt ist nach Herzberg meistens ein...",
            options: ["Motivator", "Hygienefaktor", "Störfaktor", "Bonus"],
            correct: 1
          },
          {
            id: 5,
            q: "Was steht an der Basis der Maslow-Pyramide?",
            options: [
              "Soziale Bedürfnisse",
              "Sicherheitsbedürfnisse",
              "Physiologische Bedürfnisse",
              "Ich-Bedürfnisse"
            ],
            correct: 2
          },
          {
            id: 6,
            q: "Intrinsische Motivation kommt von...",
            options: ["Innen", "Außen", "Dem Chef", "Dem Geld"],
            correct: 0
          }
        ]
      };
    }

    return {
      id: dayNum,
      title: \`Tag \${dayNum}: Themenplatzhalter\`,
      goal: "Wissen vertiefen und Transfer leisten.",
      theory: \`Hier steht der Lehrtext für Tag \${dayNum}. Das 5-Stufen-Modell (Build-Learn-Test-Transfer-Review) wird angewendet.\`,
      cards: [
        { id: 100 + i, q: \`Frage zu Tag \${dayNum}\`, a: "Musterantwort für diesen Tag." },
        { id: 200 + i, q: "Definition X", a: "Erklärung Y" }
      ],
      quiz: [
        { id: 300 + i, q: \`Testfrage Tag \${dayNum}?\`, options: ["A", "B", "C", "D"], correct: 0 },
        { id: 400 + i, q: "Wahr oder Falsch?", options: ["Wahr", "Falsch"], correct: 0 },
        { id: 500 + i, q: "Was trifft zu?", options: ["Alles", "Nichts"], correct: 0 }
      ]
    };
  })
};

export const bonusModules: any[] = [];
