import "./globals.css";

export const metadata = {
  title: "JainZEra",
  description: "Premium Fashion Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
