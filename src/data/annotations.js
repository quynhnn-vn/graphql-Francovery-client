import { BiEnvelope, BiMapPin, BiBuildingHouse, BiHome, BiGroup, BiBarChartAlt, BiDonateHeart, BiFlag, BiExpand, BiCollapse, BiSitemap } from "react-icons/bi";
export const annotations = {
    "CODE_RÉGION": [<BiEnvelope className="icons"/>],
    "RÉGION": [<BiMapPin className="icons"/>],
    "PRÉFECTURE": [<BiFlag className="icons"/>],
    "SUPERFICIE": [<BiExpand className="icons"/>, "km²"],
    "POPULATION": [<BiGroup className="icons"/>],
    "DENSITÉ": [<BiCollapse className="icons"/>, "/km²"],
    "ARRONDISSEMENTS": [<BiBuildingHouse className="icons"/>],
    "COMMUNES": [<BiHome className="icons"/>],
    "MÉDIANE_DU_NIVEAU_VIE": [<BiBarChartAlt className="icons"/>, "€"],
    "TAUX_DE_PAUVRETÉ": [<BiDonateHeart className="icons"/>, "%"],
    "SITE_WEB": [<BiFlag className="icons"/>],

    "DÉPARTEMENT": [<BiMapPin className="icons"/>],
    "CODE_DÉPARTEMENT": [<BiEnvelope className="icons"/>],

    "COMMUNE": [<BiMapPin className="icons"/>],
    "NOMBRE_ENTREPRISES": [<BiHome className="icons"/>],
    "SALAIRE_MOYENNE_RÉGION": [<BiBarChartAlt className="icons"/>, "€/heure"],
    "SALAIRE_MOYENNE_DÉPARTEMENT": [<BiBarChartAlt className="icons"/>, "€/heure"],
    "ORIENTATION_ÉCONOMIQUE": [<BiSitemap className="icons"/>],
};