// ...
// This is the main module (entry point) for the application. 
//
// The application is event-driven using an instance of an EventManager class, imported from the event.js module. 
// 
// Events must be triggered for actions such as when a search is started or when there are search results to display, 
// and subscribers must be added to the EventManager instance in order to be notified of these events. All events 
// used in the application are shown in the code below.
//
// As you implement the various TODO items in this and the other modules, make sure to utilize ES6 features. 
// Beyond modules and classes, use e.g.
//
// Arrow functions.
// Promises.
// Destructuring (of objects e.g.)
// Template strings.

import $ from "jquery";

// this module's dependencies have already been imported and should provide hints on how to export them from their 
// respective modules.
import eventManager from "./event";
import { SearchEngine } from "./search";
import { IMAGE_NA_URL } from "./constants";

const $searchResult = $("#search-results");
const searchEngine = new SearchEngine({
    authToken: "BQCCl5BU4TJzO7GSgy2-Utekv255ZOCDFwNAYoN8XMElzeAaE-5l39eExctPCNPElXXIXOlCF2wJPmficrtkHO4atJfvfkOrEvPfhRdwJomLOM093yWmbUUqJYcKWjmQIjFQbk1f5i39"
});

eventManager.addSubscriber("onSearchError", ({ searchError, searchParams }) => {
    const message = `<h2>An error occured!</h2>
    <p>${searchError.message}</p>
    <p>You searched for type: ${searchParams.type} and query: ${searchParams.text}</p>`;
    $searchResult.append(message);
});

eventManager.addSubscriber("onSearchResults", searchResults => {
    $searchResult.append(
        searchResults.map(val => {
            const image = val["images"][0].url || IMAGE_NA_URL;
            return `<div class="search-result"><div class="search-result-info">
                <p>${val.name}</p>
                <a href="${val.uri}">Open in Spotify</a></div>
            <img src="${image}"></div>`;
        })
            .join("")
    );
});

eventManager.addSubscriber("onSearch", searchParams => {
    searchEngine.execute(searchParams)
        .then(searchResults => eventManager.notify("onSearchResults", searchResults))
        .catch(searchError => eventManager.notify("onSearchError", ({ searchError, searchParams })));
});

$("#search-text").keyup((event) => {
    if (event.keyCode == 13) {
        $("#search-start").trigger("click");
    }
});
$("#search-start").click(() => {
    $(".search-result").remove();

    const type = $("#search-type").val();
    const text = $("#search-text").val();
    eventManager.notify("onSearch", ({ type, text }));
});