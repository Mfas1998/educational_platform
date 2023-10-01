import { Button } from 'antd'
const ButtonComponent = (props) => {
  return (
    <Button icon={props.icon} htmlType={props.htmlType} className={props.className} onClick={props.onClick}>
        {props.title}
    </Button>
  )
}
export default ButtonComponent