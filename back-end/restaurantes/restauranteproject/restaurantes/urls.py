from django.urls import path
from . import views

urlpatterns = [
    path("",views.RestauranteListAPIView.as_view(),name="Lista_restaurantes"),
    path("<int:id>/",views.RestauranteRetrieveAPIView.as_view(),name="detail_restaurantes"),
    path("create/",views.RestauranteCreateAPIView.as_view(),name="create_restaurante"),
    path("update/<int:id>/",views.RestauranteRetrieUpdateveAPIView.as_view(),name="update_restaurante"),
    path("delete/<int:id>/",views.RestauranteDestroyAPIView.as_view(),name="delete_restaurante"),
] 