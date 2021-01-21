const serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslatedURL(in_txt) {
    return serverURL + "?text=" + in_txt;
}

function errorHandler(error) {
    console.log("error occrured " + error);
    alert("something went wrong with server try again later");
}

function getData() {

    var txt = document.getElementById("txtbx");
    console.log(txt.value);
    console.log(getTranslatedURL(txt.value))
    var output_txt = document.getElementById("paste");
    fetch(getTranslatedURL(txt.value))
        .then(Response => {
            return Response.json()
        }).
    then(json => {
            console.log(json)
            var translatedText = json.contents.translated;
            output_txt.innerText = translatedText;
    }).catch(errorHandler)

    }

    var in_btn = document.querySelector("#btn");

    in_btn.addEventListener("click", getData);