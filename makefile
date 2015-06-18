.PHONY: build

ARGUMENTS=
ARGUMENTS+= -v ./etc/:/app/etc/

DIR=$(shell pwd)
DEPLOY_PATH=/var/www/richard.kompiler.org/tapdance/

build:
	docker build -t pixi-game .

run:
	docker run --rm -ti -p 8282:80 -v $(DIR)/src/:/app/src/ pixi-game

deploy:
	docker run --rm -ti -v $(DEPLOY_PATH):/app/build/ pixi-game grunt watch

# inside docker
install:
	./etc/bootstrap.sh
