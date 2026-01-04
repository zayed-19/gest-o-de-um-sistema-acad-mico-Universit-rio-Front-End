// src/components/Card.tsx
import React from "react";
import styles from "../styles/Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
};

export default function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`
        ${styles.card}
        ${styles[variant]}
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
}
