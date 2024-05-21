import React, { useEffect, useState } from "react";

export const useEventSettings = () => {
  const [visitDuration, setVisitDuration] = useState(60);
  const [bookingPerSession, setBookingPerSession] = useState(2);
  const [videoTour, setVideoTour] = useState(false);

  useEffect(() => {
    const persistedVisitDuration = localStorage.getItem('visitDuration');
    const persistedBookingPerSession = localStorage.getItem('bookingPerSession');
    const persistedVideoTour = localStorage.getItem('videoTour');
    if (persistedVisitDuration) setVisitDuration(Number(persistedVisitDuration));
    if (persistedBookingPerSession) setBookingPerSession(Number(persistedBookingPerSession));
    if (persistedVideoTour) setVideoTour(Boolean(persistedVideoTour));
  }, []);

  const onVisitDurationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVisitDuration(Number(e.target.value));
    localStorage.setItem('visitDuration', e.target.value);
  };

  const onBookingPerSessionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingPerSession(Number(e.target.value));
    localStorage.setItem('bookingPerSession', e.target.value);
  };

  const onVideoTourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setVideoTour(e.target.checked);
      localStorage.setItem('videoTour', String(e.target.checked));
    } else {
      setVideoTour(false);
      localStorage.removeItem('videoTour');
    }
  };

  return {visitDuration, onVisitDurationChange, bookingPerSession, onBookingPerSessionChange, videoTour, onVideoTourChange}
}