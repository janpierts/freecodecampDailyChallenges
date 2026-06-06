function generateHex(color) {
    const validColors = ["red", "green", "blue"];

    if (!validColors.includes(color.toLowerCase())) {
        return "Invalid color";
    }

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const toHexStr = (num) => num.toString(16).toUpperCase().padStart(2, '0');
    let dominantVal = getRandomInt(180, 255);
    let otherVal1 = getRandomInt(0, 150);
    let otherVal2 = getRandomInt(0, 150);
    let r, g, b;
    if (color === "red") {
        r = dominantVal;
        g = otherVal1;
        b = otherVal2;
    } else if (color === "green") {
        r = otherVal1;
        g = dominantVal;
        b = otherVal2;
    } else if (color === "blue") {
        r = otherVal1;
        g = otherVal2;
        b = dominantVal;
    }
    return `${toHexStr(r)}${toHexStr(g)}${toHexStr(b)}`;
}
