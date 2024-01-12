import { Link, useParams, useSearchParams } from "react-router-dom";

function FolderPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams.get("key"));
  console.log(params);
  return (
    <>
      <p>
        Folder
        <br />
        Page
      </p>
      <Link to="/shared">
        <button>즐겨찾기 페이지로</button>
      </Link>
    </>
  );
}

export default FolderPage;
