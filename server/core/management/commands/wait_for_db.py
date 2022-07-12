"""
Admin command to wait for the connection to the db
"""

import time
from psycopg2 import OperationalError as PsycoError

from django.db.utils import OperationalError
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """Command to wait for db connection"""

    def handle(self, *args, **options):

        db_available = False

        while db_available is False:
            try:
                self.check(databases=['default'])
                db_available=True
            except (PsycoError, OperationalError):
                self.stdout.write('Connetcing database...')
                time.sleep(1)
        self.stdout.write('Database Connected!')