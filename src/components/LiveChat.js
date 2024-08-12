import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleLiveMessage = () => {
    console.log(liveMessage);
    dispatch(
      addMessage({
        name: "Karthik🚀",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="border border-black p-2 m-2 w-full rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-[450px] px-2 rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="px-4 ml-7 bg-green-200 rounded-lg"
          onClick={handleLiveMessage}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
