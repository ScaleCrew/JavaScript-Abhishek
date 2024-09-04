//Promises start with a call back before promises we are using callback to handle async task in javascript.
/**
 * !Problems with callcack is 1. call backhell and inversion of control
 *
 */

/**
 * TODO : Create a step to book an ticket (movie ticket)
 * !!1.Login Authentication
 * !!2.slected available seats
 * !!3.booking ticket
 * !!4.payment
 * !!5.showSuccessPage
 */
let user = {
  id: "Abhi@4411",
  password: "abhi",
};

authentication(user, function (userCreditical) {
  selctedAvailableSeat(userCreditical, function (selectedSeat) {
    bookTicket(selectedSeat, function (bookTicket) {
      payment(bookTicket, function () {
        showSucessPage(function () {
          console.log("Payment Completed");
        });
      });
    });
  });
});
/**
 * Problem we are facing here is facing callhell(payramid of DOM like structure )
 * 1. which is not easy for readablity and maintainability
 * 2.Inversion of contorl , we passing one function to anthore function which took all the responsiblity to call the function
 */

/****
 * Promises come into the picture to handle this in very beautifull way
 */
authentication(user)
  .then((userCreditical) => {
    return selctedAvailableSeat(userCreditical);
  })
  .then((selectedSeat) => {
    return bookTicket(selectedSeat);
  })
  .then((bookTicket) => {
    return payment(bookTicket);
  })
  .then((res) => {
    return showSucessPage(res);
  })
  .then((res) => {
    console.log("Payment Completed");
  });
