FROM oven/bun:1.0-slim
WORKDIR /app
COPY package.json .
RUN bun i
COPY . .
CMD ["bun", "dev", "--host", "0.0.0.0", "--port", "3000"]
