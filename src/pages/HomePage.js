import { Link, Navigate } from "react-router-dom";

function HomePage() {
  const jwt = sessionStorage.getItem("Authorization");
  console.log(jwt);
  if (!jwt) {
    console.log("JWT 가 없어요");
    return <Navigate to="login" />;
  }
  return (
    <>
      <p>
        Home
        <br />
        Page
      </p>
      <a href="/shared">
        <button>즐겨찾기 anker</button>
      </a>
      <Link to="/shared">
        <button>즐겨찾기 페이지로</button>
      </Link>
      <Link to="/folder">
        <button>폴더 페이지로</button>
      </Link>
    </>
  );
}

export default HomePage;
