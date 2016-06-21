function initFormValidator() {
    var form = $('form');
    var name = $('#name');
    var email = $('#email');
    var subject = $('#subject');
    var message = $('#message');

    // Validate each input except textarea
    form.submit(function (event) {
        event.preventDefault();

        if (name.val().length < 3) {
            name.next().css('display', 'block');
        }
        if (!validateEmail(email.val())) {
            email.next().css('display', 'block');
        }
        if (subject.val().length < 3) {
            subject.next().css('display', 'block');
        }
    });

    // Validate email regular regex
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Text area counter
    function counterMessage() {
        var maxLength = 500;
        var remainingLength = maxLength;
        var counter = $('#counter');

        counter.html(remainingLength + '/' + maxLength);

        message.keyup(function(e) {
            e.preventDefault();

            var textLength = message.val().length;
            var remainingLength = maxLength - textLength;

            counter.html(remainingLength + '/' + maxLength);
        });
    }

    counterMessage();
}

module.exports = initFormValidator;