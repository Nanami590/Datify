import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button } from "@mui/base/Button";

import { decrement, increment } from "../../store/slices/counterSlice";

const CounterView = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>{count}</h2>

      <Button onClick={handleIncrement}>+1</Button>
      <Button onClick={handleDecrement}>-1</Button>
    </div>
  );
};

export default CounterView;
