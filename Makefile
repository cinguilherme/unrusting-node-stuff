compose:
	sudo docker-compose up

elastic-local:
	cd elastic-cluster-local && sudo docker-compose up

build-image:
	sudo docker build -t sample .

run-image:
	sudo docker run sample:latest