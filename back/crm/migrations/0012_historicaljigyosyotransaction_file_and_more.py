# Generated by Django 4.2.5 on 2024-01-11 06:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0011_alter_historicaljigyosyotransaction_keikei_kubun_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="historicaljigyosyotransaction",
            name="file",
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="jigyosyotransaction",
            name="file",
            field=models.FileField(blank=True, null=True, upload_to=""),
        ),
    ]
