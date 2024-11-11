// ... React modules
import { useState } from "react";

// ... Context

// ... Components
import DefaultSpinner from "../spinners/DefaultSpinner";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const EmbedIframe = ({ iframe_src, iframe_height, iframe_width }) => {
  const [iframeIsLoading, setIframeIsLoading] = useState(true)

  /*
  |----------------------------------------
  | return
  |----------------------------------------
  */
 const height = "650px";
 const width = "100%";

 return (
  <> 
   <div>
     {iframeIsLoading && <DefaultSpinner />}
     <iframe
       className="iframe_outer_container"
       loading="lazy"
       title="Project embed"
       style={{
         display: iframeIsLoading ? "none" : "block",
       }}
       onLoad={() => setIframeIsLoading(false)}
       srcDoc={`<iframe width=${width} height=${height} frameborder="0" scrolling="yes" src="${iframe_src}"></iframe>`}
     ></iframe>
   </div>
  </>
 );
};

EmbedIframe.defaultProps = [
  {
    iframe_height: "600",
    iframe_width: "100%",
  },
];

export default EmbedIframe;
