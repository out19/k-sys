# Generated by Django 4.2.5 on 2023-10-30 16:42

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
        ("crawler", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Company",
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
                    "company_code",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("shubetsu", models.CharField(blank=True, max_length=255, null=True)),
                ("name", models.CharField(blank=True, max_length=255, null=True)),
                ("name_kana", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "postal_code",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("address", models.CharField(blank=True, max_length=255, null=True)),
                ("tel_number", models.CharField(blank=True, max_length=255, null=True)),
                ("fax_number", models.CharField(blank=True, max_length=255, null=True)),
                ("url", models.CharField(blank=True, max_length=255, null=True)),
                ("repr_name", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "repr_position",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("established_date", models.DateField(blank=True, null=True)),
                ("release_datetime", models.DateTimeField(blank=True, null=True)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Jigyosyo",
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
                ("jigyosyo_code", models.CharField(max_length=255)),
                ("type", models.CharField(blank=True, max_length=255, null=True)),
                ("name", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "postal_code",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                ("address", models.CharField(blank=True, max_length=255, null=True)),
                ("tel_number", models.CharField(blank=True, max_length=255, null=True)),
                ("fax_number", models.CharField(blank=True, max_length=255, null=True)),
                ("repr_name", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "repr_position",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "kourou_jigyosyo_url",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "kourou_release_datetime",
                    models.DateTimeField(blank=True, null=True),
                ),
                (
                    "company",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="jigyosyos",
                        to="crm.company",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="JigyosyoTransaction",
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
                ("visit_datetime", models.DateTimeField(auto_now_add=True)),
                ("content", models.TextField()),
                (
                    "jigyosyo",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="transactions",
                        to="crm.jigyosyo",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="JigyosyoManagement",
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
                ("is_sanjo", models.BooleanField(default=False)),
                (
                    "description",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "children",
                    models.ManyToManyField(
                        blank=True,
                        related_name="parental_objects",
                        to="crm.jigyosyomanagement",
                    ),
                ),
                (
                    "crawl_list",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="jigyosyos_management",
                        to="crawler.crawllist",
                    ),
                ),
                (
                    "jigyosyo",
                    models.OneToOneField(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="management",
                        to="crm.jigyosyo",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="CompanyManagement",
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
                ("description", models.TextField(blank=True, null=True)),
                (
                    "company",
                    models.OneToOneField(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="management",
                        to="crm.company",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="CustomUser",
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
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "is_superuser",
                    models.BooleanField(
                        default=False,
                        help_text="Designates that this user has all permissions without explicitly assigning them.",
                        verbose_name="superuser status",
                    ),
                ),
                (
                    "email",
                    models.EmailField(
                        max_length=254,
                        validators=[django.core.validators.EmailValidator()],
                    ),
                ),
                (
                    "username",
                    models.CharField(blank=True, max_length=60, null=True, unique=True),
                ),
                ("date_joined", models.DateTimeField(auto_now_add=True)),
                ("is_active", models.BooleanField(default=True)),
                ("is_staff", models.BooleanField(default=True)),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]