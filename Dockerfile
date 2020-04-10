FROM node:13.12.0-alpine as client

WORKDIR /usr/tpanel/client/
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

FROM python:3.6
WORKDIR /usr/tpanel/
COPY --from=client /usr/tpanel/client/build/ ./client/build/
ENV PYTHONUNBUFFERED 1
WORKDIR /usr/tpanel
COPY requirements.txt /tpanel/
RUN pip install -r requirements.txt
COPY . /tpanel/


RUN python manage.py collectstatic --noinput

RUN ["chmod", "+x", "./start_services.sh"]

EXPOSE 8000

CMD ./start_services.sh