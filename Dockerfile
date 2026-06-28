FROM mcr.microsoft.com/playwright:v1.59.1-jammy

WORKDIR /app

COPY . .

RUN npm ci

CMD ["npx","playwright","test"]