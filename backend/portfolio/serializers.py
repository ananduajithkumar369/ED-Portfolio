from rest_framework import serializers
from .models import Reel, Social, Poster, Project, Testimonial, Milestone, ContactChannel

class ReelSerializer(serializers.ModelSerializer):
    video_url = serializers.SerializerMethodField()

    class Meta:
        model = Reel
        fields = '__all__'

    def get_video_url(self, obj):
        if obj.video:
            return obj.video.url  # 👈 THIS is the full Cloudinary URL
        return None

class SocialSerializer(serializers.ModelSerializer):
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = Social
        fields = '__all__'

    def get_thumbnail_url(self, obj):
        if obj.thumbnail:
            return obj.thumbnail.url
        return None

class PosterSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Poster
        fields = '__all__'

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None

class ProjectSerializer(serializers.ModelSerializer):
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_thumbnail_url(self, obj):
        if obj.thumbnail:
            return obj.thumbnail.url
        return None

    def to_representation(self, instance):
        ret = super().to_representation(instance)

        # Convert comma-separated techStack string to array
        if ret.get('techStack'):
            ret['techStack'] = [
                tech.strip() for tech in ret['techStack'].split(',')
            ]
        else:
            ret['techStack'] = []

        return ret

class TestimonialSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField()

    class Meta:
        model = Testimonial
        fields = '__all__'

    def get_avatar_url(self, obj):
        if obj.avatar:
            return obj.avatar.url
        return None

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = '__all__'

class ContactChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactChannel
        fields = '__all__'
