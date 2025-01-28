"use client";
import { setLogin, setSiderKey } from "@/redux/adminSlice";
import {
  Button,
  Flex,
  Layout as Layouts,
  Menu as Menus,
  Row,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoReceipt } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import logoBeige from "../../assets/logo-beige.png";
import { usePathname } from "next/navigation";

const Root = ({ children }) => {
  const { Text } = Typography;

  const { isLoggedIn, siderKey } = useSelector((state) => state.admin);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const items = [
    {
      key: "dashboard",
      icon: <RiDashboard2Fill color="white" size={15} />,
      label: <Text className="font-label color-white">Dashboard</Text>,
    },
    {
      key: "menu",
      icon: <BiSolidDashboard color="white" size={15} />,
      label: <Text className="font-label color-white">Menu</Text>,
    },
    {
      key: "products",
      icon: <MdFastfood color="white" size={15} />,
      label: <Text className="font-label color-white">Products</Text>,
    },
    {
      key: "billing",
      icon: <IoReceipt color="white" size={15} />,
      label: <Text className="font-label color-white">Billing</Text>,
    },
  ];

  const handleLogout = () => {
    dispatch(setLogin(false));
    router.replace("/");
  };

  return (
    <>
      <Layouts>
        <Sider width="20%">
          <Row justify={"center"}>
            <Image src={logoBeige} width={250} alt="logo" />
          </Row>

          <Flex
            vertical
            justify="space-between"
            align="center"
            style={{
              height: "730px",
            }}
          >
            <Row justify={"center"} className="mt-25">
              <Menus
                style={{
                  width: 256,
                }}
                defaultSelectedKeys={siderKey}
                theme="dark"
                items={items}
                onClick={(e) => {
                  console.log(e);

                  router.push(`/${e.key}`);
                  dispatch(setSiderKey(e.keyPath));
                }}
              />
            </Row>

            <Row>
              <Flex vertical gap={10}>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  onClick={handleLogout}
                >
                  <Text className="font-label color-white">Logout</Text>
                </Button>
                <Text className="font-label color-white">
                  Wild Flour Desserts Copyright © {new Date().getFullYear()}
                </Text>
              </Flex>
            </Row>
          </Flex>
        </Sider>

        <Layouts>
          <Header>
            <Text className="font-label color-white font-weight-700 font-large">
              {pathname.slice(1, pathname.length).toLocaleUpperCase()}
            </Text>
          </Header>
          <Content style={{ minHeight: "92.5vh" }}>{children}</Content>
          {/* "84.5vh" with footer */}

          {/* <Footer
            style={{
              background: "#001529",
            }}
          >
            <Row justify={"center"}>
              <Text className="font-label color-white">
                Wild Flour Desserts Copyright © {new Date().getFullYear()}
              </Text>
            </Row>
          </Footer> */}
        </Layouts>
      </Layouts>
    </>
  );
};

export default React.memo(Root);
