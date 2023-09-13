import React, { useRef } from "react";
import mu from "../pictures/mu.mp4";
import picture3 from "../pictures/picture3.jpg";
import { Link } from "react-router-dom";
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

        <article className="w-full text-white relative  md:absolute md:top-24 ">
          <img
            className="absolute -z-10 w-full opacity-10 top-0 md:hidden"
            src={picture3}
            alt="img"
          />
          <div className="py-7 px-4 text-center md:text-left md:p-2 md:absolute  ">
          <h2 className="text-emerald-400 font-redrose font-bold text-base md:hidden">
            AlaskaMu{" "}
          </h2>
          <h3 className="font-bangers text-3xl md:text-4xl ">SERVIDOR PERSONALIZADO</h3>
          <p className="text-sm md:text-lg">
            ¡Libera tus habilidades en el campo de batalla!
          </p>
          <button className="bg-lime-500 p-2 rounded-md mt-10">
          <Link
              to={"https://www.mediafire.com/file/njub9s8mbvkegp1/AlaskaMU_2023.rar/file"}>
              descargar ahora
            </Link>
          </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Hom;
