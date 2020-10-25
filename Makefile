compose:
	docker-compose up

elastic-local:
	cd elastic-cluster-local && docker-compose up

build-image:
	docker build -t sample .

run-image:
	docker run  -p 3000:3000 sample:latest