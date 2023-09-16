import { Input } from "antd";
const InputComponent = (props) => {
  return <Input {...props} />;
};

export function InputPasswordComponent(props) {
  return <Input.Password {...props} />;
}
export default InputComponent;
