import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Reel, Social, Poster, Project, Testimonial

def initialize_db():
    if not Reel.objects.exists():
        Reel.objects.create(
            title='Gaming Montage - Cyberpunk style',
            category='Reel Editing',
            reach='125K',
            engagement='18.4K Likes',
            link='https://instagram.com/anandu',
            description='Dynamic keyframing, beat-matching audio syncing, cyber neon color grading, and velocity edits.'
        )
        Reel.objects.create(
            title='Travel Reel - Vagamon Vibe',
            category='Reel Editing',
            reach='89K',
            engagement='12.1K Likes',
            link='https://instagram.com/anandu',
            description='Foley sound design, atmospheric color mapping, speed ramps, and seamless masking transitions.'
        )
        Reel.objects.create(
            title='Automotive Cinematic - Beast Unleashed',
            category='Reel Editing',
            reach='250K',
            engagement='32.8K Likes',
            link='https://instagram.com/anandu',
            description='High-octane soundscape design, visual shake effects, aggressive color-grading, and camera tracking.'
        )

    if not Social.objects.exists():
        Social.objects.create(
            title='Tech Hub Academy',
            category='Social Media Management',
            reach='1.2M Impressions',
            engagement='340% Growth',
            link='https://instagram.com/anandu',
            description='End-to-end content calendar design, captioning, hashtag strategies, and high-conversion Reels editing.'
        )
        Social.objects.create(
            title='Cafe Delight Brand Campaign',
            category='Social Media Management',
            reach='650K Reach',
            engagement='500K+ Views',
            link='https://instagram.com/anandu',
            description='Shot on-site video creatives, styled aesthetic Instagram story frames, and ran micro-influencer events.'
        )

    if not Poster.objects.exists():
        Poster.objects.create(
            title='Techno Fest 2026 - Main Stage',
            category='Posters & Creatives',
            reach='12K Views',
            engagement='1.5K Saves',
            link='https://instagram.com/anandu',
            description='Neo-brutalist cyberpunk poster design for College techno-cultural festival event.'
        )
        Poster.objects.create(
            title='Creative Brand Identity - AeroVibe',
            category='Posters & Creatives',
            reach='8.5K Views',
            engagement='800 Shares',
            link='https://instagram.com/anandu',
            description='Minimalist and clean vector brand identities with neon glow elements.'
        )

    if not Project.objects.exists():
        Project.objects.create(
            title='College Portal System',
            description='A comprehensive Academic Management Platform with real-time mark calculation, attendance tracking, and syllabus organizer. Built for college administration and students.',
            techStack='Django, React, PostgreSQL, Tailwind CSS',
            github='https://github.com/anandu',
            demo='https://github.com/anandu',
            category='Developer Projects',
        )
        Project.objects.create(
            title='Indoor Object Detection with Voice Feedback',
            description='A deep learning AI tool built using YOLOv8 for visually impaired users. It detects obstacles in a room and gives real-time localized audio guidance via text-to-speech.',
            techStack='Python, YOLOv8, OpenCV, Pyttsx3',
            github='https://github.com/anandu',
            demo='https://github.com/anandu',
            category='Developer Projects',
        )
        Project.objects.create(
            title='K-Means Clustering Image Compressor',
            description='An algorithmic project that performs image compression by grouping similar pixel colors together into K clusters using custom ML math, showing visual compression rates.',
            techStack='Python, Scikit-Learn, NumPy, Matplotlib',
            github='https://github.com/anandu',
            demo='https://github.com/anandu',
            category='Developer Projects',
        )

    if not Testimonial.objects.exists():
        Testimonial.objects.create(
            name='Nitin Thomas',
            role='Co-Founder, Tech Hub Academy',
            feedback='Anandu is a wizard when it comes to visual storytelling. He turned our boring slides into viral Instagram reels that brought in 15k followers in a single month! Highly professional developer and editor.',
        )
        Testimonial.objects.create(
            name='Sreelakshmi K.',
            role='Event Coordinator, Techno Fest',
            feedback='The poster designs were absolute fire! He blended neon synthwave elements with perfect typographic hierarchy. Also helped automate our booking database on the fly. 10/10 developer designer combo!',
        )

    print("Portfolio database initialized with mock data.")

if __name__ == '__main__':
    initialize_db()
