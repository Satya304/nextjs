"use client";

import { useState } from "react";
import Link from "next/link";
import { hitungBMI } from "@/lib/bmi";

export default function FormBMI({ nama }) {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
  }

  function handleReset() {
    setBerat("");
    setTinggi("");
    setHasil(null);
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Halo, {nama}</h1>
      <p>Silakan masukkan berat badan dan tinggi kamu!</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <div>
          <label htmlFor="berat">Berat (kg)</label>
          <input
            id="berat"
            type="number"
            step="any"
            min="1"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </div>

        <div>
          <label htmlFor="tinggi">Tinggi (cm)</label>
          <input
            id="tinggi"
            type="number"
            step="any"
            min="1"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: 8, flex: 1 }}>
            Hitung
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{ padding: 8, flex: 1 }}
          >
            Reset
          </button>
        </div>
      </form>

      {hasil && (
        <p
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 6,
            background: hasil.warna,
            color: hasil.warnaTeks,
          }}
        >
          BMI kamu: <strong>{hasil.bmi}</strong> ({hasil.kategori})
        </p>
      )}

      <p style={{ marginTop: 24 }}>
        <Link href="/">Bukan kamu? Ganti nama</Link>
      </p>
    </main>
  );
}