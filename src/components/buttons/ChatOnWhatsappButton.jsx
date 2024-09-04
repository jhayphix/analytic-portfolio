// ... React modules
import { FaWhatsapp } from "react-icons/fa";
// import { BsArrowUpShort } from "react-icons/bs";

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ChatOnWhatsappButton = () => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <>
      <a
        id="chat_on_whatsapp"
        href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
        target="_blank"
        rel="noreferrer"
        className="chat_on_whatsapp d-sm-flex d-none"
      >
        <FaWhatsapp className="chat_on_whatsapp_icon" />
      </a>
    </>
  );
};

export default ChatOnWhatsappButton;
