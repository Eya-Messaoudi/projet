const CorpsTrav = ({ id }) => {
  return (
    <div className="corpsTrav">
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
                Corps du travail
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
                  Introduction générale
                  <ul>
                    <li>
                      Inclure une introduction d'une à trois pages dans votre
                      rapport, où exposer de manière claire le problème auquel
                      vous chercherez à fournir une solution.
                    </li>
                    <li>
                      Rédiger l'introduction à la fin du processus de rédaction
                      du travail.
                    </li>
                    <li>
                      Générer une introduction qui définisse à la fois le
                      public, le sujet ou l'orientation de votre rapport, et qui
                      annonce le plan
                    </li>
                    <li>Recourir au « nous » de modestie</li>
                    <li>
                      Développer les points suivants:
                      <ul>
                        <li>La présentation du contexte du projet</li>
                        <li>
                          La présentation brève de l'entreprise d'accueil et du
                          domaine
                        </li>
                        <li>La description des objectifs du projet</li>
                        <li>
                          L'annonce du plan du rapport sans trop détailler{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Chapitres
                  <ul>
                    <li>
                      comporter une introduction partielle pour chaque chapitre{" "}
                      (<strong>utiliser le "nous" avec le futur</strong>), qui
                      annonce le contenu, et une conclusion partielle (
                      <strong>utiliser le "nous" avec le passé composé</strong>)
                    </li>
                    <li>
                      Veiller à indiquer la source bibliographique des idées
                      empruntées à d'autres auteurs (livres, articles, rapports
                      de PFE, manuels de référence, documents trouvés sur le web
                      de source fiable, etc.)."
                    </li>
                    <li>
                      présenter la mission qui vous a été confiée, les objectifs
                      et les enjeux de cette mission, l’environnement dans
                      lequel vous avez évolué, les méthodes que vous avez
                      employées et vos résultats.
                    </li>
                    <li>
                      Comparer l'utilisation d'une technique particulière,
                      nouvelle, aux autres méthodes existantes et justifier vos
                      choix et critiques.{" "}
                    </li>
                    <li>
                      Justifier le choix des outils utilisés on précisant les
                      caractéristiques de ces méthodes ou techniques.{" "}
                      <strong>
                        Soyer objectif et il ne faut pas utiliser excessivement
                        les superlatifs et/ou le vocabulaire connoté
                        positivement pour mettre en valeur vos outils
                      </strong>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Conclusion générale
                  <ul>
                    <li>
                      Maintenir un parallélisme entre la conclusion générale et
                      l'introduction, car elle répond aux questions posées
                      initialement.
                    </li>
                    <li>
                      {" "}
                      Réduire la taille de la conclusion à une page de texte au
                      maximum.
                    </li>
                    <li>
                      S'abstenir d'inclure de nouveaux résultats ou de nouvelles
                      interprétations dans la conclusion
                    </li>
                    <li>
                      Comporter souvent dans la conclusion générale :{" "}
                      <ul>
                        <li>Faire un résumé très rapide du corps du texte.</li>
                        <li>Rappeler les objectifs du projet</li>
                        <li>
                          Indiquer clairement les objectifs annoncés dans
                          l'introduction et en particulier ceux qui n'ont pu
                          être atteints dans un bilan professionnel.
                        </li>
                        <li>
                          Décrire les principales leçons que vous tirez de cette
                          expérience sur le plan humain dans un bilan personnel.
                        </li>
                        <li>
                          Exposer les limites et les perspectives du travail
                          effectué.
                        </li>
                      </ul>
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
export default CorpsTrav;
