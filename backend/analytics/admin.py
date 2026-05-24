from django.contrib import admin
from .models import KPI

@admin.register(KPI)
class KPIAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'trend', 'order')
    list_editable = ('value', 'trend', 'order')
    ordering = ('order',)
