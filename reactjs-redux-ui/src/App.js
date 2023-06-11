import './App.css';
import Counter from "./component/Counter";
import Sorgula from "./component/Sorgula";
import {Provider} from 'react-redux';
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Counter/>
            <Sorgula/>
        </Provider>
    );
}

export default App;
