#!/bin/bash
CONTAINER_NAME=mysql-server
NETWORK_NAME=$1
DATABASE_DIR2=`realpath $2`
DATABASE_DIR=`realpath $3`

echo "Init MySQL 5.7 {container:$CONTAINER_NAME, network:$NETWORK_NAME, db:$DATABASE_DIR}"

docker run --rm -it --name $CONTAINER_NAME --network $NETWORK_NAME -e MYSQL_ROOT_PASSWORD=userpass -v $DATABASE_DIR:/var/lib/mysql -v $DATABASE_DIR2:/docker-entrypoint-initdb.d mysql:5.7

