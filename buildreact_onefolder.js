var fs = require('fs')

// Extract all the files from the static folder to the build folder

var newPath = './build/'

const mediaFolder = './build/static/media/';
const cssFolder = './build/static/css/';
const jsFolder = './build/static/js/';

fs.readdir(mediaFolder, (err, files) => {
  files.forEach(file => {
    fs.rename(`${mediaFolder}${file}`,`${newPath}${file}`, function (err) {
          if (err) throw err
          console.log(mediaFolder + ' path completed')
        })
  });
});
fs.readdir(cssFolder, (err, files) => {
  files.forEach(file => {
    fs.rename(`${cssFolder}${file}`,`${newPath}${file}`, function (err) {
          if (err) throw err
          console.log(cssFolder + ' path completed')
        })
  });
});
fs.readdir(jsFolder, (err, files) => {
  files.forEach(file => {
    fs.rename(`${jsFolder}${file}`,`${newPath}${file}`, function (err) {
          if (err) throw err
          console.log(jsFolder + ' path completed')
        })
  });
});

// Delete the static folder, you don't need it more.

var rimraf = require("rimraf");
rimraf("./build/static", function () { 
    console.log("Static folder removed Succesfully"); 
    setTimeout(() => {
        replacePaths();
    }, 2000);
    replacePaths();
});


// Search and repleace in all the files the next paths: "static/css/", "static/js/", static/media/". They are all replaced with a "" 


var glob = require('glob');
var replace = require('replace');

function replacePaths(){

    glob('./build/*', function(err, files) {
        if (err) { throw err; }
        files.forEach(function(item, index, array) {
                console.log(item + ' found');
                // Find and Replace string
                replace({
                    regex: '/static/js/',
                    replacement: '',
                    paths: [item],
                    recursive: true,
                    silent: true
                });
                console.log('Replacement js complete');
        });
        files.forEach(function(item, index, array) {
                console.log(item + ' found');
                
                // Find and Replace string
                replace({
                    regex: '/static/media/',
                    replacement: '',
                    paths: [item],
                    recursive: true,
                    silent: true
                });
                console.log('Replacement media complete');
        });  
        files.forEach(function(item, index, array) {
                console.log(item + ' found');
                // Find and Replace string
                replace({
                    regex: '/static/css/',
                    replacement: '',
                    paths: [item],
                    recursive: true,
                    silent: true
                });
                console.log('Replacement css complete');
        });
        
        files.forEach(function(item, index, array) {
            console.log(item + ' found');
            // Find and Replace string
            replace({
                regex: 'static/css/',
                replacement: '',
                paths: [item],
                recursive: true,
                silent: true
            });
        });
        files.forEach(function(item, index, array) {
            console.log(item + ' found');
            // Find and Replace string
            replace({
                regex: 'static/js/',
                replacement: '',
                paths: [item],
                recursive: true,
                silent: true
            });
        });
        files.forEach(function(item, index, array) {
            console.log(item + ' found');
            // Find and Replace string
            replace({
                regex: 'static/media/',
                replacement: '',
                paths: [item],
                recursive: true,
                silent: true
            });
        });
    });
    
}



