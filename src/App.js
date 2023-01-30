import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {INCinput , DECinput} from './actions/index'

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state)=>state.counterReducer);
  console.log(myState)
  return (
    <div className="App">
        <button onClick={()=>dispatch(DECinput())}>minus</button>
        <h1>{myState}</h1>
        <button onClick={()=>dispatch(INCinput())}>plus</button>
    </div>
  );
}

export default App;
