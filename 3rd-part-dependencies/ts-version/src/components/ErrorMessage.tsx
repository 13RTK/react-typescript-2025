function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" style={{ color: 'red' }}>
      {children}
    </p>
  );
}
export default ErrorMessage;
