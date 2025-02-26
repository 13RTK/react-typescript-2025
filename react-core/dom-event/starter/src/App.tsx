import { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  type Gender = "male" | "female" | "";

  const [gender, setGender] = useState<Gender>("");

  return (
    <main>
      <h1>Signup</h1>

      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          onChange={(e) => setGender(e.target.value as Gender)}
          value={gender}
        >
          <option value="" disabled>
            Choose your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        <button type="submit">Signup</button>
      </form>
    </main>
  );
}

export default App;
