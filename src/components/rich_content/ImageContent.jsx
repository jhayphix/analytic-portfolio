import imageUrlBuilder from "@sanity/image-url";
import client from "@src/sanityClient.js";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ImageContent = ({ asset, crop, hotspot, alt, caption }) => {
  const image_url = urlFor(asset).width(600).url();

  return (
    <div className="__story_image">
      <img src={image_url} alt={alt || "Story image"} />
      {caption && <p className="__image_caption">{caption}</p>}
    </div>
  );
};

export default ImageContent;
