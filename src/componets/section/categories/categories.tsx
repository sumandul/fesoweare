import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Menu as AntMenu } from "antd";
import Link from "next/link";
import MenuIcon from "../../../icons/MenuIcon";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const { SubMenu: AntSubMenu } = AntMenu;

const MenuItem = ({ id, name }: any) => (
  <AntMenu.Item key={id} className="  ">
    <Link href={"/"}>{name}</Link>
  </AntMenu.Item>
);

const Sidebar = ({ isActive, categories }: any) => {
  const router = useRouter();

  return (
    <>
      {categories && (
        <AntMenu
          mode="vertical"
          className={` absolute top-[64px] radius rounded-[50px]   text-[14px] text-blue-50 font-[400]     vertical_scroll side-menu z-50 ${
            router.pathname == "/" ? "" : isActive ? "" : "hidden"
          }
          }`}
        >
          {categories?.map((cat: any) => {
            return cat.children ? (
              <AntSubMenu
                key={cat.name}
                title={cat.name}
                className="  "
                onTitleClick={() => router.push(`/category/${cat?.id}`)}
              >
                {cat.children.map((subCat: any) => {
                  return subCat.children ? (
                    <AntSubMenu
                      key={subCat.name}
                      title={subCat.name}
                      className=" "
                      onTitleClick={() =>
                        router.push(`/category/${subCat?.id}`)
                      }
                    >
                      {subCat.children.map((miniCat: any) => MenuItem(miniCat))}
                    </AntSubMenu>
                  ) : (
                    MenuItem(subCat)
                  );
                })}
              </AntSubMenu>
            ) : (
              MenuItem(cat)
            );
          })}
        </AntMenu>
      )}
    </>
  );
};

const AllCategories = () => {
  const categories = useSelector((state: any) => state.productCategories.data);

  const allCatRef = useRef<any>();

  const [isActive, setIsActive] = useState(false);

  const allCatHoverHandler = ({ target }: any) => {
    if (
      allCatRef.current !== null &&
      !allCatRef?.current?.contains(target.value)
    ) {
      setTimeout(() => setIsActive(true), 100);
    }
  };

  const allCatLeaveHandler = () => {
    setTimeout(() => setIsActive(false), 100);
  };

  return (
    <div
      ref={allCatRef}
      id="menu"
      className="navbar__all-categories  "
      onMouseEnter={allCatHoverHandler}
      onMouseLeave={allCatLeaveHandler}
    >
      <a className="all-categories flex items-center " href="/">
        <MenuIcon /> Shop <RiArrowDownSLine className="dropdown-icon" />
      </a>
      {isActive && <Sidebar categories={categories} isActive={isActive} />}
    </div>
  );
};

export default AllCategories;
