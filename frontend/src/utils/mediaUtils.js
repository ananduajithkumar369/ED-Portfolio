export const getMediaUrl = (path) => {
  if (!path) return undefined;

  if (path.startsWith("http")) {
    return path;
  }

  return `https://res.cloudinary.com/df0tt0qsf/${path}`;
};
