from rest_framework import routers

from branch.views import BranchViewSet


router = routers.SimpleRouter()
router.register(r'branch', BranchViewSet, basename='branch')