cd ..
git checkout production
del *.txt /Q
del *.ico /Q
del *.html /Q
del *.js /Q
del *.css /Q
del *.png /Q
del *.jpg /Q
del *.gif /Q
rmdir "assets" /S /Q
xcopy /s dist\gym-assistance .\
git rm -r --cached .
git add -A
git commit -am "Publish"
git push
git checkout master
pause