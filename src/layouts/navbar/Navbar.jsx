//import react packages
import {
  Accordion,
  Avatar,
  Divider,
  Drawer,
  Flex,
  ScrollArea,
  Space,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import Navbar css
import "./Navbar.css";
import { useQuery } from "react-query";
import { categoryListAPI } from "../../config/quries/Category/CategoryQueries";
import { Heart, Menu2, ShoppingCart, TransferOut } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";

import config from "../../config/server/Servers";
import { subCategoryListByCategoryID } from "../../config/quries/SubCategory/SubCategoryQuries";
import { setUserData } from "../../StateHandler/Slice/UserSlice/UserSliceData";

const Navbar = () => {
  // Navigate
  const navigate = useNavigate();
  // Drawer State
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCategory, setSelectedCategory] = useState({
    category: null,
    subCategory: null,
    childCategory: null,
  });

  const header1060MediaQuery = useMediaQuery("(max-width:1061px)");
  const header786MediaQuery = useMediaQuery("(max-width:787px)");
  const header500MediaQuery = useMediaQuery("(max-width:501px)");

  // Category
  const [categoryList, setCategoryList] = useState();
  const [subCategoryList, setSubCategoryList] = useState([]);
  useQuery("categoryList", categoryListAPI, {
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      setCategoryList(res?.data?.data?.result);
    },
  });

  useQuery(
    ["subCategoryList", selectedCategory.category],
    subCategoryListByCategoryID,
    {
      refetchOnWindowFocus: false,
      enabled: !!selectedCategory.category,
      onSuccess: (res) => {
        setSubCategoryList(res?.data?.data?.result);
      },
    }
  );
  const accordianHeader = [
    "Home Textiles",
    "Electronics",
    "Furniture",
    "Fashions",
    "Mobiles",
    "Groceries",
  ];

  const handleCategoryClickRouter = (category, subCategory) => {
    const categoryName = category.name
      .toLowerCase()
      .replaceAll(" ", "_")
      .replace("&", "");
    const subCategoryName = subCategory.name
      .toLowerCase()
      .replaceAll(" ", "_")
      .replace("&", "");
    close();
    // navigate(`/${categoryName}/${subCategoryName}`);
    navigate(`/products`);
  };

  const drawerAccord = accordianHeader.map((accordianHeaders, headerindex) => {
    return (
      <Accordion.Item key={headerindex} value={accordianHeaders}>
        <Accordion.Control>{accordianHeaders}</Accordion.Control>
        <Accordion.Panel>
          {headerindex === 0 ? (
            <Accordion variant="filled">
              {Array.isArray(categoryList)
                ? categoryList.map((category, categoryIndex) => {
                    return (
                      <Accordion.Item
                        key={categoryIndex}
                        onClick={() =>
                          setSelectedCategory({
                            ...selectedCategory,
                            category: category._id,
                          })
                        }
                        value={category.name}
                      >
                        <Accordion.Control>{category.name}</Accordion.Control>
                        {Array.isArray(subCategoryList)
                          ? subCategoryList.map(
                              (subcategory, subcategoryIndex) => {
                                return (
                                  <Accordion.Panel
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      handleCategoryClickRouter(
                                        category,
                                        subcategory
                                      )
                                    }
                                    pl={"lg"}
                                    key={subcategoryIndex}
                                  >
                                    {subcategory.name}
                                  </Accordion.Panel>
                                );
                              }
                            )
                          : "Comming Soon"}
                      </Accordion.Item>
                    );
                  })
                : "Comming Soon"}
            </Accordion>
          ) : (
            <p style={{ paddingLeft: "1rem" }}>Comming Soon</p>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  const userData = useSelector((state) => state.userData.value);
  const dispatch = useDispatch();
  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem("MogoUserAccessToken102");
    sessionStorage.removeItem("MogoUserAccessToken101");
    dispatch(setUserData(""));
    window.location.reload();
  };

  return (
    <div>
      <Drawer
        size={300}
        className="home-category-drawer"
        onClose={close}
        zIndex={12345610}
        opened={opened}
        p={0}
        withCloseButton={false}
      >
        <ScrollArea>
          <Divider />
          <div className="home-category-drawer-header">
            <Flex
              w={"100%"}
              justify={"space-between"}
              style={{ cursor: "pointer" }}
              align={"center"}
            >
              <div>
                <Flex align={"center"} gap={"1rem"}>
                  <Avatar
                    size={"1.8rem"}
                    radius="lg"
                    src={
                      userData.profile_image
                        ? `${config.baseUrlApi}/assets/userprofile/${userData.profile_image}`
                        : ""
                    }
                  />
                  <p className="para_color open-sanserif">
                    {userData.first_name ? (
                      userData.first_name
                    ) : (
                      <p style={{ display: "flex" }}>
                        Hai,
                        <Space w={"0.4rem"} />
                        sign in
                      </p>
                    )}
                  </p>
                </Flex>
              </div>
              <div>
                {userData.first_name ? (
                  <TransferOut
                    onClick={handleLogout}
                    color="white"
                    size={"1.5rem"}
                  />
                ) : (
                  ""
                )}
              </div>
            </Flex>
          </div>
          <Title order={4} p={"xs"} pl={"lg"} pt={"sm"}>
            Trending
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            Best Deals
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            Today's Deals
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            New Releases
          </Title>
          <Space h={"sm"} />
          <Divider />
          <Title order={4} p={"xs"} pl={"lg"}>
            Shop By Category
          </Title>
          <Accordion variant="filled">{drawerAccord}</Accordion>
          <Divider />
          <Title order={4} p={"xs"} pl={"lg"} pt={"sm"}>
            Help & Settings
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            Your Account
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            Customer Service
          </Title>
          <Title
            className="drawer-title"
            order={6}
            pb={"xs"}
            pl={"lg"}
            pt={"xs"}
          >
            Sign Out
          </Title>
        </ScrollArea>
        {/* <div className='nav-bar-drawer-footer'>
                    <Flex
                        align={'center'}
                        justify={'space-between'}
                    >
                        <ShoppingCart
                            strokeWidth={1}
                            size={header786MediaQuery ? '1.5rem' : '2rem'} />
                        <Heart
                            strokeWidth={1}
                            size={header786MediaQuery ? '1.5rem' : '2rem'}
                        />
                    </Flex>
                </div> */}
      </Drawer>
      <div className="navbar-div">
        <div className="navbar-data">
          <ul>
            <li style={{ cursor: "pointer" }} onClick={open}>
              <Menu2 size={"1rem"} />
              ALL
            </li>
            <li>Buy Again</li>
            <li>Best Deals</li>
            <li>Today's Deals</li>
            <li>New Releases</li>
          </ul>
        </div>
        <div>
          <ul className="navbar-div-container-ul">
            <ul
              className="product-dropdown-hover navbar-div-container-ul2
                        poppins-font-family
                        "
            >
              <li>Home Textiles</li>
              <li>Electronic's</li>
              <li>Furniture</li>
              <li>Fashions</li>
              <li>Mobiles</li>
              <li>Groceries</li>
              <li>
                <Title order={5}>Returns & Orders</Title>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
