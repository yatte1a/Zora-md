FROM node:lts-buster as builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .

FROM node:lts-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg imagemagick webp && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /app /app

RUN useradd -m appuser
USER appuser

EXPOSE 8000
CMD ["node", "start.js"]