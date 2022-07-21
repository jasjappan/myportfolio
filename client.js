import { SanityClient } from "@sanity/client";

export default SanityClient({
    projectId: "ru4nyjor",
    dataset: "production",
  useCdn: true,
});