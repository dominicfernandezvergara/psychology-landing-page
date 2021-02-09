import React, { useState } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PeopleIcon from "@material-ui/icons/People";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

import styles from "./drawer-list.module.css";
import { appDataText } from "../../../../appDataText/appDataText";

function DrawerList({ open }) {
  const history = useHistory();
  const [openServices, setOpenServices] = useState(false);

  const handleClickAbout = () => {
    open(false);
    history.push(appDataText.espanol.header.aboutUs.path);
  };
  const handleClickServices = () => {
    setOpenServices(!openServices);
  };

  const onClickRedirectionInicio = () => {
    open(false);
    history.push(appDataText.espanol.header.home.path);
  };
  const onClickRedirectionContactUs = () => {
    open(false);
    history.push(appDataText.espanol.header.contactUs.path);
  };
  const onClickRedirectionTakeFree = () => {
    open(false);
    history.push(appDataText.espanol.header.takeFree.path);
  };
  const onClickRedirectionServices1 = () => {
    open(false);
    history.push({
      pathname: "/servicios",
      state: {
        service: appDataText.espanol.header.services.subcategories.name,
        number: 0,
      },
    });
  };
  const onClickRedirectionServices2 = () => {
    open(false);
    history.push({
      pathname: "/servicios",
      state: {
        service: appDataText.espanol.header.services.subcategories.name2,
        number: 1,
      },
    });
  };
  const onClickRedirectionServices3 = () => {
    open(false);
    history.push({
      pathname: "/servicios",
      state: {
        service: appDataText.espanol.header.services.subcategories.name3,
        number: 2,
      },
    });
  };
  const onClickRedirectionServices4 = () => {
    open(false);
    history.push({
      pathname: "/servicios",
      state: {
        service: appDataText.espanol.header.services.subcategories.name4,
        number: 3,
      },
    });
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          className={styles.title}
          component="div"
          id="nested-list-subheader"
        >
          {appDataText.espanol.home.banner.title}
        </ListSubheader>
      }
      className={styles.containerDrawerList}
    >
      <ListItem
        button
        onClick={onClickRedirectionInicio}
        className={styles.button}
      >
        <ListItemIcon className={styles.icon}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.home.name} />
      </ListItem>
      <ListItem button onClick={handleClickAbout} className={styles.button}>
        <ListItemIcon className={styles.icon}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.aboutUs.name} />
      </ListItem>
      <ListItem button onClick={handleClickServices} className={styles.button}>
        <ListItemIcon className={styles.icon}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.services.name} />
        {openServices ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openServices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionServices1}
          >
            <ListItemIcon className={styles.icon}>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name}
            />
          </ListItem>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionServices2}
          >
            <ListItemIcon className={styles.icon}>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name2}
            />
          </ListItem>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionServices3}
          >
            <ListItemIcon className={styles.icon}>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name3}
            />
          </ListItem>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionServices4}
          >
            <ListItemIcon className={styles.icon}>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name4}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={onClickRedirectionContactUs}
        className={styles.button}
      >
        <ListItemIcon className={styles.icon}>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.contactUs.name} />
      </ListItem>
      <ListItem
        button
        onClick={onClickRedirectionTakeFree}
        className={styles.button}
      >
        <ListItemIcon className={styles.icon}>
          <FolderSpecialIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.takeFree.name} />
      </ListItem>
    </List>
  );
}
export default DrawerList;
