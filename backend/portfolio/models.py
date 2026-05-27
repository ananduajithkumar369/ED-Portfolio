from django.db import models
from cloudinary.models import CloudinaryField


# -------------------------
# BASE MODEL
# -------------------------
class BaseWork(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    reach = models.CharField(max_length=50, blank=True)
    engagement = models.CharField(max_length=50, blank=True)
    link = models.URLField(max_length=500, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']

    def __str__(self):
        return self.title


# -------------------------
# REELS (VIDEO)
# -------------------------
class Reel(BaseWork):
    video = CloudinaryField(
    resource_type='video',
    blank=True,
    null=True
)

    def __str__(self):
        return f"Reel: {self.title}"


# -------------------------
# SOCIAL
# -------------------------
class Social(BaseWork):
    thumbnail = CloudinaryField('image', blank=True, null=True)
    def __str__(self):
        return f"Social: {self.title}"


# -------------------------
# POSTER (IMAGE)
# -------------------------
class Poster(BaseWork):
    image = CloudinaryField('image', blank=True, null=True)

    def __str__(self):
        return f"Poster: {self.title}"


# -------------------------
# PROJECT
# -------------------------
class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)

    thumbnail = CloudinaryField('image', blank=True, null=True)

    description = models.TextField(blank=True)
    techStack = models.CharField(max_length=300, help_text="Comma separated technologies")
    github = models.URLField(max_length=500, blank=True)
    demo = models.URLField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


# -------------------------
# TESTIMONIAL
# -------------------------
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    feedback = models.TextField()

    avatar = CloudinaryField('image', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Testimonial from {self.name}"


# -------------------------
# MILESTONE
# -------------------------
class Milestone(models.Model):
    year = models.CharField(max_length=100)
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    desc = models.TextField()
    order = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Milestone"
        verbose_name_plural = "Milestones"

    def __str__(self):
        return f"{self.year} - {self.role} @ {self.company}"


# -------------------------
# CONTACT CHANNEL
# -------------------------
class ContactChannel(models.Model):
    name = models.CharField(max_length=100)
    value = models.CharField(max_length=200)
    desc = models.TextField()
    link = models.URLField(max_length=500, blank=True)
    icon_name = models.CharField(max_length=50)
    color_classes = models.CharField(max_length=200)
    order = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Contact Channel: {self.name}"