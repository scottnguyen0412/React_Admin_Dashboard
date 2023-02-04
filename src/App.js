import {colorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Navbar from './scenes/global/Navbar.jsx';

function App() {
  const[theme, colorMode] = useMode();
  return (
    // Use a Provider to pass the current theme
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset Css */}
        <CssBaseline/>
        <div className="app">
          <main className='content'>
            <Navbar/>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
