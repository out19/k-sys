from django.core.management.base import BaseCommand
from crawler.libs import scrape_list


class Command(BaseCommand):
    help = "Run the scrape_list.run function with an optional argument"

    def add_arguments(self, parser):
        # Optional arguments
        parser.add_argument(
            "--arg",
            type=str,
            help="An optional argument for the run function",
            default=None,
        )

    def handle(self, *args, **kwargs):
        arg_value = kwargs["arg"]
        if arg_value:
            run(arg_value)
            self.stdout.write(
                self.style.SUCCESS(
                    f"Function executed with argument: {arg_value}")
            )
        else:
            scrape_list.run()
            self.stdout.write(
                self.style.SUCCESS(f"Function executed without an argument")
            )
