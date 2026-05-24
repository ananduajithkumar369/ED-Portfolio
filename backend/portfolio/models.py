from django.db import models

class BaseWork(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    thumbnail = models.URLField(max_length=500, blank=True)
    thumbnail_file = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    reach = models.CharField(max_length=50, blank=True)
    engagement = models.CharField(max_length=50, blank=True)
    link = models.URLField(max_length=500, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']

class Reel(BaseWork):
    videoUrl = models.URLField(max_length=500, blank=True)
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)

    def __str__(self):
        return f"Reel: {self.title}"

class Social(BaseWork):
    def __str__(self):
        return f"Social: {self.title}"

class Poster(BaseWork):
    poster_file = models.ImageField(upload_to='posters/', blank=True, null=True)
    def __str__(self):
        return f"Poster: {self.title}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    thumbnail = models.URLField(max_length=500, blank=True)
    thumbnail_file = models.ImageField(upload_to='projects/', blank=True, null=True)
    description = models.TextField(blank=True)
    techStack = models.CharField(max_length=300, help_text="Comma separated technologies")
    github = models.URLField(max_length=500, blank=True)
    demo = models.URLField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Project: {self.title}"

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    feedback = models.TextField()
    avatar = models.URLField(max_length=500, blank=True)
    avatar_file = models.ImageField(upload_to='avatars/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Testimonial from {self.name}"

class Milestone(models.Model):
    year = models.CharField(max_length=100)
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    desc = models.TextField()
    order = models.IntegerField(default=0, help_text="Order in which it appears (lower numbers first)")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Milestone"
        verbose_name_plural = "Milestones"

    def __str__(self):
        return f"{self.year} - {self.role} @ {self.company}"

class ContactChannel(models.Model):
    name = models.CharField(max_length=100)
    value = models.CharField(max_length=200)
    desc = models.TextField()
    link = models.URLField(max_length=500, blank=True)
    icon_name = models.CharField(max_length=50, help_text="e.g., Instagram, Linkedin, Mail, Phone")
    color_classes = models.CharField(max_length=200, help_text="Tailwind hover colors and shadows")
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"Contact Channel: {self.name}"
