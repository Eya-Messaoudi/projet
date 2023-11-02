const Garde = ({ id }) => {
  return (
    <div className="garde">
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
                Page de garde interne
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary text-start ">
              <ul>
                <li>
                  Accorder une attention spéciale à cette page afin d'éviter
                  qu'elle ne contienne des fautes, que ce soit en termes
                  d'orthographe, de forme, etc.
                </li>
                <li>
                  Porter les indications nécessaires pour identifier le stage,
                  les encadrants et l'auteur.
                </li>
                <li>
                  {" "}
                  Imprimer cette page sur un papier cartonné de couleur neutre,
                  comme le blanc ou une couleur sobre.
                </li>
                <li>
                  Suivre la page par une page blanche, puis créer une page de
                  titre interne, en veillant à ce qu'elle soit identique à la
                  page de garde, mais imprimée sur du papier ordinaire en noir
                  et blanc, sans numéroter ces pages en bas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Garde;
