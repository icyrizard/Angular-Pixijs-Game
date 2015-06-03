build:
	docker build -t pixi-game .

run:
	docker run --rm -ti -p 8282:80 pixi-game

# inside docker
install:
	./etc/bootstrap.sh
