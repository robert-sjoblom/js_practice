const _ = require("lodash");
const $ = require("jquery");
const youtubeSearch = require("youtube-api-v3-search");

const $YOUTUBE_KEY = "AIzaSyD0jefCHJZMYT0-vGeG5Ry5KLRDjNUlHTs";

function doTheSearch() {
    $("#videos").html("");
    const $options = {
        maxResults: 10,
        part: "snippet",
        type: "video"
    };

    const q = $("#videoTitle").val();
    $options.q = q;

    youtubeSearch($YOUTUBE_KEY, $options)
        .then(result => result.items)
        .then(items => items.map(val => val.id))
        .then(objects => objects.map(obj => obj.videoId))
        .then(Ids /*?*/ => Ids.forEach(element => {
            $("#videos").append(`<iframe src="https://www.youtube.com/embed/${element}" />`);
        }));
}

$("#videoTitle").on("keydown", _.debounce(doTheSearch, 200));







// $('#videoTitle').on('keyup', e => {
//     const titleToSearch = e.target.value;

//     // TODO: Invoke the (debounced) search function with the title to search.
// })


// This is the main module (entry point) for the application.
//
// It implements "Youtube Instant Search", providing search results while a title is entered by the user.
//
// NOTE: You must first create a project and API key @ console.developers.google.com and enable YouTube Data API v3.
//GOOGLE API KEY AIzaSyD0jefCHJZMYT0-vGeG5Ry5KLRDjNUlHTs





// Implement a function that takes a video title entered by the user and performs a Youtube Search of type video,
// using the youtube-api-v3-search package.
//
// Read the documentation for youtube-api-v3-search for how such a search is performed. Set an extra option of 
// maxResults: 10.
//
// Inspect the results from YouTube Data API v3 to see what it returns; the goal is to fetch the videoId of 
// each video that was found (tip: use Array.map).
//
// Finally append the following HTML under #videos for each video:
//
// 

// ...
// TODO: 
//
// Use debounce in lodash to "throttle" the execution of multiple calls to the search function if they occur
// too frequently, which will happen as the user enters the title to search for. 

// ...




