#MACROS
SHELL=/bin/sh
CC=npm
INCLUDES=
SCRIPT= start
FILE=

out.o:
	clear && ${CC} run build && ${CC} run ${SCRIPT} help

search:
	clear && ${CC} run build && ${CC} run ${SCRIPT} search

search:
	clear && ${CC} run build && ${CC} run ${SCRIPT} image

help:
	clear && ${CC} run build && ${CC} run ${SCRIPT} help