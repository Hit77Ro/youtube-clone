// Unused functions 
export const formatNumber = (number) => {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number < 1000000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else {
    return (number / 1000000000).toFixed(1) + "B";
  }
}
// video duration
export const setDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedHours = hours > 0 ? `${hours}:` : "";
  return `${formattedHours}${minutes}:${(seconds % 60)
    .toString()
    .padStart(2, "0")}`;
};
