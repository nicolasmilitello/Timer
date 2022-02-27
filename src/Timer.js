import React from "react";
import { useState, useEffect, useRef } from "react";

//? STYLES:
import {
  Container,
  Display,
  Numbers,
  Unit,
  ContainerButtons,
  ActiveButton,
  InactiveButton,
  ChangeModeButton,
  Mode,
  InputContainer,
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
    setActive(!active);
    setSeconds(0);
    if (mode === "Stopwatch") {
      setMode("Countdown Timer");
    } else {
      setMode("Stopwatch");
    }
  }

  useEffect(() => {
    let interval = null;
    if (active && mode === "Stopwatch") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
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
    } else {
      let ref = myRef.current.value;
      setSeconds(ref);
    }
  }

  return (
    <Container>
      <Display>
        <Numbers characters={seconds < 1000 ? 1 : 0}>{seconds}</Numbers>
      </Display>

      <Unit>seconds</Unit>

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
              ref={myRef}
              onChange={addSeconds}
              placeholder="Set seconds"
              autoComplete="off"
            />
          )}
        </InputContainer>
      </Mode>
    </Container>
  );
};

export default Timer;
