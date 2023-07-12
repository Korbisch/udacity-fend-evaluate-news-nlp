import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    handleSubmit(event);
});