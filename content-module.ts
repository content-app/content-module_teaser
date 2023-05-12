import { ContentModule } from "@content-app/types";

const module: ContentModule = {
    name: 'ModuleTeaser',
    async fetch({ fetchFromContentful, client, moduleData }: any) {
      if (!moduleData.fields.teaser) {
        return moduleData;
      }

      for(let i = 0; i < moduleData.fields.teaser.length; i++) {
        const teaser = await client.getEntry(moduleData.fields.teaser[i].sys.id);
        if (!teaser.fields.pageLink) {
          continue;
        }

        const pageLink = teaser.fields.pageLink.sys.id;
        const page = await client.getEntry(pageLink);
        teaser.fields.pageLink = page;
        moduleData.fields.teaser[i] = teaser;
      }

      return moduleData;
    }
  };
  
export default module;
  
