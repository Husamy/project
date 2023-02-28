FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /timestamp
COPY requirements.txt /timestamp/
RUN pip install -r requirements.txt
COPY . /timestamp/
