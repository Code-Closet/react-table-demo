import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onchange = useAsyncDebounce(
    (value) => {
      setFilter(value || undefined);
    },
    1000,
    [filter]
  );
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    onchange(e.target.value);
  };
  return (
    <span>
      Search: <input value={value || ""} onChange={onChangeHandler} />
    </span>
  );
};

export default GlobalFilter;
