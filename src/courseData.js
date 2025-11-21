// --- Kursdaten (ShadowLearn - Mitarbeiterführung & Personalmanagement) ---
// Exportiert, um App.jsx von statischem Content zu entlasten.

export const courseData = {
  id: "mitarbeiterfuehrung_14tage",
  title: "Mitarbeiterführung & Personalmanagement",
  description: "14-Tage Sprint zur Prüfungsvorbereitung für Operative Professionals.",
  totalDays: 14,
  days: [
    // --- TAG 1: FÜHRUNGSMODELLE BEHERRSCHEN ---
    {
      id: 1,
      title: "Tag 1: Führungsmodelle beherrschen",
      goal: "Verschiedene Führungsstile (situativ, transformational) beherrschen und deren situativen Einsatz verstehen.",
      theory: `
Führung ist die zielorientierte Beeinflussung von Mitarbeitern.

1. Autoritärer Führungsstil: Eindimensional, Betriebsinteressen stehen im Vordergrund. Entscheidungen werden allein von der Führungskraft getroffen.
   • Anwendung: Notwendig in Notfällen (Militär, Katastrophenschutz).
   • Negative Aspekte: Mangelnde Entwicklung/Eigeninitiative der MA.

2. Kooperativer Führungsstil: Zweidimensional, Mitarbeiterinteressen werden einbezogen. Mitarbeiter werden in Entscheidungen eingebunden.

3. Laissez-faire Führungsstil: Oft als 'Nicht-Führung' betrachtet. Großer Spielraum für MA. Ideal bei hoch motivierten und qualifizierten Mitarbeitern.

4. Situativer Führungsstil: Basierend auf dem Reifegrad des Mitarbeiters (Können / Qualifikation und Wollen / Motivation).

5. Transformationale Führung: Moderner Stil, bei dem der Teamleiter die Teammitglieder durch intrinsische Motivation und persönliches Vorbild zur Veränderung ihrer Lern- und Leistungsbereitschaft anregt.
        `,
      cards: [
        { id: 101, q: "Wann ist der autoritäre Führungsstil heute noch sinnvoll?", a: "In Krisen-, Katastrophen- oder Notsituationen (z.B. Militär, Polizei), wo schnelle, klare Entscheidungen nötig sind." },
        { id: 102, q: "Was ist der Unterschied zwischen situativer und transformationaler Führung?", a: "Situativ: Passt den Stil an den Reifegrad des MA an. Transformational: Motiviert MA durch Vorbild und Vision zur intrinsischen Leistungssteigerung (Veränderung)." },
        { id: 103, q: "Was sind typische Ursachen für einen Leistungsabfall im Team?", a: "Schlechtes Betriebsklima, unklare Aufgabenstellungen, fehlende Anerkennung oder mangelndes Engagement." },
        { id: 104, q: "Was bedeutet Kooperation beim kooperativen Führungsstil?", a: "Mitarbeiter werden in den Entscheidungsprozess einbezogen, was zu höherer Akzeptanz führt." },
        { id: 105, q: "Welcher Führungsstil basiert auf dem Reifegrad des Mitarbeiters?", a: "Situativer Führungsstil (Können + Wollen)." }
      ],
      quiz: [
        { id: 101, q: "Welches Führungsmodell zielt auf die intrinsische Motivation und Veränderung der MA ab?", options: ["Situativ", "Laissez-faire", "Transformational", "Autoritär"], correct: 2 },
        { id: 102, q: "Wodurch zeichnet sich der Reifegrad beim situativen Führen aus?", options: ["Alter und Gehalt", "Können und Wollen", "Dauer der Betriebszugehörigkeit", "Hierarchiestufe"], correct: 1 },
        { id: 103, q: "In welchen Situationen ist der autoritäre Stil am effektivsten?", options: ["Täglicher Büroalltag", "Kreative Prozesse", "Notfall und Krisen", "Team-Entscheidungen"], correct: 2 },
        { id: 104, q: "Was ist ein Nachteil des Laissez-faire Stils?", options: ["Zu starke Führung", "Überforderung der Führungskraft", "Orientierungslosigkeit der MA", "Hohe Akzeptanz"], correct: 2 }
      ]
    },

    // --- TAG 2: MOTIVATION VOLLSTÄNDIG VERSTEHEN ---
    {
      id: 2,
      title: "Tag 2: Motivation vollständig verstehen",
      goal: "Herzbergs Zwei-Faktoren-Theorie und Maslows Bedürfnispyramide anwenden.",
      theory: `
Motivation ist die innere Antriebskraft, ein Ziel zu erreichen.

1. Maslowsche Bedürfnispyramide: Hierarchisches Modell (Physiologisch → Sicherheit → Sozial → Ich → Selbstverwirklichung).
   • Wichtig: Geld befriedigt hauptsächlich die materiellen Bedürfnisse der unteren beiden Stufen (körperliches Wohlbefinden und Sicherheit).

2. Herzbergs Zwei-Faktoren-Theorie:
   • Hygienefaktoren (z.B. Geld, Arbeitsbedingungen): Können Unzufriedenheit beseitigen, leisten aber **keinen** Beitrag zur *wirklichen* Motivation.
   • Motivatoren (z.B. Anerkennung, Verantwortung): Schaffen echte, dauerhafte Arbeitszufriedenheit.

3. Intrinsische Motivation: Aus sich selbst heraus (Freude an der Aufgabe).
4. Extrinsische Motivation: Durch äußere Anreize (Gehalt, Boni, Strafen).
        `,
      cards: [
        { id: 201, q: "Warum zählt Geld nach Herzberg zu den Hygienefaktoren?", a: "Es kann Unzufriedenheit beseitigen oder verhindern, aber es schafft keine **wirkliche** Arbeitsmotivation (diese entsteht nur durch Motivatoren)." },
        { id: 202, q: "Nenne die beiden untersten Stufen von Maslow, die hauptsächlich durch Geld befriedigt werden.", a: "Körperliches Wohlbefinden (Physiologie) und Sicherheit (Arbeitsplatzsicherheit)." },
        { id: 203, q: "Was sind führende Maßnahmen zur Behebung von Passivität/fehlendem Engagement?", a: "Anerkennung und Wertschätzung, Einbindung in Entscheidungsprozesse und Förderung der persönlichen Entwicklung." },
        { id: 204, q: "Was ist der Unterschied zwischen Hygienefaktoren und Motivatoren?", a: "Hygienefaktoren = Notwendige Basis, um Unzufriedenheit zu verhindern. Motivatoren = Faktoren, die aktiv Zufriedenheit schaffen und zu überdurchschnittlicher Leistung führen." },
        { id: 205, q: "Nenne einen Vertreter, der die Motivation durch Leistung, Macht und Zugehörigkeit beschreibt.", a: "David McClelland (Erfolgsmotivation)." }
      ],
      quiz: [
        { id: 201, q: "Gehalt zählt nach Herzberg primär zu den...", options: ["Motivatoren", "Hygienefaktoren", "Ich-Bedürfnissen", "Transformationsfaktoren"], correct: 1 },
        { id: 202, q: "Was steht an der Spitze der Maslowschen Pyramide?", options: ["Ich-Bedürfnisse", "Soziale Bedürfnisse", "Sicherheitsbedürfnisse", "Selbstverwirklichung"], correct: 3 },
        { id: 203, q: "Welche Maßnahme wirkt bei MA ohne Antrieb am effektivsten?", options: ["Kürzere Arbeitszeiten", "Neue Büromöbel", "Mehr Verantwortung und Anerkennung", "Strengere Regeln"], correct: 2 },
        { id: 204, q: "Welches Konzept besagt, dass der Motivationseffekt von übertariflicher Bezahlung schnell verfliegt?", options: ["Maslow", "McClelland", "Herzberg", "Taylor"], correct: 2 }
      ]
    },

    // --- TAG 3: RECHTLICHE GRUNDLAGEN & ARBEITSSCHUTZ ---
    {
      id: 3,
      title: "Tag 3: Rechtliche Grundlagen & Arbeitsschutz",
      goal: "Arbeitsrechtliche Schutzvorschriften und Pflichten von Arbeitgeber und Arbeitnehmer kennen.",
      theory: `
Im Arbeits- und Arbeitsschutzrecht geht es darum, Beschäftigte vor gesundheitlichen, körperlichen und wirtschaftlichen Schäden zu schützen. Für die Prüfung reicht ein klarer Überblick über die wichtigsten Prinzipien und Pflichten.

Rangfolge der Rechtsnormen & Günstigkeitsprinzip:
- Von oben nach unten: EU-Recht → Bundesgesetze → Tarifverträge → Betriebsvereinbarungen → Arbeitsvertrag.
- Es gilt das Günstigkeitsprinzip: Für den Arbeitnehmer gilt immer die für ihn günstigere Regelung, wenn Normen kollidieren. 

Wichtige Gesetze im Kontext Arbeitsschutz:
- ArbSchG (Arbeitsschutzgesetz): Regelt den allgemeinen Gesundheitsschutz im Betrieb (Gefährdungsbeurteilung, Unterweisung, Schutzmaßnahmen).
- ArbZG (Arbeitszeitgesetz): Arbeitszeiten, Ruhepausen, Ruhezeiten, Sonn- und Feiertagsarbeit.
- JArbSchG (Jugendarbeitsschutzgesetz): Besonderer Schutz für Jugendliche/Auszubildende unter 18 Jahren.
- MuSchG (Mutterschutzgesetz): Schutz für schwangere und stillende Mütter.
- BBiG: Regelt die Berufsausbildung (Vertrag, Pflichten, Kündigung, Ende der Ausbildung).

Pflichten des Arbeitgebers (Auswahl):
- Gefährdungsbeurteilung durchführen und dokumentieren.
- Geeignete technische, organisatorische und persönliche Schutzmaßnahmen einführen (TOP-Prinzip).
- Mitarbeiter regelmäßig unterweisen (z.B. Arbeitsmittel, Gefahrstoffe, Verhalten im Notfall).
- Persönliche Schutzausrüstung (PSA) bereitstellen, wenn nötig.
- Besondere Schutzvorschriften für Jugendliche, Schwangere, Schwerbehinderte beachten.

Pflichten der Arbeitnehmer:
- Weisungen des Arbeitgebers im Rahmen der Gesetze befolgen.
- Schutzeinrichtungen und PSA bestimmungsgemäß benutzen.
- Gefahren, Unfälle und Mängel melden.
- Kollegen nicht gefährden (z.B. durch leichtsinniges Verhalten).

Ausbildungsbezug:
- Azubis stehen unter besonderem Schutz (JArbSchG, BBiG).
- Der Ausbildungsbetrieb trägt die Verantwortung, dass alle relevanten Schutzvorschriften eingehalten werden – nicht die Berufsschule.
- In Prüfungsaufgaben wird oft erwartet, dass du diese Verantwortung klar benennst und Maßnahmen ableitest (z.B. Unterweisung, Anpassung der Arbeitszeiten, Gefährdungsbeurteilung aktualisieren).
        `,
      cards: [
        {
          id: 10,
          q: "Was bedeutet das Günstigkeitsprinzip im Arbeitsrecht?",
          a: "Wenn mehrere Regelungen greifen, gilt für den Arbeitnehmer die jeweils günstigere (z.B. Tarifvertrag mit mehr Urlaub statt nur gesetzlichem Mindesturlaub)."
        },
        {
          id: 11,
          q: "Nenne zwei wichtige Pflichten des Arbeitgebers im Arbeitsschutz.",
          a: "Gefährdungsbeurteilung durchführen und Schutzmaßnahmen umsetzen; Mitarbeiter regelmäßig unterweisen und erforderliche Schutzausrüstung bereitstellen."
        },
        {
          id: 12,
          q: "Welche zentrale Pflicht haben Arbeitnehmer im Arbeitsschutz?",
          a: "Sie müssen Schutzmaßnahmen und Anweisungen beachten, Schutzausrüstung nutzen und Gefahren oder Mängel melden."
        },
        {
          id: 13,
          q: "Welches Gesetz schützt besonders Jugendliche im Arbeitsleben?",
          a: "Das Jugendarbeitsschutzgesetz (JArbSchG)."
        },
        {
          id: 14,
          q: "Wer trägt in der Ausbildung die Hauptverantwortung für die Einhaltung aller Schutzvorschriften?",
          a: "Der Ausbildungsbetrieb bzw. Ausbildende – nicht die Berufsschule."
        }
      ],
      quiz: [
        {
          id: 8,
          q: "Welche Reihenfolge der Rechtsnormen ist im Arbeitsrecht sinngemäß korrekt?",
          options: [
            "Arbeitsvertrag → Tarifvertrag → Gesetz",
            "Gesetz → Tarifvertrag → Betriebsvereinbarung → Arbeitsvertrag",
            "Betriebsvereinbarung → Gesetz → Tarifvertrag",
            "Tarifvertrag → EU-Recht → Arbeitsvertrag"
          ],
          correct: 1
        },
        {
          id: 9,
          q: "Welche Aussage beschreibt eine Pflicht des Arbeitgebers im Arbeitsschutz am besten?",
          options: [
            "Der Arbeitgeber darf Gefährdungen schriftlich ignorieren, wenn Mitarbeiter zustimmen.",
            "Der Arbeitgeber muss Gefährdungen ermitteln, Schutzmaßnahmen festlegen und Mitarbeiter unterweisen.",
            "Nur der Betriebsrat ist für den Arbeitsschutz verantwortlich.",
            "Arbeitsschutz gilt nur für Vollzeitkräfte."
          ],
          correct: 1
        },
        {
          id: 10,
          q: "Was bedeutet das Günstigkeitsprinzip für Arbeitnehmer?",
          options: [
            "Es gilt immer nur das Gesetz, nie der Tarifvertrag.",
            "Die schlechteste Regelung gilt, wenn mehrere Normen existieren.",
            "Die für den Arbeitnehmer vorteilhaftere Regelung setzt sich durch.",
            "Der Arbeitgeber entscheidet frei, welche Regelung angewendet wird."
          ],
          correct: 2
        },
        {
          id: 11,
          q: "Welche Pflicht gehört typischerweise NICHT zu den Pflichten des Arbeitnehmers im Arbeitsschutz?",
          options: [
            "Schutzausrüstung benutzen.",
            "Gefährliche Situationen melden.",
            "Unterweisungen besuchen.",
            "Gefährdungsbeurteilungen erstellen."
          ],
          correct: 3
        }
      ]
    },

    // --- TAG 4: GESPRÄCHSFÜHRUNG (TAKTISCH) ---
    {
      id: 4,
      title: "Tag 4: Gesprächsführung (taktisch)",
      goal: "Kommunikationsebenen verstehen und das Harvard-Modell zur Konfliktlösung anwenden.",
      theory: `
Dieser Tag konzentriert sich auf die theoretischen Grundlagen der Kommunikation und deren Anwendung in schwierigen Gesprächen.

1. Eisbergmodell der Kommunikation: Nur ca. 20% sind Sachebene (oberhalb der Wasserlinie), 80% sind Beziehungsebene (Emotionen, Haltung, Werte, unterhalb der Wasserlinie). Die Beziehungsebene hat den immensen Einfluss. 

2. Aktives Zuhören:
   • Verbal (Nachfragen, Zusammenfassen) und Nonverbal (Blickkontakt, Mimik, Gestik).
   • Voraussetzung: Empathie, Geduld, echtes Interesse.

3. Kritikgespräch/Konfliktlösung: Vorwürfe in Wünsche umwandeln (Wünsche sind zukunftsgerichtet und weniger bedrohlich).

4. Harvard-Modell der Konfliktlösung (4 Schritte):
   • 1. Menschen und Probleme trennen ('Du bist okay, die Handlung war es nicht').
   • 2. Interessen, nicht Positionen verhandeln (Wahres Motiv aufdecken).
   • 3. Optionen für beide Seiten entwickeln (Win-Win).
   • 4. Gemeinsame Lösung, die auf objektiven Kriterien beruht, finden (hohe Akzeptanz).
        `,
      cards: [
        { id: 401, q: "Wie viele Prozent der Kommunikation liegen laut Eisbergmodell auf der Beziehungsebene?", a: "Ca. 80% (unterhalb der Wasserlinie)." },
        { id: 402, q: "Was bedeutet 'Menschen und Probleme trennen' im Harvard-Modell?", a: "Emotionen und Anfeindungen werden aus der Verhandlung genommen. Man kritisiert die Handlung, nicht die Person." },
        { id: 403, q: "Warum sollte man Vorwürfe in Wünsche umwandeln?", a: "Wünsche sind zukunftsgerichtet und vermindern das Bedrohungspotenzial im Kritikgespräch." },
        { id: 404, q: "Nenne eine verbale Technik des aktiven Zuhörens.", a: "Konkretes Nachfragen oder eine klärende Zusammenfassung des Gesagten." }
      ],
      quiz: [
        { id: 401, q: "Welche Ebene hat laut Eisbergmodell den immensen Einfluss auf Kommunikation?", options: ["Die Sache Ebene", "Die Inhaltsebene", "Die Beziehungsebene", "Die technische Ebene"], correct: 2 },
        { id: 402, q: "Welche Regel gehört NICHT zum Harvard-Modell?", options: ["Menschen und Probleme trennen", "Interessen, nicht Positionen verhandeln", "Win-Win-Optionen entwickeln", "Immer mit Maximalforderungen starten"], correct: 3 },
        { id: 403, q: "Die Hauptaussage der Regel 'Interessen, nicht Positionen verhandeln' ist...", options: ["Immer die eigene Position durchsetzen.", "Die wahren Motive hinter der Position aufdecken.", "Die Verhandlung auf die Vergangenheit fokussieren.", "Die Positionen beider Seiten ignorieren."], correct: 1 },
        { id: 404, q: "Warum ist aktives Zuhören wichtig für die Konfliktlösung?", options: ["Es zeigt dem Chef, dass man aufpasst.", "Es dient nur der Zeitverzögerung.", "Es hilft, das Anliegen des Partners genau zu verstehen.", "Es beendet die Diskussion sofort."], correct: 2 }
      ]
    },

    // --- TAG 5: ARBEITSRECHT I: FUNDAMENT ---
    {
      id: 5,
      title: "Tag 5: Arbeitsrecht I: Fundament",
      goal: "Die Rangfolge der Rechtsnormen, Kündigungsregeln im BBiG und Ausbilder-Eignung kennen.",
      theory: `
Der Fokus liegt hier auf den Kerngesetzen des Arbeitsrechts in Bezug auf die Ausbildung.

1. Rangfolge der Rechtsnormen (Günstigkeitsprinzip):
   • Europarecht → Bundesgesetze (BBiG) → Tarifverträge → Betriebsvereinbarungen → Arbeitsvertrag.
   • Es gilt immer das Günstigkeitsprinzip zugunsten des Arbeitnehmers/Auszubildenden. 

2. Kündigung Berufsausbildungsverhältnis (§ 22 BBiG):
   • Probezeit (1-4 Monate): Jederzeit ohne Kündigungsfrist möglich (schriftlich).
   • Nach der Probezeit: Ausbildender kann **nur** aus wichtigem Grund fristlos kündigen (z. B. Vertrauensbruch, Diebstahl).
   • Auszubildender: Kann jederzeit mit 4 Wochen Frist kündigen, wenn er die Ausbildung aufgeben oder wechseln möchte.

3. Ende des Ausbildungsverhältnisses (§ 21 BBiG): Endet mit Ablauf der Ausbildungsdauer **oder** mit Bekanntgabe des bestandenen Prüfungsergebnisses.

4. Eignung des Ausbilders (§ 28 BBiG): Erfordert persönliche und fachliche Eignung (Nachweis durch Berufsausbildung, Berufserfahrung und arbeitspädagogische Qualifikation / AEVO).
        `,
      cards: [
        { id: 501, q: "Was besagt das Günstigkeitsprinzip im Arbeitsrecht?", a: "Bei kollidierenden Regelungen gilt immer die für den Arbeitnehmer günstigere Regelung." },
        { id: 502, q: "Wann endet das Ausbildungsverhältnis nach BBiG am frühesten?", a: "Mit der Bekanntgabe des bestandenen Prüfungsergebnisses durch den Prüfungsausschuss." },
        { id: 503, q: "Nenne die Frist und den Grund für eine Kündigung durch den Ausbildenden nach der Probezeit.", a: "Nur fristlos, aus einem wichtigen Grund (z. B. Vertrauensbruch, Diebstahl). Ordentliche Kündigung ist ausgeschlossen." },
        { id: 504, q: "Welche zwei Eignungen muss ein Ausbilder nach § 28 BBiG nachweisen?", a: "Persönliche Eignung (Führungszeugnis) und fachliche Eignung (Berufsausbildung + AEVO)." }
      ],
      quiz: [
        { id: 501, q: "Welche Rechtsnorm steht in der Rangfolge in der Regel ÜBER dem Tarifvertrag?", options: ["Arbeitsvertrag", "Betriebsvereinbarung", "Bundesgesetze (z.B. BBiG)", "Europarecht"], correct: 2 },
        { id: 502, q: "Wann kann ein Ausbildender dem Azubi nach der Probezeit ordentlich kündigen?", options: ["Mit 4 Wochen Frist", "Mit 3 Monaten Frist", "Nur fristlos aus wichtigem Grund", "Überhaupt nicht"], correct: 2 },
        { id: 503, q: "Wann endet das Ausbildungsverhältnis bei vorzeitig bestandener Prüfung?", options: ["Am Ende der regulären Ausbildungszeit", "Sofort nach Bekanntgabe des Ergebnisses", "4 Wochen nach Bekanntgabe", "Nach der letzten Wiederholungsprüfung"], correct: 1 },
        { id: 504, q: "Was gehört zur fachlichen Eignung eines Ausbilders nach BBiG?", options: ["Hohes Gehalt", "Arbeitszeit von 40 Stunden", "Arbeitspädagogische Qualifikation (AEVO)", "Gute Büroausstattung"], correct: 2 }
      ]
    },

    // --- TAG 6: AEVO FACHGESPRÄCH ---
    {
      id: 6,
      title: "Tag 6: AEVO Fachgespräch (Methodenauswahl)",
      goal: "Didaktische Begründungen für Ausbildungsmethoden und die Prüfungslogik verstehen.",
      theory: `
Dieser Tag fokussiert auf die didaktische Begründung von Ausbildungsmethoden und die Prüfungslogik.

1. Häufig gewählte Methoden (AEVO-Prüfung):
   • 4-Stufen-Methode: Für die praktische Erarbeitung (psychomotorisch).
   • Lehrgespräch: Zur Aktivierung von Denkprozessen (kognitiv). 

2. Lehrgespräch (Detail):
   • Ziel: Förderung von Verständnis, Problemlösungsfähigkeiten und kritischem Denken.
   • Vorgehen: Ausbilder leitet mit **offenen Fragen**; der Azubi-Redeanteil sollte bei ca. 80% liegen.

3. Didaktische Begründung:
   • Beinhaltet: Angemessenheit des Lernbereichs (kognitiv/psychomotorisch/affektiv), Lernzielformulierung (Feinlernziele müssen SMART sein), Entwicklungsgemäßheit des Azubis.
        `,
      cards: [
        { id: 601, q: "Was ist das Hauptziel des Lehrgesprächs in der Ausbildung?", a: "Förderung von Verständnis, Problemlösungsfähigkeiten und kritischem Denken." },
        { id: 602, q: "Welcher Redeanateil ist beim Lehrgespräch ideal für den Auszubildenden?", a: "Ca. 80% (Der Ausbilder soll nur leiten)." },
        { id: 603, q: "Was ist ein 'Feinlernziel' und welche Kriterien muss es erfüllen?", a: "Ein spezifisch formuliertes Lernziel für eine kurze Einheit. Es muss SMART sein (Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert)." },
        { id: 604, q: "Nenne die vier Blöcke, die bei der Vorbereitung eines Mitarbeitergesprächs bedacht werden sollten.", a: "Organisation (Rahmen), Inhalt (Ziele), Methode/Ablauf (Struktur) und Person (Beziehung, Erfahrung)." }
      ],
      quiz: [
        { id: 601, q: "Das Lehrgespräch zielt primär auf den... Lernbereich ab.", options: ["Affektiven (Haltung)", "Psychomotorischen (Fähigkeit)", "Kognitiven (Wissen/Verständnis)", "Emotionalen"], correct: 2 },
        { id: 602, q: "Was ist bei der didaktischen Begründung einer Methode NICHT relevant?", options: ["Lernzielformulierung", "Entwicklungsgemäßheit des Azubis", "Die Marke der Kaffeemaschine", "Angemessenheit des Lernbereichs"], correct: 2 },
        { id: 603, q: "Wofür wird die 4-Stufen-Methode bevorzugt eingesetzt?", options: ["Diskussion komplexer Theorien", "Vermittlung einfacher Fakten", "Einübung praktischer Handlungen", "Konfliktlösung"], correct: 2 },
        { id: 604, q: "Was ist der wichtigste didaktische Grundsatz bei der AEVO-Präsentation?", options: ["Die vollständige Handlung", "Die maximale Dauer von 15 Minuten", "Der Einsatz von Powerpoint", "Die Anwesenheit des Prüfers"], correct: 0 }
      ]
    },

    // --- TAG 7: WOCHENPRÜFUNG ---
    {
      id: 7,
      title: "Tag 7: Wochenprüfung & Mitarbeitergespräche",
      goal: "Situationsaufgaben strukturieren und den Ablauf von Beurteilungsgesprächen beherrschen.",
      theory: `
Die Wochenprüfung dient der Überprüfung der gelernten Inhalte der Woche 1.

1. IHK-Situationsaufgabe:
   • Handlungs- und entscheidungszentriertes Vorgehen ist wichtig.
   • Bei Problemen: Immer mit einer **Ursachenanalyse** (Zeit, Kosten, Qualität) beginnen, dann priorisieren und ggf. eskalieren.

2. Ganzheitliche Mitarbeitergespräche:
   • Sollten Kombinationen aus Beurteilungs-, Zielvereinbarungs-, Förder- und Feedback-Gespräch sein.

3. Ablauf Beurteilungsgespräch:
   • Positiver Einstieg → **Selbstbeurteilung des MA** (zuerst!) → Beurteilung durch FK (Erläuterung, Ergänzung).
   • Grundsatz: Die Selbstbeurteilung muss zuerst erfolgen, um Wertschätzung zu zeigen.
        `,
      cards: [
        { id: 701, q: "Wie sollte man bei einer Problemsituation in der IHK-Prüfung immer beginnen?", a: "Mit einer Ursachenanalyse (Zeit, Kosten, Qualität), gefolgt von Priorisierung und Entscheidungsfindung." },
        { id: 702, q: "Welcher Schritt MUSS im Beurteilungsgespräch zuerst erfolgen und warum?", a: "Die Selbstbeurteilung des Mitarbeiters, um Wertschätzung zu zeigen und seine Sichtweise vor dem Urteil der Führungskraft zu hören." },
        { id: 703, q: "Was ist die ISE-Formel zur Strukturierung schriftlicher Aufgaben?", a: "Identifizieren (Ziel, Problem) → Strukturieren (PSP, Zeit, Kosten, Risiken) → Entscheiden (beste Lösung, Begründung)." },
        { id: 704, q: "Welche Elemente sollte ein ganzheitliches Mitarbeitergespräch kombinieren?", a: "Beurteilungsgespräch, Zielvereinbarungsgespräch, Fördergespräch und Feedback-Gespräch." }
      ],
      quiz: [
        { id: 701, q: "Welche Funktion muss im Beurteilungsgespräch zwingend vor der Beurteilung durch die Führungskraft erfolgen?", options: ["Kündigungsandrohung", "Zielvereinbarung", "Selbstbeurteilung des MA", "Pause machen"], correct: 2 },
        { id: 702, q: "Was ist der erste Schritt in der Problemlösung für IHK-Situationsaufgaben?", options: ["Lösungsvorschläge sammeln", "Ursachenanalyse (Zeit, Kosten, Qualität)", "Den Schuldigen finden", "Aufgabe ablehnen"], correct: 1 },
        { id: 703, q: "Die schriftlichen IHK-Prüfungsaufgaben sind typischerweise...", options: ["Einfache Faktenabfragen", "Multiple-Choice", "Handlungsorientierte Situationsaufgaben", "Essayfragen"], correct: 2 },
        { id: 704, q: "Wofür steht das 'S' in der ISE-Formel?", options: ["Sammeln von Ideen", "Sicherheit gewährleisten", "Strukturieren (PSP, Zeit, Kosten)", "Selbstvertrauen"], correct: 2 }
      ]
    },

    // --- TAG 8: KONFLIKTMANAGEMENT ---
    {
      id: 8,
      title: "Tag 8: Konfliktmanagement & Glasl Eskalation",
      goal: "Die Eskalationsstufen nach Glasl erkennen und die Harvard-Regeln zur Konfliktlösung anwenden.",
      theory: `
Dieser Tag widmet sich der systematischen Konfliktlösung und den Konfliktmodellen.

1. Eskalationsstufen nach Friedrich Glasl: Konflikte verlaufen typischerweise in neun Stufen.
   • Stufen 1-3: Konflikte sind noch selbst regulierbar ('Win-Win-Situation').
   • Ab Stufe 4: Eskalation, es ist professionelle Hilfe nötig.
   • Stufe 9: Nur noch 'verbrannte Erde', beide Parteien verlieren. 

2. Harvard-Konzept der Konfliktlösung:
   • Ziel: Win-Win-Lösungen.
   • Hauptgrundsatz: Trennung von Menschen und Problemen ('Du bist okay, die Handlung war es nicht').
   • Verhandelt werden **Interessen** (zukunftsorientiert), nicht Positionen (vergangenheitsbezogen).

3. Rolle der Führungskraft: Oft als Mediator oder Moderator. Voraussetzung für Lösung ist immer die **Kooperationsbereitschaft** beider Parteien.
        `,
      cards: [
        { id: 801, q: "Was ist der Hauptgrundsatz des Harvard-Konzepts?", a: "Trennung von Mensch und Problem ('Du bist okay, die Handlung war es nicht')." },
        { id: 802, q: "In welchen Stufen nach Glasl ist ein Konflikt noch selbst regulierbar?", a: "Stufe 1 bis 3 ('Win-Win-Situation')." },
        { id: 803, q: "Werden beim Harvard-Konzept Positionen oder Interessen verhandelt?", a: "Interessen, da diese zukunftsorientiert sind und die wahren Motive dahinter aufdecken." },
        { id: 804, q: "Nenne ein Merkmal, das Konflikte in virtuellen Teams erschwert.", a: "Sie werden oft nicht schnell wahrgenommen, da die Beziehungspflege fehlt." }
      ],
      quiz: [
        { id: 801, q: "Bis zu welcher Stufe nach Glasl ist eine Win-Win-Lösung noch wahrscheinlich?", options: ["Stufe 3", "Stufe 5", "Stufe 7", "Stufe 9"], correct: 0 },
        { id: 802, q: "Was wird beim Harvard-Konzept verhandelt?", options: ["Emotionen", "Positionen", "Interessen", "Maximalforderungen"], correct: 2 },
        { id: 803, q: "Was ist die VW-Regel (Konfliktlösemethode)?", options: ["Vorwürfe in Wünsche umwandeln", "Verhandeln und Warten", "Vorschlagen und Weggehen", "Verzögern und Weigern"], correct: 0 },
        { id: 804, q: "Die Kooperationsbereitschaft ist eine Voraussetzung für...", options: ["Die Eskalation", "Die Kündigung", "Die Konfliktlösung", "Die Pause"], correct: 2 }
      ]
    },

    // --- TAG 9: PERSONALENTWICKLUNG & BEURTEILUNG (AKTUALISIERT) ---
    {
      id: 9,
      title: "Tag 9: Personalentwicklung & Beurteilung",
      goal: "Den PE-Prozess verstehen, Beurteilungsfehler vermeiden und Eignung feststellen.",
      theory: `
Der Fokus liegt auf Personalentwicklung (PE) und dem Vermeiden typischer Fehler bei der Mitarbeiterbeurteilung.

1. Ziele der Personalentwicklung: Alle Aktivitäten, die dazu beitragen, dass das Unternehmen seine strategischen Ziele erreicht.

2. PE-Prozess (Fünf Phasen, zyklisch):
   • Bedarfsanalyse (Qualifizierungsbedarf feststellen) → Planung von PE-Zielen → Planung von PE-Maßnahmen → Durchführung → Controlling des PE-Erfolgs. [Image of PE-Prozess Phasen]

3. Mitarbeiterbeurteilung & Eignungsfeststellung:
   • **Kompetenzfelder:** Für eine korrekte Handlungskompetenz sind Fachkompetenz, Methodenkompetenz, Sozialkompetenz und Personalkompetenz (Selbstständigkeit) notwendig.
   • Bei IT-Rollen ist die Fähigkeit, *Fachspezifisches für die Geschäftsführung zu übersetzen*, entscheidend.
   • **Wichtig:** Beobachtungen und Notizen sollten über das gesamte Jahr gleichmäßig dokumentiert werden (gegen Nikolaus-Effekt).
   • Vorgehen: **Selbstbeurteilung des MA** zuerst, dann Beurteilung durch FK.

4. Beurteilungsfehler:
   • Halo-Effekt (Hofeffekt): Ein einzelner Eindruck überstrahlt alle anderen Merkmale.
   • Nikolaus-Effekt: Ereignisse aus der jüngsten Vergangenheit werden stärker gewichtet (Letzter-Eindruck-Fehler).
   • Tendenz zur Mitte: Vermeidung klarer Entscheidungen (Bewertung im Durchschnitt).
   • Milde/Strenge-Fehler: Verzerrung durch persönliche Haltung.
        `,
      cards: [
        { id: 901, q: "Was ist der erste Schritt im Personalentwicklungsprozess?", a: "Die Bedarfsanalyse (Feststellen und Analysieren des Qualifizierungsbedarfs)." },
        { id: 902, q: "Was ist der Halo-Effekt?", a: "Ein einzelner, meist positiver oder negativer Eindruck (z. B. Aussehen) überstrahlt die Gesamtleistung." },
        { id: 903, q: "Was ist der Nikolaus-Effekt (Letzter-Eindruck-Fehler)?", a: "Jüngste Ereignisse (kurz vor der Bewertung) werden stärker gewichtet als zurückliegende Ereignisse des Jahres." },
        { id: 904, q: "Nenne die vier Kompetenzfelder für die Handlungskompetenz.", a: "Fachkompetenz, Methodenkompetenz, Sozialkompetenz und Personalkompetenz (Selbstständigkeit)." },
        { id: 905, q: "Was ist bei der Beurteilung von IT-Mitarbeitern besonders wichtig?", a: "Die Fähigkeit, technische Fachspezifika so zu formulieren, dass sie für die Geschäftsführung verständlich sind ('Übersetzen')." }
      ],
      quiz: [
        { id: 901, q: "Wenn ein Beurteiler nur die Ereignisse der letzten Woche in die Bewertung einbezieht, liegt welcher Fehler vor?", options: ["Halo-Effekt", "Tendenz zur Mitte", "Nikolaus-Effekt", "Benjamin-Effekt"], correct: 2 },
        { id: 902, q: "Was ist das Hauptziel der Personalentwicklung?", options: ["Mitarbeiter entlassen", "Steuererklärung optimieren", "Strategische Ziele des Unternehmens durch Qualifizierung erreichen", "Die Kantine modernisieren"], correct: 2 },
        { id: 903, q: "Welches Kompetenzfeld umfasst das reine Fachwissen?", options: ["Sozialkompetenz", "Methodenkompetenz", "Personalkompetenz", "Fachkompetenz"], correct: 3 },
        { id: 904, q: "Was ist der erste Schritt im PE-Prozess?", options: ["Durchführung der Maßnahme", "Controlling", "Bedarfsanalyse", "Zielvereinbarung"], correct: 2 }
      ]
    },

    // --- TAG 10: ARBEITSRECHT II: VERTIEFUNG (AKTUALISIERT) ---
    {
      id: 10,
      title: "Tag 10: Arbeitsrecht II: Vertiefung (Kündigungsschutz & Compliance)",
      goal: "Besonderheiten des Kündigungsschutzes, die Rechte des Betriebsrats und Compliance-Themen wie Datenschutz kennen.",
      theory: `
Dieser Tag behandelt spezialisierte Aspekte des Arbeits- und Kündigungsrechts, erweitert um Compliance-Themen.

1. Besonderer Kündigungsschutz:
   • Gilt für: Betriebsratsmitglieder, JAV, Schwangere/Mütter (bis 4 Monate nach Entbindung) und Schwerbehinderte (Zustimmung Integrationsamt nötig).

2. Kündigungsgründe (Ordentlich / Fristgerecht):
   • Betriebsbedingt, verhaltensbedingt oder personenbedingt.

3. Abmahnung:
   • Kündigung ist meist erst nach erfolgloser Abmahnung zulässig (Ausnahme: Vertrauensverhältnis ist zerstört).
   • Fristlose (außerordentliche) Kündigung: Muss innerhalb von zwei Wochen nach Bekanntwerden des wichtigen Grundes ausgesprochen werden.

4. Betriebsrat (BR) Rechte:
   • Mitbestimmungsrecht (Beurteilungsgrundsätze, Bildungsmaßnahmen, Versetzungen).
   • Der BR muss bei Kündigungen angehört werden und überwacht die Einhaltung aller Gesetze (§ 80 BetrVG).

5. Compliance & Datenschutz (DSGVO):
   • Datenschutzrecht ist für IT-ler eine wichtige Hürde. Jede Verarbeitung personenbezogener Daten (pBD) erfordert entweder eine **Einwilligung** oder eine **gesetzliche Grundlage**.
   • Bei neuen Projekten ist oft eine **Datenschutz-Folgenabschätzung** nötig.
   • Bei IT-Maßnahmen mit pBD muss der **Datenschutzbeauftragte** oder der **Betriebsrat** involviert werden, bevor mit der Arbeit begonnen werden darf.
        `,
      cards: [
        { id: 1001, q: "Nenne zwei Gruppen mit besonderem Kündigungsschutz.", a: "Betriebsratsmitglieder, JAV, Schwangere/Mütter (bis 4 Monate nach Entbindung), Schwerbehinderte." },
        { id: 1002, q: "Welche Art der Kündigung erfordert die Zustimmung des Integrationsamtes?", a: "Die Kündigung eines Schwerbehinderten." },
        { id: 1003, q: "In welchem Zeitraum muss eine fristlose Kündigung ausgesprochen werden?", a: "Innerhalb von zwei Wochen nach Bekanntwerden des wichtigen Grundes." },
        { id: 1004, q: "Was ist die Hauptaufgabe des Betriebsrats laut BetrVG?", a: "Die Einhaltung aller Gesetze, Verordnungen und Tarifverträge zugunsten der Arbeitnehmer zu überwachen (§ 80 BetrVG)." },
        { id: 1005, q: "Was ist bei der Verarbeitung personenbezogener Daten (pBD) bei neuen IT-Projekten oft nötig?", a: "Die Einholung einer Einwilligung oder Freigabe durch den Datenschutzbeauftragten oder Betriebsrat, ggf. eine Datenschutz-Folgenabschätzung." }
      ],
      quiz: [
        { id: 1001, q: "Bei welchem Kündigungsschutz ist das Integrationsamt involviert?", options: ["Betriebsrat", "Schwangere", "Schwerbehinderte", "Auszubildende in der Probezeit"], correct: 2 },
        { id: 1002, q: "Eine ordentliche Kündigung kann betriebsbedingt, verhaltensbedingt oder ... erfolgen.", options: ["Krankheitsbedingt", "Lohnbedingt", "Personenbedingt", "Zufallsbedingt"], correct: 2 },
        { id: 1003, q: "Der Betriebsrat hat ein Mitbestimmungsrecht bei der Einführung von...", options: ["Produktpreisen", "Urlaubsgrundsätzen", "Beurteilungsgrundsätzen", "Kundenakquise"], correct: 2 },
        { id: 1004, q: "Wann ist eine Abmahnung vor der Kündigung NICHT zwingend erforderlich?", options: ["Bei wiederholtem Zuspätkommen", "Bei Sachbeschädigung", "Wenn das Vertrauensverhältnis komplett zerstört ist", "Bei schlechter Leistung"], correct: 2 }
      ]
    },
    
    // --- TAG 11: PRÜFUNGSSIMULATION & INTEGRATION (SCHRIFTLICH) ---
    {
      id: 11,
      title: "Tag 11: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory: `
**Fokus: Transfer und Anwendung**

Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.

**IHK-Prüfungsstruktur:** Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.

**ISE-Formel (Strukturierung):** Dient zur Strukturierung der schriftlichen Aufgaben:
1. **I**dentifizieren (Ziel, Problem).
2. **S**trrukturieren (PSP, Zeit, Kosten, Risiken).
3. **E**ntscheiden (beste Lösung, Begründung).

Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.
            `, 
      cards: [
        { id: 1101, q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?", a: "Identifizieren (Ziel und Problemstellung klar definieren)." },
        { id: 1102, q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?", a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation." }
      ],
      quiz: [
        { id: 1103, q: "Wofür steht das 'E' in der ISE-Formel?", options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"], correct: 2 }
      ]
    },

    // --- TAG 12: PRÜFUNGSSIMULATION & INTEGRATION (SCHRIFTLICH) ---
    {
      id: 12,
      title: "Tag 12: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory: `
**Fokus: Transfer und Anwendung**

Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.

**IHK-Prüfungsstruktur:** Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.

**ISE-Formel (Strukturierung):** Dient zur Strukturierung der schriftlichen Aufgaben:
1. **I**dentifizieren (Ziel, Problem).
2. **S**trrukturieren (PSP, Zeit, Kosten, Risiken).
3. **E**ntscheiden (beste Lösung, Begründung).

Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.
            `, 
      cards: [
        { id: 1201, q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?", a: "Identifizieren (Ziel und Problemstellung klar definieren)." },
        { id: 1202, q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?", a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation." }
      ],
      quiz: [
        { id: 1203, q: "Wofür steht das 'E' in der ISE-Formel?", options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"], correct: 2 }
      ]
    },

    // --- TAG 13: PRÜFUNGSSIMULATION & INTEGRATION (SCHRIFTLICH) ---
    {
      id: 13,
      title: "Tag 13: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory: `
**Fokus: Transfer und Anwendung**

Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.

**IHK-Prüfungsstruktur:** Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.

**ISE-Formel (Strukturierung):** Dient zur Strukturierung der schriftlichen Aufgaben:
1. **I**dentifizieren (Ziel, Problem).
2. **S**trrukturieren (PSP, Zeit, Kosten, Risiken).
3. **E**ntscheiden (beste Lösung, Begründung).

Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.
            `, 
      cards: [
        { id: 1301, q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?", a: "Identifizieren (Ziel und Problemstellung klar definieren)." },
        { id: 1302, q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?", a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation." }
      ],
      quiz: [
        { id: 1303, q: "Wofür steht das 'E' in der ISE-Formel?", options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"], correct: 2 }
      ]
    },

    // --- TAG 14: PRÜFUNGSSIMULATION & INTEGRATION (MÜNDLICH) ---
    {
      id: 14,
      title: "Tag 14: mündliche Fachgesprächssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory: `
**Fokus: Transfer und Anwendung**

Dies ist der letzte Tag vor der Prüfung. Der Fokus liegt auf der Simulation des mündlichen Fachgesprächs und der Integration aller Themen.

**IHK-Prüfungsstruktur:** Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.

**ISE-Formel (Strukturierung):** Dient zur Strukturierung der schriftlichen Aufgaben:
1. **I**dentifizieren (Ziel, Problem).
2. **S**trrukturieren (PSP, Zeit, Kosten, Risiken).
3. **E**ntscheiden (beste Lösung, Begründung).

Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.
            `, 
      cards: [
        { id: 1401, q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?", a: "Identifizieren (Ziel und Problemstellung klar definieren)." },
        { id: 1402, q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?", a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation." }
      ],
      quiz: [
        { id: 1403, q: "Wofür steht das 'E' in der ISE-Formel?", options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"], correct: 2 }
      ]
    },
  ]
};
