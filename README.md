# build-react-one-folder
You can build a react app in one folder without the css, js and media folders. I created this node js code to build react apps for nsign.tv. This site dosen't support folders, only files, so this is why I made it for.

You only need to download the build-onefolder.js file and copy it to your react app folder.
Once you have this file on your folder, you just need to build your react app with the command "npm run build" and then, you have to run the build-onefolder.js with the next command:
- node build-onefolder

And it will do everything for you. Once the code has end, you will see your build folder with all the files without subfolders. The paths in the files will have changed and you could run your build app with no problems.
