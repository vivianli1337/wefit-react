import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Info/Home" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Info/About" className="nav-link">
        {/* className={`nav-link ${pathname.includes("About") ? "active" : ""}`} */}
          About
        </a>
      </li>
    </ul>
  );
}
