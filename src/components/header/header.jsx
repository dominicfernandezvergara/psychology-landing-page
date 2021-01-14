import React, { Fragment, useState, useEffect, useLayoutEffect } from "react";
import cn from "classnames";
import { useHistory, useLocation } from "react-router-dom";

import styles from "./header.module.css";
import Logo from "../logo";
import Drawer from "./drawer";
import Button from "../button";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

export const dataButtonsList = [
  {
    name: "INICIO",
    path: "/inicio",
    active: true,
    id: 1,
  },
  {
    name: "QUIEN SOY",
    path: "/quien-soy",
    active: false,
    id: 2,
  },
  {
    name: "SERVICIOS",
    path: "/servicios",
    active: false,
    id: 3,
  },
  {
    name: "CONTACTO",
    path: "/contacto",
    active: false,
    id: 4,
  },
];

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { pathname: currentPathname } = location;
  const [buttonHeaderData, setButtonHeaderData] = useState(dataButtonsList);
  const onClickHeaderButton = (itemSelected) => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.id === itemSelected.id,
    }));

    setButtonHeaderData(newHeaderData);
    history.push(itemSelected.path);
  };

  useEffect(() => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.path === currentPathname,
    }));
    setButtonHeaderData(newHeaderData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //para comenzar con el header transparente y al momento de hacer scroll que cambie de color.

  const [startScrolling, setStartScrolling] = useState(false);

  useLayoutEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setStartScrolling(false);
      } else {
        setStartScrolling(true);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [startScrolling]);

  console.log("startScrolling", startScrolling);
  return (
    <Fragment>
      <header
        className={cn(styles.headerResponsiveSmall, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <Button text="Request appointment" path="/contacto" color="secondary" />
        <div className={styles.containerButton}>
          <Drawer />
        </div>
      </header>

      {/*Para cambiar de color el header al momento de hacer scroll,
       hay un condicional en el header*/}
      {/*Para usar condicionales usando css module:
      [styles.headerWhite]: Condicional(true o false)
    */}
      <header
        className={cn(styles.headerResponsiveLarge, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <div className={styles.containerLogo}>
          <Logo />
        </div>

        <div className={styles.containerHeaderButton}>
          {buttonHeaderData.map((item, index) => {
            return (
              <div key={index} className={cn(styles.headerButton)}>
                <button
                  className={cn(
                    styles.headerButton,
                    item.active === true ? styles.active : null,
                    { [styles.colorBlack]: startScrolling }
                  )}
                  type="button"
                  key={item.id}
                  onClick={() => onClickHeaderButton(item)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
