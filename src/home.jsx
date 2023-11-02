import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home body d-flex flex-column min-vh-100 ">
      <div className="title row justify-content-center">
        <div className="col-md-6 offset-md-1 rounded mt-4">
          <h1 className="m-5 text-center">PFE</h1>
        </div>
      </div>
      <div className="pfe row justify-content-center m-5 ms-5">
        <div className="col-md-6 offset-md-1 rounded mt-4 text-center d-flex justify-content-center align-items-center">
          <Link to="/forme" className="display-5 p-3">
            Forme
          </Link>
        </div>
        <div className="col-md-6 offset-md-1 rounded mt-4 text-center d-flex justify-content-center align-items-center">
          <Link to="/fond" className="display-5 p-3">
            Fond
          </Link>
        </div>
        <div className="col-md-6 offset-md-1 rounded mt-4 text-center d-flex justify-content-center align-items-center">
          <Link to="/mindmap" className="display-5 p-3">
            Mind map
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
