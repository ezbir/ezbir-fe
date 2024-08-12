# Базовий образ Node.js
FROM node:18-alpine

# Встановлення робочого каталогу
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання решти файлів додатку
COPY . .

# Побудова додатку
RUN npm run build

# Встановлення змінного оточення для Next.js
ENV PORT 3000

# Викриття порту 3000
EXPOSE 3000

# Запуск додатку
CMD ["npm", "start"]
