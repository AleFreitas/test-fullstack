FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

RUN pip install pytest

EXPOSE 5000

CMD ["python", "main.py"]
