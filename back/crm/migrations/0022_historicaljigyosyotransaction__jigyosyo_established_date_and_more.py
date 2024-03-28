# Generated by Django 4.2.5 on 2024-01-31 07:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0021_historicaljigyosyotransaction__company_name_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="historicaljigyosyotransaction",
            name="_jigyosyo_established_date",
            field=models.DateField(blank=True, null=True, verbose_name="事業所開業日"),
        ),
        migrations.AddField(
            model_name="jigyosyotransaction",
            name="_jigyosyo_established_date",
            field=models.DateField(blank=True, null=True, verbose_name="事業所開業日"),
        ),
    ]