import { Add, CheckBox, Delete } from '@mui/icons-material';
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, TextField, Checkbox } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'

interface Props {
  isUnavaliable?: boolean;
  day?: string;
}

const startTime = '07:00 AM'
const endTime = '07:00 PM'

function intervals(startString: string, endString: string) {
  const results: any[] = [];
  var start = moment(startString, 'hh:mm a');
  var end = moment(endString, 'hh:mm a');
  start.minutes(Math.ceil(start.minutes() / 15) * 15);

  const current = moment(start);

  while (current <= end) {
    if (results.includes(current.format('hh:mm a'))) {
      return null
    }
    else {
      results.push(current.format('hh:mm a'));
      current.add(15, 'minutes');
    }
  }
  return results
};

const allTimeSlots = intervals(startTime, endTime) || [];

const EventSettingsDayField: React.FC<Props> = ({ day, isUnavaliable }) => {

  useEffect(() => {
    intervals('07:00AM', '07:00PM')
  }, []);
  
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [checked, setChecked] = useState(true);

  const availableEndSlots = useMemo(() => {
    return intervals(start || startTime, endTime) || [];
  }, [start])

  return (
    <ListItem divider={day !== 'Sun'} key={day}>
      <ListItemIcon>
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
      </ListItemIcon>
      <ListItemText primary={day} />
      {isUnavaliable || !checked ?
        <ListItemButton disabled>unavailable</ListItemButton> : <>
        <TextField sx={{minWidth: '100px', mr: 1}} select value={start} onChange={e => setStart(e.target.value)} label="from">
          {allTimeSlots.map(option => <MenuItem value={option}>{option}</MenuItem>)}
        </TextField>
        <TextField disabled={!start} sx={{minWidth: '100px'}} select  value={end} onChange={e => setEnd(e.target.value)} label="to">
        {availableEndSlots.map(option => <MenuItem value={option}>{option}</MenuItem>)}
        </TextField>
        <IconButton>
          <Delete/>
        </IconButton>
        <IconButton>
          <Add/>
        </IconButton>
        </>}
    </ListItem>
  )
}

export default EventSettingsDayField;
