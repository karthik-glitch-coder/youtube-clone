const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start shadow-md p-2">
      <img
        className="h-6"
        alt="user-icon"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      />
      <span className="font-bold pr-1 text-blue-600">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
