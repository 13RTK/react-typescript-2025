import { useState } from "react";

import { Gender, genderSchema } from "./types/gender";

import AppInput from "./components/AppInput";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [gender, setGender] = useState<Gender>("");

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    const { success } = genderSchema.safeParse(value);

    if (success) {
      setGender(value as Gender);
      return;
    }

    alert("Please select a valid gender");
  }

  return (
    <main>
      <h1>Signup</h1>

      <form>
        <AppInput
          value={email}
          name="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        >
          Email
        </AppInput>

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          onChange={handleSelectChange}
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

        <AppInput
          value={password}
          name="password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
        >
          Password
        </AppInput>

        <AppInput
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          handleChange={(e) => setConfirmPassword(e.target.value)}
        >
          Confirm Password
        </AppInput>

        <button type="submit">Signup</button>
      </form>
    </main>
  );
}

export default App;
