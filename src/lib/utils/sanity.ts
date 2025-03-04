import { createClient, type ClientConfig } from "@sanity/client";
import { PUBLIC_PROJECTID } from "$env/static/public";
import  ImageUrlBuilder  from "@sanity/image-url";
const config: ClientConfig = {
  projectId: PUBLIC_PROJECTID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-25",
};

//l'instanza per il fetch
const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const builder = ImageUrlBuilder(sanityClient);
    const pojectImageUrl = builder.image(rawProject.image).url();

  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack,
    slug: rawProject.slug,
    pojectImageUrl,
    content: rawProject.content.map(processProjectContent),
  };
  return processedProject;
}

function processProjectContent(content:RawTextContent|RawImgContent){
    if (content._type === "block"){
        const processedTextContent:ProcessedTextContent ={
            type : 'text',
            style: content.style,
            textToRender : content.children.map(elem => elem.text).join('\n'),
        }
        return processedTextContent;
    }else{
        const builder = ImageUrlBuilder(sanityClient);
        const pojectImageUrl = builder.image(content).url();
        
        const processedImgContent : ProcessedImgContent = {
            type:"image",
            url:pojectImageUrl,
        }
        return processedImgContent;
    }
}
