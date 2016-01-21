.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,bundle/app.js'

.PHONY: js
js:
	mkdir -p build
	webpack --watch --progress -p js/app.jsx bundle/app.js --module-bind "jsx=babel" --module-bind "js=babel"

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle
