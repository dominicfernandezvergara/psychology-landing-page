import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import cn from "classnames";

import styles from "./header-list.module.css";

export default function SimpleMenu({ name, subnames, active }) {
  console.log("active", active);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const subNames = subnames;
  const onClickHandleClose = (name, number, event) => {
    setOpen(false);
    history.push({
      pathname: "/servicios",
      state: { service: name, number: number },
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={styles.containerMenuButton}>
      <Button
        // onClick={handleToggle}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className={cn(styles.headerButton, active ? styles.active : null)}
      >
        {name}
        {open === false ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    className={styles.containerListButton}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {subNames.map((item, index) => {
                      return (
                        <MenuItem
                          className={styles.headerButton}
                          key={index}
                          onClick={() => {
                            onClickHandleClose(item.name, item.number);
                          }}
                        >
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Button>
    </div>
  );
}
SimpleMenu.propTypes = {
  name: PropTypes.string.isRequired,
  subnames: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
};
