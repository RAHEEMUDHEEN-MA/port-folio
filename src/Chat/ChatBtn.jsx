import React, { useState } from "react";
import { motion } from "framer-motion";
import Chat from "./Chat";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const ChatBtn = () => {
  const storedData = JSON.parse(localStorage.getItem("r4heemzVisit"));
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user, setUser] = useState(storedData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleChatClick = () => {
    if (user) {
     setIsChatOpen(true);
    } else {
      signInWithGoogle();
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        const googleData = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
        };
        localStorage.setItem("r4heemzVisit", JSON.stringify(googleData));
        setIsChatOpen(true);
        setLoading(false);
      })
      .catch((error) => {
        setError("Authentication failed. Please try again.");
        console.log("Google Authentication Error:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <motion.button
        onClick={handleChatClick}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.08 },
        }}
        whileTap={{ scale: 1, transition: { duration: 0.1 } }}
        className="bg-gradient-to-br from-purple-600 to-gray-950 rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700 animate-none"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Let's Talk"}
      </motion.button>
      {error && <p className="text-red-500">{error}</p>}
      {isChatOpen && <Chat onClose={handleCloseChat} user={user} />}
    </div>
  );
};

export default ChatBtn;
