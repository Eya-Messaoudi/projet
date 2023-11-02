import "./forme.css";
const Forme = () => {
  return (
    <div className="forme body d-flex flex-column min-vh-100 ">
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Police de caractères et styles</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    Utiliser la police "Times New Roman" en taille de 12 points
                    et un interligne de 1,5 cm.
                  </li>
                  <li>
                    Justifier le texte et éviter l'utilisation du soulignement,
                    du gras et de l'italique.
                  </li>
                  <li>
                    Appliquer la même police et la même taille de caractères aux
                    titres.
                  </li>
                  <li>
                    Utiliser les "Styles" pour les différents niveaux de titres.
                  </li>
                  <li>
                    Vérifier la numérotation et être attentif aux titres
                    orphelins.
                  </li>
                  <li>Éviter l'utilisation des chiffres romains.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Pagination</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    Indiquer le numéro des pages dans le coin inférieur droit
                    des feuilles, sans utiliser de point, de tiret ni de
                    parenthèses.
                  </li>
                  <li>
                    Numéroter la page de l'introduction générale comme page 1.
                  </li>
                  <li>
                    {" "}
                    Paginer toutes les pages, de l'introduction générale jusqu'à
                    la fin du rapport, en utilisant des chiffres arabes(1, 2, 3,
                    etc.) <strong> y compris les annexes.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Ponctuation</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    {" "}
                    Placer une espace après les signes simples, tels que le
                    point, le point-virgule et les trois points de suspension.
                  </li>
                  <li>
                    Insérer une espace avant et une espace après les signes
                    doubles, tels que les deux points, le point-virgule, le
                    point d'exclamation, le point d'interrogation, les
                    guillemets et les parenthèses.
                  </li>
                  <li>
                    Ne pas insérer d'espace à l'intérieur des crochets, des
                    guillemets et des parenthèses.
                  </li>
                  <li>
                    Ne pas ajouter d'espace avant ni après le trait d'union et
                    l'apostrophe. Cependant, ajouter une espace après le tiret
                    s'il est utilisé pour une énumération.
                  </li>
                  <li>
                    Ne pas suivre "etc." d'un point de suspension. Utiliser soit
                    trois points de suspension, soit "etc.", mais pas les deux.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-black">empty</div>
        <div className="col">
          <div className="card  mb-3 mt-5 mx-2">
            <div className="card-header">Marge</div>
            <div className="card-body ">
              <div className="card-text">
                <ul>
                  <li>
                    Définir une marge de 2 cm de chaque côté{" "}
                    <strong>avec 0.5cm ou 1 cm de plus du côté gauche</strong>{" "}
                  </li>
                  <li>
                    {" "}
                    Positionner l'entête et le pied de page à une distance de
                    1,5 cm à partir du bord.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forme;
