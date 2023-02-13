import React from 'react'
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'

function ChatPage() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        {/*  chat  */}
        <Chat />
        {/*  chat input  */}
        <ChatInput />
    </div>
  )
}

export default ChatPage