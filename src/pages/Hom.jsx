import React, { useRef } from "react";
import mu from "../pictures/mu.mp4";
import picture3 from "../pictures/picture3.jpg";
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

        <article className="w-full text-white relative  ">
          <img
            className="absolute -z-10 w-full opacity-10 top-0"
            src={picture3}
            alt="img"
          />
          <div className="py-7 px-4 text-center">


          <h2 className="text-emerald-400 font-redrose font-bold text-base">
            AlaskaMu{" "}
          </h2>

          <h3 className="font-bangers text-3xl ">SERVIDOR PERSONALIZADO</h3>

          <p className="text-sm">
            ¡Libera tus habilidades en el campo de batalla!
          </p>

          </div>
        </article>
      </section>
    </>
  );
};

export default Hom;
