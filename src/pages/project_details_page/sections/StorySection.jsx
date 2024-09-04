// React modules
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Context import
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// Component imports
import BlockContent from "@components/rich_content/BlockContent";
import ImageContent from "@components/rich_content/ImageContent";
import LinkContent from "@components/rich_content/LinkContent";
import ProjectStoryTab from "@components/tabs/ProjectStoryTab";

// Function to render text marks with specific classes
const renderMarks = (marks) => {
  const markClasses = {
    strong: "__text_strong",
    em: "__text_italic",
    underline: "__text_underline",
    highlight: "__text_highlight",
  };

  return marks?.map((mark) => markClasses[mark] || "").join(" ");
};

const StorySection = () => {
  // Access the active project from the ProjectContext
  const { active_project } = useContext(ProjectContext);

  // Extract project stories and their tabs
  const project_stories = active_project?.stories;
  const all_story_tabs = project_stories?.map((item) => item?.tab);
  const first_story_tab_name = all_story_tabs?.[0];

  // Handle search parameters for story tabs
  const [searchParams, setSearchParams] = useSearchParams();
  const storyTabParamsName = searchParams.get("tab") || "tab1";

  useEffect(() => {
    // Set the search parameter to the first story's tab name on initial render
    setSearchParams({ tab: first_story_tab_name });

    // eslint-disable-next-line
  }, []);

  // Update search parameters when a tab is clicked
  const handleTabSearchParams = (tab_name) => {
    setSearchParams({ tab: tab_name });
  };

  // Find the currently active story based on the search parameter
  const filtered_story = project_stories?.find(
    (story) => story?.tab?.toLowerCase() === storyTabParamsName?.toLowerCase()
  );

  // Extract the content of the active story
  const filtered_story_content = filtered_story?.content || [];

  return (
    <div className="__story_section">
      {/* Render story tabs */}
      <ProjectStoryTab
        story_tab={all_story_tabs}
        handleTabSearchParams={handleTabSearchParams}
      />

      <div className="__story_section_container py-5">
        <div className="__story_container">
          {filtered_story_content.length > 0 ? (
            filtered_story_content.map((story, index) => {
              const {
                _type,
                style,
                children,
                listItem,
                asset,
                alt,
                caption,
                markDefs,
                crop,
                hotspot,
                _key,
              } = story;

              switch (_type) {
                case "block":
                  return (
                    <div key={_key}>
                      {/* Render content with link marks */}
                      {markDefs?.map((item) => item?._type).includes("link") &&
                      children ? (
                        <div key={`block-link-${index}`}>
                          <LinkContent
                            index={index}
                            style={style}
                            children={children}
                            renderMarks={renderMarks}
                            markDefs={markDefs}
                          />
                        </div>
                      ) : (
                        <div key={`block-${index}`}>
                          <BlockContent
                            index={index}
                            style={style}
                            listItem={listItem}
                            children={children}
                            renderMarks={renderMarks}
                          />
                        </div>
                      )}
                    </div>
                  );

                case "image":
                  return (
                    <div key={`image-${asset?._key || index}`}>
                      <ImageContent
                        index={index}
                        asset={asset}
                        alt={alt}
                        caption={caption}
                        crop={crop}
                        hotspot={hotspot}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })
          ) : (
            <div>Story is currently unavailable...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorySection;
