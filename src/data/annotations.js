import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

// Icons and texts for Sidebar component
export const SidebarData = [
  {
    title: "Accueil",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Régions",
    path: "/home/regions",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
  {
    title: "Départements",
    path: "/home/departements",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
  {
    title: "Communes",
    path: "/home/communes",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
];

// License data for Footer component
export const licenseData = [
  {
    logo: "/pics/unsplash-logo.png",
    url: "https://unsplash.com/developers",
  },
  {
    logo: "/pics/google-logo.png",
    url: "https://developers.google.com/maps",
  },
  {
    logo: "/pics/open-logo.png",
    url: "https://openweathermap.org/",
  },
  {
    logo: "/pics/news-logo.png",
    url: "https://newsapi.org/",
  },
];

// Icons and Units of Information component
export const annotations = {
  CODE_RÉGION: [<BiIcons.BiEnvelope className="icons" />],
  RÉGION: [<BiIcons.BiMapPin className="icons" />],
  PRÉFECTURE: [<BiIcons.BiFlag className="icons" />],
  SUPERFICIE: [<BiIcons.BiExpand className="icons" />, "km²"],
  POPULATION: [<BiIcons.BiGroup className="icons" />, "pers"],
  DENSITÉ: [<BiIcons.BiCollapse className="icons" />, "pers/km²"],
  ARRONDISSEMENTS: [<BiIcons.BiBuildingHouse className="icons" />],
  COMMUNES: [<BiIcons.BiHome className="icons" />],
  MÉDIANE_DU_NIVEAU_VIE: [<BiIcons.BiBarChartAlt className="icons" />, "€/an"],
  TAUX_DE_PAUVRETÉ: [<BiIcons.BiDonateHeart className="icons" />, "%"],
  SITE_WEB: [<BiIcons.BiFlag className="icons" />],

  DÉPARTEMENT: [<BiIcons.BiMapPin className="icons" />],
  CODE_DÉPARTEMENT: [<BiIcons.BiEnvelope className="icons" />],

  COMMUNE: [<BiIcons.BiMapPin className="icons" />],
  NOMBRE_ENTREPRISES: [<BiIcons.BiHome className="icons" />],
  SALAIRE_MOYENNE_RÉGION: [
    <BiIcons.BiBarChartAlt className="icons" />,
    "€/heure",
  ],
  SALAIRE_MOYENNE_DÉPARTEMENT: [
    <BiIcons.BiBarChartAlt className="icons" />,
    "€/heure",
  ],
  ORIENTATION_ÉCONOMIQUE: [<BiIcons.BiSitemap className="icons" />],
};
