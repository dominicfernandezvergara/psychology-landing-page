import React, { useState } from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
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
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const handleClickAbout = () => {
    setOpenAbout(!openAbout);
  };
  const handleClickServices = () => {
    setOpenServices(!openServices);
  };

  const onClickRedirectionInicio = () => {
    open(false);
    history.push(appDataText.espanol.header.home.path);
  };
  const onClickRedirectionAboutTeam = () => {
    open(false);
    history.push(appDataText.espanol.header.aboutUs.subcategories.path);
  };
  const onClickRedirectionAboutCompanie = () => {
    open(false);
    history.push(appDataText.espanol.header.aboutUs.path);
  };
  const onClickRedirectionContactUs = () => {
    open(false);
    history.push(appDataText.espanol.header.contactUs.path);
  };
  const onClickRedirectionServices = () => {
    open(false);
    history.push(appDataText.espanol.header.home.path);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nombre de la empresa
        </ListSubheader>
      }
      className={styles.containerDrawerList}
    >
      <ListItem button onClick={onClickRedirectionInicio}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.home.name} />
      </ListItem>
      <ListItem button onClick={handleClickAbout}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.aboutUs.name} />
        {openAbout ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAbout} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionAboutTeam}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.aboutUs.subcategories.name}
            />
          </ListItem>
          <ListItem
            button
            className={styles.subcategories}
            onClick={onClickRedirectionAboutCompanie}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.aboutUs.subcategories.name2}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickServices}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.services.name} />
        {openServices ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openServices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={styles.subcategories}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name}
            />
          </ListItem>
          <ListItem button className={styles.subcategories}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name2}
            />
          </ListItem>
          <ListItem button className={styles.subcategories}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name3}
            />
          </ListItem>
          <ListItem button className={styles.subcategories}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText
              primary={appDataText.espanol.header.services.subcategories.name4}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={onClickRedirectionContactUs}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary={appDataText.espanol.header.contactUs.name} />
      </ListItem>
    </List>
  );
}
export default DrawerList;
