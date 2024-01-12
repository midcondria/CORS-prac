import { Link, useParams, useSearchParams } from "react-router-dom";

function SharedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("item: ", searchParams.get("item"));
  console.log("key: ", searchParams.get("key"));

  const params = useParams();
  console.log(params);
  return (
    <>
      <p>
        Shared
        <br />
        Page
      </p>
      <Link to="/folder">
        <button>폴더 페이지로</button>
      </Link>
    </>
  );
}

export default SharedPage;
