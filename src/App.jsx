import { Route, Routes } from 'react-router-dom';

import BlogDetail from './pages/blog/detail';
import Home from './pages/home/default';
import NotFound from './pages/notfound/default';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/blog/:blogId"
                    element={<BlogDetail />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
