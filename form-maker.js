/**
 * Creates a form with your specified content
 * @param {*} element The element to apend the form inside it
 * @param {*} inputs Attributes nested in an array of objects that each key represent as attribute name and so on like 
 * @example makeForm( '.main' , [ { placeholder:"name" , ... } , { ... } ] )
 */
let makeForm = function(element, inputs) {
    elementValidate(element);
    if (!Array.isArray(inputs)) {
        console.error('inputs param should be Array type ==> ', 'try like: [ { placeholder:"name"} , { ... } ]');
        return 0;
    }

    let form = document.createElement('form');

    // Set form attributes
    setAttributes(form, {
        action: '',
        method: 'POST',
        id: 'Former'
    });

    // Append form to element
    document.querySelector(element).append(form);

    // Make input and set attributes
    for (let i = 0; i < inputs.length; i++) {
        let div = document.createElement('div');
        let input = document.createElement('input');
        let label = inputs[i].label ? document.createElement('label') : false;

        // Set each input attributes
        setAttributes(input, {
            type: inputs[i].type ? inputs[i].type : false,
            name: inputs[i].name ? inputs[i].name : false,
            placeholder: inputs[i].placeholder ? inputs[i].placeholder : false,
            class: inputs[i].class ? `form-control ${inputs[i].class}` : 'form-control',
            style: inputs[i].placeholder ? inputs[i].placeholder : false,
            value: inputs[i].value ? inputs[i].value : false,
            required: inputs[i].required ? inputs[i].required : false
        });

        // Set parent element attributes
        setAttributes(div, {
            class: 'form-group'
        });

        // Appends
        if (label) {
            div.append(label);
            label.innerText = inputs[i].label;
        }
        div.append(input);
        form.append(div);
    }

    // Set button attributes
    let btn = document.createElement('input');
    setAttributes(btn, {
        type: 'submit',
        class: 'btn btn-block btn-primary',
        value: 'Submit'
    });
    form.append(btn);
};

/**
 * Assign form and submit button attributes
 * @param {*} element Form parent element
 * @param {*} action Form action / default : route
 * @param {*} method Form method / default : POST
 * @param {*} value Value of the button / default : Submit
 * @param {*} callback Callback function `optional`
 * @example btnOpt('body','/myAction', 'GET', 'Edit Post', () => { ... });
 */
let formOpt = function(element, action, method, value, callback = () => {}) {
    elementValidate(element);
    let btn = document.querySelector(`${element} [type="submit"]`);
    setAttributes(btn, {
        action: action,
        method: method,
        value: value
    });
    callback();
};

/**
 * Creates new input element inside a target element
 * @param {*} element Input will append to this element
 * @param {*} input input attributes and options
 */
let createInput = function(elementTarget, input) {
    elementValidate(elementTarget);
    let element = document.querySelector(elementTarget);
    let div = document.createElement('div');
    let newInput = document.createElement('input');
    let label = input.label ? document.createElement('label') : false;

    // Set each input attributes
    setAttributes(newInput, {
        type: input.type ? input.type : false,
        name: input.name ? input.name : false,
        placeholder: input.placeholder ? input.placeholder : false,
        class: input.class ? `form-control ${input.class}` : 'form-control',
        style: input.placeholder ? input.placeholder : false,
        value: input.value ? input.value : false,
        required: input.required ? input.required : false
    });

    // Set parent element attributes
    setAttributes(div, {
        class: 'form-group'
    });

    // Appends
    if (label) {
        div.append(label);
        label.innerText = input.label;
    }
    div.append(newInput);
    element.append(div);
};

// Set attributes function
function setAttributes(el, attrs) {
    for (var key in attrs) {
        if (attrs[key]) el.setAttribute(key, attrs[key]);
    }
}

// Element validation
function elementValidate(el) {
    if (!document.querySelector(el)) {
        console.error('Element not found ==> (', el, ') not found in the DOM!');
        return 0;
    }
}

export { makeForm, formOpt, createInput };