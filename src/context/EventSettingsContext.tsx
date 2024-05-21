import React, { createContext, useEffect, useState } from 'react';
export const EventSettingsContext = createContext<any>({
  setVisitDuration: () => {},
  setBookingPerSession: () => {},
  setVideoTour: () => {},
  // visitDuration: localStorage.getItem('visitDuration') ? Number(localStorage.getItem('visitDuration')) : 60,
  // bookingPerSession: localStorage.getItem('bookingPerSession') ? Number(localStorage.getItem('bookingPerSession')) : 2,
  // videoTour: localStorage.getItem('videoTour') ? Boolean(localStorage.getItem('bookingPerSession')) : false,
});

const EventSettingsContextProvider:React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitDuration, setVisitDuration] = useState(60);
  const [bookingPerSession, setBookingPerSession] = useState(2);
  const [videoTour, setVideoTour] = useState(false);

  return (
    <EventSettingsContext.Provider value={{visitDuration, setVisitDuration, bookingPerSession, setBookingPerSession, videoTour, setVideoTour}}>
      {children}
    </EventSettingsContext.Provider>
  )
} 

export default EventSettingsContextProvider