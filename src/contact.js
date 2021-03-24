var contact = function() {
    var contactData = document.createElement('div');
    contactData.id = 'contact-data';

    var headline = document.createElement('h2');
    headline.id = 'contact-title';
    headline.className = 'nav-tab';
    headline.innerText = "Here is the contact";

    contactData.appendChild(headline);

    return contactData;
}

export { contact };