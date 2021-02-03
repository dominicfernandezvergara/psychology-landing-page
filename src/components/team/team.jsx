import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./team.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";
import { listTeam } from "./listTeam";

function Team() {
  UseScrollToTop();

  // <img src="" alt="imgteam" className={styles.image} />
  return (
    <div className={styles.containerTeam}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.team.title}</h1>
      <div className={styles.wrappTeam}>
        {listTeam.map((item, index) => {
          return (
            <div className={styles.containerPeople} key={index}>
              <div className={styles.containerImage}>
                <img alt="" className={styles.image} src={item.image} />
              </div>
              <div className={styles.wrappText}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.occupation}>{item.occupation}</div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={styles.body}>
                      {appDataText.espanol.aboutUs.team.buttonText}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div>
                        <div className={styles.containerText}>
                          <p>{item.body}</p>
                          {item.body2 ? <p>{item.body2}</p> : null}
                        </div>
                        <div className={styles.containerDescription}>
                          <p>{item.description}</p>
                          {item.description2 ? (
                            <p>{item.description2}</p>
                          ) : null}
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
