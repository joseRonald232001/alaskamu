import { configureStore } from "@reduxjs/toolkit";
import setUser from "./slices/user.slice";
import setEvents from "./slices/event.slice";

export default configureStore({
  reducer: {
    setUser: setUser,
    setEvents: setEvents,
  },
});
