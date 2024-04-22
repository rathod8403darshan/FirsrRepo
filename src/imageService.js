export const imageZoomIn = (url)=>{
    // document.documentElement.style.setProperty('--displayImg', 'flex')
    document.documentElement.style.setProperty('--imagUrl', `url(${url})`);
    document.documentElement.style.setProperty('--scale', 1);
}
export const ImageZoomOut=()=>{
    document.documentElement.style.setProperty('--scale', 0);
}