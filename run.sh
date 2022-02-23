#!/bin/bash

case "$1" in
  "setup")
     echo "1. Set up Commitizen globally:";
     echo "   $ sudo npm install commitizen -g";
     sudo npm install commitizen -g;

     echo "2. Install deps:";
     echo "   $ npm install";
     npm install;
esac
