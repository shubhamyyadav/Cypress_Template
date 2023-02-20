import appointment from "../pageObjects/bookAppointmentPage";

describe('E2E Appointment Booking', function () {

    it('Navigate to Website and Book an Appointment', function () {
        appointment.navigate();
        appointment.login();
        appointment.fillForm();
        appointment.bookingConfirmation();
        appointment.logOut();
        console.log("The execution of Testcase is Complete.");
    });

});