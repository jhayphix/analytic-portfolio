// ... React modules
// import { useState } from "react";

// ... Context

// ... Components
// import DefaultSpinner from "@components/spinners/DefaultSpinner";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const EmbedIframe = ({ iframe_src }) => {
  //   const [iframeIsLoading, setIframeIsLoading] = useState(true)
  
    /*
    |----------------------------------------
    | return
    |----------------------------------------
    */
  //  const height = "650px";
  //  const width = "100%";
  
   return (
    <> 
     <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4286%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            height="650px" // Make it short
            style={{
              position: "absolute",
              width: "100%",
              // height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src={iframe_src}
            allowFullScreen
            allow="fullscreen"
            title="Data Analysis Project"
          />
        </div>
    </>
   );
  };
  
  export default EmbedIframe;
  