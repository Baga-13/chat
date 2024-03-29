import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { getServerSession } from "next-auth/next";
import SessionProvider from "../components/SessionProvider";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";

// server = async
// client = sync
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* sidebar */}
              <div className="bg-[#202123] ma-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
                <Sidebar />
              </div>
              {/* client provider */}
              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
