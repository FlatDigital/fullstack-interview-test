from rest_framework import routers

from branch.urls import router as branch_router

router = routers.DefaultRouter()
router.registry.extend(branch_router.registry)

app_name = 'api'

urlpatterns = [
    *router.urls,
]