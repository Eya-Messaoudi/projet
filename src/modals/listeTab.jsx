const ListeTab = ({ id }) => {
  return (
    <div className="listeTab">
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
                Liste des tableaux, des figures, des illustrations, des sigles,
                des symboles et des abréviations
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start text-secondary">
              <ol>
                <li>
                  Liste des tableaux
                  <ul>
                    <li>
                      Présenter une liste des tableaux après la table des
                      matières si le rapport contient plus de trois tableaux.{" "}
                    </li>
                    <li>
                      Présenter le numéro et le titre de chaque tableau, le
                      numéro correspondant à l'ordre d'apparition du tableau
                      dans un chapitre.
                    </li>
                    <li>
                      {" "}
                      Placer une légende au-dessus et à gauche des tableaux est
                      une exigence.
                    </li>
                  </ul>
                </li>
                <li>
                  Liste des figures
                  <ul>
                    <li>
                      Suivre les mêmes règles de présentation que celles prévues
                      pour la liste des tableaux.
                    </li>
                    <li>Rendre les figures claires et lisibles.</li>
                    <li>
                      Inclure une légende avec un numéro séquentiel pour toutes
                      les figures dans le rapport, la plaçant au-dessous et au
                      centre.
                    </li>
                    <li>
                      Décrire le contenu de la figure en utilisant des
                      expressions telles que "comme illustré par la figure 3.1",
                      "comme le montre la figure 3.1", "voir figure 3.1", ou
                      "d'après les résultats présentés par la figure 3.1".
                    </li>
                    <li>
                      Éviter les formules telles que, la figure ci-dessous
                    </li>
                  </ul>
                </li>
                <li>
                  Liste des illustrations, des sigles, symboles et des
                  abréviations
                  <ul>
                    <li>
                      citer les sources auxquelles vous empruntez l'illustration
                    </li>
                    <li>
                      Présenter la liste alphabétique des abréviations, sigles
                      et acronymes, accompagnée de leur définition, dans les
                      pages préliminaires.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListeTab;
