import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";

const Chat = ({ onClose, user }) => {
  const [adate, setadate] = useState();
  const [atime, setatime] = useState("");
  const [message, setmessage] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setadate(formattedDate);
    setatime(formattedTime);
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setStatus("loading");
    try {
      const UserMessageRef = collection(db, "Visitors", user.uid, "Messages");

      await addDoc(UserMessageRef, {
        email: user.email,
        name: user.displayName,
        date: adate,
        time: atime,
        Message: message,
      });

      setStatus("success");
      setmessage(""); // Clear the input field after successful submission
    } catch (error) {
      setStatus("error");
      console.error("Error Sending Message:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white p-4 rounded-lg w-80 md:max-w-md relative">
        <button
          className="absolute top-2 right-2  text-gray-500 hover:text-white rounded-full w-8 h-8 flex justify-center items-center"
          onClick={onClose}
        >
          x
        </button>
        <h1 className="text-2xl font-bold  text-gray-400 mb-2">Hi {user.displayName}</h1>
        <p className="text-lg text-gray-400">Let's Connect!</p>
        <form onSubmit={sendMessage}>
          <div className="flex mt-3 gap-1">
            <input
              className="text-black bg-gray-300 rounded-full px-3 font-light"
              value={message}
              type="text"
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              disabled={!message || status === "loading"}
              className="bg-gradient-to-br  from-purple-600 to-gray-950 rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700 animate-none"
            >
              {status === "loading" ? "..." : "Send"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-green-700 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2">Failed to send the message.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;
