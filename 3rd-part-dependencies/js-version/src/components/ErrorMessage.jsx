function ErrorMessage({ children }) {
  return (
    <p role="alert" style={{ color: 'red' }}>
      {children}
    </p>
  );
}
export default ErrorMessage;
