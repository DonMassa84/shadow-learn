# Lastenheft – ShadowLearn Lern-App

| Metadaten | Details |
| :--- | :--- |
| **Projektname** | ShadowLearn – KI-gestützte Lernplattform |
| **Version** | 2.0 (Content Complete) |
| **Datum** | 21.11.2025 |
| **Auftraggeber** | Daniel Massa |

---

## 1. Ausgangssituation und Motivation
[...]

**Ziel ist eine eigene Lern-App, die:**
* Inhalte strukturiert in Lernpfade (z. B. 14-Tage-Sprints) organisiert.
* Seinen Lerntyp berücksichtigt.
* Wiederholung, Transfer und Prüfungsvorbereitung automatisiert.
* Später auch für andere Nutzer skalierbar ist.

**Fokus MVP:** Das Produkt ist nun für den Kurs **„14 Tage – Mitarbeiterführung und Personalmanagement“** vollständig mit Inhalten befüllt.

---

## 2. Projektziel und Produktvision

ShadowLearn stellt eine webbasierte Lernplattform bereit, mit der der Auftraggeber (später weitere Nutzer):

* Lerninhalte für IHK-/AEVO-/Führungs-Themen effizient strukturieren und wiederholen kann.
* In **14-Tage-Lernsprints** inklusive täglicher Aufgaben geführt wird.
* Ein **5-Stufen-Lernsystem** (z. B. Build – Learn – Test – Transfer – Review) nutzt.
* Lernkarten (Flip-Cards), Quizfragen und Zusammenfassungen erhält.
* Den eigenen Lernfortschritt verfolgen und auswerten kann.
* Ein Dark-Theme „Schattenmacher“ mit hoher Lesbarkeit nutzt.

---

## 5. Fachliche Anforderungen (Muss-/Kann-Anforderungen)

### 5.1 Muss-Anforderungen (Status: Erfüllt durch Integration des PDF-Contents)

**1. Benutzerverwaltung (MVP minimal)**
* **M1.1:** Ein Benutzerkonto für den Auftraggeber muss angelegt werden können. (Implizit: Local Storage)
* **M1.2:** Login/Logout-Funktionalität bzw. gesicherter Zugriff auf persönliche Lernfortschritte. (Implizit: Local Storage)

**2. Kursverwaltung**
* **M2.1:** Ein Kurs „14 Tage Mitarbeiterführung“ muss hinterlegt werden. **(ERFÜLLT)**
* **M2.2:** Der Kurs muss in 14 Tage-Einheiten unterteilt sein. **(ERFÜLLT)**
* **M2.3:** Pro Tag müssen strukturierte Inhalte angezeigt werden können (Tagesziel, kurzer Erklärungstext, Kernthemen). **(ERFÜLLT)**

**3. Lernkarten (Flip-Cards)**
* **M3.1:** Pro Tag sollen 3–5 Flip-Cards mit Frage/Vorderseite und Antwort/Rückseite vorhanden sein. **(ERFÜLLT, die meisten Tage haben 4-5 Karten)**
* **M3.2:** Der Nutzer muss zwischen Vorder- und Rückseite umschalten können. **(ERFÜLLT)**
* **M3.3:** Der Nutzer muss Karten als „verstanden“ oder „noch unsicher“ markieren können. **(Noch nicht implementiert, ist aber Kanon)**

**4. Quiz/Prüfungsfragen**
* **M4.1:** Pro Tag sollen mindestens 3 Multiple-Choice-Fragen vorhanden sein. **(ERFÜLLT, die meisten Tage haben 4-5 Fragen)**
* **M4.2:** Es muss eine Auswertung (Anzahl richtiger Antworten) erfolgen. **(ERFÜLLT)**
* **M4.3:** Aggregate Auswertung über mehrere Tage (z. B. Durchschnittspunkte) muss möglich sein. **(ERFÜLLT: Review-Tab)**

**5. Lernfortschritt**
* **M5.1:** Der Abschluss eines Tages (z. B. „Tag 7 abgeschlossen“) muss gespeichert werden. **(ERFÜLLT)**
* **M5.2:** Eine Übersicht (z. B. Fortschrittsbalken 0–14 Tage) muss dargestellt werden. **(ERFÜLLT)**
* **M5.3:** Der Status pro Tag (offen, begonnen, abgeschlossen) muss sichtbar sein. **(ERFÜLLT)**

**6. Navigation & UI**
* **M6.1:** Es muss eine klare Tab-/Bottom-Navigation geben (z. B. Home | Kurs | Quiz | Review | Profil). **(ERFÜLLT)**
* **M6.2:** Der Einstieg (Home) soll den aktuellen Kursstatus und „Weiterlernen“-Button anzeigen. **(ERFÜLLT)**
* **M6.3:** Die Benutzeroberfläche muss für Dark-Mode optimiert sein. **(ERFÜLLT)**

**7. Themen- und Lernsystemlogik**
* **M7.1:** Der 5-Stufen-Lernprozess (z. B. Build – Learn – Test – Transfer – Review) muss pro Tag als Struktur erkennbar sein. **(ERFÜLLT)**
* **M7.2:** Inhalte müssen strukturiert nach didaktischen Bausteinen angezeigt werden. **(ERFÜLLT)**

### 5.2 Kann-Anforderungen (Optionen für spätere Ausbaustufen)
* **K1:** Audiozusammenfassungen pro Tag (TTS oder hinterlegte MP3-Dateien).
* **K2:** Individuelles Lerntyp-Profil im Profilbereich mit Empfehlungen.
* **K3:** Offline-Nutzung durch lokale Zwischenspeicherung.
* **K4:** KI-gestützte Generierung von zusätzlichen Fragen/Lernkarten.
* **K5:** Weitere Kurse (AEVO, IT-Projektmanagement, Arbeitsrecht).

---

## 7. Abnahmekriterien (MVP)

Das Produkt gilt als abgenommen, wenn:
1.  Der Kurs „14 Tage Mitarbeiterführung“ vollständig in der App verfügbar ist. **(ERFÜLLT)**
2.  Pro Tag: Tagesbeschreibung, 3–5 Flip-Cards und 3 MC-Fragen verfügbar sind. **(ERFÜLLT)**
3.  Der Fortschrittsbalken korrekt anzeigt, wie viele Tage abgeschlossen wurden. **(ERFÜLLT)**
4.  Quiz-Auswertungen funktionieren und Ergebnisse nachvollziehbar angezeigt werden. **(ERFÜLLT)**
5.  Die App im Browser aufrufbar ist (öffentliche URL oder Staging-URL). **(ERFÜLLT)**
6.  Das Dark-Theme „Schattenmacher“ konsistent angewandt ist. **(ERFÜLLT)**
