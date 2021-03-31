var contact = function() {
    var contactData = document.createElement('div');
    contactData.id = 'contact-data';

    var headline = document.createElement('h2');
    headline.id = 'contact-title';
    headline.className = 'nav-tab';
    headline.innerText = "Contact us for any questions!";

    contactData.appendChild(headline);

    // Contact store details
    const contactGroup = document.createElement('div');
    contactGroup.id = 'contact-group-container'

    var contact = {
        Phone: "888.888.8888",
        Email: "info@wilsonsdiner.com",
        Address: "18823 Wilson Drive, Greensboro, N.C"
    }

    var details = Object.entries(contact);

    var detailList = document.createElement('ul');
    var listContainer = document.createElement('div');
    listContainer.id = 'list-container';
    listContainer.className = 'contact-container';

    listContainer.appendChild(detailList);

    for (const [key, value] of details) {
        let detailItem = document.createElement('li');

        let title = document.createElement('h3')
        title.id = `${key.toLowerCase()}-title`;
        title.className = 'contact-title';
        title.innerHTML = `<span>${key}:</span>`;
        
        var link = "";
        switch (key) {
            case "Phone":
                link = `<a href="tel:8888888888">${value}</a>`
                break;

            case "Email":
                link = `<a href="mailto:info@wilsonsdiner.com">${value}</a>`
                break;
        
            default:
                link = `${value}`;
                break;
        }

        let detail = document.createElement('p');
        detail.id = `${key}-detail`;
        detail.className = 'detail-item';
        detail.innerHTML = `<span>${link}</span>`;

        detailItem.appendChild(title);
        detailItem.appendChild(detail);

        detailList.appendChild(detailItem);
    }
    contactGroup.appendChild(listContainer);

    // Form
    var form = document.createElement('form');
    var formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    formContainer.className = 'contact-container';

    formContainer.appendChild(form);

    var formElements = {
        "First Name": {
            tag: "input",
            type: "text",
            id: "fname",
            name: "fname"
        },
        "Last Name": {
            tag: "input",
            type: "text",
            id: "lname",
            name: "lname"
        },
        "Message": {
            tag: "textarea",
            id: "message",
            name: "message"
        },
        "Submit": {
            tag: "button",
            type: "submit",
            id: "form-submit",
            name: "form-submit",
            value: "Submit"
        }
        
    }

    var inputs = Object.entries(formElements);

    for (const [input, attrs] of inputs) {
        let line = document.createElement(attrs["tag"]);
        line.id = attrs["id"];
        line.className = `form-${attrs["tag"]}`;
        line.name = attrs["name"];
        line.placeholder = input;
        if(attrs["type"]){
            line.type = attrs["type"];
        }
        if(attrs["value"]) {
            line.innerText = attrs["value"]
        }

        form.appendChild(line);
    }

    contactGroup.appendChild(formContainer);
    contactData.appendChild(contactGroup);

    return contactData;
}

export { contact };