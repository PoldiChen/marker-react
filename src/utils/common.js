
const colors = ["red", "volcano", "orange", "gold", "yellow", "lime", "green", "cyan", "blue", "geekblue", "purple", "magenta"];

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
};

const getColor = () => {
    let index = getRandom(0, colors.length - 1);
    return colors[index];
};

export default getColor;