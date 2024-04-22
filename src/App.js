import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './component/Index'
import Tabs from './component/Tabs'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/vibha" element={<Tabs />} />
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
