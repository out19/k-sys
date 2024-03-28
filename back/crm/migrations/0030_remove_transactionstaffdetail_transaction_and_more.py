# Generated by Django 4.2.5 on 2024-02-07 04:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0029_transactionreceptionistdetail"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="transactionstaffdetail",
            name="transaction",
        ),
        migrations.AddField(
            model_name="historicaljigyosyotransaction",
            name="receptionist",
            field=models.JSONField(blank=True, default=list, null=True),
        ),
        migrations.AddField(
            model_name="historicaljigyosyotransaction",
            name="visit_staff",
            field=models.JSONField(blank=True, default=list, null=True),
        ),
        migrations.AddField(
            model_name="jigyosyotransaction",
            name="receptionist",
            field=models.JSONField(blank=True, default=list, null=True),
        ),
        migrations.AddField(
            model_name="jigyosyotransaction",
            name="visit_staff",
            field=models.JSONField(blank=True, default=list, null=True),
        ),
        migrations.DeleteModel(
            name="TransactionReceptionistDetail",
        ),
        migrations.DeleteModel(
            name="TransactionStaffDetail",
        ),
    ]