function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value;

    if (formText.length < 1) {
        alert("Text field can not be blank");
    } else {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/sentiment?text=' + formText)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('polarity').innerHTML = getPolarity(res.score_tag);
            document.getElementById('agreement').innerHTML = res.agreement;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
        })
    }
}

export { handleSubmit }

function getPolarity(score) {
    if (["P+", "P"].includes(score)) {
        return "positive";
    } else if (["N+", "N"].includes(score)) {
        return "negative";
    } else {
        return "no polarity / neutral";
    }
}

export { getPolarity }