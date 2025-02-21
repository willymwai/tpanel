# Generated by Django 3.0.1 on 2020-04-09 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PDNSStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serverStatus', models.IntegerField(default=1)),
                ('type', models.CharField(default='NATIVE', max_length=6)),
                ('masterServer', models.CharField(default='', max_length=200)),
                ('masterIP', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='SlaveServers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slaveServer', models.CharField(default='NATIVE', max_length=200)),
                ('slaveServerIP', models.CharField(default='NATIVE', max_length=200)),
            ],
        ),
    ]
