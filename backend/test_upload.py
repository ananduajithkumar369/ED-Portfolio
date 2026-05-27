import os; import django; os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings'); os.environ['DEBUG'] = 'True'; django.setup(); from django.contrib.admin.sites import site; from django.test import RequestFactory; from portfolio.models import Reel; from portfolio.admin import ReelAdmin; from django.core.files.uploadedfile import SimpleUploadedFile; f = SimpleUploadedFile('test.mp4', b'file_content', content_type='video/mp4'); req = RequestFactory().post('/admin/portfolio/reel/3/change/', {'title': 'Test', 'category': 'Test', 'video': f, '_continue': 'Save and continue editing'}); req.user = django.contrib.auth.models.User.objects.create_superuser('admin9', 'a9@a.com', 'p'); req._dont_enforce_csrf_checks = True; req._messages = django.contrib.messages.storage.default_storage(req); r = Reel.objects.first(); admin = ReelAdmin(Reel, site);

try:
    res = admin.changeform_view(req, object_id=str(r.id));
    print('STATUS:', res.status_code);
except Exception as e:
    import traceback;
    traceback.print_exc()
