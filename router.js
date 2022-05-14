export const goTo = (url) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new CustomEvent('route_change', null));
}