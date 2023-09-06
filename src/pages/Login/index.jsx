import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <Form>
        <h1>تسجيل الدخول</h1>
        <div >
          <Form.Item name={"email"}>
            <Input  placeholder="الايـميل" />
          </Form.Item>
        </div>
        <div >
          <Form.Item name={"password"}>
            <Input  placeholder=" كلمة المرور" />
          </Form.Item>
        </div>
        <div className="log-in">
          <Form.Item>
            <Button
              className="button"
              onClick={() => {
               
                 navigate('/')
              }}
              htmlType="submit"
            >
              تسجيل الدخول
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Login