import { Container, TextField, MenuItem, FormControlLabel, Checkbox, Box, List, ListItemText, ListItem } from '@mui/material';
import React from 'react';
import { useEventSettings } from '../hooks/useEventSettings';
import EventSettingsDayField from './EventSettingsDayField';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const values = [
  {
    day: 'Mon',
    startTime: '09:00',
    endTime: '10:00'
  },
  {
    day: 'Tue',
    startTime: '09:00',
    endTime: '10:00'
  }
]

interface Props {}

const EventSettingsForm: React.FC<Props> = () => {
  const {
    bookingPerSession,
    onBookingPerSessionChange,
    onVideoTourChange,
    onVisitDurationChange,
    videoTour,
    visitDuration
  } = useEventSettings();

  return(
    <>
      <Container sx={{ m: '24px 0' }}>
        <Box mb={1}>
          <TextField select value={visitDuration} onChange={onVisitDurationChange} label="visit duration" sx={{ minWidth: 200, mr: 1 }}>
            <MenuItem value='15'>15 Min</MenuItem>
            <MenuItem value='30'>30 Min</MenuItem>
            <MenuItem value='45'>45 Min</MenuItem>
            <MenuItem value='60'>60 Min</MenuItem>
            <MenuItem value='90'>90 Min</MenuItem>
          </TextField>
          <TextField select value={bookingPerSession} onChange={onBookingPerSessionChange} label="No of booking/session" sx={{ minWidth: 200, mr: 1 }}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </TextField>
          <FormControlLabel control={<Checkbox id="video-tour" checked={videoTour} onChange={onVideoTourChange}/>} label="Allow video tour call" />
        </Box>
        <Box border={'1px solid rgba(0,0,0,.2)'} borderRadius={'10px'}>
          <List>
            {days.map((day, i) => (
              <EventSettingsDayField day={day} isUnavaliable={Boolean(!values.find(value => value.day === day))}/>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default EventSettingsForm;