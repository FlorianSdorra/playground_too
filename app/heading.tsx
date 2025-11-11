function Heading({ title, description, children }) {
  return (
    <div
      style={{
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      {children}
      <h1>{title}</h1>

      <span>{description}</span>
    </div>
  );
}

export { Heading };
