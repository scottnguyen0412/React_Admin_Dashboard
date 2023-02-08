import {colorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import Navbar from './scenes/global/Navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './scenes/dashboard/index.jsx';
import Sidebar from './scenes/global/Sidebar.jsx';

// import TeamPage from './scenes/teamPage.jsx';
// import InvoicesPage from './scenes/invoicesPage.jsx';
// import Contacts from './scenes/contacts.jsx';
// import Form from './scenes/form.jsx';
// import Bar from './scenes/Bar.jsx';
// import Pie from './scenes/pie.jsx';
// import Line from './scenes/Line.jsx';
// import FAQ from './scenes/Faq.jsx';
// import Calendar from './scenes/Calendar.jsx';
// import Geography from './scenes/Geo.jsx';


function App() {
  const[theme, colorMode] = useMode();
  return (
    // Use a Provider to pass the current theme
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset Css */}
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Navbar />
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              {/* <Route path='/team' element={<TeamPage/>}/> */}
              {/* <Route path='/contacts' element={<Contacts/>}/> */}
              {/* <Route path='/invoices' element={<InvoicesPage/>}/> */}
              {/* <Route path='/form' element={<Form/>}/> */}
              {/* <Route path='/bar' element={<Bar/>}/> */}
              {/* <Route path='/pie' element={<Pie/>}/> */}
              {/* <Route path='/line' element={<Line/>}/> */}
              {/* <Route path='/faq' element={<FAQ/>}/> */}
              {/* <Route path='/geography' element={<Geography/>}/> */}
              {/* <Route path='/calendar' element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
