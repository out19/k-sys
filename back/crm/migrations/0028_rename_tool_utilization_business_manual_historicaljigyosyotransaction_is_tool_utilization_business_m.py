# Generated by Django 4.2.5 on 2024-02-07 03:54

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("crm", "0027_alter_transactionstaffdetail_position"),
    ]

    operations = [
        migrations.RenameField(
            model_name="historicaljigyosyotransaction",
            old_name="tool_utilization_business_manual",
            new_name="is_tool_utilization_business_manual",
        ),
        migrations.RenameField(
            model_name="historicaljigyosyotransaction",
            old_name="tool_utilization_check_action",
            new_name="is_tool_utilization_check_action",
        ),
        migrations.RenameField(
            model_name="historicaljigyosyotransaction",
            old_name="tool_utilization_others",
            new_name="is_tool_utilization_others",
        ),
        migrations.RenameField(
            model_name="historicaljigyosyotransaction",
            old_name="tool_utilization_shibu_document",
            new_name="is_tool_utilization_shibu_document",
        ),
        migrations.RenameField(
            model_name="jigyosyotransaction",
            old_name="tool_utilization_business_manual",
            new_name="is_tool_utilization_business_manual",
        ),
        migrations.RenameField(
            model_name="jigyosyotransaction",
            old_name="tool_utilization_check_action",
            new_name="is_tool_utilization_check_action",
        ),
        migrations.RenameField(
            model_name="jigyosyotransaction",
            old_name="tool_utilization_others",
            new_name="is_tool_utilization_others",
        ),
        migrations.RenameField(
            model_name="jigyosyotransaction",
            old_name="tool_utilization_shibu_document",
            new_name="is_tool_utilization_shibu_document",
        ),
    ]
