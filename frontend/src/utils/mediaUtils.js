const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'df0tt0qsf';

export const getMediaUrl = (path, type = 'image') => {
  if (!path) return '';
  
  // If it's already a full HTTP URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    // Legacy support for Google Drive URLs from original getDirectUrl
    const driveMatch = path.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) {
      if (type === 'video') {
        return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
      } else {
        return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000`;
      }
    }
    return path;
  }
  
  // Clean up leading slashes if any
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Determine base URL
  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${type}/upload/`;
  
  // If the path already includes image/upload/ or video/upload/
  if (cleanPath.startsWith(`${type}/upload/`)) {
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${cleanPath}`;
  }
  
  return `${baseUrl}${cleanPath}`;
};
