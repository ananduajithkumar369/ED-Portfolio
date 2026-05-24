import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Milestone

milestones = [
  {
    'year': '2025 - Present',
    'role': 'Lead Editor & SMM Consultant',
    'company': 'Tech Hub Academy & Brands',
    'desc': 'Directed vertical video content pipelines resulting in 1.2M+ organic impressions. Structured standard aesthetic brand grids, scheduled custom calendars, and expanded follower counts by +340% within 30 days.',
    'order': 1
  },
  {
    'year': '2024 - 2025',
    'role': 'Full-Stack Developer (Freelance)',
    'company': 'AeroVibe & College Portal',
    'desc': 'Architected multiple responsive Django web systems, connecting custom SQLite layers to React UIs. Embedded ML YOLO object detection APIs with text-to-speech audio outputs for visual assistance.',
    'order': 2
  },
  {
    'year': '2023 - 2024',
    'role': 'Motion Graphics Designer',
    'company': 'Techno Fest Event Agency',
    'desc': 'Produced neo-brutalist cyberpunk event posters and intro video reels. Integrated high-octane foley effects and custom speed curves to command 15K+ physical views and high conversions.',
    'order': 3
  }
]

for m in milestones:
    Milestone.objects.create(**m)
    print(f"Created: {m['role']}")

print("All milestones populated successfully!")
