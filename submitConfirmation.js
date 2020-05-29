function confirmSubmit()
{
    var nameText = document.forms['contactForm']['nameInput'].value;
    var emailAddressText = document.forms['contactForm']['emailInput'].value;
    var messageText = document.forms['contactForm']['messageInput'].value;

    if(nameText !== "" && emailAddressText !== "" && messageText !== "")
    {
        alert("Thanks for your message! We'll be in touch shortly.")
    }

    else
    {
        alert("Oops, you left one or more fields blank. Please fill in all fields before submitting.")
    }
}