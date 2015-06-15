.PHONY: build

ARGUMENTS=
ARGUMENTS+= -v ./etc/:/app/etc/

DIR=$(shell pwd)

build:
	docker build -t pixi-game .

run:
	docker run --rm -ti -p 8282:80 -v $(DIR)/src/:/app/src/ pixi-game

# inside docker
install:
	./etc/bootstrap.sh
