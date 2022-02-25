import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Numbers, Unit, Buttons, Type } from "./TimerSC";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState("Stopwatch");

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setActivo(false);
    setSegundos(0);
  }

  function cambioTipo() {
    if (tipo === "Stopwatch") {
      setTipo("Countdown Timer");
    } else {
      setTipo("Stopwatch");
    }
  }

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === "Stopwatch") {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === "Stopwatch") {
      clearInterval(intervalo);
    }

    if (activo && tipo === "Countdown Timer") {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    }

    if (segundos === 0 && tipo === "Countdown Timer") {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  const myRef = useRef(null);

  function agregaSegundos() {
    let ref = myRef.current.value;
    setSegundos(ref);
  }

  return (
    <Container>
      <Numbers>{segundos}</Numbers>
      <Unit>seconds</Unit>

      <Buttons>
        <button
          className={`button button-primary button-primary-${
            activo ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {activo ? <BsPauseFill /> : <BsFillPlayFill />}
        </button>
        <button
          className={"button button-primary button-primary-inactive"}
          onClick={reset}
        >
          <MdRefresh />
        </button>
      </Buttons>
      <Type>
        <button
          className={"button button-primary button-primary-inactive"}
          onClick={cambioTipo}
        >
          {tipo}
        </button>
        {tipo === "Countdown Timer" && (
          <input
            type="number"
            min="1"
            ref={myRef}
            onChange={agregaSegundos}
            placeholder="Set seconds"
            autoComplete="off"
          />
        )}
      </Type>
    </Container>
  );
};

// <div className="app">
//   <div className="time">{segundos}s</div>
//   <div className="unitTime">seconds</div>
//   <div className="row">
//     <button
//       className={`button button-primary button-primary-${
//         activo ? "active" : "inactive"
//       }`}
//       onClick={toggle}
//     >
//       {activo ? "Pause" : "Start"}
//     </button>
//     <button className="button-secondary" onClick={reset}>
//       Reset
//     </button>
//   </div>
//   <button className="button" onClick={cambioTipo}>
//     {tipo}
//   </button>
//   {tipo === "Countdown Timer" && (
//     <input
//       type="number"
//       min="1"
//       ref={myRef}
//       onChange={agregaSegundos}
//       placeholder="Set seconds"
//       autoComplete="off"
//     />
//   )}
// </div>;

export default Timer;
