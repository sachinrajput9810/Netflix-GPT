import './App.css';
import appStore from './Components/appStore';
import Body from './Components/Body';
import {Provider} from "react-redux"
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
          <Body/>
      </Provider>
    </div>
  );
}

export default App;
