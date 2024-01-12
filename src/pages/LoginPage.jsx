import { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const submitLogin = async (requset) => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        // Authorization: `${sessionStorage.getItem("Authorization")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requset),
    });
    return await response.json();
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("login!");
    const request = {
      email: document.querySelector(".sign-input-id").value,
      password: document.querySelector(".sign-input-pw").value,
    };
    try {
      setErrorMsg("");
      const result = await submitLogin(request);
      console.log(result);
      if (!result?.accessToken) {
        setErrorMsg(result.message);
        return;
      }
      const { accessToken } = result;
      console.log(accessToken);
      sessionStorage.setItem("Authorization", accessToken);
    } catch (error) {
      console.error(error);
    }
    return <Navigate to="/" />;
  };

  return (
    <form>
      <div>
        <input className="sign-input-id" name="id" placeholder="아이디" />
      </div>
      <div>
        <input className="sign-input-pw" name="pw" placeholder="비밀번호" />
      </div>
      <button style={{ margin: "5px" }} onClick={handleClick}>
        로그인
      </button>
      {<div>{errorMsg}</div>}
    </form>
  );
}

export default LoginPage;
