"use client";
import React from "react";
import { useRef, useEffect } from "react";

export function ConfirmButtonDisabled() {
  return (
    <button
      disabled={true}
      className="uppercase text-black py-[12px] w-[284px]  border-[2px] border-disabled flex  items-center justify-center cursor-not-allowed focus:shadow-xl focus:bg-disabled"
      tabindex="-1"
    >
      подтвердить номер
    </button>
  );
}
export function ConfirmButton({ handleFinal, focus, setFocus }) {
  const btnRef = useRef(null);
  useEffect(() => {
    if (focus) {
      btnRef.current.focus();
    }
  }, [focus]);
  return (
    <button
      disabled={false}
      ref={btnRef}
      className="uppercase py-[12px] w-[284px]   border-black border-[2px] flex  items-center justify-center text-white bg-black focus:shadow-xl focus:outline-none"
      onClick={() => {
        setFocus();
        handleFinal();
      }}
      tabindex="-1"
    >
      подтвердить номер
    </button>
  );
}
