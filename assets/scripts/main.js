import StringMask from 'string-mask';

const elements = document.querySelectorAll(selector);
const format = new StringMask(mask, { reverse: true });

if (elements != null) {
    elements.forEach(element => {

        element.value = format.apply(element.value);

        element.addEventListener('input', function (interative_element) {

            let value = interative_element.target.value.replace(/\D/g, '');

            if (value.length > maxlenght) value = value.substr(0, maxlenght);

            interative_element.target.value = format.apply(value);

        });

    });
}