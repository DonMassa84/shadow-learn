# GitHub Push Anleitung

Diese Schritte zeigen, wie du dein lokales Projekt (`shadow-learn`) mit einem neuen GitHub-Repository synchronisierst.

## Voraussetzungen

1.  **Git** muss installiert sein.
2.  Du hast bereits ein **neues, leeres Repository** auf GitHub erstellt (z.B. `shadow-learn-app`). Kopiere den URL des Repositorys (z.B. `https://github.com/DeinNutzername/shadow-learn-app.git`).
3.  Du befindest dich im Hauptordner deines Projekts (`cd /Pfad/zu/shadow-learn`).

## Schritt-für-Schritt-Anleitung

Führe die folgenden Befehle nacheinander aus:

### 1\. Lokales Git-Repository initialisieren

Dadurch wird ein versteckter `.git`-Ordner erstellt, der die Versionsgeschichte verwaltet.

```bash
git init
```

### 2\. Dateien zum Staging hinzufügen

Dadurch werden alle relevanten Dateien (`.gitignore` sorgt dafür, dass `node_modules` ignoriert wird) für den ersten Commit vorbereitet.

```bash
git add .
```

### 3\. Ersten Commit erstellen

Der Commit speichert den aktuellen Zustand deines Projekts lokal.

```bash
git commit -m "feat: Initial commit with full 14-day course content (v2.1)"
```

### 4\. Branch umbenennen (optional, empfohlen)

In modernen Projekten wird der Haupt-Branch oft von `master` auf `main` umbenannt.

```bash
git branch -M main
```

### 5\. Remote-Repository verknüpfen

Ersetze `<YOUR_REPO_URL>` durch den URL deines auf GitHub erstellten, leeren Repositories.

```bash
git remote add origin <YOUR_REPO_URL>
# Beispiel: git remote add origin [https://github.com/DanielMassa/shadow-learn-app.git](https://github.com/DanielMassa/shadow-learn-app.git)
```

### 6\. Projekt hochladen (Push)

Dadurch werden alle lokalen Commits zum GitHub-Repository hochgeladen.

```bash
git push -u origin main
```

Dein Projekt sollte jetzt vollständig auf GitHub verfügbar sein\!
