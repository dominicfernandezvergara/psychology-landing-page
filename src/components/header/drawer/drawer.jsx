import React, { useState } from "react";

import styles from "./drawer.module.css";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Reorder from "@material-ui/icons/Reorder";
import DrawerList from "./drawer-list/drawer-list";

// Drawer API : https://material-ui.com/api/drawer/

export default function TemporaryDrawer() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <Button
        className={styles.buttonIcon}
        onClick={() => setDrawerState(true)}
      >
        <div className={styles.icon}>
          <Reorder />
        </div>
      </Button>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <DrawerList open={setDrawerState} />
      </Drawer>
    </>
  );
}
