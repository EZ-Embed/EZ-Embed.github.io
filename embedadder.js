const searchParams = new URLSearchParams(window.location.search);

function makediscordembedtag(property, content) {
    var tag = document.createElement('meta');
    tag.setAttribute('property','og:'+property);
    tag.setAttribute('content',content);
    return tag;
}

searchParams.forEach((value, property) => {
    document.head.append(makediscordembedtag(property,decodeURIComponent(value)));
});