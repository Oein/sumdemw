@echo off
mode con cols=18 lines=8
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