import React, { useState, useLayoutEffect } from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";

import styles from "./header-list.module.css";
import { appDataText } from "../../../appDataText/appDataText";

function HeaderList() {
  return (
    <div className={styles.containerHeaderList}>
      <botton className={styles.buttonList}>
        {appDataText.espanol.header.home.name}
      </botton>
      <TreeView
        className={styles.containerHeaderList}
        defaultCollapseIcon={<ExpandLess />}
        defaultExpandIcon={<ExpandMore />}
      >
        <TreeItem nodeId="1" label="Inicio">
          <button>
            <TreeItem nodeId="2" label="Calendar" />
          </button>

          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
}
export default HeaderList;
