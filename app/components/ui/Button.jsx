import React, { useContext, useRef, useEffect } from "react";
import { CalcContext } from "@/app/context/CalcContext";

function Button({ number, focus, index, setFocus }) {
  const btnRef = useRef(null);
  const { calc, setCalc } = useContext(CalcContext);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      btnRef.current.focus();
    }
  }, [focus]);

  const clearClick = () => {
    if (calc?.res?.length >= 1) {
      let newString = calc.res.slice(0, -1);
      setCalc({ ...calc, res: newString });
    }
  };
  const handleClickButton = () => {
    if (calc?.res?.length < 10) {
      setFocus(index);
      const numberString = number.toString();
      let numberValue = calc.res + numberString;
      setCalc({ ...calc, res: numberValue });

      btnRef.current.focus();
    }
  };
  const handleNumClick = () => {
    const results = {
      стереть: clearClick,
    };
    if (results[number]) {
      return results[number]();
    } else {
      return handleClickButton();
    }
  };
  return (
    <button
      className="uppercase text-black py-[12px] px-[30px] border-[2px] border-black hover:text-white hover:bg-black focus:text-white focus:bg-black flex self-start items-center justify-center focus:outline-none	"
      value={number}
      onClick={() => handleNumClick()}
      ref={btnRef}
      tabindex="-1"
    >
      {number}
    </button>
  );
}

export default Button;
