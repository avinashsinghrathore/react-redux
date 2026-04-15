import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  fetchCountValue,
} from "./features/Counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((s) => s.counter);
  return (
    <>
      <div>
        <h2>React + Redux</h2>
        <h3> count : {value}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(fetchCountValue())}>
          {loading ? "...loading" : "added +5"}
        </button>
      </div>
    </>
  );
}

export default App;
