# Generated by Django 4.2.5 on 2024-01-18 11:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0012_historicaljigyosyotransaction_file_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="historicaljigyosyo",
            name="custom_code",
            field=models.CharField(
                blank=True, db_index=True, max_length=255, null=True
            ),
        ),
        migrations.AddField(
            model_name="historicaljigyosyotransaction",
            name="_jigyosyo_custom_code",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="jigyosyo",
            name="custom_code",
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AddField(
            model_name="jigyosyotransaction",
            name="_jigyosyo_custom_code",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
