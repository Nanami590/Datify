import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      HomeView
      <nav>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/counter"}>Counter</Link>
      </nav>
    </div>
  );
};

export default HomeView;
