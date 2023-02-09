"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        {/* new chat */}
        <NewChat />

        <div>{/* module selection */}</div>

        {/* map through chat rows */}
      </div>

      {session && (
        <img
          className="h-12 w-12 rounded-full cursor-pointer mb-2 mx-auto hover:opacity-50"
          src={session.user?.image!}
          alt="Profile pic"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default Sidebar;
