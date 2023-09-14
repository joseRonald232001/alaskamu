import React, { useRef } from "react";
import mu from "../pictures/mu.mp4";
import mufont from '../pictures/mufont.jpg'
import picture2 from '../pictures/picture2.png'
import picture3 from "../pictures/picture3.jpg";
import multijugador from '../pictures/multijugador.png'
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
            <img className="m-auto relative -top-10  -rotate-12 rounded-md md:hidden" src={multijugador} alt="" />
      </section>

      <section className="w-full  text-white relative max-w-[2020px] m-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
        <img 
        className="w-full absolute top-0 opacity-20 -z-10"
        src={mufont} alt="" />
        <article className="flex items-center px-2">

        <div className="w-1/2 z-10  ">
            <img src={picture2} className="w-[80%]" alt="" />
        </div>
        <div className="w-1/2  text-sm text-center  font-garamond md:text-lg lg:text-2xl lg:p-10">
        <p>¡ Forma parte de una comunidad de jugadores apasionados en el  servidor de <span className="text-cyan-600">AlaskaMu</span> !</p>
        <img className="w-1/2 m-auto" src={alaskalogo} alt="" />
   
        </div>
     
        </article>
      </section>

      <section className="w-fulltext-white  m-auto max-w-[2020px] p-4">
        <h3 className="font-redrose  text-lg">¡La aventura no para!</h3>
        <div className="grid grid-cols-2 gap-2 text-center borde lg:grid-cols-3">
          <div>
          <img src="https://wiki.infinitymu.net/images/1/1d/Bk-CS-skill-1.gif" alt="" />
         <p> Grandes batallas</p>
          </div>
          <div>
          <img src="https://media.tenor.com/9aBOZRuVBnMAAAAC/mu-online-swell-life.gif" alt="" />
           Domina el juego
          </div>
          <div>
          <img src="https://wiki.infinitymu.net/images/d/d6/Mg-power-slash.gif" alt="" />
            Eventos imperdibles
          </div>
          <div>
          <img src="https://media.tenor.com/bOb2BhRmO9kAAAAC/mu-online-bk.gif" alt="" />
            Diversion
          </div>
        </div>

      </section>
    </>
  );
};

export default Hom;
