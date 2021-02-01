import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Clear } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import styles from "./drawer-button-list.module.css";
import DrawerList from "../drawer-list";
import { dataButtonsList } from "../../header";

// Icon API = https://google.github.io/material-design-icons/

const DrawerButtonList = ({ toggleDrawer }) => {
  const history = useHistory();

  const onClickButtonDrawerList = (item) => {
    toggleDrawer();
    const pathItem = item.path;
    history.push(pathItem);
  };

  return (
    <div className={styles.containerDrawerList}>
      <div className={styles.headerDrawerList}>
        <div className={styles.containerButtonCloseDrawer}>
          <button
            type="button"
            className={styles.buttonCloseDrawer}
            onClick={() => toggleDrawer(false)}
          >
            <Clear className={styles.clearIcon} />
          </button>
        </div>
      </div>

      <div className={styles.drawerList}>
        <DrawerList />
        {dataButtonsList.map((item, index) => {
          return (
            <div key={index.id} className={cn(styles.buttonDrawerList)}>
              <button
                type="button"
                className={styles.buttonDrawerList}
                onClick={() => onClickButtonDrawerList(item)}
              >
                {item.name}
              </button>
              {item.subcategories ? (
                <div className={styles.wrappIconButton}>
                  <ArrowForwardIosIcon />
                  <button
                    type="button"
                    className={styles.buttonSubDrawerList}
                    onClick={() => onClickButtonDrawerList(item)}
                  >
                    {item.subcategories.name}
                  </button>
                </div>
              ) : null}
              {item.subcategories ? (
                <div className={styles.wrappIconButton}>
                  <ArrowForwardIosIcon />
                  <button
                    type="button"
                    className={styles.buttonSubDrawerList}
                    onClick={() => onClickButtonDrawerList(item)}
                  >
                    {item.subcategories.name2}
                  </button>
                </div>
              ) : null}
              {item.subcategories ? (
                <div className={styles.wrappIconButton}>
                  <ArrowForwardIosIcon />
                  <button
                    type="button"
                    className={styles.buttonSubDrawerList}
                    onClick={() => onClickButtonDrawerList(item)}
                  >
                    {item.subcategories.name3}
                  </button>
                </div>
              ) : null}
              {item.subcategories ? (
                <div className={styles.wrappIconButton}>
                  <ArrowForwardIosIcon />
                  <button
                    type="button"
                    className={styles.buttonSubDrawerList}
                    onClick={() => onClickButtonDrawerList(item)}
                  >
                    {item.subcategories.name4}
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

DrawerButtonList.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
export default DrawerButtonList;
