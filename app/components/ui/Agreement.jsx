import React from "react";
import { ConfirmButton, ConfirmButtonDisabled } from "./ConfirmButton";

function Agreement({ checked, setChecked, setFinal, setFocus, focus }) {
  return (
    <div className="flex flex-col gap-y-[13px] relative items-center justify-center">
      <div className="flex gap-x-[20px] px-[30px] py-[10px]">
        <input
          type="checkbox"
          id="agreement"
          name="agreement"
          autoFocus="true"
          required
          className="shrink-0 w-[40px] h-[40px] appearance-none	border-[2px]  border-black checked:before:content-['\2713'] checked:before:text-center checked:before:block checked:before:font-bold checked:before:text-[25px] focus:outline-none"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <label for="agreement" className="text-subtext text-subline">
          Согласие на обработку персональных данных
        </label>
      </div>
      {checked ? (
        <ConfirmButton
          handleFinal={() => setFinal(true)}
          number="11"
          key="11"
          setFocus={setFocus}
          index="11"
          focus={focus === 11}
          character="11"
          tabindex="-1"
        />
      ) : (
        <ConfirmButtonDisabled
          number="11"
          key="11"
          setFocus={setFocus}
          index="11"
          focus={focus === 11}
          character="11"
          tabindex="-1"
        />
      )}
    </div>
  );
}

export default Agreement;
