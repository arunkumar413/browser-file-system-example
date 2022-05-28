import React from 'react';
import './style.css';
const BrowserFS = require('browserfs');
import { fs } from 'memfs';

export default function App() {
  BrowserFS.install(window);
  BrowserFS.configure(
    {
      fs: 'InMemory',
    },

    function (e) {
      if (e) {
        // An error happened!
        throw e;
      }
      // Otherwise, BrowserFS is ready-to-use!
      window.fs = window.require('fs');
    }
  );

  let fs = window.fs;

  fs.mkdir('/home', 1, function () {
    console.log('directory created');
  });

  fs.mkdir('/src', 1, function () {
    console.log('src created');
  });

  fs.mkdir('./components', 1, function () {
    console.log('src created');
  });

  fs.mkdir('/components/test', function () {
    console.log('src created');
  });

  fs.writeFile(
    '/home/src/test.txt',
    'Cool, I can do this in the browser!',
    function () {
      console.log('written to file');
      fs.readdir('/', function (err, files) {
        console.log(files);
      });
    }
  );
  fs.writeFile('test.text', function () {
    console.log('creted test.txt');
  });

  fs.readdir('/', function (err, files) {
    console.log(files);
  });

  fs.writeFile('./home/hello.text', function (file) {
    console.log('hello written');
  });
  debugger;

  fs.writeFile('/home/myfile.txt', 'w+', 0o666, function (file) {
    console.log('fileCreated');
  });

  fs.readdir('/', function (err, files) {
    console.log(files);
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
