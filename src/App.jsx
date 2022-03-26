import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/default';
import NotFound from './pages/notfound/default';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
