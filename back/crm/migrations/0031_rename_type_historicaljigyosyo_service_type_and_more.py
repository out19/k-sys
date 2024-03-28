# Generated by Django 4.2.5 on 2024-02-27 04:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0030_remove_transactionstaffdetail_transaction_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="historicaljigyosyo",
            old_name="type",
            new_name="service_type",
        ),
        migrations.RenameField(
            model_name="historicaljigyosyotransaction",
            old_name="_jigyosyo_type",
            new_name="_jigyosyo_service_type",
        ),
        migrations.RenameField(
            model_name="jigyosyo",
            old_name="type",
            new_name="service_type",
        ),
        migrations.RenameField(
            model_name="jigyosyotransaction",
            old_name="_jigyosyo_type",
            new_name="_jigyosyo_service_type",
        ),
        migrations.AddField(
            model_name="historicaljigyosyo",
            name="number_of_capacity",
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="jigyosyo",
            name="number_of_capacity",
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
