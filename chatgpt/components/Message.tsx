import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  return (
    <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
      <img src={message.user.avatar} className="h-8 w-8" alt="avatar" />
      <p className="pl-1 text-sm">{message.text}</p>
    </div>
  );
}

export default Message;
