"use client";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdVerticalSplit } from "react-icons/md";
import { TbPercentage } from "react-icons/tb";
import Root from "../root";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setSiderKey } from "@/redux/adminSlice";
import { IoFastFood } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Products = () => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const router = useRouter();

  const products = useSelector((state) => state.admin.products);

  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(setProduct([...products, values]));
    dispatch(setSiderKey(["menu"]));
    setTimeout(() => {
      router.push("/menu");
    }, 2000);
  };

  return (
    <Root>
      <Row justify={"center"}>
        <Col xs={12}>
          <Row className="product-container mt-30" justify={"center"}>
            <Col xs={16}>
              <Row justify={"center"}>
                <Text className="font-large font-label font-weight-700">
                  Add Your Product
                </Text>
              </Row>

              <Row justify={"center"} className="mt-30">
                <Col xs={20}>
                  <Form
                    onFinish={handleSubmit}
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                    autoComplete="on"
                  >
                    <Form.Item
                      label={<Text className="font-label">Name</Text>}
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Enter product name!",
                        },
                      ]}
                    >
                      <Input prefix={<IoFastFood size={15} />} />
                    </Form.Item>

                    <Form.Item
                      label={<Text className="font-label">Price</Text>}
                      name="price"
                      rules={[
                        {
                          required: true,
                          message: "Enter product price!",
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        prefix={<FaIndianRupeeSign size={15} />}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<Text className="font-label">Category</Text>}
                      name="category"
                      rules={[
                        {
                          required: true,
                          message: "Enter product category!",
                        },
                      ]}
                    >
                      <Select
                        options={[
                          { value: "eats", label: <span>Eats</span> },
                          { value: "beverages", label: <span>Beverages</span> },
                        ]}
                        prefix={<MdVerticalSplit size={15} />}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<Text className="font-label">GST</Text>}
                      name="gst"
                      rules={[
                        {
                          required: true,
                          message: "Enter product GST!",
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        prefix={<TbPercentage size={15} />}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<Text className="font-label">Image</Text>}
                      name="image"
                      rules={[
                        {
                          required: false,
                          message: "Enter product image!",
                        },
                      ]}
                    >
                      <Upload>
                        <Button block>
                          <Text className="font-label color-white">
                            Click to Upload
                          </Text>
                        </Button>
                      </Upload>
                    </Form.Item>

                    <Form.Item label={null}>
                      <Button
                        block
                        type="primary"
                        className="mt-15"
                        htmlType="submit"
                      >
                        <Text className="font-label color-white">Submit</Text>
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Root>
  );
};

export default Products;
