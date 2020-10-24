compose:
	sudo docker-compose up

build-image:
	sudo docker build -t sample .

run-image:
	sudo docker run sample:latest