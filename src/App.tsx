import './App.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import EventSettingsContextProvider from './context/EventSettingsContext';
import EventSettingsForm from './components/EventSettingsForm';

function App() {

  return (
    <EventSettingsContextProvider>
      <AppBar title='test' position='static' >
        <Toolbar>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Test</Typography>
        </Toolbar>
      </AppBar>
      <Box width={'500px'}>
        <EventSettingsForm/>
      </Box>
    </EventSettingsContextProvider>
  );
}

export default App;
