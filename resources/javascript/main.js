/*
    Turns all my <div> into links

    Hidden attribute <a> is first child and contains the URL
    code below grabs it and opens the page when the div is clicked
    Does this for every div on the page
*/

function addPreviewLinks() {
    let previewLink = document.getElementsByClassName('link');

    function divLink(e) {
        let link = this.firstElementChild.innerText

        console.log(link);
        window.location.assign(link);
    }

    for (i = 0; i < previewLink.length; i++) {
        let parent = previewLink[i].parentElement;
        parent.addEventListener('click', divLink);
    }
}

addPreviewLinks();