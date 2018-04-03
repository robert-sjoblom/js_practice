// ...
// TODO:
//
// Create and export a class called SearchEngine that supports the usage as shown in the application's main module.

// this module's dependencies have already been imported and should provide hints on how to export them from their 
// respective modules.
import { API_URL } from "../constants"; //import { Name } from "location" is export const Name
import processData from "./data"; //import Name from "location" is export default Name

export class SearchEngine {
    constructor({ authToken }) {
        this.authToken = authToken;
    }
    execute({ type, text }) {
        console.log("this is in the execute function!"); 
        console.log(type, text);
        const headers = {
            "Accept": "application/json",
            "Authorization": `Bearer ${this.authToken}`
        };
        return fetch(`https://api.spotify.com/v1/search?q=${text}&type=${type}`, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .then((result) => processData({type, result}));
    }
}