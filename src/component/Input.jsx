import { forwardRef } from "react";

const Input = forwardRef((props, ref) => <input {...props} ref={ref} />);

export default Input;
