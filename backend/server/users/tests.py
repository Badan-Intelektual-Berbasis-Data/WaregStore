from django.test import TestCase
from .models import User


# Create your tests here.
class UserTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(
            name="Moh Faisal",
            email="mfhaisall@gmail.com",
            phone=123456789,
            address="Jalan Jalan",
            is_admin=True,
        )

        user.set_password("halosayangku")
        user.save()



    def test_user_is_registered(self):
        user = User.objects.filter(name="Moh Faisal")

        self.assertEqual(len(user), 1)


    def test_password_is_hashed(self):
        user = User.objects.get(name="Moh Faisal")

        self.assertTrue(user.check_password("halosayangku"))






