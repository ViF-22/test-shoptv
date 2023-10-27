"use client";
import Image from "next/image";

import { gsap } from "gsap";
import { useContext } from "react";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { CalcContext } from "../context/CalcContext";
import PhoneSection from "./PhoneSection";

const Hero = () => {
  const { calc, setCalc } = useContext(CalcContext);
  const bannerRef = useRef(null);
  const [banner, setBanner] = useState(true);
  const [phoneSection, setPhoneSection] = useState(false);
  const videoRef = useRef(null);

  //escape button function
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setPhoneSection(false);
        setBanner(true);
        videoRef.current.play();
        setCalc({ ...calc, res: "" });
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  //animation of banner
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    gsap.set(bannerRef.current, { opacity: 0, xPercent: 40, autoAlpha: 0 });
    videoRef.current.play();

    tl.to(bannerRef.current, {
      xPercent: 0,
      autoAlpha: 1,
      duration: 1,
      delay: 5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="max-w-[1280px] h-[720px] relative border-3 border-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="hero-video.mp4"
      />
      {banner && (
        <div
          ref={bannerRef}
          className="absolute right-0 top-[50%] translate-y-[-50%] opacity-100 cursor-pointer"
          onClick={() => {
            setPhoneSection(true);
            setBanner(false);
            videoRef.current.pause();
          }}
        >
          <Image src="/banner.png" width={251} height={357} alt="banner" />
        </div>
      )}
      {phoneSection && (
        <PhoneSection
          setPhoneSection={setPhoneSection}
          setBanner={setBanner}
          videoRef={videoRef}
        />
      )}{" "}
    </div>
  );
};

export default Hero;
