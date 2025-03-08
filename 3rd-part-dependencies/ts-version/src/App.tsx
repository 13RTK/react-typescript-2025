import { useForm } from 'react-hook-form';

import ErrorMessage from './components/ErrorMessage';

function App() {
  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <main>
      <h1>React With TypeScript</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Email"
          {...register('email', { required: true })}
        />
        {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
        <br />

        <input
          type="password"
          placeholder="Your Password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
