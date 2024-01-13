cd ..
git checkout production
mkdir temp
copy .gitignore temp\
del *.* /Q
copy temp\.gitignore .\
del temp\*.* /Q
rmdir temp
rmdir "assets" /S /Q
xcopy /s dist\gym-assistance .\
git rm -r --cached .
git add -A
git commit -am "Publish"
git push
git checkout master
pause