import { createClient, createPreviewSubscriptionHook } from "next-sanity";

const config = {
  projectId: "e8vemzil",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);
