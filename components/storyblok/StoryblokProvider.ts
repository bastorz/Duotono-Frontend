/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "your_preview_token",
  use: [apiPlugin],
});
 
export default function StoryblokProvider({ children }: any) {
  return children;
}