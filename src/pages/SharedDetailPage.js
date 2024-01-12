import { Navigate, useParams } from "react-router-dom";

function SharedDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <p>
        Shared
        <br />
        {params.id}
        <br />
        Page
      </p>
      <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </>
  );
}

export default SharedDetailPage;
