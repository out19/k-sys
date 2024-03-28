# Generated by Django 4.2.5 on 2024-02-07 04:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        (
            "crm",
            "0028_rename_tool_utilization_business_manual_historicaljigyosyotransaction_is_tool_utilization_business_m",
        ),
    ]

    operations = [
        migrations.CreateModel(
            name="TransactionReceptionistDetail",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "staff_name",
                    models.CharField(
                        blank=True, max_length=255, null=True, verbose_name="対応者"
                    ),
                ),
                (
                    "position",
                    models.CharField(
                        blank=True, max_length=50, null=True, verbose_name="役職"
                    ),
                ),
                (
                    "transaction",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="receptionist_details",
                        to="crm.jigyosyotransaction",
                    ),
                ),
            ],
        ),
    ]
