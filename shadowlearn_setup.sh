#!/usr/bin/env bash
set -e
echo "ShadowLearn Setup läuft…"

BASE="$HOME/development/ShadowLearn"
mkdir -p "$BASE/app_backend" "$BASE/app_frontend" "$BASE/data" "$BASE/scripts"

echo "[Backend] Starte API-Setup…"
cat > "$BASE/app_backend/main.py" << 'EOPY'
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def root():
    return {"status": "ShadowLearn Backend aktiv"}
EOPY

echo "[Frontend] Starte Flutter-Setup…"
cat > "$BASE/app_frontend/lib/main.dart" << 'EODART'
import 'package:flutter/material.dart';
void main() => runApp(MaterialApp(home: Text("ShadowLearn")));
EODART

echo "Setup abgeschlossen."
