import { BrowserRouter as Router } from 'react-router-dom';


const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/app-react' : '';
function App() {
    return (
        <Router basename={BASE_NAME}>
            <div>
                react sub
            </div>
        </Router>
    );
}

export default App;
