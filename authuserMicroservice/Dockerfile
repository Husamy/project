FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /authuser
COPY requirements.txt /authuser/
RUN pip install -r requirements.txt
COPY . /authuser/
