from django.db import models

class KPI(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    trend = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    order = models.IntegerField(default=0, help_text="Order in which it appears on the dashboard")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.label}: {self.value}"
