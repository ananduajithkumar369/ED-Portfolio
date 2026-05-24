from django.contrib import admin
from .models import Reel, Social, Poster, Project, Testimonial, Milestone, ContactChannel

@admin.register(Reel)
class ReelAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'reach', 'engagement')
    search_fields = ('title', 'category')

@admin.register(Social)
class SocialAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'reach', 'engagement')
    search_fields = ('title', 'category')

@admin.register(Poster)
class PosterAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'reach', 'engagement')
    search_fields = ('title', 'category')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'techStack')
    search_fields = ('title', 'techStack')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')
    search_fields = ('name', 'role')

@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('year', 'role', 'company', 'order')
    list_editable = ('order',)
    search_fields = ('role', 'company')

@admin.register(ContactChannel)
class ContactChannelAdmin(admin.ModelAdmin):
    list_display = ('name', 'value', 'icon_name', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'value')
