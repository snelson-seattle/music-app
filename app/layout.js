import "../styles/globals.css";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="w-full flex gap-2">
          <SideBar />
          <main className="w-full">
            <SearchBar />
            {children}
          </main>
      </body>
    </html>
  );
}
