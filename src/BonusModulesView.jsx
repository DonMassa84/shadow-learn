import React from "react";
import { bonusModules } from "./courseData";

export function BonusModulesView() {
  return (
    <section className="bonus-modules" style={{ marginTop: "2rem" }}>
      <h2>Bonus-Module (Shadowstoff)</h2>
      <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>
        Vertiefungsmodule aus ALL_IN_ONE_SCHATTENSTOFF – ideal für Extra-Punkte in der IHK-Prüfung.
      </p>

      {bonusModules.map((mod) => (
        <article
          key={mod.id}
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <h3 style={{ marginTop: 0 }}>{mod.title}</h3>
          <p>
            <strong>Ziel:</strong> {mod.goal}
          </p>

          <details style={{ marginTop: "0.5rem" }}>
            <summary style={{ cursor: "pointer" }}>Theorie anzeigen</summary>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontSize: "0.85rem",
                marginTop: "0.5rem",
              }}
            >
              {mod.theory}
            </pre>
          </details>

          {mod.cards?.length > 0 && (
            <div style={{ marginTop: "0.75rem" }}>
              <h4>Merkkarten</h4>
              <ul>
                {mod.cards.map((card) => (
                  <li key={card.id} style={{ marginBottom: "0.4rem" }}>
                    <strong>Q:</strong> {card.q}
                    <br />
                    <strong>A:</strong> {card.a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {mod.quiz?.length > 0 && (
            <div style={{ marginTop: "0.75rem" }}>
              <h4>Quiz-Fragen (Überblick)</h4>
              <ul>
                {mod.quiz.map((q) => (
                  <li key={q.id} style={{ marginBottom: "0.4rem" }}>
                    {q.q}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
