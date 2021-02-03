import React from "react";
import { appDataText } from "../../appDataText/appDataText";
import imagep1 from "../../images/imageAbout/caro_remove.png";
import imageP2 from "../../images/imageAbout/imageTeam/imageTeamWolfgang.png";
import imageP3 from "../../images/imageAbout/imageTeam/imageTeamCarmen.png";
import imageP4 from "../../images/imageAbout/imageTeam/imageTeamMaria.png";

export const listTeam = [
  {
    id: 1,
    image: imagep1,
    name: appDataText.espanol.aboutUs.team.team.p1.name,
    occupation: appDataText.espanol.aboutUs.team.team.p1.occupation,
    body: appDataText.espanol.aboutUs.team.team.p1.body,
    description: "",
  },
  {
    id: 2,
    image: imageP2,
    name: appDataText.espanol.aboutUs.team.team.p2.name,
    occupation: appDataText.espanol.aboutUs.team.team.p2.occupation,
    body: appDataText.espanol.aboutUs.team.team.p2.body,
    description: appDataText.espanol.aboutUs.team.team.p2.description,
    description2: appDataText.espanol.aboutUs.team.team.p2.description2,
  },
  {
    id: 3,
    image: imageP3,
    name: appDataText.espanol.aboutUs.team.team.p3.name,
    occupation: appDataText.espanol.aboutUs.team.team.p3.occupation,
    body: appDataText.espanol.aboutUs.team.team.p3.body,
    body2: appDataText.espanol.aboutUs.team.team.p3.body2,
    description: appDataText.espanol.aboutUs.team.team.p3.description,
    description2: appDataText.espanol.aboutUs.team.team.p3.description2,
  },
  {
    id: 4,
    image: imageP4,
    name: appDataText.espanol.aboutUs.team.team.p4.name,
    occupation: appDataText.espanol.aboutUs.team.team.p4.occupation,
    description: appDataText.espanol.aboutUs.team.team.p4.description,
    body: appDataText.espanol.aboutUs.team.team.p4.body,
  },
];
