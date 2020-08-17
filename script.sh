#!/bin/bash

echo Script para levantar el Proyecto final de la asignatura Desarrollo de Aplicaciones Multiplataforma
echo 1/3- Levantamos el backend
 ( cd backend && docker-compose up &  )
echo 2/3- Esperamos 20 segundos para levnantar frontend
sleep 20s
echo 3/3- Levantamos el frontend
( cd frontend && ionic serve  )


