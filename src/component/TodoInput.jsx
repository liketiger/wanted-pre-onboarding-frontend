import { forwardRef } from "react";

const TodoInput = forwardRef((props, ref) => <input {...props} ref={ref} />);

export default TodoInput;
