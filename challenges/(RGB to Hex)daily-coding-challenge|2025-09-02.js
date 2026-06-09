function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g);

  const r = parseInt(rgbValues[0]);
  const g = parseInt(rgbValues[1]);
  const b = parseInt(rgbValues[2]);

  const toHex = (channel) => {
    return channel.toString(16).padStart(2, '0');
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}
