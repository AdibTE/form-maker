# form-maker
 ###### Make bootstrap forms with a few steps.


### installing
1. npm install fancy-form

2. try importing package to your script file / or use our importing tip

3. try using functions to make forms and elements


### importing
*import * as fancyForm from '/node_modules/fancy-form/fancy-form.js';*


### makeForm function
*makeForm( '.main' , [ { placeholder:"name" },{ placeholder:"eman" } ] )*

this will make a form that contains a submit button and 2 inputs with attribute of placeholder then it will append it to the main class



### createInput function
*makeForm( '.main' ,{ placeholder:"name" })*

this will make an input with placeholder of name and append it to the main class



### formOpt function
*btnOpt('body','/myAction', 'GET', 'Edit Post', () => { ... });*

Assign form and submit button attributes



### object attributes
you can use this for both form creating and input creating
* name
* type
* value
* required
* class
* style

