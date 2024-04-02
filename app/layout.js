import { league_spartan } from "./fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Jobs listing with dilter",
  description: "This a challenge of frontentmentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
