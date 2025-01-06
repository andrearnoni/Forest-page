import React, { createContext, useState, useEffect } from "react";
import videoChuva from "../img/video_chuva.mp4";
import videoSol from "../img/video_sol.mp4";

export const Context = createContext();

function Provider({ children }) {
  const [video, setVideo] = useState(videoSol);
  const [temperatura, setTemperatura] = useState(25);
  const [tempo, setTempo] = useState("🌥️");
  const [dia, setDia] = useState("Atualizando...");

  useEffect(() => {
    const atualizarDia = () => {
      const date = new Date();
      const diaDaSemana = date.getDay() - 1;
      const diasDaSemana = [
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
        "domingo",
      ];
      setDia(diasDaSemana[diaDaSemana]);
    };

    atualizarDia();
  }, []);

  useEffect(() => {
    const atualizarTemperatura = () => {
      const random = Math.floor(Math.random() * 10) + 20;
      setTemperatura(random);
    };

    const intervalId = setInterval(() => {
      atualizarTemperatura();
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const atualizarTempo = () => {
      if (temperatura < 25) {
        setTempo(`🌧️ ${temperatura + 5}%`);
      } else {
        setTempo("⛅️");
      }
    };

    const atualizarVideo = () => {
      if (temperatura < 25) {
        setVideo(videoChuva);
      } else {
        setVideo(videoSol);
      }
    };

    atualizarTempo();
    atualizarVideo();
  }, [temperatura]);

  const Object = {
    video,
    setVideo,
    temperatura,
    setTemperatura,
    tempo,
    setTempo,
    dia,
    setDia,
  };

  return <Context.Provider value={Object}>{children}</Context.Provider>;
}

export default Provider;
