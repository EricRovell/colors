export default function contrast({ rgb: { r, g, b }, darkColor = "#000", lightColor = "FFF" }) {
  const rgb = [ r, g, b ].map(value => {
    const normalized = value / 255;
    if (normalized <= 0.03928) {
      return normalized / 12.92;
    } else {
      return ((normalized + 0.055) / 1.055) ** 2.4;
    }
  });

  const lightness = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];

  return (lightness > 0.179)
    ? darkColor
    : lightColor;
}
