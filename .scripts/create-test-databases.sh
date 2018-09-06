#!/bin/bash
#
# Creates the test databases.
#
# This script requires a MySQL service, with the default super user, where the test 
# databases will be created.

set -o nounset
set -e

# MySQL tables
mysql -e "create database IF NOT EXISTS symbaroum_toolkit_webapp;" -uroot

# PostgreSQL tables
psql -c 'create database symbaroum_toolkit_webapp;' -U postgres

exit 0