import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// modify this line to point to your jasmine.json
// http://classandobjects.com/test_using_jasmine_react_es6_webpack/

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
