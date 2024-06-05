import { BrowserRouter as Router } from 'react-router-dom';
import actions from "./shared/actions";


const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/app-react' : '';
function App() {
    actions.onGlobalStateChange(state => {
        const { sharedProperty } = state;
        console.log("主应用传过来的值", sharedProperty);
    }, true);
    return (
        <Router basename={BASE_NAME}>
            <div>
                react sub
            </div>
        </Router>
    );
}

export default App;
