FROM eclipse-temurin:17-jdk

WORKDIR /app

# copy entire project
COPY . .

# go into backend where Spring Boot exists
WORKDIR /app/backend

RUN chmod +x mvnw && ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/*.jar"]
