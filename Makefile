.PHONY: start decrypt server

decrypt:
	just decrypt

node_modules:
	npm install

server:
	npm start

start: decrypt node_modules server
