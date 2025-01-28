"use client";
import { Button, Form, Input, Row, Typography } from "antd";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setSiderKey } from "../../redux/adminSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  const handleSubmit = async () => {
    dispatch(setLogin(!isLoggedIn));
    dispatch(setSiderKey(["dashboard"]));
    router.push("/dashboard");
  };

  return (
    <Row className="login-background">
      <Row justify={"center"} align={"middle"} className="login-container">
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          autoComplete="on"
        >
          <Form.Item
            label={<Text className="font-label">Username</Text>}
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<FaUser size={15} />} />
          </Form.Item>

          <Form.Item
            label={<Text className="font-label">Password</Text>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password prefix={<TbLockPassword size={15} />} />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              block
              type="primary"
              onClick={handleSubmit}
              htmlType="submit"
            >
              <Text className="font-label color-white">Submit</Text>
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Row>
  );
};

export default Login;
