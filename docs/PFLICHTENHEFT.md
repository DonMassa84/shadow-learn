# Pflichtenheft – ShadowLearn Lern-App

| Metadaten | Details |
| :--- | :--- |
| **Projektname** | ShadowLearn – KI-gestützte Lernplattform |
| **Version** | 2.0 (Content Complete) |
| **Datum** | 21.11.2025 |
| **Auftragnehmer** | Entwicklerteam / Daniel Massa |

-----

## 1\. Zielsetzung aus Entwicklersicht

Dieses Pflichtenheft beschreibt, wie die im Lastenheft geforderten Funktionen technisch umgesetzt werden. Der Fokus liegt auf einem MVP, der:

  * einen kompletten 14-Tage-Kurs **„Mitarbeiterführung“ mit allen inhaltlichen Details aus dem PDF**,
  * Flip-Cards, Quiz, Fortschrittsanzeige,
  * Dark-Theme und
  * eine einfache Benutzerverwaltung bereitstellt.

-----

## 2\. Systemarchitektur
[...]

### 2.2 Komponenten

1.  **Flutter-Frontend:** UI-Rendering, State Management (Riverpod/Provider), Kommunikation mit Firebase. (HINWEIS: Aktuell als React MVP in der Entwicklung, um Prototyping zu beschleunigen.)
2.  **Firebase / Firestore:** Zentrales Daten-Backend für Benutzer, Kurse, Tage, Lernkarten, Quizfragen, Lernfortschritt.
3.  **Firebase Authentication (MVP):** Anonymes Login oder E-Mail/Passwort.

-----

## 3\. Datenmodell (Vorschlag)
[...]

### 3.1 Collections und Dokumente (Inhaltlich gefüllt)

**Collection `courses`**
* `courses/{courseId}` (z.B. `mitarbeiterfuehrung_14tage`)
    * `title`: string
    * `daysCount`: number
    * **Subcollection** `days/{dayId}`
        * **NEUE TAGESSTRUKTUR GEMÄSS PDF:**
            * **Tag 1:** Führungsmodelle beherrschen (Lewin, Situativ, Transformational).
            * **Tag 2:** Motivation vollständig verstehen (Maslow, Herzberg, McClelland).
            * **Tag 3:** AEVO Unterweisung: Struktur verankern (4-Stufen, Lehrgespräch, SMART).
            * **Tag 4:** Gesprächsführung (taktisch) (Eisberg, Aktives Zuhören, Harvard-Modell).
            * **Tag 5:** Arbeitsrecht I: Fundament (BBiG Kündigung, Ausbilder-Eignung).
            * **Tag 6:** AEVO Fachgespräch (Didaktische Begründungen, 80%-Regel).
            * **Tag 7:** Wochenprüfung & Mitarbeitergespräche (Beurteilungsgespräch, ISE-Formel).
            * **Tag 8:** Konfliktmanagement & Glasl Eskalation (9 Stufen, Harvard).
            * **Tag 9:** Personalentwicklung & Beurteilung (PE-Prozess, Halo-/Nikolaus-Effekt).
            * **Tag 10:** Arbeitsrecht II: Vertiefung (Besonderer Kündigungsschutz, BR-Rechte).
            * **Tag 11-14:** Prüfungssimulation & Integration.
        * `dayNumber`: number
        * `title`: string
        * `goal`: string
        * `theoryText`: string
        * **Subcollection** `cards/{cardId}`
        * **Subcollection** `quiz/{questionId}`

**Collection `progress`**
* `progress/{userId_courseId}`
    * `userId`: string
    * `courseId`: string
    * `daysCompleted`: array\<number\> (z.B. `[1,2,3]`)
    * `quizResults`: map\<dayNumber, score\>
    * `lastUpdated`: timestamp

-----

## 8\. Abnahme aus Entwicklersicht

Das System ist fertiggestellt, wenn:

1.  Datenstruktur in Firestore implementiert ist.
2.  Kurs „mitarbeiterfuehrung\_14tage“ mit **allen 14 Tagen aus dem PDF** geladen/angezeigt wird. **(ERFÜLLT)**
3.  Alle Views (Home, Kurs, Quiz, Review, Profil) funktionieren.
4.  Fortschritt persistent gespeichert wird.
5.  Hosting unter stabiler URL läuft.
6.  Dark-Mode funktioniert.
