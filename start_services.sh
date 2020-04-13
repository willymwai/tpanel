#!/bin/bash

mkdir /usr/local/CyberCP
cp -r /usr/local/bin/ /usr/local/CyberCP/bin/
cp -r /usr/tpanel/* /usr/local/CyberCP/
touch /etc/redhat-release

python manage.py migrate
export C_FORCE_ROOT="true"
gunicorn CyberCP.wsgi -b 0.0.0.0:8000 -w 2 -t 240