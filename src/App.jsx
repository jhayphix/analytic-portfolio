// ... React modules
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

// ... Context
import AppContextProvider from "@contexts/AppContextProvider";

// ... Components
import AppLayout from "@layouts/AppLayout";
import ScrollToTop from "@components/action/ScrollToTop";
import WebRouting from "@web_routing/WebRouting";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const App = () => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ScrollToTop />
          <AppLayout>
            <WebRouting />
          </AppLayout>
          <SpeedInsights />
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
