import React, { useRef } from "react";
import mu from '../pictures/mu.mp4'
const Hom = () => {
  const videoRef = useRef(null);
  function handleEnded() {
    videoRef.current.play();
  }

  return (
    <>
      <section className="w-full">
        <video
          className="w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          autoPlay
          muted
          onEnded={handleEnded}
          ref={videoRef}
        >
          <source src={mu} type="video/mp4" />
        </video>
        <article>
          ¡Libera tus habilidades en el campo de batalla de{" "}
          <span className="text-emerald-400">AlaskaMu! </span>
        </article>
      </section>
    </>
  );
};

export default Hom;
