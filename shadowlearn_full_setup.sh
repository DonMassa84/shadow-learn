#!/usr/bin/env bash
set -e

BASE="$HOME/development/ShadowLearn_Full"
mkdir -p "$BASE"
cd "$BASE"

echo "====================================================="
echo "      SHADOWLEARN FULLSTACK SETUP – ULTIMATE v3"
echo "====================================================="

mkdir -p app_backend/{api,core} app_frontend/lib/{ui,widgets,services,styles} data scripts release .github/workflows

echo "[1/10] Backend erzeugen …"
cat > app_backend/main.py << 'PY'
from fastapi import FastAPI
from api.learning import router as learning_router
from api.cards import router as cards_router
from api.flow import router as flow_router
from api.exam import router as exam_router

app = FastAPI(title="ShadowLearn Backend")

@app.get("/")
def root():
    return {"status": "ShadowLearn Backend running"}

app.include_router(learning_router)
app.include_router(cards_router)
app.include_router(flow_router)
app.include_router(exam_router)
PY

cat > app_backend/api/learning.py << 'PY'
from fastapi import APIRouter
router = APIRouter(prefix="/learning")

@router.get("/today")
def get_today():
    return {"topic":"Führungsstile","mode":"ShadowFlow Adaptive Animation"}
PY

cat > app_backend/api/cards.py << 'PY'
from fastapi import APIRouter
router = APIRouter(prefix="/cards")

@router.get("/")
def cards():
    return [{"q":"Was ist autoritärer Führungsstil?", "a":"Klare Anweisungen, keine Mitsprache"}]
PY

cat > app_backend/api/flow.py << 'PY'
from fastapi import APIRouter
router = APIRouter(prefix="/flow")

@router.get("/next")
def next():
    return {"step": "Animation → Visualisierung → Test"}
PY

cat > app_backend/api/exam.py << 'PY'
from fastapi import APIRouter
router = APIRouter(prefix="/exam")

@router.get("/simulate")
def simulate():
    return {"score_predict": 93, "mode": "IHK-Prüfung ShadowModus"}
PY

cat > app_backend/core/database.py << 'PY'
import sqlite3
DB="data/shadowlearn.db"
def get_db():
    return sqlite3.connect(DB)
PY

echo "[2/10] Backend requirements …"
cat > app_backend/requirements.txt << 'REQ'
fastapi
uvicorn
REQ

echo "[3/10] Flutter Frontend erzeugen …"
cat > app_frontend/lib/main.dart << 'DART'
import 'package:flutter/material.dart';
import 'ui/dashboard.dart';

void main() => runApp(ShadowLearn());

class ShadowLearn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "ShadowLearn",
      home: Dashboard(),
    );
  }
}
DART

cat > app_frontend/lib/ui/dashboard.dart << 'DART'
import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Text(
          "ShadowLearn v3 – Adaptive Learning Engine",
          style: TextStyle(color: Colors.cyanAccent, fontSize: 22),
        ),
      ),
    );
  }
}
DART

cat > app_frontend/pubspec.yaml << 'YAML'
name: shadowlearn
description: ShadowLearn – Strategisches Lernsystem
environment:
  sdk: ">=3.3.0 <4.0.0"
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0
  provider: ^6.0.5
flutter:
  uses-material-design: true
YAML

echo "[4/10] Docker erzeugen …"
cat > docker-compose.yml << 'DOCK'
services:
  backend:
    build: ./app_backend
    ports:
      - "8000:8000"
  frontend:
    image: nginx
    volumes:
      - ./release/web:/usr/share/nginx/html
    ports:
      - "8080:80"
DOCK

echo "[5/10] GitHub Actions erzeugen …"
cat > .github/workflows/shadowlearn.yml << 'YML'
name: ShadowLearn CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "ShadowLearn CI läuft …"
YML

echo "[6/10] ASCII Dashboard …"
cat > scripts/dashboard.sh << 'SCR'
#!/usr/bin/env bash
clear
echo "███████╗██╗  ██╗ █████╗ ██████╗ "
echo "██╔════╝██║  ██║██╔══██╗██╔══██╗"
echo "███████╗███████║███████║██████╔╝"
echo "╚════██║██╔══██║██╔══██║██╔══██╗"
echo "███████║██║  ██║██║  ██║██║  ██║"
echo "╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝"
echo "ShadowLearn Control Panel"

echo
echo "1) Backend starten"
echo "2) Frontend build (Web)"
echo "3) Release erstellen"
echo "4) Exit"
read -p "> " choice

if [[ "$choice" == "1" ]]; then
  cd ../app_backend && uvicorn main:app --reload
elif [[ "$choice" == "2" ]]; then
  cd ../app_frontend && flutter build web && cp -r build/web ../release/web
elif [[ "$choice" == "3" ]]; then
  zip -r ../release/shadowlearn_full.zip ../
fi
SCR
chmod +x scripts/dashboard.sh

echo "[7/10] Release-Ordner vorbereiten …"
mkdir -p release/web release/backend

echo "[8/10] README erzeugen …"
cat > README.md << 'TXT'
# ShadowLearn v3 – Fullstack Adaptive Learning Engine

Inhalt:
- Backend (FastAPI)
- Frontend (Flutter)
- Docker Fullstack
- IHK-Prüfungsmodul
- ShadowFlow Adaptive Learning Engine
TXT

echo "[9/10] Datenbank erzeugen …"
sqlite3 data/shadowlearn.db "CREATE TABLE IF NOT EXISTS logs(id INTEGER PRIMARY KEY, event TEXT);"

echo "====================================================="
echo " ShadowLearn v3 Setup abgeschlossen"
echo " Starte Dashboard:    ./scripts/dashboard.sh"
echo "====================================================="
