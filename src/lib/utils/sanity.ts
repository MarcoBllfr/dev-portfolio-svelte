import {createClient, type ClientConfig} from '@sanity/client';
import { PUBLIC_PROJECTID } from "$env/static/public";

const config: ClientConfig={
    projectId: PUBLIC_PROJECTID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-02-25",
}

//l'instanza per il fetch
const sanityClient = createClient(config);
export default sanityClient;