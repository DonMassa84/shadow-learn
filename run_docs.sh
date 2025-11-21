#!/bin/bash
# ShadowLearn Dokumentation Schnellstart-Skript
# Erstellt mit dem All-in-One Cat Oneliner
# Dieses Skript öffnet alle Kern-Dokumente (Lastenheft, Pflichtenheft, Summary)
# im Standard-Webbrowser oder Texteditor.

DOC_PATH="docs"

echo "--- Starte ShadowLearn Dokumentation ---"

# Überprüfen, ob der docs-Ordner existiert (wichtig für die Pfad-Sicherheit)
if [ ! -d "$DOC_PATH" ]; then
    echo "FEHLER: Dokumentationspfad '$DOC_PATH' nicht gefunden. Bitte aus dem Projekt-Hauptverzeichnis starten."
    exit 1
fi

# Verwende 'xdg-open' (Standard auf Linux Desktops) um die Dateien zu öffnen
# Die ' & ' am Ende startet jeden Prozess im Hintergrund.

echo "Öffne LASTENHEFT.md..."
xdg-open "$DOC_PATH/LASTENHEFT.md" &

echo "Öffne PFLICHTENHEFT.md..."
xdg-open "$DOC_PATH/PFLICHTENHEFT.md" &

echo "Öffne MANAGEMENT_SUMMARY.md..."
xdg-open "$DOC_PATH/MANAGEMENT_SUMMARY.md" &

echo "Alle Dokumente werden im Hintergrund geöffnet."
