# Generated by Django 4.0.6 on 2022-11-10 15:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_order_profile_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='profile_id',
            new_name='profile',
        ),
    ]
