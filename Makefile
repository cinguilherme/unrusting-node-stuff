compose:
	docker-compose up

elastic-local:
	cd elastic-cluster-local && docker-compose up

build-image:
	docker build -t sample .

build-image-prod:
	docker build -t sample-prod -f Dockerfile-prod .

windock:
	wsl -d docker-desktop
	sysctl -w vm.max_map_count=262144