export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <header>
            <h1> nextApp</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
