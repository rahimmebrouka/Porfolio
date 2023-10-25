
const body = document.querySelector(".body");
const lightButton = document.querySelector(".header_light");
const headerMenu = document.querySelector(".header_menu");
let estouvert = false;
let estblanc = false;
const hamburgerButton = document.querySelector(".header_hamburger");
const mobileLightButton = document.querySelector('.mobile-nav_light');
const mobileMenu = document.querySelector(".mobile-nav");
const mobileNavBar = document.querySelector(".mobile-nav_bar");
const mobileLinks = document.querySelectorAll('.mobile-nav_link');
const mobileBtnMenu = document.querySelector(".mobile-nav_button");
const inputForm = document.querySelectorAll(".form>input,.form>textarea");
const CloseBtn = document.querySelector('.close_btn');
const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const text = "DéVELOPPEUR FULL-STACK.";
part1.textContent = "";
part2.textContent = "";
const title = document.getElementById('animation_titre');
title.style.display = 'flex';
title.style.flexDirection = 'column';


const Scroll = document.querySelectorAll(".scroll");

const observer2 = new IntersectionObserver((entries, observer) => {
  setTimeout(function () {
    entries.forEach((entry, index) => {
      setTimeout(function () {
        for (let i = 0; i < entries.length; i++) {
          if (entry.isIntersecting) {

            let target = entry.target;
            const html = document.querySelector('.bar_html');
            const css = document.querySelector('.bar_css');
            const javascript = document.querySelector('.bar_javascript');
            const java = document.querySelector('.bar_java');
            const j2e = document.querySelector('.bar_j2e');
            const sql = document.querySelector('.bar_sql');
            const git = document.querySelector('.bar_git');
            target[i] = html.style.width = "90%";
            target[i] = css.style.width = "85%";
            target[i] = javascript.style.width = "60%";
            target[i] = java.style.width = "70%";
            target[i] = j2e.style.width = "75%";
            target[i] = sql.style.width = "70%";
            target[i] = git.style.width = "75%";
            observer.unobserve(target);
          }
        }

      }, index * 1000);
    });


  }, 1000);

});



Scroll.forEach(target => {
  observer2.observe(target);
});






const Lazy = document.querySelectorAll(".lazy");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let target = entry.target;
      target.classList.remove('loading');
      target.classList.add('loaded');
      observer.unobserve(target);
      target.src = target.dataset.src;
      target.classList.remove('loading');
      target.classList.add('loaded');
      observer.unobserve(target);

    }
  });
});
Lazy.forEach(target => {
  observer.observe(target);
});


for (let i = 0; i < text.length; i++) {
  let letter = document.createElement('span');
  letter.textContent = text[i];
  letter.style.opacity = '0';
  letter.style.transition = 'opacity 0.2s ${i * 0.1}s';
  if (i < 11) {
    part1.appendChild(letter);
  } else {
    part2.appendChild(letter);
  }
}
setTimeout(function () {
  const letters = title.querySelectorAll('span');
  letters.forEach((letter, index) => {
    setTimeout(function () {
      letter.style.opacity = '1';
    }, index * 150);
  });
}, 1000);


function masquerMenu() {
  mobileMenu.style.display = 'none';
  body.style.overflowY = 'auto';
  estouvert = false;
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 760 && estouvert) {
    masquerMenu();
  }
});



hamburgerButton.addEventListener("click", () => {
  CloseBtn.style.opacity = "0";
  CloseBtn.style.transition = "0.7s";
  mobileLinks.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = '0.7s';
  });

  mobileBtnMenu.style.opacity = "0";

  mobileNavBar.style.opacity = "0";

  mobileLightButton.style.opacity = "0";
  mobileLightButton.style.transition = "0.7s";


  if (estouvert) {

    setTimeout(function () {
      masquerMenu();
      CloseBtn.src = "../ressources/images/icons8-menu-50.png";
      estouvert = false;
      CloseBtn.style.opacity = "1";
      CloseBtn.style.transition = "0.7s";
      mobileBtnMenu.style.opacity = "1";
      mobileBtnMenu.style.transition = "0.7s";
      mobileNavBar.style.opacity = "1";
      mobileLightButton.style.opacity = "1";
    }, 400);

  } else {
    mobileMenu.style.display = 'flex';
    body.style.overflowY = 'hidden';


    setTimeout(function () {
      CloseBtn.style.opacity = "1";
      CloseBtn.style.transition = "0.7s";
      CloseBtn.src = "../ressources/images/icons8-effacer-50.png";
      mobileBtnMenu.style.opacity = '1';
      mobileLinks.forEach(element => {
        element.style.opacity = '1';
      });
      mobileBtnMenu.style.opacity = "1";
      mobileNavBar.style.opacity = "1";
      mobileLightButton.style.opacity = "1";
    }, 400);

    estouvert = true;
  }
});

mobileLinks[0].addEventListener('click', GoToLink);
mobileLinks[1].addEventListener('click', GoToLink);
mobileLinks[2].addEventListener('click', GoToLink);
mobileBtnMenu.addEventListener('click', GoToLink);

function GoToLink() {
  if (estouvert) {
    mobileMenu.style.display = 'none';
    estouvert = false;
    body.style.overflowY = 'auto';
    CloseBtn.src = "../ressources/images/icons8-menu-50.png";
  }
}
function lightWebSite() {

  if (estblanc) {
    body.style.backgroundColor = "var(--clr-dark)";
    body.style.color = "var(--clr-light)";
    hamburgerButton.style.color = "var(--clr-light)";
    mobileMenu.style.backgroundColor = "var(--clr-dark)";
    estblanc = false;
    inputForm.forEach(element => {
      element.style.color = "var(--clr-light)";
    });
  } else {
    body.style.backgroundColor = "var(--clr-light)";
    body.style.color = "var(--clr-dark)";
    hamburgerButton.style.color = "var(--clr-dark)";
    mobileMenu.style.backgroundColor = "var(--clr-light)";
    inputForm.forEach(element => {
      element.style.color = "var(--clr-dark)";
    });
    estblanc = true;
  }
}


lightButton.addEventListener("click", lightWebSite);
mobileLightButton.addEventListener("click", lightWebSite);



function capitalizeFirstLetter(input) {
  // Obtenez la valeur actuelle de l'input
  var inputValue = input.value;

  // Vérifiez si la valeur a au moins une lettre
  if (inputValue.length > 0) {
    // Mettez la première lettre en majuscule et concaténez le reste du texte en minuscules
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    // Mettez à jour la valeur de l'input
    input.value = inputValue;
  }
}

let errorMessage = "";

function validateForm() {

  var nom = document.querySelector(".nom").value;
  var email = document.querySelector(".email").value;
  var objet = document.querySelector(".objet").value;
  var prenom = document.querySelector(".prenom").value;
  var message = document.querySelector(".message").value;
  var politique = document.querySelector(".politique").checked;
  var validationmsg = document.getElementById("validationMessage");
  var lettreSeulement = /^[a-zA-Z]+$/;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var isValid = true;


  // Réinitialisez les messages d'erreur précédents
  document.getElementById("nomError").innerHTML = "";
  document.getElementById("prenomError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("objetError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";
  document.getElementById("politiqueError").innerHTML = "";
  // Vérifiez si les champs obligatoires sont vides et affichez les messages d'erreur appropriés

  if (nom == "") {
    errorMessage = "Veuillez saisir votre nom.";
    document.getElementById("nomError").innerHTML = errorMessage;
    document.getElementById("nomLabel").focus();
    scrollToElement("nomLabel");
    isValid = false;
  } else if (!lettreSeulement.test(nom)) {
    errorMessage = "Votre nom doit contenir uniquement des lettres.";
    document.getElementById("nomError").innerHTML = errorMessage;
    document.getElementById("nomLabel").focus();
    scrollToElement("nomLabel");
    isValid = false;
  } else if (email == "") {
    errorMessage = "Veuillez saisir votre e-mail.";
    document.getElementById("emailError").innerHTML = errorMessage;
    document.getElementById("emailLabel").focus();
    scrollToElement("emailLabel");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Veuillez saisir une adresse e-mail valide.";
    document.getElementById("emailLabel").focus();
    scrollToElement("emailLabel");
    isValid = false;
  } else if (objet == "") {
    errorMessage = "Veuillez saisir l'objet de votre message.";
    document.getElementById("objetError").innerHTML = errorMessage;
    document.getElementById("objetLabel").focus();
    scrollToElement("objetLabel");
    isValid = false;
  } else if (message == "") {
    errorMessage = "Veuillez saisir votre message.";
    document.getElementById("messageError").innerHTML = errorMessage;
    document.getElementById("messageLabel").focus();
    scrollToElement("messageLabel");
    isValid = false;
  } else if (!politique) {
    errorMessage = "Veuillez accepter la politique de confidentialité pour continuer.";
    document.getElementById("politiqueError").innerHTML = errorMessage;
    document.getElementById("politique").focus();
    scrollToElement("politique");
    isValid = false;
  } else if (isValid) {
    validationmsg.style.display = "block";
    document.getElementById("politiqueError").innerHTML = "";
    return true; // Le formulaire est soumis avec succès
  } else {
    return false; // Le formulaire n'est pas soumis en cas d'erreur
  }

}
document.addEventListener("DOMContentLoaded", function () {
  var formulaire = document.querySelector(".form");
  var envoyerBouton = document.getElementById("envoyer");
  formulaire.addEventListener("submit", function (event) {
    // Empêche le comportement par défaut de la soumission du formulaire
    event.preventDefault();

    // Validez le formulaire
    var isValid = validateForm(); // formulaire valide
    if (isValid) {
      document.querySelector(".nom").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".objet").value = "";
      document.querySelector(".message").value = "";
      document.querySelector(".prenom").value = "";
      document.querySelector(".politique").checked = false;
      document.getElementById("politiqueError").value = "";
      envoyerBouton.disabled = true;
      errorMessage = "";
    }
    scrollToElement("validationMessage");
    errorMessage = "";
  });
});
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}
function sendEmail() {
  /*const templateId = "template_fl9fvst";
  const serviceId = "service_kcmn5th";*/
  emailjs.init("bpm377bp9oc3sNSU-");

  if (validateForm) {
    emailjs.send("service_kcmn5th", "template_fl9fvst", {
      objet: document.querySelector(".objet").value,
      nom: document.querySelector(".nom").value,
      prenom: document.querySelector(".prenom").value,
      email: document.querySelector(".email").value,
      message: document.querySelector(".message").value,
      to_email: "rahimmebrouka@gmail.com",
    });
  }
}

