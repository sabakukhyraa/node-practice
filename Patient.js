const Person = require("./Person");
const Appointment = require("./Appointment");
const Discomfort = require("./Discomfort");

class Patient extends Person {
  constructor(name, gender, age) {
    super(name);
    this.age = age;
    this.gender = gender;
    this.discomforts = [];
    this.appointments = [];
    this.reports = [];
  }

  tellDiscomfort(patientComplaint, sinceWhen, doctorDefinition = null) {
    const discomfort = new Discomfort(
      patientComplaint,
      doctorDefinition,
      sinceWhen
    );
    this.discomforts.push(discomfort);
    console.log(
      `${this.name} described ${
        this.gender == "Male" ? "his" : "her"
      } discomfort as \"${patientComplaint}\".`
    );
  }

  makeAnAppointment(doctor, date, location) {
    const theAppointment = new Appointment(this, doctor, date, location);
    this.appointments.push(theAppointment);
    doctor.appointments.push(theAppointment);
    console.log(
      `${this.name} made an appointment with ${theAppointment.doctor.name} in ${theAppointment.location} at ${theAppointment.date}!`
    );
  }

  cancelAppointment(aAppointment) {
    if (!aAppointment.isCanceled) {
      aAppointment.isCanceled = true;
      aAppointment.whoCanceled = this;
      console.log(
        `${this.name} canceled the appointment with ${aAppointment.doctor.name} in ${aAppointment.location.name} at ${aAppointment.date}!`
      );
    } else {
      console.log(
        `This appointment is already canceled by ${aAppointment.whoCanceled.name}.`
      );
    }
  }
}

module.exports = Patient;
