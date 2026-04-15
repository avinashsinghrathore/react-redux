import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/Counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((s) => s.counter);
  return (
    <>
      <div>
        <h2>React + Redux</h2>
        <h3>{value}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
