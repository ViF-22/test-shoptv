"use client";
import React, { useEffect, useContext, useState } from "react";
import Button from "./ui/Button";
import ButtonClose from "./ui/ButtonClose";
import { ConfirmButton, ConfirmButtonDisabled } from "./ui/ConfirmButton";
import { CalcContext } from "../context/CalcContext";
import Image from "next/image";
import useRoveFocus from "../hooks/useRoveFocus";
import FinalSection from "./FinalSection";
import Agreement from "./ui/Agreement";

const btnValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "стереть", 0];
function PhoneSection({ setPhoneSection, setBanner, videoRef }) {
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  //rove hook
  const [focus, setFocus] = useRoveFocus(buttons.length);
  //context
  const { calc, setCalc } = useContext(CalcContext);

  //states
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [final, setFinal] = useState(false);

  const handleInputChange = (e) => {
    if (/^[0-9]*\.?[0-9]*$/.test(e.target.value)) {
      setPhoneNumber(e.target.value);
      setCalc({ ...calc, res: e.target.value });
    }
  };

  useEffect(() => {
    setPhoneNumber(calc.res);
  }, [calc.res]);

  return (
    <div>
      <div className="h-full px-[24px] w-[380px] absolute z-10 left-0 top-0  flex flex-col justify-center items-center bg-main1 ">
        {/* text */}
        {!final && (
          <div className="relative">
            <div className="flex flex-col gap-y-[13px] text-center">
              <p className="text-center text-header">
                Введите ваш номер мобильного телефона
              </p>
              {/* input */}
              <div className="flex items-center justify-center w-auto text-telnum text-center bg-main1 outline-none font-bold  ">
                <span className="pr-1">+7</span>
                <input
                  type="tel"
                  className="bg-main1 outline-none max-w-[220px] placeholder-black"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  placeholder="(___)-___-__-__"
                />
              </div>

              <p className="text-subtext">
                и с Вами свяжется наш менеждер для дальнейшей консультации
              </p>
            </div>

            <div className="grid grid-cols-phnumber gap-[10px] py-[20px] [&>*:nth-child(10)]:col-span-2 items-center justify-center">
              {btnValues.map((btn, index) => (
                <Button
                  number={btn}
                  key={btn}
                  setFocus={setFocus}
                  index={index}
                  focus={focus === index}
                  character={btn}
                  tabindex="-1"
                />
              ))}
            </div>

            {/* agreement */}
            {phoneNumber?.length === 10 ? (
              <Agreement
                checked={checked}
                setChecked={setChecked}
                setFinal={setFinal}
                setFocus={setFocus}
                focus={focus}
              />
            ) : (
              <div className="flex flex-col gap-y-[13px] items-center justify-center w-full">
                {phoneNumber?.length > 2 && phoneNumber?.length < 10 && (
                  <p className="uppercase text-error font-semibold text-center">
                    Неверно введен номер
                  </p>
                )}

                <ConfirmButtonDisabled />
              </div>
            )}
          </div>
        )}

        {final && <FinalSection />}
      </div>
      {/* close button */}
      <ButtonClose
        setBanner={setBanner}
        videoRef={videoRef}
        setPhoneSection={setPhoneSection}
        number="12"
        key="12"
        setFocus={setFocus}
        index="12"
        focus={focus === 12}
        character="12"
        tabindex="-1"
      />
      {/* qr at the bottom */}
      <div className="absolute bottom-[40px] right-[40px]">
        <Image src="/qr.png" width={314} height={110} alt="qr" />
      </div>
    </div>
  );
}

export default PhoneSection;
