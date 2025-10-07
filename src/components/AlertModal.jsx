import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlertModal = ({
  isVisible = false,
  image = "/src/assets/PROCESS.svg",
  message = "Processing...",
  showSpinner = true,
  background = "black",
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${
            background === "black" ? "bg-black text-white" : "bg-white text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* SVG Image */}
          <img
            src={image}
            alt="Alert"
            className="w-48 h-48 mb-8 animate-pulse"
          />

          {/* Spinner (optional) */}
          {showSpinner && (
            <div className="w-10 h-10 border-4 border-t-transparent border-current rounded-full animate-spin mb-4"></div>
          )}

          {/* Message */}
          <p className="text-lg font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;
