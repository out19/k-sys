# Generated by Django 4.2.5 on 2024-02-07 02:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "crm",
            "0026_remove_historicaljigyosyotransaction_with_tool_utilization_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="transactionstaffdetail",
            name="position",
            field=models.CharField(
                blank=True,
                choices=[
                    ("branch_manager", "支部長"),
                    ("instructor", "インストラクター"),
                    ("advisor", "アドバイザー"),
                    ("others", "その他"),
                ],
                max_length=50,
                null=True,
                verbose_name="役職",
            ),
        ),
    ]
