"use client";
import { Card, Col, Input, Row, Segmented, Typography } from "antd";
import Root from "../root";
import { useSelector } from "react-redux";
import { CiBurger } from "react-icons/ci";
import { RiDrinks2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Image from "next/image";
import KB from "../../assets/korean_bun.jpg";
import MJ from "../../assets/mojito.jpg";
import React from "react";

const Menu = () => {
  const { Text } = Typography;
  const products = useSelector((state) => state.admin.products);
  console.log("products", products);

  return (
    <Root>
      <Row justify={"center"} className="mt-30">
        <Col xs={22}>
          <Row>
            <Text className="font-medium font-label">Categories</Text>
          </Row>

          <Row className="mt-15" justify={"space-between"}>
            <Col>
              <Segmented
                options={[
                  {
                    label: "All",
                    value: "all",
                    // icon: <CiBurger />,
                  },
                  {
                    label: "Eats",
                    value: "eats",
                    // icon: <CiBurger />,
                  },
                  {
                    label: "Beverages",
                    value: "beverages",
                    // icon: <RiDrinks2Fill />,
                  },
                ]}
              />
            </Col>

            <Col>
              <Input prefix={<IoIosSearch />} placeholder="Search" />
            </Col>
          </Row>

          <Row className="mt-30" justify={"start"} gutter={[32]}>
            {products.map((product, index) => {
              return (
                <Col xs={4} key={index}>
                  <Card
                    hoverable
                    cover={
                      <Image src={index === 0 ? KB : MJ} width={200} alt="KB" />
                    }
                  >
                    <Row justify={"center"}>
                      <Text className="font-small font-label">
                        {product.name}
                      </Text>
                    </Row>

                    <Row justify={"center"} align={"middle"}>
                      <FaIndianRupeeSign />
                      <Text className="font-small font-label">
                        {product.price}
                      </Text>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Root>
  );
};

export default Menu;
