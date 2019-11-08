'use strict';

$(function () {
    console.log('App Successfully Loaded!');
    watchForm();
});

function watchForm() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        const number = $('.js-number').val();
        numberOfDogs(number);
        $('.imgContainer').empty();
    })
}

function numberOfDogs(number) {
    if (number > 50) {
        $('.warning').show(300).delay(3000).hide(300);
        $('.js-number').val('');
        return;
    } else if (number < 1) {
        number = 3;
    }
    let options = { method: 'GET' };
    let dogNumber = `https://dog.ceo/api/breeds/image/random/${number}`
    fetch(dogNumber, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            getDog(responseJson);
        })
        .catch(function (err) {
            console.log('There was an error');
        })

}

function getDog(responseJson) {
    console.log(responseJson);
    let dogs = responseJson.message;
    dogs.forEach(function (ele) {
        $('.imgContainer').append(`<img id="js-dogimg" src="${ele}" alt="dogs" >`);
    })
    $('.js-number').val('');
}



