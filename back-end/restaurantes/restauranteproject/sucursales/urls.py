from django.urls import path
from . import views

urlpatterns = [
    path("",views.SucursalListAPIView.as_view(),name="Lista_sucursal"),
    path("<int:id>/",views.SucursalRetrieveAPIView.as_view(),name="detail_sucursal"),
    path("create/",views.SucursalCreateAPIView.as_view(),name="create_sucursal"),
    path("update/<int:id>/",views.SucursalRetrieUpdateveAPIView.as_view(),name="update_sucursal"),
    path("delete/<int:id>/",views.SucursalDestroyAPIView.as_view(),name="delete_sucursal"),
] 