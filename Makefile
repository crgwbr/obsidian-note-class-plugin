VERSION = $(shell jq '.version' manifest.json)

.git/hooks/pre-commit:
	pre-commit install

install_precommit: .git/hooks/pre-commit

test_precommit: install_precommit
	pre-commit run --all-files

setup:
	yarn

dev:
	yarn run dev

build:
	yarn run build

release: build
	gh release create $(VERSION) -t $(VERSION) -n 'Release Version $(VERSION)' 'main.js' 'manifest.json'
