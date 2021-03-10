# Use an image with the SDK for compilation
FROM openjdk:8-jdk-alpine AS builder
WORKDIR /out
# Get the source code inside the image 
COPY *.java .
# Compile source code
RUN javac Hello.java

# Create a lightweight image 
FROM openjdk:8-jre-alpine
# Copy compiled artifacts from previous image
COPY --from=builder /out/*.class .
CMD ["java", "Hello"]