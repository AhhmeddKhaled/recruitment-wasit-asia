export const sound = (path) => {
    const audio = new Audio(path);
    audio.play();
}