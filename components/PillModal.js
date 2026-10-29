"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// Puts Pill and Modal together. Each PillModal has its own state,
// so every pill opens its own modal.
export default function PillModal({ type, label, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
        {label}
      </Pill>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} text={text} />
    </>
  );
}
