"use client";
import React, { useRef, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CalcContext } from "../../context/CalcContext";

function ButtonClose({
  focus,
  setFocus,
  setBanner,
  videoRef,
  setPhoneSection,
}) {
  //context
  const { calc, setCalc } = useContext(CalcContext);
  const btnRef = useRef(null);
  useEffect(() => {
    if (focus) {
      btnRef.current.focus();
      setFocus();
    }
  }, [focus]);
  return (
    <button
      ref={btnRef}
      className="px-[20px] py-[10px] border-[2px] border-black bg-white text-[20px] hover:bg-black hover:text-white focus:bg-black focus:text-white cursor focus:outline-none pointer absolute top-[20px] right-[20px]"
      onClick={() => {
        // setFocus();
        setCalc({ ...calc, res: "" });
        setPhoneSection(false);
        setBanner(true);
        videoRef.current.play();
      }}
      tabIndex={-1}
    >
      <AiOutlineClose />
    </button>
  );
}

export default ButtonClose;
