import { Client, Databases, Account, Functions} from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6534baad3d9cb4211732"); 

export const account = new Account(client);
export const databases = new Databases(client);
export const functions=new Functions(client);



export default client;
