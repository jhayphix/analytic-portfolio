import { createClient } from '@sanity/client';


const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // replace with your project ID
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: "v2022-03-07",
  token:
    "skqz5fr00ezOmwxuwxRSEjRHI9X8dWyuNCtEPWrKNRT5R9aV3s42Z77zHWeYPtWZnbE9HYC6cKMAvatEVa6BdGh8XGLo13PnmxykowrqEvccPTmpi3eETwVWD0snkswn8WLR3qYmcg6dbzCsj09yTrm621N6QzkDbW7h7iNtKLGR0QtsOPM1",
  // token: process.env.REACT_APP_SANITY_API_TOKEN, // Optional, for authenticated requests
  useCdn: true, // `false` if you need fresh data
  // withCredentials: false,
});


export default client;
