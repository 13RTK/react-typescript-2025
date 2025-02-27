type AppInputProps = React.PropsWithChildren & {
  value: string;
  name: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function AppInput({
  value,
  name,
  type,
  handleChange,
  children,
}: AppInputProps) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
      <br />
    </>
  );
}

export default AppInput;
