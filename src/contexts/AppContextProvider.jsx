// ... React modules

// ... Contexts
import DefaultContextProvider from "@contexts/DefaultContextProvider";
import NavigationContextProvider from "@contexts/NavigationContextProvider";
import ProfileContextProvider from "@contexts/ProfileContextProvider";
import ProjectContextProvider from "@contexts/ProjectContextProvider";
import ThemeContextProvider from "@contexts/ThemeContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <>
      <ThemeContextProvider>
        <NavigationContextProvider>
          <ProfileContextProvider>
            <DefaultContextProvider>
              <ProjectContextProvider>{children}</ProjectContextProvider>
            </DefaultContextProvider>
          </ProfileContextProvider>
        </NavigationContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default AppContextProvider;
