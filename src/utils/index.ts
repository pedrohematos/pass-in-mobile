export function hexToRgba(hex: string, alpha: number) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const opacity = alpha / 100;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
