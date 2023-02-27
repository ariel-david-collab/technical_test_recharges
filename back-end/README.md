# technical_test_recharges

You can run the application with docker or locally.

## Docker

### First build the project

```shell
./mvnw clean install -DskipTests
```

### Build image

```shell
docker build -t technical_test_recharges .
```

### Run image

```shell
docker run -p 8080:8080 technical_test_recharges
```

### Run image with docker-compose

```shell
docker-compose up
```

## Requirements

For building and running the application you need:

- [JDK 11](https://www.oracle.com/co/java/technologies/javase/jdk11-archive-downloads.html)
- [Maven 3](https://maven.apache.org)
- PostgreSQL

You will need to setup your own database or create a database with the following configuration
```
spring.datasource.url=jdbc:postgresql://0.0.0.0:5432/technical-test-recharges-db
spring.datasource.username=postgres
spring.datasource.password=admin
```
## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `co.com.technical_test_recharges` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

### Running port
- default spring boot config
  http://localhost:8080/

### Swagger url
- default swagger url
  http://localhost:8080/swagger-ui/
