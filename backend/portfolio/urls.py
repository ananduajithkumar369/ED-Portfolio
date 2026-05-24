from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReelViewSet, SocialViewSet, PosterViewSet, ProjectViewSet, TestimonialViewSet, MilestoneViewSet, ContactChannelViewSet

router = DefaultRouter()
router.register(r'reels', ReelViewSet)
router.register(r'socials', SocialViewSet)
router.register(r'posters', PosterViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'milestones', MilestoneViewSet)
router.register(r'contact-channels', ContactChannelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
