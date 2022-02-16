import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main-area">
      <nav>
        <button>
          <Link to="/">WELCOME</Link>
        </button>
      </nav>
      <h1>I am the main area.</h1>
      <h4>Stuff happens here</h4>
      <h4>IMPORTANT stuff.</h4>
      <p>Pay no attention to the man behind the curtain</p>
    </div>
  );
}
