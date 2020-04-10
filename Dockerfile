FROM node:13.12.0-alpine as client

WORKDIR /usr/client/
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

FROM python:3.6
WORKDIR /usr/tpanel/
COPY --from=client /usr/client/build/ ./client/build/
ENV PYTHONUNBUFFERED 1
RUN apt-get update
RUN apt-get install python-gpgme
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./


RUN python manage.py collectstatic --noinput

RUN ["chmod", "+x", "./start_services.sh"]

EXPOSE 8000

CMD ./start_services.sh