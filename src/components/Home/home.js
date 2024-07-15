import { useState } from "react";
import "../../App.css";
import { Link} from "react-router-dom";

function Home({bg}) {
  const [hidden, setHidden] = useState(true);
  const [work, setWork] = useState(true);
  const [contact, setContact] = useState(true);

  return (
      <div className="main-conatiner">
        <div className="text-conatiner">
          <Link
            to={"/about"}
            className={`${bg[1]} text`}
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}
          >
            {hidden ? "Hey." : "About"}
          </Link>
          <Link
            to={"/project"}
            className="iam-section text"
            onMouseEnter={() => setWork(false)}
            onMouseLeave={() => setWork(true)}
          >
            {work ? "I am" : "Projects"}
          </Link>
          <Link
            to={"/contact"}
            className="name-section text"
            onMouseEnter={() => setContact(false)}
            onMouseLeave={() => setContact(true)}
          >
            {contact ? "Praveen" : "Contact"}
          </Link>
        </div>
        <img className="img-" src="" alt="" />
      </div>
  );
}

export default Home;
