// ... React modules
import { useContext, useState } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SocialIcons = () => {
  const { fullContactSocialIcons } = useContext(ProfileContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseMove = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div
      id="social_icons_container"
      onMouseLeave={handleMouseLeave}
      className="social_icons_container"
    >
      {fullContactSocialIcons?.map((socialIcons, index) => {
        const { url, target, style, icon } = socialIcons;
        return (
          <a
            key={index}
            href={url}
            target={target}
            rel="noreferrer"
            className={`social_link ${style} ${
              activeIndex === index ? 'magnify' : ''
            }`}
            onMouseMove={() => handleMouseMove(index)}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
