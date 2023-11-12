FROM  python:3.11.6-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /ckmz/api

RUN pip install django django-rest-framework django-cors-headers psycopg2

COPY . /ckmz/api/

EXPOSE 8000