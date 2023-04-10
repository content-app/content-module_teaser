import { ContentModule } from "@content-app/types";

const module: ContentModule = {
    name: 'ModuleTeaser',
    async fetch({ fetchFromContentful }) {
      return await fetchFromContentful();
    }
  };
  
export default module;
  