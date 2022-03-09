import React from "react";
import { useState, useEffect, useRef } from "react";

//? COMPONENTS:
import Footer from "./Footer";

//? IMAGES:
import img from "./img/b-white.png";
import imgRed from "./img/b-red.png";

//? STYLES:
import {
  Container,
  Display,
  Numbers,
  ContainerButtons,
  ActiveButton,
  InactiveButton,
  ChangeModeButton,
  Mode,
  InputContainer,
  Img,
} from "./TimerSC";

//? ICONS:
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState("Stopwatch");

  function toggle() {
    setActive(!active);
  }

  function reset() {
    setActive(false);
    setSeconds(0);
  }

  function changeMode() {
    setActive(false);
    setSeconds(0);
    if (mode === "Stopwatch") {
      setMode("Countdown Timer");
    } else {
      setMode("Stopwatch");
    }
  }

  useEffect(() => {
    let interval = null;
    if (active && mode === "Stopwatch" && seconds < 99999) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    if (mode === "Stopwatch" && seconds === 99999) {
      setActive(false);
      setSeconds(0);
      alert("Maximum number of second reached");
    }

    if (!active && seconds !== 0 && mode === "Stopwatch") {
      clearInterval(interval);
    }

    if (active && mode === "Countdown Timer") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    if (seconds === 0 && mode === "Countdown Timer") {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active, seconds, mode]);

  const myRef = useRef(null);

  function addSeconds() {
    if (myRef.current.value <= 0) {
      alert("Zero and negative numbers are not allowed.");
      setSeconds(0);
    } else if (myRef.current.value > 99999) {
      alert("It can not be greater than 99999.");
    } else {
      let ref = myRef.current.value;
      setSeconds(ref);
    }
  }

  return (
    <Container>
      <Display>
        {active === true ? (
          mode === "Countdown Timer" && seconds <= 10 ? (
            <Img src={imgRed} alt="not found" />
          ) : (
            <Img src={img} alt="not found" />
          )
        ) : (
          <></>
        )}
        <Numbers
          characters={seconds < 1000 ? 1 : 0}
          countdown={
            mode === "Countdown Timer" && seconds !== 0 && seconds <= 10 ? 1 : 0
          }
        >
          {seconds}
        </Numbers>
      </Display>

      {/* <Unit>seconds</Unit> */}

      <ContainerButtons>
        <ActiveButton onClick={toggle} state={active ? 1 : 0}>
          {active ? <BsPauseFill /> : <BsFillPlayFill />}
        </ActiveButton>
        <InactiveButton onClick={reset}>
          <MdRefresh />
        </InactiveButton>
      </ContainerButtons>

      <Mode>
        <ChangeModeButton onClick={changeMode}>{mode}</ChangeModeButton>
        <InputContainer>
          {mode === "Countdown Timer" && (
            <input
              type="number"
              min="1"
              max="99999"
              ref={myRef}
              onChange={addSeconds}
              placeholder="Set seconds"
              autoComplete="off"
            />
          )}
        </InputContainer>
      </Mode>
      <Footer />
    </Container>
  );
};

export default Timer;
