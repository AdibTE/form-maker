// import former from './index.js';
import * as former from '../form-maker';

former.makeForm('#adib', [{
        name: 'name1',
        placeholder: 'name1',
        label: 'name1',
        required: 'true'
    },
    {
        name: 'name1',
        placeholder: 'name1',
        label: 'name1'
    },
    {
        name: 'name1',
        placeholder: 'name1',
        label: 'name1'
    },
    {
        name: 'name1',
        placeholder: 'name1',
        label: 'name1'
    },
    {
        name: 'name1',
        placeholder: 'name1'
    }
]);

former.formOpt('#adib', 'action', 'Get', 'Changed', () => {
    console.log('HIIIIIIIII');
});

former.createInput('#adib2', {
    name: 'ali'
});