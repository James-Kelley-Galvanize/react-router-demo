import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome-message">
      <nav>
        <button>
          <Link to="/main">MAIN</Link>
        </button>
      </nav>
      <h1>WELCOME!!!</h1>
      <h5>This is the welcome page for this app</h5>
    </div>
  );
}
