import React, { useRef } from "react";
import mu from "../pictures/mu.mp4";
import mufont from '../pictures/mufont.jpg'
import picture2 from '../pictures/picture2.png'
import picture3 from "../pictures/picture3.jpg";
import alaskalogo from '../pictures/alaskalogo.png'
import { Link } from "react-router-dom";

const Hom = () => {
  const videoRef = useRef(null);
  function handleEnded() {
    videoRef.current.play();
  }

  return (
    <>
      <section className="w-full h-screen md:h-fit m-auto max-w-[2020px]">
        <video
          className="w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          autoPlay
          muted
          onEnded={handleEnded}
          ref={videoRef}
        >
          <source src={mu} type="video/mp4" />
        </video>

        <article className="w-full text-white relative  md:absolute md:top-24 lg:top-52 ">
          <img
            className="absolute -z-10 w-full opacity-10 top-0 md:hidden"
            src={picture3}
            alt="img"
          />
          <div className="py-7 px-4 text-center md:text-left md:p-2 md:absolute  ">
          <h2 className="text-emerald-400 font-redrose font-bold text-base md:hidden">
            AlaskaMu{" "}
          </h2>
          <h3 className="font-bangers text-3xl md:text-4xl lg:text-6xl ">SERVIDOR PERSONALIZADO</h3>
          <p className="text-sm md:text-lg lg:text-xl">
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

      <section className="w-full  text-white relative max-w-[2020px] m-auto ">
        <img 
        className="w-full absolute top-0 opacity-30 -z-10"
        src={mufont} alt="" />
        <article className="flex items-center px-2">

        <div className="w-1/2 z-10  ">
            <img src={picture2} className="w-[80%]" alt="" />
        </div>
        <div className="w-1/2  text-sm text-center  font-garamond md:text-lg lg:text-2xl lg:p-10">
        <p>¡ Forma parte de una comunidad de jugadores apasionados en el  servidor de <span className="text-cyan-600">AlaskMu</span> !</p>
        <img className="w-1/2 m-auto" src={alaskalogo} alt="" />
        </div>
     
        </article>
      </section>

      <section>

        <br />
        <br />
      </section>
    </>
  );
};

export default Hom;
