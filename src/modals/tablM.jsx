const TableMatiere = ({ id }) => {
  return (
    <div className="tableMat">
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-secondary"
                id="staticBackdropLabel"
              >
                Table de matiere
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start text-secondary">
              <ul>
                <li>
                  Reproduire les titres et sous-titres contenus dans le travail
                  dans la table des matières, et indiquer les pages où on peut
                  les retrouver dans le rapport.
                </li>
                <li>
                  Limiter le nombre de niveaux de détails à quatre au maximum.
                  (1, 1.1, 1.1.1, 1.1.1.1.){" "}
                </li>
                <li>
                  Générer automatiquement la table des matières en utilisant les
                  styles appliqués aux titres.
                </li>
                <li>
                  Ne pas inclure les dédicaces, les remerciements, la liste des
                  tableaux, et la table des figures dans la table des matières.
                </li>
                <li>Rendre la table des matières claire et détaillée.</li>
                <li>
                  Inclure les annexes dans la table des matières et paginer
                  celles-ci de manière cohérente.
                </li>
                <li>
                  Ne pas numéroter la page qui affiche la table des matières en
                  bas de page.
                </li>
                <li>
                  Faire distinguer entre la table des matières et le sommaire.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableMatiere;
