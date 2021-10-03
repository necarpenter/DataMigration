"""Setup configuration and dependencies for api_datamigration."""

from setuptools import find_packages
from setuptools import setup


REQUIREMENTS = [requirement for requirement in open("requirements.txt").readlines()]

COMMANDS = [
    "example_command=api_datamigration.tools.example:main",
    "start_api_server=api_datamigration.app:main",
]

setup(
    name="api_datamigration",
    version="0.0.0.alpha0",
    author="Nate Carpenter",
    author_email="necarpenter@gmail.com",
    url="",
    include_package_data=True,
    description="Basic App for Migrating Data into Salesforce",
    packages=find_packages('src'),
    package_dir={
        '': 'src',
    },
    python_requires=">=3.6.6",
    entry_points={"console_scripts": COMMANDS},
    install_requires=REQUIREMENTS,
)
