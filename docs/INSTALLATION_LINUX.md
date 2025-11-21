# ShadowLearn auf Linux Mint installieren

Da der aktuelle MVP auf moderner Web-Technologie (React & Vite) basiert, läuft er sehr performant auf Linux Mint. Folge diesen Schritten, um die App lokal zu starten.

## 1\. Vorbereitung (Terminal)

Öffne dein Terminal (`STRG + ALT + T`) und stelle sicher, dass **Node.js** installiert ist. Das ist der Motor, der die App antreibt.

```bash
# 1. Systemquellen aktualisieren
sudo apt update

# 2. Node.js und NPM installieren
sudo apt install nodejs npm

# 3. Version prüfen (sollte v18 oder höher sein, falls älter, ggf. NodeSource nutzen)
node -v
```

## 2\. Projekt erstellen

Erstelle einen Ordner für deine App und installiere das Grundgerüst (Vite + React).

```bash
# In dein Wunschverzeichnis wechseln (z.B. Dokumente)
cd ~/Dokumente

# Neues Projekt anlegen (Bestätige Nachfragen mit Enter)
npm create vite@latest shadow-learn -- --template react

# In den Ordner wechseln
cd shadow-learn

# Standard-Abhängigkeiten installieren
npm install
```

## 3\. Design & Icons installieren

Der MVP nutzt **Tailwind CSS** (für das Design) und **Lucide React** (für die Icons). Diese müssen wir hinzufügen.

```bash
# 1. Lucide Icons installieren
npm install lucide-react

# 2. Tailwind CSS installieren
npm install -D tailwindcss postcss autoprefixer

# 3. Tailwind initialisieren (erstellt tailwind.config.js)
npx tailwindcss init -p
```

## 4\. Konfiguration anpassen

Jetzt müssen wir Tailwind sagen, wo deine Dateien liegen.

**A. Datei `tailwind.config.js` bearbeiten:**
Öffne die Datei in deinem Texteditor (z.B. Xed oder Nano) und ändere `content: []` zu:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**B. Datei `src/index.css` bearbeiten:**
Lösche den gesamten Inhalt dieser Datei und füge **nur** diese drei Zeilen ein:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5\. Den App-Code einfügen

Das ist der wichtigste Schritt.

1.  Öffne die Datei `src/App.jsx` in deinem Editor.
2.  Lösche den kompletten Inhalt.
3.  Kopiere den **gesamten Code** aus der letzten Version (v2.1) hier aus dem Chat.
4.  Füge ihn in `src/App.jsx` ein und speichere.

## 6\. App starten

Alles bereit\! Starte die App im Entwicklungsmodus:

```bash
npm run dev
```

Das Terminal zeigt dir nun einen Link an (meistens `http://localhost:5173`).
-> **Klicke darauf** (oder kopiere ihn in Firefox/Chrome).

Deine App läuft nun lokal\! 🎉

-----

## Tipp: Als "echte" Desktop-App nutzen

Du musst nicht immer das Terminal offen haben oder im Browser-Tab arbeiten. Du kannst die App als Desktop-Anwendung installieren (PWA-ähnlich).

**In Google Chrome / Chromium / Brave / Edge:**

1.  Öffne die laufende App (`http://localhost:5173`).
2.  Klicke oben rechts auf das Menü (Drei Punkte).
3.  Wähle **"Installieren ShadowLearn..."** oder **"Apps \> Diese Site als App installieren"**.

**Ergebnis:**

  * ShadowLearn bekommt ein eigenes Fenster ohne Browser-Leisten.
  * Du findest ein Icon in deinem **Linux Mint Startmenü**.
  * Du kannst es in die Leiste unten pinnen.

-----

## Zusatz: Offline-Start (Optional)

Wenn du den Befehl `npm run dev` nicht jedes Mal tippen willst, kannst du dir ein kleines Start-Skript auf den Desktop legen:

1.  Rechtsklick auf Desktop -> "Neues Dokument anlegen" -> `ShadowLearn.sh`
2.  Inhalt:
    ```bash
    #!/bin/bash
    cd ~/Dokumente/shadow-learn
    npm run dev
    ```
3.  Rechtsklick auf Datei -> Eigenschaften -> Zugriffsrechte -> "Der Datei erlauben, als Programm ausgeführt zu werden".
