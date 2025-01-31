import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'imran.settings')
import django
django.setup()
from first.models import Profile

from faker import Faker
def handle():
        fake = Faker()
        for _ in range(100):  # Create 100 fake profiles
            Profile.objects.create(
                name=fake.name(),
                email=fake.email(),
                address=fake.address(),
                phone_number=fake.phone_number(),
            )
        
handle()
