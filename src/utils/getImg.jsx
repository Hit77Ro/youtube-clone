function getImg(images, n) {
  
  if (images) {
    const maxIndex = n;
    for (let i = maxIndex; i >= 0; i--) {
      const url = images[i]?.url;
      if (url) {
        return url;
      }
    }
  }
  return `https://placehold.co/600x400`; // Return null if no valid URL is found
}

export default getImg;
