import client from '@src/sanityClient.js';

// Function to fetch all posts/projects
export const fetchPosts = async () => {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      description,
      categories[]->{
        title
      },
      project_type,
      author->{
        name
      },
      main_image{
        asset->{
          url
        }
      },
      iframe_status,
      iframe_height,
      iframe_width,
      iframe_url,
      iframe_src,
      published_at,
      stories[]{
        tab,
        content
      }
    }`;
  
    try {
      const posts = await client.fetch(query);
      // console.log("Fetching post");
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };


  // Funciton to fetch project categories eg. excel, python, timeseries
  export const fetchProjectCategories = async () => {
    const query = `*[_type == "category"]{
      _id,
      title,
      description
    }`;
  
    try {
      const categories = await client.fetch(query);
      // console.log(categories);
      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };