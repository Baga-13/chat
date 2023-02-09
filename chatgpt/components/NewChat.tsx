import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

function NewChat() {
const { data: session } = 

    // function to create new chat async
  const createNewChat = async () => {};

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>new chat</p>
    </div>
  );
}

export default NewChat;
