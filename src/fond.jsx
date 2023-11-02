import "./Fond.css";
import Garde from "./modals/pGarde";
import Signature from "./modals/pSign";
import Dedicaces from "./modals/pDedi";
import Remerciment from "./modals/pRemirc";
import TableMatiere from "./modals/tablM";
import ListeTab from "./modals/listeTab";
import CorpsTrav from "./modals/corpsTrav";
import Biblio from "./modals/biblio";
const Fond = () => {
  return (
    <div className="forme body d-flex flex-column min-vh-100 ">
      <div className="row">
        <div className="alert m-5  text-white fw-semibold fs-3" role="alert">
          Le rapport d'un PFE doit contenir les éléments suivants :
        </div>
      </div>
      <div className="container row text-white g-5 ms-5">
        <div
          className="col btn  me-2 fw-normal  text-white "
          data-bs-toggle="modal"
          data-bs-target="#Garde"
        >
          1.la page de garde interne
          <Garde id={"Garde"} />
        </div>

        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#Signature"
        >
          2.la page des signatures
          <Signature id={"Signature"} />
        </div>
        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#Dedicaces"
        >
          3.la page des dédicaces
          <Dedicaces id={"Dedicaces"} />
        </div>
        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#Remerciment"
        >
          4.la page des remerciements
          <Remerciment id={"Remerciment"} />
        </div>
        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#TableMat"
        >
          5.la table des matières
          <TableMatiere id={"TableMat"} />
        </div>
        <div
          className="col btn  me-2  fw-normal text-white"
          data-bs-toggle="modal"
          data-bs-target="#ListeTab"
        >
          6. la liste des tableaux, des figures, des illustrations, des sigles,
          des symboles et des abréviations
          <ListeTab id={"ListeTab"} />
        </div>
        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#Corps"
        >
          7. le corps du travail ( introduction générale,chapitres-conclusion
          générale et perspectives)
          <CorpsTrav id={"Corps"} />
        </div>
        <div
          className="col btn  me-2 fw-normal  text-white"
          data-bs-toggle="modal"
          data-bs-target="#Biblio"
        >
          8. la bibliographie suivie des annexes puis la page des résumés.
          <Biblio id={"Biblio"} />
        </div>
      </div>
    </div>
  );
};
export default Fond;
