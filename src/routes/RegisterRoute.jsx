import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

export default function RegisterRoute() {
  const [email, setEmail] = useState("");
  const { mutate: register, isPending } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit" disabled={isPending}>Sign up</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}