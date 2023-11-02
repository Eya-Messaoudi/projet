const Biblio = ({ id }) => {
  return (
    <div className="biblio">
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
                className="modal-title fs-5 text-secondary "
                id="staticBackdropLabel"
              >
                Bibliographie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary text-start">
              <ol>
                <li>
                  Bibliographie
                  <ul>
                    <li>
                      Recenser, par ordre d'apparition dans le texte (le
                      rapport), toutes les sources consultées et référencées
                      dans le texte.
                    </li>
                    <li>
                      Rédiger la liste des sources en suivant l'ordre
                      d'apparition dans le texte (le rapport), en incluant tous
                      les ouvrages (thèses, mémoires, livres, articles, rapports
                      de PFE, manuels de référence, documents provenant de
                      sources fiables sur le Web, etc.) qui ont été consultés
                      pour la rédaction du texte et la création des figures ou
                      des tableaux.
                    </li>
                    <li>
                      {" "}
                      Ne pas présenter séparément la bibliographie et la
                      webographie.
                    </li>
                  </ul>
                </li>
                <li>
                  Annexes
                  <ul>
                    <li>
                      Inclure les informations qui sont trop détaillées ou qui
                      servent de compléments pour ceux qui souhaitent mieux
                      comprendre ou reproduire une expérience décrite dans le
                      document au niveau des annexes.
                    </li>
                    <li>
                      Numéroter les annexes avec des titres, comme Annexe 1,
                      Annexe 2, etc.
                    </li>
                  </ul>
                </li>
                <li>
                  Resumé
                  <ul>
                    <li>
                      Présenter les résumés au verso de la dernière page du
                      rapport.
                    </li>
                    <li>
                      Rappeler les principaux objectifs du travail ainsi que les
                      réalisations effectuées dans les résumés.
                    </li>

                    <li>
                      Assurer que le résumé et les mots-clés en anglais et en
                      arabe soient une traduction fidèle de la version
                      française.{" "}
                      <strong>
                        Eviter de copier/coller les versions que proposent les «
                        traducteurs automatiques », type «Google Traduction»
                      </strong>
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
export default Biblio;
