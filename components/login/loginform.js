import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/user/actions";
export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        loginUser({
          token: `${name}:${email}`,
          user: { name, email },
        })
      );
    },
    [name, email]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="loginName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="loginName"
          name="name"
          aria-describedby="loginNameHelp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          name="email"
          aria-describedby="loginEmailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="loginEmailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
