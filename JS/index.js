// console.log("toto");

// Query_Selector
const form = document.querySelector("#add_retraite");
const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const age = document.querySelector("#age");
const lastname_error = document.querySelector("#lastname_error");
const firstname_error = document.querySelector("#firstname_error");
const age_error = document.querySelector("#age_error");
const tbody = document.querySelector("#tbody");

// détection d'évènement
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("name : ", lastname.value);
    console.log("firstname : ", firstname.value);
    console.log("age : ", age.value);

    // lancement des vérifications
    let checks_value = checks();

    // if(checks_value) { EQUIVALENT DE LA LIGNE SUIVANTE
    if(checks_value == true) {
        // continuer d'avancer
        console.log("je continue d'avancer !")

        // recréer la structure HTML d'un ligne
        // pas bonne : 
        // let content = "
        //     <tr>
        //     ...
        //     </tr>
        // "

        // la bonne : 
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");

        let totalRowCount = tbody.rows.length;
        totalRowCount++;
        td1.innerText = totalRowCount;
        const td2 = document.createElement("td");
        td2.innerText = lastname.value;
        const td3 = document.createElement("td");
        td3.innerText = firstname.value;
        const td4 = document.createElement("td");
        td4.innerText = age.value;
        const td5 = document.createElement("td");
        const delete_button = document.createElement("button");
        delete_button.classList.add("delete")
        delete_button.innerText = "Supprimer";
        delete_button.addEventListener("click", function(event){
            event.preventDefault();
            delete_button.parentNode.parentNode.remove();
        })
        td5.append(delete_button);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tbody.append(tr);
    }
});

function checks() {
    let result = true;
    // vérifier le lastname
    // longueur >= 3 caractères && <= 30 caractères
    let a = check_names(lastname, lastname_error);
    if(a == false) {
        result = false;
    }
    // console.log("a : ", a);

    // vérifier le firstname
    // longueur >= 3 caractères && <= 30 caractères
    let b = check_names(firstname, firstname_error);
    if(b == false) {
        result = false;
    }
    // console.log("b : ", b);

    // vérifier l'age
    // > 18 && < 99
    let c = check_age(age, age_error)
    if(c == false) {
        result = false;
    }
    // console.log("c : ", c);

    return result;
}

function check_names(form_field, form_field_error) {
    if ( form_field.value.length >= 3 && form_field.value.length <= 30 ) {
        form_field_error.innerText = ""
        return true;
    } else {
        form_field_error.innerText = "erreur, le champs doit comporter au moins 3 caractères et au maximum 30 caractères"
        return false;
    }
}

function check_age(age, age_error){
    if ( age.value > 18 && age.value < 99 ) {
        age_error.innerText = ""
        return true;
    } else {
        age_error.innerText = "erreur, l'age doit être compris entre 18 ans et 99 ans exclus"
        return false;
    }
}

// Flemard du prefill
const prefill = document.querySelector("#prefill");
prefill.addEventListener("click", function(event){
    event.preventDefault();
    lastname.value = "azeazeaze";
    firstname.value = "azeazeaze";
    age.value = "30";
})