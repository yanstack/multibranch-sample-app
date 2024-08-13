import './App.css'
import { MuiMode } from './components/mui/MuiMode'
import { AppProviders } from './components/providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
