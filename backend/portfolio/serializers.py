from rest_framework import serializers
from .models import Reel, Social, Poster, Project, Testimonial, Milestone, ContactChannel

class ReelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reel
        fields = '__all__'

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = '__all__'

class PosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poster
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Convert comma-separated techStack string to an array for the frontend
        if ret.get('techStack'):
            ret['techStack'] = [tech.strip() for tech in ret['techStack'].split(',')]
        else:
            ret['techStack'] = []
        return ret

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = '__all__'

class ContactChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactChannel
        fields = '__all__'
