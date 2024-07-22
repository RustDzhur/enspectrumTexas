"use client";
import React from "react";
import { useModalStore } from '@/components/state/modal';

function BurgerMenu() {
  const { isOpen, toggleModal } = useModalStore();

  const handleOpenMenu = () => {
    toggleModal(!isOpen);
  };

  return (
    <div className={`burger-container ${isOpen ? "open" : ""}`} onClick={handleOpenMenu}>
      <div className="burger-line" />
      <div className="burger-line" />
      <div className="burger-line" />
    </div>
  );
}

export default BurgerMenu;
