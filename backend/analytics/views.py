from rest_framework import viewsets
from .models import KPI
from .serializers import KPISerializer

class KPIViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows KPIs to be viewed.
    """
    queryset = KPI.objects.all()
    serializer_class = KPISerializer
