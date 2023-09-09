import { Button } from 'antd'
import React from 'react'

const ButtonComponent = (props) => {
  return (
    <Button icon={props.icon} onClick={props.onClick}>
        {props.title}
    </Button>
  )
}

export default ButtonComponent