import React, { useState, useEffect } from "react";
import {
  Home,
  Layers,
  PieChart,
  User,
  Brain,
  CheckCircle,
  X,
  PlayCircle,
  PauseCircle,
  Award,
  Play,
  Lock,
  ChevronRight,
  AlertCircle,
  RotateCcw
} from "lucide-react";

// --- MOCK DATEN (Vollständige Version des "Mitarbeiterführung & Personalmanagement" Kurses) ---
const courseData = {
  id: "mitarbeiterfuehrung_14tage",
  title: "Mitarbeiterführung & Personalmanagement",
  description: "14-Tage Sprint zur Prüfungsvorbereitung für Operative Professionals.",
  totalDays: 14,
  days: [
    // --- TAG 1: FÜHRUNGSMODELLE BEHERRSCHEN ---
    {
      id: 1,
      title: "Tag 1: Führungsmodelle beherrschen",
      goal:
        "Verschiedene Führungsstile (situativ, transformational) beherrschen und deren situativen Einsatz verstehen.",
      theory:
        "Führung ist die zielorientierte Beeinflussung von Mitarbeitern.\n\n" +
        "1. Autoritärer Führungsstil: Eindimensional, Betriebsinteressen stehen im Vordergrund. Entscheidungen werden allein von der Führungskraft getroffen.\n" +
        "   • Anwendung: Notwendig in Notfällen (Militär, Katastrophenschutz).\n" +
        "   • Negative Aspekte: Mangelnde Entwicklung/Eigeninitiative der MA.\n\n" +
        "2. Kooperativer Führungsstil: Zweidimensional, Mitarbeiterinteressen werden einbezogen. Mitarbeiter werden in Entscheidungen eingebunden.\n\n" +
        "3. Laissez-faire Führungsstil: Oft als 'Nicht-Führung' betrachtet. Großer Spielraum für MA. Ideal bei hoch motivierten und qualifizierten Mitarbeitern.\n\n" +
        "4. Situativer Führungsstil: Basierend auf dem Reifegrad des Mitarbeiters (Können / Qualifikation und Wollen / Motivation).\n\n" +
        "5. Transformationale Führung: Moderner Stil, bei dem der Teamleiter die Teammitglieder durch intrinsische Motivation und persönliches Vorbild zur Veränderung ihrer Lern- und Leistungsbereitschaft anregt.",
      cards: [
        {
          id: 101,
          q: "Wann ist der autoritäre Führungsstil heute noch sinnvoll?",
          a: "In Krisen-, Katastrophen- oder Notsituationen (z.B. Militär, Polizei), wo schnelle, klare Entscheidungen nötig sind."
        },
        {
          id: 102,
          q: "Was ist der Unterschied zwischen situativer und transformationaler Führung?",
          a: "Situativ: Passt den Stil an den Reifegrad des MA an. Transformational: Motiviert MA durch Vorbild und Vision zur intrinsischen Leistungssteigerung (Veränderung)."
        },
        {
          id: 103,
          q: "Was sind typische Ursachen für einen Leistungsabfall im Team?",
          a: "Schlechtes Betriebsklima, unklare Aufgabenstellungen, fehlende Anerkennung oder mangelndes Engagement."
        },
        {
          id: 104,
          q: "Was bedeutet Kooperation beim kooperativen Führungsstil?",
          a: "Mitarbeiter werden in den Entscheidungsprozess einbezogen, was zu höherer Akzeptanz führt."
        },
        {
          id: 105,
          q: "Welcher Führungsstil basiert auf dem Reifegrad des Mitarbeiters?",
          a: "Situativer Führungsstil (Können + Wollen)."
        }
      ],
      quiz: [
        {
          id: 101,
          q: "Welches Führungsmodell zielt auf die intrinsische Motivation und Veränderung der MA ab?",
          options: ["Situativ", "Laissez-faire", "Transformational", "Autoritär"],
          correct: 2
        },
        {
          id: 102,
          q: "Wodurch zeichnet sich der Reifegrad beim situativen Führen aus?",
          options: ["Alter und Gehalt", "Können und Wollen", "Dauer der Betriebszugehörigkeit", "Hierarchiestufe"],
          correct: 1
        },
        {
          id: 103,
          q: "In welchen Situationen ist der autoritäre Stil am effektivsten?",
          options: ["Täglicher Büroalltag", "Kreative Prozesse", "Notfall und Krisen", "Team-Entscheidungen"],
          correct: 2
        },
        {
          id: 104,
          q: "Was ist ein Nachteil des Laissez-faire Stils?",
          options: ["Zu starke Führung", "Überforderung der Führungskraft", "Orientierungslosigkeit der MA", "Hohe Akzeptanz"],
          correct: 2
        }
      ]
    },

    // --- TAG 2: MOTIVATION VOLLSTÄNDIG VERSTEHEN ---
    {
      id: 2,
      title: "Tag 2: Motivation vollständig verstehen",
      goal: "Herzbergs Zwei-Faktoren-Theorie und Maslows Bedürfnispyramide anwenden.",
      theory:
        "Motivation ist die innere Antriebskraft, ein Ziel zu erreichen.\n\n" +
        "1. Maslowsche Bedürfnispyramide: Hierarchisches Modell (Physiologisch -> Sicherheit -> Sozial -> Ich -> Selbstverwirklichung).\n" +
        "   • Wichtig: Geld befriedigt hauptsächlich die materiellen Bedürfnisse der unteren beiden Stufen (körperliches Wohlbefinden und Sicherheit).\n\n" +
        "2. Herzbergs Zwei-Faktoren-Theorie:\n" +
        "   • Hygienefaktoren (z.B. Geld, Arbeitsbedingungen): Können Unzufriedenheit beseitigen, leisten aber keinen Beitrag zur wirklichen Motivation.\n" +
        "   • Motivatoren (z.B. Anerkennung, Verantwortung): Schaffen echte, dauerhafte Arbeitszufriedenheit.\n\n" +
        "3. Intrinsische Motivation: Aus sich selbst heraus (Freude an der Aufgabe).\n" +
        "4. Extrinsische Motivation: Durch äußere Anreize (Gehalt, Boni, Strafen).",
      cards: [
        {
          id: 201,
          q: "Warum zählt Geld nach Herzberg zu den Hygienefaktoren?",
          a: "Es kann Unzufriedenheit beseitigen oder verhindern, aber es schafft keine wirkliche Arbeitsmotivation (diese entsteht nur durch Motivatoren)."
        },
        {
          id: 202,
          q: "Nenne die beiden untersten Stufen von Maslow, die hauptsächlich durch Geld befriedigt werden.",
          a: "Körperliches Wohlbefinden (Physiologie) und Sicherheit (Arbeitsplatzsicherheit)."
        },
        {
          id: 203,
          q: "Was sind führende Maßnahmen zur Behebung von Passivität/fehlendem Engagement?",
          a: "Anerkennung und Wertschätzung, Einbindung in Entscheidungsprozesse und Förderung der persönlichen Entwicklung."
        },
        {
          id: 204,
          q: "Was ist der Unterschied zwischen Hygienefaktoren und Motivatoren?",
          a: "Hygienefaktoren = Notwendige Basis, um Unzufriedenheit zu verhindern. Motivatoren = Faktoren, die aktiv Zufriedenheit schaffen und zu überdurchschnittlicher Leistung führen."
        },
        {
          id: 205,
          q: "Nenne einen Vertreter, der die Motivation durch Leistung, Macht und Zugehörigkeit beschreibt.",
          a: "David McClelland (Erfolgsmotivation)."
        }
      ],
      quiz: [
        {
          id: 201,
          q: "Gehalt zählt nach Herzberg primär zu den...",
          options: ["Motivatoren", "Hygienefaktoren", "Ich-Bedürfnissen", "Transformationsfaktoren"],
          correct: 1
        },
        {
          id: 202,
          q: "Was steht an der Spitze der Maslowschen Pyramide?",
          options: ["Ich-Bedürfnisse", "Soziale Bedürfnisse", "Sicherheitsbedürfnisse", "Selbstverwirklichung"],
          correct: 3
        },
        {
          id: 203,
          q: "Welche Maßnahme wirkt bei MA ohne Antrieb am effektivsten?",
          options: ["Kürzere Arbeitszeiten", "Neue Büromöbel", "Mehr Verantwortung und Anerkennung", "Strengere Regeln"],
          correct: 2
        },
        {
          id: 204,
          q: "Welches Konzept besagt, dass der Motivationseffekt von übertariflicher Bezahlung schnell verfliegt?",
          options: ["Maslow", "McClelland", "Herzberg", "Taylor"],
          correct: 2
        }
      ]
    },

    // --- TAG 3: RECHTLICHE GRUNDLAGEN & ARBEITSSCHUTZ ---
    {
      id: 3,
      title: "Tag 3: Rechtliche Grundlagen & Arbeitsschutz",
      goal: "Arbeitsrechtliche Schutzvorschriften und Pflichten von Arbeitgeber und Arbeitnehmer kennen.",
      theory: `Im Arbeits- und Arbeitsschutzrecht geht es darum, Beschäftigte vor gesundheitlichen, körperlichen und wirtschaftlichen Schäden zu schützen.
Für die Prüfung reicht ein klarer Überblick über die wichtigsten Prinzipien und Pflichten.

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
- In Prüfungsaufgaben wird oft erwartet, dass du diese Verantwortung klar benennst und Maßnahmen ableitest (z.B. Unterweisung, Anpassung der Arbeitszeiten, Gefährdungsbeurteilung aktualisieren).`,
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
      theory:
        "Dieser Tag konzentriert sich auf die theoretischen Grundlagen der Kommunikation und deren Anwendung in schwierigen Gesprächen.\n\n" +
        "1. Eisbergmodell der Kommunikation: Nur ca. 20% sind Sachebene (oberhalb der Wasserlinie), 80% sind Beziehungsebene (Emotionen, Haltung, Werte, unterhalb der Wasserlinie). Die Beziehungsebene hat den immensen Einfluss.\n" +
        "2. Aktives Zuhören:\n" +
        "   • Verbal (Nachfragen, Zusammenfassen) und Nonverbal (Blickkontakt, Mimik, Gestik).\n" +
        "   • Voraussetzung: Empathie, Geduld, echtes Interesse.\n" +
        "3. Kritikgespräch/Konfliktlösemethode: Vorwürfe in Wünsche umwandeln (Wünsche sind zukunftsgerichtet und weniger bedrohlich).\n" +
        "4. Harvard-Modell der Konfliktlösung (4 Schritte):\n" +
        "   • 1. Menschen und Probleme trennen ('Du bist okay, die Handlung war es nicht').\n" +
        "   • 2. Interessen, nicht Positionen verhandeln (Wahres Motiv aufdecken).\n" +
        "   • 3. Optionen für beide Seiten entwickeln (Win-Win).\n" +
        "   • 4. Gemeinsame Lösung, die auf objektiven Kriterien beruht, finden (hohe Akzeptanz).",
      cards: [
        {
          id: 401,
          q: "Wie viele Prozent der Kommunikation liegen laut Eisbergmodell auf der Beziehungsebene?",
          a: "Ca. 80% (unterhalb der Wasserlinie)."
        },
        {
          id: 402,
          q: "Was bedeutet 'Menschen und Probleme trennen' im Harvard-Modell?",
          a: "Emotionen und Anfeindungen werden aus der Verhandlung genommen. Man kritisiert die Handlung, nicht die Person."
        },
        {
          id: 403,
          q: "Warum sollte man Vorwürfe in Wünsche umwandeln?",
          a: "Wünsche sind zukunftsgerichtet und vermindern das Bedrohungspotenzial im Kritikgespräch."
        },
        {
          id: 404,
          q: "Nenne eine verbale Technik des aktiven Zuhörens.",
          a: "Konkretes Nachfragen oder eine klärende Zusammenfassung des Gesagten."
        }
      ],
      quiz: [
        {
          id: 401,
          q: "Welche Ebene hat laut Eisbergmodell den immensen Einfluss auf Kommunikation?",
          options: ["Die Sache Ebene", "Die Inhaltsebene", "Die Beziehungsebene", "Die technische Ebene"],
          correct: 2
        },
        {
          id: 402,
          q: "Welche Regel gehört NICHT zum Harvard-Modell?",
          options: [
            "Menschen und Probleme trennen",
            "Interessen, nicht Positionen verhandeln",
            "Win-Win-Optionen entwickeln",
            "Immer mit Maximalforderungen starten"
          ],
          correct: 3
        },
        {
          id: 403,
          q: "Die Hauptaussage der Regel 'Interessen, nicht Positionen verhandeln' ist...",
          options: [
            "Immer die eigene Position durchsetzen.",
            "Die wahren Motive hinter der Position aufdecken.",
            "Die Verhandlung auf die Vergangenheit fokussieren.",
            "Die Positionen beider Seiten ignorieren."
          ],
          correct: 1
        },
        {
          id: 404,
          q: "Warum ist aktives Zuhören wichtig für die Konfliktlösung?",
          options: [
            "Es zeigt dem Chef, dass man aufpasst.",
            "Es dient nur der Zeitverzögerung.",
            "Es hilft, das Anliegen des Partners genau zu verstehen.",
            "Es beendet die Diskussion sofort."
          ],
          correct: 2
        }
      ]
    },

    // --- TAG 5: ARBEITSRECHT I: FUNDAMENT ---
    {
      id: 5,
      title: "Tag 5: Arbeitsrecht I: Fundament",
      goal: "Die Rangfolge der Rechtsnormen, Kündigungsregeln im BBiG und Ausbilder-Eignung kennen.",
      theory:
        "Der Fokus liegt hier auf den Kerngesetzen des Arbeitsrechts in Bezug auf die Ausbildung.\n\n" +
        "1. Rangfolge der Rechtsnormen (Günstigkeitsprinzip):\n" +
        "   • Europarecht > Bundesgesetze (BBiG) > Tarifverträge > Betriebsvereinbarungen > Arbeitsvertrag.\n" +
        "   • Es gilt immer das Günstigkeitsprinzip zugunsten des Arbeitnehmers/Auszubildenden.\n\n" +
        "2. Kündigung Berufsausbildungsverhältnis (§ 22 BBiG):\n" +
        "   • Probezeit (1–4 Monate): Jederzeit ohne Kündigungsfrist möglich (schriftlich).\n" +
        "   • Nach der Probezeit: Ausbildender kann nur aus wichtigem Grund fristlos kündigen (z. B. Vertrauensbruch, Diebstahl).\n" +
        "   • Auszubildender: Kann jederzeit mit 4 Wochen Frist kündigen, wenn er die Ausbildung aufgeben oder wechseln möchte.\n\n" +
        "3. Ende des Ausbildungsverhältnisses (§ 21 BBiG): Endet mit Ablauf der Ausbildungsdauer oder mit Bekanntgabe des bestandenen Prüfungsergebnisses.\n\n" +
        "4. Eignung des Ausbilders (§ 28 BBiG): Erfordert persönliche und fachliche Eignung (Nachweis durch Berufsausbildung, Berufserfahrung und arbeitspädagogische Qualifikation / AEVO).",
      cards: [
        {
          id: 501,
          q: "Was besagt das Günstigkeitsprinzip im Arbeitsrecht?",
          a: "Bei kollidierenden Regelungen gilt immer die für den Arbeitnehmer günstigere Regelung."
        },
        {
          id: 502,
          q: "Wann endet das Ausbildungsverhältnis nach BBiG am frühesten?",
          a: "Mit der Bekanntgabe des bestandenen Prüfungsergebnisses durch den Prüfungsausschuss."
        },
        {
          id: 503,
          q: "Nenne die Frist und den Grund für eine Kündigung durch den Ausbildenden nach der Probezeit.",
          a: "Nur fristlos, aus einem wichtigen Grund (z. B. Vertrauensbruch, Diebstahl). Ordentliche Kündigung ist ausgeschlossen."
        },
        {
          id: 504,
          q: "Welche zwei Eignungen muss ein Ausbilder nach § 28 BBiG nachweisen?",
          a: "Persönliche Eignung (z.B. Führungszeugnis) und fachliche Eignung (Berufsausbildung + AEVO)."
        }
      ],
      quiz: [
        {
          id: 501,
          q: "Welche Rechtsnorm steht in der Rangfolge in der Regel über dem Tarifvertrag?",
          options: ["Arbeitsvertrag", "Betriebsvereinbarung", "Bundesgesetze (z.B. BBiG)", "Europarecht"],
          correct: 2
        },
        {
          id: 502,
          q: "Wann kann ein Ausbildender dem Azubi nach der Probezeit ordentlich kündigen?",
          options: ["Mit 4 Wochen Frist", "Mit 3 Monaten Frist", "Nur fristlos aus wichtigem Grund", "Überhaupt nicht"],
          correct: 2
        },
        {
          id: 503,
          q: "Wann endet das Ausbildungsverhältnis bei vorzeitig bestandener Prüfung?",
          options: [
            "Am Ende der regulären Ausbildungszeit",
            "Sofort nach Bekanntgabe des Ergebnisses",
            "4 Wochen nach Bekanntgabe",
            "Nach der letzten Wiederholungsprüfung"
          ],
          correct: 1
        },
        {
          id: 504,
          q: "Was gehört zur fachlichen Eignung eines Ausbilders nach BBiG?",
          options: ["Hohes Gehalt", "Arbeitszeit von 40 Stunden", "Arbeitspädagogische Qualifikation (AEVO)", "Gute Büroausstattung"],
          correct: 2
        }
      ]
    },

    // --- TAG 6: AEVO FACHGESPRÄCH ---
    {
      id: 6,
      title: "Tag 6: AEVO Fachgespräch (Methodenauswahl)",
      goal: "Didaktische Begründungen für Ausbildungsmethoden und die Prüfungslogik verstehen.",
      theory:
        "Dieser Tag fokussiert auf die didaktische Begründung von Ausbildungsmethoden und die Prüfungslogik.\n\n" +
        "1. Häufig gewählte Methoden (AEVO-Prüfung):\n" +
        "   • 4-Stufen-Methode: Für die praktische Erarbeitung (psychomotorisch).\n" +
        "   • Lehrgespräch: Zur Aktivierung von Denkprozessen (kognitiv).\n\n" +
        "2. Lehrgespräch (Detail):\n" +
        "   • Ziel: Förderung von Verständnis, Problemlösungsfähigkeiten und kritischem Denken.\n" +
        "   • Vorgehen: Ausbilder leitet mit offenen Fragen; der Azubi-Redeanteil sollte bei ca. 80% liegen.\n\n" +
        "3. Didaktische Begründung:\n" +
        "   • Beinhaltet: Angemessenheit des Lernbereichs (kognitiv/psychomotorisch/affektiv), Lernzielformulierung (Feinlernziele müssen SMART sein), Entwicklungsgemäßheit des Azubis.",
      cards: [
        {
          id: 601,
          q: "Was ist das Hauptziel des Lehrgesprächs in der Ausbildung?",
          a: "Förderung von Verständnis, Problemlösungsfähigkeiten und kritischem Denken."
        },
        {
          id: 602,
          q: "Welcher Redeanteil ist beim Lehrgespräch ideal für den Auszubildenden?",
          a: "Ca. 80% (Der Ausbilder soll nur leiten)."
        },
        {
          id: 603,
          q: "Was ist ein 'Feinlernziel' und welche Kriterien muss es erfüllen?",
          a: "Ein spezifisch formuliertes Lernziel für eine kurze Einheit. Es muss SMART sein (Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert)."
        },
        {
          id: 604,
          q: "Nenne die vier Blöcke, die bei der Vorbereitung eines Mitarbeitergesprächs bedacht werden sollten.",
          a: "Organisation (Rahmen), Inhalt (Ziele), Methode/Ablauf (Struktur) und Person (Beziehung, Erfahrung)."
        }
      ],
      quiz: [
        {
          id: 601,
          q: "Das Lehrgespräch zielt primär auf den... Lernbereich ab.",
          options: ["Affektiven (Haltung)", "Psychomotorischen (Fähigkeit)", "Kognitiven (Wissen/Verständnis)", "Emotionalen"],
          correct: 2
        },
        {
          id: 602,
          q: "Was ist bei der didaktischen Begründung einer Methode NICHT relevant?",
          options: ["Lernzielformulierung", "Entwicklungsgemäßheit des Azubis", "Die Marke der Kaffeemaschine", "Angemessenheit des Lernbereichs"],
          correct: 2
        },
        {
          id: 603,
          q: "Wofür wird die 4-Stufen-Methode bevorzugt eingesetzt?",
          options: [
            "Diskussion komplexer Theorien",
            "Vermittlung einfacher Fakten",
            "Einübung praktischer Handlungen",
            "Konfliktlösung"
          ],
          correct: 2
        },
        {
          id: 604,
          q: "Was ist der wichtigste didaktische Grundsatz bei der AEVO-Präsentation?",
          options: ["Die vollständige Handlung", "Die maximale Dauer von 15 Minuten", "Der Einsatz von Powerpoint", "Die Anwesenheit des Prüfers"],
          correct: 0
        }
      ]
    },

    // --- TAG 7: WOCHENPRÜFUNG ---
    {
      id: 7,
      title: "Tag 7: Wochenprüfung & Mitarbeitergespräche",
      goal: "Situationsaufgaben strukturieren und den Ablauf von Beurteilungsgesprächen beherrschen.",
      theory:
        "Die Wochenprüfung dient der Überprüfung der gelernten Inhalte der Woche 1.\n\n" +
        "1. IHK-Situationsaufgabe:\n" +
        "   • Handlungs- und entscheidungszentriertes Vorgehen ist wichtig.\n" +
        "   • Bei Problemen: Immer mit einer Ursachenanalyse (Zeit, Kosten, Qualität) beginnen, dann priorisieren und ggf. eskalieren.\n\n" +
        "2. Ganzheitliche Mitarbeitergespräche:\n" +
        "   • Sollten Kombinationen aus Beurteilungs-, Zielvereinbarungs-, Förder- und Feedback-Gespräch sein.\n" +
        "3. Ablauf Beurteilungsgespräch:\n" +
        "   • Positiver Einstieg -> Selbstbeurteilung des MA (zuerst!) -> Beurteilung durch FK (Erläuterung, Ergänzung).\n" +
        "   • Grundsatz: Die Selbstbeurteilung muss zuerst erfolgen, um Wertschätzung zu zeigen.",
      cards: [
        {
          id: 701,
          q: "Wie sollte man bei einer Problemsituation in der IHK-Prüfung immer beginnen?",
          a: "Mit einer Ursachenanalyse (Zeit, Kosten, Qualität), gefolgt von Priorisierung und Entscheidungsfindung."
        },
        {
          id: 702,
          q: "Welcher Schritt muss im Beurteilungsgespräch zuerst erfolgen und warum?",
          a: "Die Selbstbeurteilung des Mitarbeiters, um Wertschätzung zu zeigen und seine Sichtweise vor dem Urteil der Führungskraft zu hören."
        },
        {
          id: 703,
          q: "Was ist die ISE-Formel zur Strukturierung schriftlicher Aufgaben?",
          a: "Identifizieren (Ziel, Problem) -> Strukturieren (PSP, Zeit, Kosten, Risiken) -> Entscheiden (beste Lösung, Begründung)."
        },
        {
          id: 704,
          q: "Welche Elemente sollte ein ganzheitliches Mitarbeitergespräch kombinieren?",
          a: "Beurteilungsgespräch, Zielvereinbarungsgespräch, Fördergespräch und Feedback-Gespräch."
        }
      ],
      quiz: [
        {
          id: 701,
          q: "Welche Funktion muss im Beurteilungsgespräch zwingend vor der Beurteilung durch die Führungskraft erfolgen?",
          options: ["Kündigungsandrohung", "Zielvereinbarung", "Selbstbeurteilung des MA", "Pause machen"],
          correct: 2
        },
        {
          id: 702,
          q: "Was ist der erste Schritt in der Problemlösung für IHK-Situationsaufgaben?",
          options: [
            "Lösungsvorschläge sammeln",
            "Ursachenanalyse (Zeit, Kosten, Qualität)",
            "Den Schuldigen finden",
            "Aufgabe ablehnen"
          ],
          correct: 1
        },
        {
          id: 703,
          q: "Die schriftlichen IHK-Prüfungsaufgaben sind typischerweise...",
          options: ["Einfache Faktenabfragen", "Multiple-Choice", "Handlungsorientierte Situationsaufgaben", "Essayfragen"],
          correct: 2
        },
        {
          id: 704,
          q: "Wofür steht das 'S' in der ISE-Formel?",
          options: ["Sammeln von Ideen", "Sicherheit gewährleisten", "Strukturieren (PSP, Zeit, Kosten)", "Selbstvertrauen"],
          correct: 2
        }
      ]
    },

    // --- TAG 8: KONFLIKTMANAGEMENT ---
    {
      id: 8,
      title: "Tag 8: Konfliktmanagement & Glasl Eskalation",
      goal: "Die Eskalationsstufen nach Glasl erkennen und die Harvard-Regeln zur Konfliktlösung anwenden.",
      theory:
        "Dieser Tag widmet sich der systematischen Konfliktlösung und den Konfliktmodellen.\n\n" +
        "1. Eskalationsstufen nach Friedrich Glasl: Konflikte verlaufen typischerweise in neun Stufen.\n" +
        "   • Stufen 1–3: Konflikte sind noch selbst regulierbar ('Win-Win-Situation').\n" +
        "   • Ab Stufe 4: Eskalation, es ist professionelle Hilfe nötig.\n" +
        "   • Stufe 9: Nur noch 'verbrannte Erde', beide Parteien verlieren.\n\n" +
        "2. Harvard-Konzept der Konfliktlösung:\n" +
        "   • Ziel: Win-Win-Lösungen.\n" +
        "   • Hauptgrundsatz: Trennung von Menschen und Problemen ('Du bist okay, die Handlung war es nicht').\n" +
        "   • Verhandelt werden Interessen (zukunftsorientiert), nicht Positionen (vergangenheitsbezogen).\n\n" +
        "3. Rolle der Führungskraft: Oft als Mediator oder Moderator. Voraussetzung für Lösung ist immer die Kooperationsbereitschaft beider Parteien.",
      cards: [
        {
          id: 801,
          q: "Was ist der Hauptgrundsatz des Harvard-Konzepts?",
          a: "Trennung von Mensch und Problem ('Du bist okay, die Handlung war es nicht')."
        },
        {
          id: 802,
          q: "In welchen Stufen nach Glasl ist ein Konflikt noch selbst regulierbar?",
          a: "Stufe 1 bis 3 ('Win-Win-Situation')."
        },
        {
          id: 803,
          q: "Werden beim Harvard-Konzept Positionen oder Interessen verhandelt?",
          a: "Interessen, da diese zukunftsorientiert sind und die wahren Motive dahinter aufdecken."
        },
        {
          id: 804,
          q: "Nenne ein Merkmal, das Konflikte in virtuellen Teams erschwert.",
          a: "Sie werden oft nicht schnell wahrgenommen, da die Beziehungspflege fehlt."
        }
      ],
      quiz: [
        {
          id: 801,
          q: "Bis zu welcher Stufe nach Glasl ist eine Win-Win-Lösung noch wahrscheinlich?",
          options: ["Stufe 3", "Stufe 5", "Stufe 7", "Stufe 9"],
          correct: 0
        },
        {
          id: 802,
          q: "Was wird beim Harvard-Konzept verhandelt?",
          options: ["Emotionen", "Positionen", "Interessen", "Maximalforderungen"],
          correct: 2
        },
        {
          id: 803,
          q: "Was ist die VW-Regel (Konfliktlösemethode)?",
          options: ["Vorwürfe in Wünsche umwandeln", "Verhandeln und Warten", "Vorschlagen und Weggehen", "Verzögern und Weigern"],
          correct: 0
        },
        {
          id: 804,
          q: "Die Kooperationsbereitschaft ist eine Voraussetzung für...",
          options: ["Die Eskalation", "Die Kündigung", "Die Konfliktlösung", "Die Pause"],
          correct: 2
        }
      ]
    },

    // --- TAG 9: PERSONALENTWICKLUNG & BEURTEILUNG ---
    {
      id: 9,
      title: "Tag 9: Personalentwicklung & Beurteilung",
      goal: "Den PE-Prozess verstehen, Beurteilungsfehler vermeiden und Eignung feststellen.",
      theory:
        "Der Fokus liegt auf Personalentwicklung (PE) und dem Vermeiden typischer Fehler bei der Mitarbeiterbeurteilung.\n\n" +
        "1. Ziele der Personalentwicklung: Alle Aktivitäten, die dazu beitragen, dass das Unternehmen seine strategischen Ziele erreicht.\n" +
        "2. PE-Prozess (Fünf Phasen, zyklisch):\n" +
        "   • Bedarfsanalyse (Qualifizierungsbedarf feststellen) -> Planung von PE-Zielen -> Planung von PE-Maßnahmen -> Durchführung -> Controlling des PE-Erfolgs.\n\n" +
        "3. Mitarbeiterbeurteilung & Eignungsfeststellung:\n" +
        "   • Kompetenzfelder: Für eine korrekte Handlungskompetenz sind Fachkompetenz, Methodenkompetenz, Sozialkompetenz und Personalkompetenz notwendig.\n" +
        "   • Bei IT-Rollen ist die Fähigkeit, Fachspezifisches für die Geschäftsführung zu übersetzen, entscheidend.\n" +
        "   • Wichtig: Beobachtungen und Notizen sollten über das gesamte Jahr gleichmäßig dokumentiert werden (gegen Nikolaus-Effekt).\n" +
        "   • Vorgehen: Selbstbeurteilung des MA zuerst, dann Beurteilung durch FK.\n\n" +
        "4. Beurteilungsfehler:\n" +
        "   • Halo-Effekt (Hofeffekt): Ein einzelner Eindruck überstrahlt alle anderen Merkmale.\n" +
        "   • Nikolaus-Effekt: Ereignisse aus der jüngsten Vergangenheit werden stärker gewichtet.\n" +
        "   • Tendenz zur Mitte: Vermeidung klarer Entscheidungen.\n" +
        "   • Milde/Strenge-Fehler: Verzerrung durch persönliche Haltung.",
      cards: [
        {
          id: 901,
          q: "Was ist der erste Schritt im Personalentwicklungsprozess?",
          a: "Die Bedarfsanalyse (Feststellen und Analysieren des Qualifizierungsbedarfs)."
        },
        {
          id: 902,
          q: "Was ist der Halo-Effekt?",
          a: "Ein einzelner, meist positiver oder negativer Eindruck überstrahlt die Gesamtleistung."
        },
        {
          id: 903,
          q: "Was ist der Nikolaus-Effekt (Letzter-Eindruck-Fehler)?",
          a: "Jüngste Ereignisse werden stärker gewichtet als zurückliegende Ereignisse des Jahres."
        },
        {
          id: 904,
          q: "Nenne die vier Kompetenzfelder für die Handlungskompetenz.",
          a: "Fachkompetenz, Methodenkompetenz, Sozialkompetenz und Personalkompetenz (Selbstständigkeit)."
        },
        {
          id: 905,
          q: "Was ist bei der Beurteilung von IT-Mitarbeitern besonders wichtig?",
          a: "Die Fähigkeit, technische Fachspezifika so zu formulieren, dass sie für die Geschäftsführung verständlich sind."
        }
      ],
      quiz: [
        {
          id: 901,
          q: "Wenn ein Beurteiler nur die Ereignisse der letzten Woche in die Bewertung einbezieht, liegt welcher Fehler vor?",
          options: ["Halo-Effekt", "Tendenz zur Mitte", "Nikolaus-Effekt", "Benjamin-Effekt"],
          correct: 2
        },
        {
          id: 902,
          q: "Was ist das Hauptziel der Personalentwicklung?",
          options: [
            "Mitarbeiter entlassen",
            "Steuererklärung optimieren",
            "Strategische Ziele des Unternehmens durch Qualifizierung erreichen",
            "Die Kantine modernisieren"
          ],
          correct: 2
        },
        {
          id: 903,
          q: "Welches Kompetenzfeld umfasst das reine Fachwissen?",
          options: ["Sozialkompetenz", "Methodenkompetenz", "Personalkompetenz", "Fachkompetenz"],
          correct: 3
        },
        {
          id: 904,
          q: "Was ist der erste Schritt im PE-Prozess?",
          options: ["Durchführung der Maßnahme", "Controlling", "Bedarfsanalyse", "Zielvereinbarung"],
          correct: 2
        }
      ]
    },

    // --- TAG 10: ARBEITSRECHT II: VERTIEFUNG (AKTUALISIERT) ---
    {
      id: 10,
      title: "Tag 10: Arbeitsrecht II: Vertiefung (Kündigungsschutz & Compliance)",
      goal:
        "Besonderheiten des Kündigungsschutzes, die Rechte des Betriebsrats und Compliance-Themen wie Datenschutz kennen.",
      theory:
        "Dieser Tag behandelt spezialisierte Aspekte des Arbeits- und Kündigungsrechts, erweitert um Compliance-Themen.\n\n" +
        "1. Besonderer Kündigungsschutz:\n" +
        "   • Gilt für: Betriebsratsmitglieder, JAV, Schwangere/Mütter (bis 4 Monate nach Entbindung) und Schwerbehinderte (Zustimmung Integrationsamt nötig).\n\n" +
        "2. Kündigungsgründe (Ordentlich / Fristgerecht):\n" +
        "   • Betriebsbedingt, verhaltensbedingt oder personenbedingt.\n\n" +
        "3. Abmahnung:\n" +
        "   • Kündigung ist meist erst nach erfolgloser Abmahnung zulässig (Ausnahme: Vertrauensverhältnis ist zerstört).\n" +
        "   • Fristlose (außerordentliche) Kündigung: Muss innerhalb von zwei Wochen nach Bekanntwerden des wichtigen Grundes ausgesprochen werden.\n\n" +
        "4. Betriebsrat (BR) Rechte:\n" +
        "   • Mitbestimmungsrecht (Beurteilungsgrundsätze, Bildungsmaßnahmen, Versetzungen).\n" +
        "   • Der BR muss bei Kündigungen angehört werden und überwacht die Einhaltung aller Gesetze (§ 80 BetrVG).\n\n" +
        "5. Compliance & Datenschutz (DSGVO):\n" +
        "   • Datenschutzrecht ist für IT-ler eine wichtige Hürde. Jede Verarbeitung personenbezogener Daten erfordert entweder eine Einwilligung oder eine gesetzliche Grundlage.\n" +
        "   • Bei neuen Projekten ist oft eine Datenschutz-Folgenabschätzung nötig.\n" +
        "   • Bei IT-Maßnahmen mit personenbezogenen Daten muss der Datenschutzbeauftragte oder der Betriebsrat involviert werden, bevor mit der Arbeit begonnen werden darf.",
      cards: [
        {
          id: 1001,
          q: "Nenne zwei Gruppen mit besonderem Kündigungsschutz.",
          a: "Betriebsratsmitglieder, JAV, Schwangere/Mütter (bis 4 Monate nach Entbindung), Schwerbehinderte."
        },
        {
          id: 1002,
          q: "Welche Art der Kündigung erfordert die Zustimmung des Integrationsamtes?",
          a: "Die Kündigung eines Schwerbehinderten."
        },
        {
          id: 1003,
          q: "In welchem Zeitraum muss eine fristlose Kündigung ausgesprochen werden?",
          a: "Innerhalb von zwei Wochen nach Bekanntwerden des wichtigen Grundes."
        },
        {
          id: 1004,
          q: "Was ist die Hauptaufgabe des Betriebsrats laut BetrVG?",
          a: "Die Einhaltung aller Gesetze, Verordnungen und Tarifverträge zugunsten der Arbeitnehmer zu überwachen (§ 80 BetrVG)."
        },
        {
          id: 1005,
          q: "Was ist bei der Verarbeitung personenbezogener Daten bei neuen IT-Projekten oft nötig?",
          a: "Einbeziehung des Datenschutzbeauftragten bzw. ggf. eine Datenschutz-Folgenabschätzung."
        }
      ],
      quiz: [
        {
          id: 1001,
          q: "Bei welchem Kündigungsschutz ist das Integrationsamt involviert?",
          options: ["Betriebsrat", "Schwangere", "Schwerbehinderte", "Auszubildende in der Probezeit"],
          correct: 2
        },
        {
          id: 1002,
          q: "Eine ordentliche Kündigung kann betriebsbedingt, verhaltensbedingt oder ... erfolgen.",
          options: ["Krankheitsbedingt", "Lohnbedingt", "Personenbedingt", "Zufallsbedingt"],
          correct: 2
        },
        {
          id: 1003,
          q: "Der Betriebsrat hat ein Mitbestimmungsrecht bei der Einführung von...",
          options: ["Produktpreisen", "Urlaubsgrundsätzen", "Beurteilungsgrundsätzen", "Kundenakquise"],
          correct: 2
        },
        {
          id: 1004,
          q: "Wann ist eine Abmahnung vor der Kündigung NICHT zwingend erforderlich?",
          options: [
            "Bei wiederholtem Zuspätkommen",
            "Bei Sachbeschädigung",
            "Wenn das Vertrauensverhältnis komplett zerstört ist",
            "Bei schlechter Leistung"
          ],
          correct: 2
        }
      ]
    },

    // --- TAG 11: PRÜFUNGSSIMULATION ---
    {
      id: 11,
      title: "Tag 11: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory:
        "Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.\n\n" +
        "IHK-Prüfungsstruktur: Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.\n\n" +
        "ISE-Formel (Strukturierung): Dient zur Strukturierung der schriftlichen Aufgaben:\n" +
        "1. Identifizieren (Ziel, Problem).\n" +
        "2. Strukturieren (PSP, Zeit, Kosten, Risiken).\n" +
        "3. Entscheiden (beste Lösung, Begründung).\n\n" +
        "Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.",
      cards: [
        {
          id: 1101,
          q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?",
          a: "Identifizieren (Ziel und Problemstellung klar definieren)."
        },
        {
          id: 1201,
          q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?",
          a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation."
        }
      ],
      quiz: [
        {
          id: 1301,
          q: "Wofür steht das 'E' in der ISE-Formel?",
          options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"],
          correct: 2
        }
      ]
    },

    // --- TAG 12: PRÜFUNGSSIMULATION ---
    {
      id: 12,
      title: "Tag 12: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory:
        "Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.\n\n" +
        "IHK-Prüfungsstruktur: Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.\n\n" +
        "ISE-Formel (Strukturierung): Dient zur Strukturierung der schriftlichen Aufgaben:\n" +
        "1. Identifizieren (Ziel, Problem).\n" +
        "2. Strukturieren (PSP, Zeit, Kosten, Risiken).\n" +
        "3. Entscheiden (beste Lösung, Begründung).\n\n" +
        "Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.",
      cards: [
        {
          id: 1102,
          q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?",
          a: "Identifizieren (Ziel und Problemstellung klar definieren)."
        },
        {
          id: 1202,
          q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?",
          a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation."
        }
      ],
      quiz: [
        {
          id: 1302,
          q: "Wofür steht das 'E' in der ISE-Formel?",
          options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"],
          correct: 2
        }
      ]
    },

    // --- TAG 13: PRÜFUNGSSIMULATION ---
    {
      id: 13,
      title: "Tag 13: schriftliche Prüfungssimulation",
      goal: "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe).",
      theory:
        "Diese Tage dienen der Anwendung und Wiederholung der gelernten Inhalte, orientiert an IHK-Situationsaufgaben.\n\n" +
        "IHK-Prüfungsstruktur: Die Prüfung besteht aus handlungsorientierten Situationsaufgaben (90 Minuten Bearbeitungszeit pro Aufgabe), die sich über zwei Tage verteilen. Die erste Situationsaufgabe ist oft in englischer Sprache, darf aber auf Deutsch beantwortet werden.\n\n" +
        "ISE-Formel (Strukturierung): Dient zur Strukturierung der schriftlichen Aufgaben:\n" +
        "1. Identifizieren (Ziel, Problem).\n" +
        "2. Strukturieren (PSP, Zeit, Kosten, Risiken).\n" +
        "3. Entscheiden (beste Lösung, Begründung).\n\n" +
        "Wichtig ist hier die ganzheitliche Anwendung aller Themen von Tag 1 bis 10.",
      cards: [
        {
          id: 1103,
          q: "Was ist der erste Schritt der ISE-Formel bei einer Situationsaufgabe?",
          a: "Identifizieren (Ziel und Problemstellung klar definieren)."
        },
        {
          id: 1203,
          q: "Was bedeutet die Aussage 'Die erste Situationsaufgabe ist oft in englischer Sprache'?",
          a: "Sie darf dennoch auf Deutsch beantwortet werden; es testet nur die Sprachaffinität der Ausgangssituation."
        }
      ],
      quiz: [
        {
          id: 1303,
          q: "Wofür steht das 'E' in der ISE-Formel?",
          options: ["Einführung", "Eskalation", "Entscheiden", "Erinnern"],
          correct: 2
        }
      ]
    },

    // --- TAG 14: MÜNDLICHES FACHGESPRÄCH ---
    {
      id: 14,
      title: "Tag 14: mündliche Fachgesprächssimulation",
      goal:
        "Anwendung der ISE-Formel und gesamtheitliche Problemlösung (IHK-Situationsaufgabe, mündlich).",
      theory:
        "Dieser Tag fokussiert auf die mündliche Darstellung deiner Lösungen im Fachgespräch.\n\n" +
        "IHK-Fachgespräch: Du musst deine Vorgehensweise strukturiert, verständlich und prüfungsorientiert erläutern.\n\n" +
        "ISE-Formel (mündlich anwenden):\n" +
        "1. Identifizieren: Problem und Ziel in 1–2 Sätzen klar benennen.\n" +
        "2. Strukturieren: Vorgehen, Alternativen, Risiken und Ressourcen logisch darstellen.\n" +
        "3. Entscheiden: Deine favorisierte Lösung klar begründen.\n\n" +
        "Nutze Begriffe aus Führung, Motivation, Arbeitsrecht und AEVO gezielt, um Fachkompetenz zu demonstrieren.",
      cards: [
        {
          id: 1104,
          q: "Wie nutzt du die ISE-Formel im mündlichen Fachgespräch?",
          a: "Kurz Problem/Ziel benennen, strukturiertes Vorgehen erklären, dann die gewählte Lösung klar begründen."
        },
        {
          id: 1204,
          q: "Welche Fachbegriffe kannst du im Fachgespräch einbauen, um Kompetenz zu zeigen?",
          a: "Beispiele: situative Führung, Herzberg, Maslow, Günstigkeitsprinzip, BBiG, AEVO, Glasl, Harvard-Konzept."
        }
      ],
      quiz: [
        {
          id: 1304,
          q: "Was ist im Fachgespräch besonders wichtig?",
          options: [
            "Möglichst viele Fremdwörter ohne Bezug",
            "Strukturierte, verständliche Darstellung deiner Lösung",
            "Nur Zahlen und Tabellen vorlesen",
            "Sehr schnell sprechen"
          ],
          correct: 1
        }
      ]
    }
  ]
};

// --- COMPONENTS ---

const NavBar = ({ activeTab, setActiveTab, darkMode }) => (
  <div
    className={`fixed bottom-0 left-0 right-0 border-t p-2 flex justify-around z-50 transition-colors duration-300 ${
      darkMode
        ? "bg-gray-900 border-gray-800"
        : "bg-white border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
    }`}
  >
    <button
      onClick={() => setActiveTab("home")}
      className={`flex flex-col items-center p-2 ${
        activeTab === "home" ? "text-blue-500" : "text-gray-500"
      }`}
    >
      <Home size={24} />
      <span className="text-xs mt-1">Home</span>
    </button>
    <button
      onClick={() => setActiveTab("course")}
      className={`flex flex-col items-center p-2 ${
        activeTab === "course" ? "text-blue-500" : "text-gray-500"
      }`}
    >
      <Layers size={24} />
      <span className="text-xs mt-1">Kurs</span>
    </button>
    <button
      onClick={() => setActiveTab("review")}
      className={`flex flex-col items-center p-2 ${
        activeTab === "review" ? "text-blue-500" : "text-gray-500"
      }`}
    >
      <PieChart size={24} />
      <span className="text-xs mt-1">Review</span>
    </button>
    <button
      onClick={() => setActiveTab("profile")}
      className={`flex flex-col items-center p-2 ${
        activeTab === "profile" ? "text-blue-500" : "text-gray-500"
      }`}
    >
      <User size={24} />
      <span className="text-xs mt-1">Profil</span>
    </button>
  </div>
);

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full h-64 cursor-pointer perspective-1000 mb-6"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center backface-hidden ${
            isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Brain className="text-blue-500 mb-4" size={40} />
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
            Frage
          </h3>
          <p className="text-xl text-center font-semibold text-white">
            {card.q}
          </p>
          <p className="text-gray-500 text-xs mt-8">(Tippen zum Umdrehen)</p>
        </div>
        <div
          className={`absolute w-full h-full bg-blue-900 border border-blue-700 rounded-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 ${
            !isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <CheckCircle className="text-green-400 mb-4" size={40} />
          <h3 className="text-blue-300 text-sm uppercase tracking-wide mb-2">
            Antwort
          </h3>
          <p className="text-lg text-center text-white">{card.a}</p>
        </div>
      </div>
    </div>
  );
};

// --- NEUE PASSIVE SESSION KOMPONENTE ---
const PassiveSession = ({ cards, onClose }) => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 4000; // Zeit pro Seite in ms

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (!isFlipped) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
        setTimeout(() => {
          setIndex(prev => (prev + 1) % cards.length);
        }, 500);
      }
    }, DURATION);

    return () => clearTimeout(timer);
  }, [index, isFlipped, isPaused, cards.length]);

  const currentCard = cards[index];

  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Controls Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          Passiv-Modus • Karte {index + 1}/{cards.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Auto Card */}
      <div className="w-full max-w-md h-80 perspective-1000 relative">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front / Question */}
          <div className="absolute w-full h-full bg-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center backface-hidden shadow-2xl">
            <Brain className="text-blue-500 mb-6 opacity-50" size={64} />
            <p className="text-2xl font-bold text-center text-white leading-relaxed">
              {currentCard.q}
            </p>
          </div>

          {/* Back / Answer */}
          <div className="absolute w-full h-full bg-blue-900 border border-blue-700 rounded-2xl p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 shadow-2xl">
            <CheckCircle className="text-green-400 mb-6 opacity-50" size={64} />
            <p className="text-xl text-center text-white leading-relaxed">
              {currentCard.a}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar & Controls */}
      <div className="w-full max-w-md mt-12 flex flex-col items-center gap-6">
        {/* Play/Pause */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-4 bg-gray-800 rounded-full text-blue-400 hover:bg-gray-700 hover:scale-105 transition-all border border-gray-700 shadow-lg"
        >
          {isPaused ? <PlayCircle size={32} /> : <PauseCircle size={32} />}
        </button>

        {/* Timer Bar */}
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative">
          {!isPaused && (
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 animate-progress"
              style={{ animationDuration: `${DURATION}ms` }}
              key={`${index}-${isFlipped}`}
            ></div>
          )}
        </div>
        <p className="text-gray-500 text-xs animate-pulse">
          {isPaused ? "Pausiert" : isFlipped ? "Antwort lesen..." : "Frage lesen..."}
        </p>
      </div>

      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        .animate-progress { animation-name: progress; animation-timing-function: linear; }
      `}</style>
    </div>
  );
};

const QuizSession = ({ quizData, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = optionIndex => {
    const isCorrect = optionIndex === quizData[currentIndex].correct;
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in">
        <Award size={64} className="text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Quiz beendet!</h2>
        <p className="text-gray-400 mb-6">
          Du hast {score} von {quizData.length} Fragen richtig.
        </p>
        <button
          onClick={() => onComplete(score)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all max-w-xs"
        >
          Ergebnis speichern
        </button>
      </div>
    );
  }

  const question = quizData[currentIndex];

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 text-sm">
          Frage {currentIndex + 1} von {quizData.length}
        </span>
        <span className="text-blue-400 font-mono text-sm">Score: {score}</span>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg border border-gray-700 flex-grow flex items-center justify-center">
        <p className="text-xl font-medium text-white text-center">
          {question.q}
        </p>
      </div>

      <div className="space-y-3 pb-20">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-200 transition-colors"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function ShadowLearnApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMode, setViewMode] = useState("overview"); // 'overview', 'learn', 'quiz', 'passive'

  const [progress, setProgress] = useState({
    completedDays: [],
    quizScores: {}
  });
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedProgress = localStorage.getItem("shadowLearnProgress");
        if (savedProgress) setProgress(JSON.parse(savedProgress));
        const savedTheme = localStorage.getItem("shadowLearnDarkMode");
        if (savedTheme) setDarkMode(JSON.parse(savedTheme));
      } catch (e) {
        console.error("Error loading state", e);
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("shadowLearnProgress", JSON.stringify(progress));
      localStorage.setItem("shadowLearnDarkMode", JSON.stringify(darkMode));
    }
  }, [progress, darkMode, isLoaded]);

  const isDayLocked = dayId => {
    if (dayId === 1) return false;
    return !progress.completedDays.includes(dayId - 1);
  };

  const completeDay = (dayId, score) => {
    setProgress(prev => ({
      ...prev,
      completedDays: prev.completedDays.includes(dayId)
        ? prev.completedDays
        : [...prev.completedDays, dayId],
      quizScores: { ...prev.quizScores, [dayId]: score }
    }));
    setViewMode("overview");
    setSelectedDay(null);
    setActiveTab("course");
  };

  const getProgressPercentage = () => {
    return Math.round(
      (progress.completedDays.length / courseData.totalDays) * 100
    );
  };

  // --- RENDERERS ---

  const renderHome = () => (
    <div className="p-6 space-y-8 pb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Moin, Daniel!
          </h1>
          <p className="text-gray-500 text-sm">Bereit für den nächsten Sprint?</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
          DM
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
        <h2 className="text-lg font-semibold text-white mb-2">
          {courseData.title}
        </h2>
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Fortschritt</span>
          <span>{getProgressPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-900 rounded-full h-3 mb-4">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>

        {progress.completedDays.length < courseData.totalDays ? (
          <button
            onClick={() => {
              const nextDayId = progress.completedDays.length + 1;
              const day = courseData.days.find(d => d.id === nextDayId);
              if (day) {
                setSelectedDay(day);
                setViewMode("learn");
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors"
          >
            <Play size={18} className="mr-2" />
            Weiterlernen: Tag {progress.completedDays.length + 1}
          </button>
        ) : (
          <div className="text-green-400 font-bold text-center flex items-center justify-center">
            <CheckCircle className="mr-2" /> Kurs abgeschlossen!
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-xl border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div
            className={`text-3xl font-bold mb-1 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {progress.completedDays.length}
          </div>
          <div className="text-gray-500 text-xs uppercase">Tage geschafft</div>
        </div>
        <div
          className={`p-4 rounded-xl border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="text-3xl font-bold text-blue-500 mb-1">
            {Object.values(progress.quizScores).reduce((a, b) => a + b, 0)}
          </div>
          <div className="text-gray-500 text-xs uppercase">Quiz Punkte</div>
        </div>
      </div>
    </div>
  );

  const renderCourseList = () => (
    <div className="p-4 pb-24">
      <h2
        className={`text-xl font-bold mb-6 sticky top-0 py-4 z-10 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        Dein Lernplan
      </h2>
      <div className="space-y-3">
        {courseData.days.map(day => {
          const isLocked = isDayLocked(day.id);
          const isDone = progress.completedDays.includes(day.id);

          return (
            <div
              key={day.id}
              onClick={() => {
                if (!isLocked) {
                  setSelectedDay(day);
                  setViewMode("learn");
                }
              }}
              className={`
                relative p-4 rounded-xl border flex items-center justify-between transition-all
                ${
                  isLocked
                    ? (darkMode
                        ? "bg-gray-900 border-gray-800"
                        : "bg-gray-200 border-gray-300") +
                      " opacity-50 cursor-not-allowed"
                    : (darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                        : "bg-white border-gray-200 hover:bg-gray-50 shadow-sm") +
                      " cursor-pointer"
                }
                ${
                  isDone && darkMode
                    ? "border-green-900 bg-gray-800/50"
                    : ""
                }
                ${
                  isDone && !darkMode
                    ? "border-green-200 bg-green-50"
                    : ""
                }
              `}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                  ${
                    isDone
                      ? "bg-green-900 text-green-400"
                      : isLocked
                      ? darkMode
                        ? "bg-gray-800 text-gray-600"
                        : "bg-gray-300 text-gray-500"
                      : "bg-blue-900 text-blue-400"
                  }
                `}
                >
                  {isDone ? <CheckCircle size={18} /> : day.id}
                </div>
                <div>
                  <h3
                    className={`font-medium ${
                      isDone
                        ? "text-gray-500"
                        : darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {day.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {day.goal}
                  </p>
                </div>
              </div>

              {isLocked ? (
                <Lock size={16} className="text-gray-600" />
              ) : (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderReview = () => {
    const totalQuizQuestions = courseData.days.reduce(
      (sum, day) => sum + (day.quiz?.length || 0),
      0
    );
    const totalScore = Object.values(progress.quizScores).reduce(
      (a, b) => a + b,
      0
    );
    const completedCount = progress.completedDays.length;

    return (
      <div className="p-6 pb-24">
        <h2
          className={`text-xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Review & Analyse
        </h2>

        <div
          className={`rounded-xl p-5 border mb-8 flex items-center justify-between ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200 shadow-md"
          }`}
        >
          <div>
            <p className="text-gray-400 text-sm mb-1">Gesamtscore</p>
            <p className="text-3xl font-bold text-blue-500">
              {totalScore}{" "}
              <span className="text-lg text-gray-500">
                / {totalQuizQuestions}
              </span>
            </p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center">
            <PieChart className="text-blue-400" />
          </div>
        </div>

        <h3 className="text-gray-500 text-xs uppercase font-bold mb-3 tracking-wider">
          Detailauswertung
        </h3>
        <div className="space-y-3">
          {courseData.days.map(day => {
            const score = progress.quizScores[day.id] ?? 0;
            const max = day.quiz?.length || 0;
            const isDone = progress.completedDays.includes(day.id);
            const weak = isDone && score < max;

            if (!isDone && isDayLocked(day.id)) return null;

            return (
              <div
                key={day.id}
                className={`rounded-lg p-4 border flex justify-between items-center ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {weak ? (
                    <AlertCircle size={16} className="text-yellow-500" />
                  ) : (
                    <div className="w-4" />
                  )}
                  <div>
                    <p
                      className={`${
                        darkMode ? "text-white" : "text-gray-900"
                      } font-medium`}
                    >
                      Tag {day.id}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1 w-32 sm:w-auto">
                      {day.title}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  {isDone ? (
                    <>
                      <span
                        className={`font-mono font-bold ${
                          score === max ? "text-green-500" : "text-yellow-500"
                        }`}
                      >
                        {score}/{max}
                      </span>
                      {score < max && (
                        <button
                          onClick={() => {
                            setSelectedDay(day);
                            setViewMode("learn");
                          }}
                          className="text-xs text-blue-400 hover:underline mt-1 flex items-center"
                        >
                          <RotateCcw size={10} className="mr-1" /> Wiederholen
                        </button>
                      )}
                    </>
                  ) : (
                    <span className="text-xs text-gray-500 italic">Offen</span>
                  )}
                </div>
              </div>
            );
          })}
          {completedCount === 0 && (
            <p className="text-gray-500 text-center py-8 italic">
              Schließe den ersten Tag ab, um hier Daten zu sehen.
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderDetailView = () => {
    if (!selectedDay) return null;

    if (viewMode === "quiz") {
      return (
        <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col animate-in fade-in duration-200">
          <div className="p-4 flex items-center border-b border-gray-800">
            <button
              onClick={() => setViewMode("learn")}
              className="text-gray-400 mr-4 hover:text-white"
            >
              <RotateCcw size={20} />
            </button>
            <h2 className="text-white font-bold">
              Quiz: Tag {selectedDay.id}
            </h2>
          </div>
          <QuizSession
            quizData={selectedDay.quiz}
            onComplete={score => completeDay(selectedDay.id, score)}
          />
        </div>
      );
    }

    if (viewMode === "passive") {
      return (
        <PassiveSession
          cards={selectedDay.cards}
          onClose={() => setViewMode("learn")}
        />
      );
    }

    // Learn Mode
    return (
      <div className="fixed inset-0 bg-gray-900 z-40 flex flex-col overflow-y-auto pb-20 animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-gray-900/95 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
          <button
            onClick={() => {
              setSelectedDay(null);
              setViewMode("overview");
            }}
            className="text-gray-400 hover:text-white p-1"
          >
            <ChevronRight className="transform rotate-180" />
          </button>
          <span className="text-white font-semibold">
            Tag {selectedDay.id}
          </span>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="p-6 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-white mb-2">
            {selectedDay.title}
          </h1>
          <div className="bg-blue-900/20 text-blue-300 p-3 rounded-lg text-sm mb-6 border border-blue-900/50">
            🎯 <strong>Ziel:</strong> {selectedDay.goal}
          </div>

          <div className="mb-8">
            <h3 className="text-gray-400 uppercase text-xs font-bold mb-3 tracking-wider">
              1. Verstehen (Build & Learn)
            </h3>
            <div className="bg-gray-800 rounded-xl p-5 text-gray-300 leading-relaxed whitespace-pre-line border border-gray-700 shadow-sm">
              {selectedDay.theory}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-gray-400 uppercase text-xs font-bold tracking-wider">
                2. Wiederholen (Flip-Cards)
              </h3>
              <button
                onClick={() => setViewMode("passive")}
                className="flex items-center text-blue-400 text-xs hover:text-blue-300 bg-blue-900/30 px-2 py-1 rounded border border-blue-900/50"
              >
                <PlayCircle size={12} className="mr-1" /> Passiv-Modus (Auto)
              </button>
            </div>

            <div className="space-y-4">
              {selectedDay.cards.map(c => (
                <FlipCard key={c.id} card={c} />
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setViewMode("quiz")}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Award className="mr-2" />
              Zum Tages-Quiz
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              Absolviere das Quiz, um den Tag abzuschließen.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="p-6 pb-24">
      <h2
        className={`text-xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Profil & Einstellungen
      </h2>

      <div
        className={`rounded-xl p-4 border mb-6 flex items-center space-x-4 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200 shadow-sm"
        }`}
      >
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
          DM
        </div>
        <div>
          <h3
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Daniel Massa
          </h3>
          <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
            Strategisch-Hybrider Lerntyp
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div
          className={`rounded-lg p-4 border flex justify-between items-center cursor-pointer ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200 shadow-sm"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
            Schattenmacher (Dark Mode)
          </span>
          <div
            className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${
                darkMode ? "right-1" : "left-1"
              }`}
            ></div>
          </div>
        </div>

        <button
          onClick={() => {
            // In einem echten Modal ersetzen, confirm blockt im iFrame.
            // Für lokale Dev-Umgebung ausreichend.
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Lernfortschritt wirklich zurücksetzen?")) {
              setProgress({ completedDays: [], quizScores: {} });
            }
          }}
          className="w-full border border-red-900/50 text-red-500 p-4 rounded-lg hover:bg-red-500/10 transition-colors text-left"
        >
          Fortschritt zurücksetzen
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs">
          ShadowLearn MVP v2.2 (Final Content Update)
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {(selectedDay || viewMode !== "overview") && renderDetailView()}

      {!selectedDay && (
        <>
          {activeTab === "home" && renderHome()}
          {activeTab === "course" && renderCourseList()}
          {activeTab === "review" && renderReview()}
          {activeTab === "profile" && renderProfile()}
          <NavBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
          />
        </>
      )}

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}
