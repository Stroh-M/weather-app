import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>404 Not Found</h1>
            <p>
              <Link
                style={{ textDecoration: "underline", color: "blue" }}
                to="/"
              >
                Go Back Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
