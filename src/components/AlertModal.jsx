import { Loader } from "lucide-react";

const AlertModal = ({
  isVisible = true,
  imgUrl = "/src/assets/default.svg",
  title = "Alert",
  message = "Something happened!",
  showLoader = true,
  background = "white", // can be "white" or "black"
}) => {
  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${background === "black" ? "bg-black text-white" : "bg-white text-black"} p-4`}>
      <img src={imgUrl} alt="logo" className="h-20 w-24 md:h-28 md:w-32 mb-4" />
      <h2 className="font-extrabold text-lg md:text-xl mb-2">{title}</h2>
      <p className="text-center mb-4">{message}</p>
      {showLoader && <Loader className="text-blue-900 animate-spin" />}
    </div>
  );
};

export default AlertModal;
