import { simpleComponent } from '@alexmerced/simple_components';

simpleComponent({
    prefix: 'test',
    name: 'test',
    builder: (state, props) => {
        return `<h1>${state.hello}</h1>
    <h2> ${props.user} </h2>`;
    },
    state: { hello: 'hello world' }
});

document.querySelectorAll('button').forEach((value, index) => {
    value.addEventListener('click', () => {
        document
            .querySelectorAll('test-test')
            [index].setState({ hello: `${index}` });
    });
});
