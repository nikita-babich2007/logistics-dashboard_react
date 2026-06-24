import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export default function LoginRoute() {
  const [email, setEmail] = useState("");
  const { mutate: login, isPending, isError } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email (from mockapi)" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit" disabled={isPending}>{isPending ? "Loading..." : "Sign in"}</button>
      </form>
      {isError && <p style={{color: "red"}}>Login failed</p>}
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
  );
}