"use client";

import { useState } from "react";
import Jar from "./Jar";
import { IMAGES, PRODUCTS, kes, waLink } from "@/lib/config";

export default function OrderForm() {
  const [qty, setQty] = useState<Record<string, number>>({ "370": 0, "730": 0 });
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");

  const count = PRODUCTS.reduce((t, p) => t + qty[p.id], 0);
  const total = PRODUCTS.reduce((t, p) => t + qty[p.id] * p.price, 0);

  const change = (id: string, delta: number) => {
    setError("");
    setQty((q) => ({ ...q, [id]: Math.min(20, Math.max(0, q[id] + delta)) }));
  };

  const send = () => {
    if (!count) return setError("Add at least one jar to your order.");
    if (!name.trim() || !area.trim())
      return setError("Add your name and delivery area so we can confirm delivery.");
    const lines = PRODUCTS.filter((p) => qty[p.id] > 0).map(
      (p) => `${qty[p.id]} × ${p.label} (${kes(qty[p.id] * p.price)})`
    );
    const text = `Hello Hakika, I’d like to order:\n${lines.join("\n")}\nTotal: ${kes(total)}\nName: ${name.trim()}\nDelivery area: ${area.trim()}`;
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <>
      <div className="sizes">
        {PRODUCTS.map((p) => (
          <div key={p.id} className={`size ${p.featured ? "best" : ""}`}>
            <Jar size={p.featured ? "big" : "small"} label={p.label} photo={IMAGES.jars[p.id]} />
            <h3>{p.label} jar</h3>
            <div className="price">{kes(p.price)}</div>
            <p className="note">{p.note}</p>
            <div className="stepper">
              <button type="button" aria-label={`Remove one ${p.label} jar`} onClick={() => change(p.id, -1)}>−</button>
              <output aria-live="polite">{qty[p.id]}</output>
              <button type="button" aria-label={`Add one ${p.label} jar`} onClick={() => change(p.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fields">
        <label>Your name
          <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Delivery area
          <input type="text" placeholder="e.g. Kilimani, Nairobi" value={area} onChange={(e) => setArea(e.target.value)} />
        </label>
      </div>

      <p className="summary">
        {count ? `${count} jar${count > 1 ? "s" : ""} · ${kes(total)}` : "Choose at least one jar."}
      </p>
      <button type="button" className="btn" aria-disabled={!count} onClick={send}>
        Send order on WhatsApp
      </button>
      <p className="error" role="alert">{error}</p>
    </>
  );
}