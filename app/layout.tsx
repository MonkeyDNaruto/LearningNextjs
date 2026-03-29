import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {Header()}
        {children}
        {Footer()}
      </body>
    </html>
  );
}
