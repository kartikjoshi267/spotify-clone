import './App.css'
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import Song from './Pages/Song';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <ResponsiveDrawer />
      <Song />
    </div>
  )
}

export default App