#!/bin/bash

yum install git -y
git clone https://github.com/willymwai/cyberpanel.git
cd cyberpanel
sh install.sh << 'EOF'
1
1
Y
2.0.0
s
c4@qZ0Y6Fb7D
c4@qZ0Y6Fb7D
Y
Y
Yes
y
EOF
