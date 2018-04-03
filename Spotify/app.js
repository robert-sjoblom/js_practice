/* global API_URL, IMAGE_NA_URL, AUTH_TOKEN */
$("#search-start").on("click", function () {
    const type = $("#search-type").val();
    const text = $("#search-text").val();

    search(type, text, ((result, error) => {
        if (error) {
            $("#search-results").append(error);
        } else {
            $("#search-results").append(
                result.map(val => {
                    let image = val["images"][0].url || IMAGE_NA_URL;
                    return `<div class="search-result"><div class="search-result-info">
                        <p>${val.name}</p>
                        <a href="${val.uri}">Open in Spotify</a></div>
                    <img src="${image}"></div>`;
                })
                    .join("")
            );
        }
    }));
    $("#search-text").val("");
});

$("#search-text").on("keydown", function (e) {
    if ((e.keyCode || e.which) === 13) {
        $("#search-start").trigger("click");
    }
});

const headers = {
    "Accept": "application/json",
    "Authorization": `Bearer ${AUTH_TOKEN}`
};

function search(type, text, fn) {
    fetch(`${API_URL}${text}&type=${type}`, { headers })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((val) => processData(type, val))
        .then(val => fn(val, null))
        .catch(error => fn(null, error));
}

function processData(type, val) {
    return new Promise((resolve) => {
        let res = (type === "artist") ? "artists" : "tracks";
        let result = [];
        val[res].items.forEach(element => {
            result.push(
                {
                    name: element.name,
                    uri: element.uri,
                    images: element.images
                }
            );
        });
        resolve(result);
    });
}