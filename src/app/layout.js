import TabBar from "@/components/TabBar";

import "./globals.css";
import Body from "@/components/Body";

export const metadata = {
  title: "lowfreqency",
  description: "ljho01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body bg="me">
        <h1 className="pageTitle">lowfreqency</h1>
        <div className="contentsBox">
          {children}
        </div>
        <TabBar/>
      </Body>
    </html>
  );
}
