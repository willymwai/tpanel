#!/bin/bash

yum install git -y
git clone https://github.com/willymwai/cyberpanel.git
cd cyberpanel
sh install.sh << 'EOF'
1
1
Y
2.0.0
d
Y
Y
Yes
y
EOF
