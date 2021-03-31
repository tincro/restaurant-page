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
    contactGroup.appendChild(detailList);

    // Form
    var form = document.createElement('form');
    
    <form>
        <input placeholder="First Name"></input>
        <iput placeholder="Last Name"></iput>
        <input placeholder="Leave us a message!"></input>
    </form>

    contactData.appendChild(contactGroup);

    return contactData;
}

export { contact };