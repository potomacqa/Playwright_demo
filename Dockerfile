# Official Playwright image (recommended by Microsoft)
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Run Playwright tests (headless by default)
CMD ["npx", "playwright", "test"]
