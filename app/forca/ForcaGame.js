"use client";

import { useCallback, useEffect, useState } from "react";
import { hangmanWords } from "@/lib/data";
import styles from "./forca.module.css";

const MAX_WRONG = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function pickWord(excludeWord) {
  const pool = hangmanWords.filter((w) => w.word !== excludeWord);
  const source = pool.length > 0 ? pool : hangmanWords;
  return source[Math.floor(Math.random() * source.length)];
}

export default function ForcaGame() {
  const [current, setCurrent] = useState(null);
  const [guessed, setGuessed] = useState([]);

  const newGame = useCallback(() => {
    setCurrent((prev) => pickWord(prev?.word));
    setGuessed([]);
  }, []);

  useEffect(() => {
    newGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const word = current?.word ?? "";
  const letters = word.split("");
  const wrongGuesses = guessed.filter((l) => !letters.includes(l));
  const correctGuesses = guessed.filter((l) => letters.includes(l));
  const win = current != null && letters.length > 0 && letters.every((l) => guessed.includes(l));
  const lose = wrongGuesses.length >= MAX_WRONG;
  const gameOver = win || lose;

  const guessLetter = useCallback(
    (letter) => {
      if (!current || gameOver || guessed.includes(letter)) return;
      setGuessed((prev) => [...prev, letter]);
    },
    [current, gameOver, guessed]
  );

  useEffect(() => {
    function onKeyDown(e) {
      const letter = e.key.toUpperCase();
      if (ALPHABET.includes(letter)) guessLetter(letter);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [guessLetter]);

  if (!current) {
    return <div className={styles.loading} aria-hidden="true" />;
  }

  return (
    <div className={styles.game}>
      <div className={styles.boardCol}>
        <Gallows wrongCount={wrongGuesses.length} />
        <p className={`mono ${styles.remaining}`}>
          Tentativas restantes:{" "}
          <span className={wrongGuesses.length >= MAX_WRONG - 1 ? styles.remainingLow : ""}>
            {MAX_WRONG - wrongGuesses.length}
          </span>
        </p>
      </div>

      <div className={styles.playCol}>
        <p className={`mono ${styles.hint}`}>Dica: {current.hint}</p>

        <div className={styles.wordRow} aria-label={`Palavra com ${letters.length} letras`}>
          {letters.map((l, i) => {
            const revealed = guessed.includes(l) || gameOver;
            return (
              <span key={i} className={styles.letterSlot}>
                <span className={`mono ${styles.letterChar}`}>{revealed ? l : ""}</span>
              </span>
            );
          })}
        </div>

        {gameOver && (
          <div className={`${styles.banner} ${win ? styles.bannerWin : styles.bannerLose}`}>
            <strong>{win ? "Parabéns, você venceu!" : "Fim de jogo"}</strong>
            <span>
              {win ? "Você descobriu a palavra: " : "A palavra era: "}
              <span className="mono">{word}</span>
            </span>
          </div>
        )}

        <div className={styles.keyboard} role="group" aria-label="Teclado do jogo">
          {ALPHABET.map((letter) => {
            const used = guessed.includes(letter);
            const correct = used && letters.includes(letter);
            const wrong = used && !letters.includes(letter);
            return (
              <button
                key={letter}
                type="button"
                className={`mono ${styles.key} ${correct ? styles.keyCorrect : ""} ${
                  wrong ? styles.keyWrong : ""
                }`}
                disabled={used || gameOver}
                onClick={() => guessLetter(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>

        <div className={styles.triedRow}>
          <span className={`mono ${styles.triedLabel}`}>Tentativas anteriores:</span>
          {guessed.length === 0 ? (
            <span className={`mono ${styles.triedEmpty}`}>nenhuma ainda</span>
          ) : (
            <ul className={styles.triedList}>
              {guessed.map((l) => (
                <li
                  key={l}
                  className={`mono ${styles.triedChip} ${
                    letters.includes(l) ? styles.triedChipOk : styles.triedChipBad
                  }`}
                >
                  {l}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="button" className={styles.resetBtn} onClick={newGame}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

function Gallows({ wrongCount }) {
  const show = (n) => wrongCount >= n;
  return (
    <svg viewBox="0 0 200 220" className={styles.gallows} role="img" aria-label="Progresso do jogo">
      {/* estrutura fixa, estilo esquemático */}
      <line x1="20" y1="205" x2="140" y2="205" className={styles.frameLine} />
      <line x1="50" y1="205" x2="50" y2="20" className={styles.frameLine} />
      <line x1="50" y1="20" x2="130" y2="20" className={styles.frameLine} />
      <line x1="130" y1="20" x2="130" y2="45" className={styles.frameLine} />

      {/* corpo, revelado progressivamente */}
      <circle cx="130" cy="62" r="17" className={styles.bodyPart} style={{ opacity: show(1) ? 1 : 0 }} />
      <line x1="130" y1="79" x2="130" y2="130" className={styles.bodyPart} style={{ opacity: show(2) ? 1 : 0 }} />
      <line x1="130" y1="95" x2="110" y2="115" className={styles.bodyPart} style={{ opacity: show(3) ? 1 : 0 }} />
      <line x1="130" y1="95" x2="150" y2="115" className={styles.bodyPart} style={{ opacity: show(4) ? 1 : 0 }} />
      <line x1="130" y1="130" x2="113" y2="160" className={styles.bodyPart} style={{ opacity: show(5) ? 1 : 0 }} />
      <line x1="130" y1="130" x2="147" y2="160" className={styles.bodyPart} style={{ opacity: show(6) ? 1 : 0 }} />
    </svg>
  );
}
