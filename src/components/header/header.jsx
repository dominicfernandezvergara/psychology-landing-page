import React, { Fragment, useState, useEffect, useLayoutEffect } from "react";
import cn from "classnames";
import { useHistory, useLocation } from "react-router-dom";

import styles from "./header.module.css";
import { appDataText } from "../../appDataText/appDataText";
import Logo from "../logo";
import Drawer from "./drawer";
import imageLogo from "../../images/logo/kisspng-psychology-symbol-psychotherapist-semana-da-psicol-psicologa-social-5cc757f9c4bd23.3476718715565680578058.jpg";
import SimpleMenu from "./header-list/header-list";

export const dataButtonsList = appDataText.espanol.headerArray;

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { pathname: currentPathname } = location;
  const [activeServices, setActiveServices] = useState(false);
  const [buttonHeaderData, setButtonHeaderData] = useState(dataButtonsList);

  // onClick Logo
  const onClickRedirectionInicio = () => {
    history.push(appDataText.espanol.header.home.path);
  };

  // onClick Buttons
  const onClickHeaderButton = (itemSelected) => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.id === itemSelected.id,
    }));

    setButtonHeaderData(newHeaderData);
    console.log("newHeaderData", newHeaderData);
    history.push(itemSelected.path);
  };

  useEffect(() => {
    const newHeaderData = buttonHeaderData.map((item) => ({
      ...item,
      active: item.path === currentPathname,
    }));
    setButtonHeaderData(newHeaderData);
    console.log("useEffect", newHeaderData);
    if (currentPathname === "/servicios") {
      setActiveServices(true);
    } else {
      setActiveServices(false);
    }
    console.log("currentPathname", currentPathname);
    console.log("servicios", activeServices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPathname]);

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

  return (
    <Fragment>
      {/*HEADER SMALL*/}
      <header
        className={cn(styles.headerResponsiveSmall, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <div className={styles.containerButton}>
          <Drawer />
        </div>
      </header>
      {/*HEADER SMALL*/}

      {/*COMO USAR EL CAMBIO DE STYLES DESPUES DE SCROLL
        Para cambiar de color el header al momento de hacer scroll,
       hay un condicional en el header
       Para usar condicionales usando css module:
      [styles.headerWhite]: Condicional(true o false)
    */}

      {/*HEADER LARGE*/}
      <header
        className={cn(styles.headerResponsiveLarge, {
          [styles.headerWhite]: startScrolling,
        })}
      >
        <button
          className={styles.containerLogoButton}
          onClick={onClickRedirectionInicio}
        >
          <img
            className={cn(styles.logo, {
              [styles.styleAfterScrollLogo]: startScrolling,
            })}
            src={imageLogo}
            alt=""
          />
        </button>
        <div className={styles.containerHeaderButton}>
          {buttonHeaderData.map((item, index) => {
            return (
              <div key={index} className={cn(styles.headerButton)}>
                {item.name === "Servicios" ? (
                  <SimpleMenu
                    name={item.name}
                    subnames={item.subcategories}
                    active={activeServices}
                  />
                ) : (
                  <button
                    className={cn(
                      styles.headerButton,
                      item.active === true ? styles.active : null
                    )}
                    type="button"
                    key={item.id}
                    onClick={() => onClickHeaderButton(item)}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </header>
      {/*HEADER LARGE*/}
    </Fragment>
  );
}

export default Header;
