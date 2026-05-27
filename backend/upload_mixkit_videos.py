import os
import requests
import cloudinary
import cloudinary.uploader

# Load env variables from backend/.env manually
with open('.env', 'r') as f:
    for line in f:
        if line.strip() and not line.startswith('#'):
            key, value = line.strip().split('=', 1)
            os.environ[key.strip()] = value.strip()

cloudinary.config( 
  cloud_name = os.environ.get('CLOUDINARY_CLOUD_NAME'), 
  api_key = os.environ.get('CLOUDINARY_API_KEY'), 
  api_secret = os.environ.get('CLOUDINARY_API_SECRET') 
)

mixkit_urls = [
    "https://assets.mixkit.co/videos/preview/mixkit-gaming-controller-glowing-in-the-dark-32235-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-drone-shot-of-a-wave-breaking-on-a-sandy-beach-42323-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-at-sunset-34294-large.mp4"
]

def download_and_upload(url):
    print(f"Processing {url}...")
    filename = url.split('/')[-1]
    
    # Download
    print(f"Downloading {filename}...")
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    response = requests.get(url, stream=True, headers=headers)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
                
        # Upload
        print(f"Uploading {filename} to Cloudinary...")
        result = cloudinary.uploader.upload(
            filename, 
            resource_type="video",
            folder="portfolio/reels"
        )
        print(f"SUCCESS: {result['secure_url']}")
        
        # Cleanup
        os.remove(filename)
        return result['secure_url']
    else:
        print(f"Failed to download {url}")
        return None

if __name__ == "__main__":
    print("Starting upload script...")
    for url in mixkit_urls:
        download_and_upload(url)
    print("Done!")
