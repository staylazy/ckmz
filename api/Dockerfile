FROM  python:3.11.6-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /ckmz

RUN pip install django django-rest-framework django-cors-headers psycopg2

# copy from the current directory of the Dockerfile to /api in the image
COPY . . 

EXPOSE 8000