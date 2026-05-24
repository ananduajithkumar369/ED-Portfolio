from rest_framework import viewsets
from .models import Reel, Social, Poster, Project, Testimonial, Milestone, ContactChannel
from .serializers import ReelSerializer, SocialSerializer, PosterSerializer, ProjectSerializer, TestimonialSerializer, MilestoneSerializer, ContactChannelSerializer

class ReelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Reel.objects.all()
    serializer_class = ReelSerializer

class SocialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Social.objects.all()
    serializer_class = SocialSerializer

class PosterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Poster.objects.all()
    serializer_class = PosterSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class MilestoneViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer

class ContactChannelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactChannel.objects.all()
    serializer_class = ContactChannelSerializer
