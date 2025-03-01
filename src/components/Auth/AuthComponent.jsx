import  { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title, Text } = Typography;

export const AuthComponent = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#484848]">
      <Card className="w-96 p-6 shadow-lg rounded-lg">
        <Title level={3} className="text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Title>

        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          {isSignUp && (
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please enter your username!" }]}
            >
              <Input placeholder="Enter username" className="py-2 px-3 border rounded-md w-full" />
            </Form.Item>
          )}

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }, { type: "email", message: "Invalid email!" }]}
          >
            <Input placeholder="Enter email" className="py-2 px-3 border rounded-md w-full" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter password" className="py-2 px-3 border rounded-md w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="bg-blue-500 hover:bg-blue-600 w-full py-2">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Form.Item>
        </Form>

        <Text className="text-center block">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <a
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </a>
        </Text>
      </Card>
    </div>
  );
};

