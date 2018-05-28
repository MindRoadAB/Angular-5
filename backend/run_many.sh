#!/bin/bash
PORTS="9000 9001 9002 9003 9004 9005 9006 9007 9008 9010 9011 9012 9013"
for PORT in $PORTS; do
    java -jar target/backend-1.0-jar-with-dependencies.jar $PORT &
done
