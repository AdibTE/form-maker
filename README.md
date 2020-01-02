### form-maker
Make bootstrap forms with a few steps.


# installing
1. npm install fancy-form


2. add below code to your script file
import * as former from '/node_modules/fancy-form/fancy-form.js';

3. try using functions to make forms and elements


# makeForm function
*makeForm( '.main' , [ { placeholder:"name" },{ placeholder:"eman" } ] )*

this will make 2 inputs with placeholder attribute and append it to the main class


# createInput function
*makeForm( '.main' ,{ placeholder:"name" })*

this will make an input with placeholder of name and append it to the main class


# formOpt function
*btnOpt('body','/myAction', 'GET', 'Edit Post', () => { ... });*

Assign form and submit button attributes


# object attributes
you can use this for both form creating and input creating
* name
* type
* value
* required
* class
* style

