import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.contrib.auth.models import User
from analytics.models import KPI

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
    print("Superuser 'admin' created with password 'admin'")

if not KPI.objects.exists():
    KPI.objects.create(label='Reel Reach', value='1.2M', trend='+28.4%', description='Event Management IG', order=1)
    KPI.objects.create(label='YouTube Views', value='150K', trend='+12.5%', description='Main Channel', order=2)
    KPI.objects.create(label='Followers Growth', value='42.8K', trend='+15.2%', description='Active community', order=3)
    KPI.objects.create(label='Avg Engagement', value='8.7%', trend='+1.5%', description='Industry avg: 4%', order=4)
    print("Initial KPIs created.")
