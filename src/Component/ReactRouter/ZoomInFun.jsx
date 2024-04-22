export const ZoomIn = (url) => {
    document.documentElement.style.setProperty("--scale","1");
    document.documentElement.style.setProperty("--imagUrl",`url(${url})`);
    console.log(url)
}
export const ZoomOut = () => {
    document.documentElement.style.setProperty("--scale","0");
}