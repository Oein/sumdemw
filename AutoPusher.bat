@echo off
mode con cols=20 lines=15
:loop
	cd D:\sumdem wiki\sumdemw
	git init
	git pull
	git add --all
	git commit -m "Pushed By Auto Pusher"
	git push
	echo Complete. Relaunching...
	TIMEOUT 150	
goto loop