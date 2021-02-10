import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./team.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import { appDataText } from "../../appDataText/appDataText";

function Team() {
  UseScrollToTop();

  // <img src="" alt="imgteam" className={styles.image} />
  const teamList = appDataText.espanol.aboutUs.team.team;

  return (
    <div className={styles.containerTeam}>
      <h1 className={styles.title}>{appDataText.espanol.aboutUs.team.title}</h1>
      <div className={styles.wrappTeam}>
        {teamList.map((item, index) => {
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
                    className={styles.headerAcordion}
                  >
                    <Typography className={styles.body}>
                      {item.formacion.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.list}>
                    <Typography>
                      <div className={styles.containerText}>
                        <p>{item.formacion.description}</p>
                        {item.formacion.description2 && (
                          <p>{item.formacion.description2}</p>
                        )}
                        {item.formacion.description3 && (
                          <p>{item.formacion.description3}</p>
                        )}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={styles.body}>
                      {item.description.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.list}>
                    <Typography>
                      <div className={styles.containerText}>
                        <p>{item.description.description}</p>
                        {item.description.description2 && (
                          <p>{item.description.description2}</p>
                        )}
                        {item.description.description3 && (
                          <p>{item.description.description3}</p>
                        )}
                        {item.description.description4 && (
                          <p>{item.description.description4}</p>
                        )}
                        {item.description.description5 && (
                          <p>{item.description.description5}</p>
                        )}
                        {item.description.description6 && (
                          <p>{item.description.description6}</p>
                        )}
                        {item.description.description7 && (
                          <p>{item.description.description7}</p>
                        )}
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
