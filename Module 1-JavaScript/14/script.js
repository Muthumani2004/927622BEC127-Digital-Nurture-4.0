$(document).ready(() => {
    $('#registerBtn').click(() => {
        $('#eventCard').fadeIn();
        generateSeats(10);

        setTimeout(() => $('#eventCard').fadeOut(), 4000);
    });

    const generateSeats = count => {
        $('#seatContainer').empty();
        for (let i = 1; i <= count; i++) {
            $('<div>', {
                class: 'seat',
                text: i,
                click: function() {
                    $(this).toggleClass('booked').text($(this).hasClass('booked') ? 'X' : i);
                }
            }).appendTo('#seatContainer');
        }
    };
});
