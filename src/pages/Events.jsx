import React, { useEffect, useState } from "react";
import picture3 from "../pictures/picture3.jpg";
import { useForm } from "react-hook-form";
import { setEvents } from "../store/slices/event.slice";
import { useDispatch, useSelector } from "react-redux";
import useObtain from "../hooks/useObtain";
import CartEvent from "../components/cartEvent";
const Events = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const permiss = useSelector((state) => state.setPermiss);
  const dispatch = useDispatch();
  const {
    newPost,
    data: events,
    deleteData,
    updateData,
    obtainAllData,
  } = useObtain(getAllEvents);

  function defaulValues() {
    return reset({
      nameEvent: "",
      dateInit: "",
      dateFinish: "",
      descriptionEvent: "",
      imgEvent: "",
    });
  }

  function getAllEvents() {
    obtainAllData(`http://localhost:3000/alaskamu/events`);
  }
  const addEvent = (data) => {
    newPost(`http://localhost:3000/alaskamu/events`, data);
    defaulValues();
  };
  const updateEvent = (data) => {
    updateData(`http://localhost:3000/alaskamu/events/${selectedEvent}`, data);
    defaulValues();
    setSelectedEvent(null);
  };
  const deleteEvent = (id) => {
    deleteData(`http://localhost:3000/alaskamu/events/${id}`);
  };
  const sendRegister = (data) => {
    if (selectedEvent) {
      return updateEvent(data);
    } else {
      addEvent(data);
    }
  };

  const eventToUpdate = (data) => {
    reset(data);
    if (!isActive) {
      setIsActive(!isActive);
    }
    setSelectedEvent(data.id);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  dispatch(setEvents(events));

  return (
    <>
      <section className="w-full ">
        <img
          className="absolute -z-20 w-full opacity-50  "
          src={picture3}
          alt=""
        />
        <div className="pt-[23vh]"></div>

        <div className="container m-auto">
          <button
            style={{ display: permiss ? "block" : "none" }}
            onClick={() => setIsActive(!isActive)}
            className="bg-slate-500 p-1"
          >
            agregar evento
          </button>

          <section>
            {isActive && (
              <form onSubmit={handleSubmit(sendRegister)}>
                <div>
                  <label htmlFor="nameEvent">nombre de evento</label>
                  <input type="text" {...register("nameEvent")} />
                </div>

                <div>
                  <label htmlFor="dateInit">fecha de inicio</label>
                  <input
                    type="text"
                    {...register("dateInit")}
                    placeholder="año-mes-dia"
                  />
                </div>

                <div>
                  <label htmlFor="dateFinish">fecha de finalizacion</label>
                  <input
                    type="text"
                    placeholder="año-mes-dia"
                    {...register("dateFinish")}
                  />
                </div>

                <div>
                  <label htmlFor="descriptionEvent">
                    descripcion del evento
                  </label>
                  <input type="text" {...register("descriptionEvent")} />
                </div>
                <div>
                  <label htmlFor="imgEvent">imagen de evento</label>
                  <input type="text" {...register("imgEvent")} />
                </div>
                <button>crear evento</button>
              </form>
            )}
          </section>
        </div>

      </section>
      <section>
      <div className="w-full m-auto ">
            {events.map((event) => (
             <CartEvent key={event.id} nameEvent={event.nameEvent} imgEvent={event.imgEvent} description={event.descriptionEvent} />
            ))}
       </div>
      </section>
    </>
  );
};

export default Events;
