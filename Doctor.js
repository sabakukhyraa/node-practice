const Person = require("./Person");
const Appointment = require("./Appointment");
const Discomfort = require("./Discomfort");
const Report = require("./Report");

class Doctor extends Person {
  constructor(name) {
    super(name);
    this.patients = [];
    this.appointments = [];
    this.reports = [];
  }

  diagnose(patient, patientComplaint, doctorDefinition, sinceWhen) {
    const discomfort = new Discomfort(
      patientComplaint,
      doctorDefinition,
      sinceWhen
    );
    patient.discomforts.push(discomfort);
    console.log(
      `${this.name} diagnosed ${patient.name}'s ${doctorDefinition}.`
    );
  }

  heal(patient, doctorDefinition) {
    const discomfort = patient.discomforts.find(
      (i) => i.doctorDefinition == doctorDefinition
    );
    discomfort.isHealed = true;
    discomfort.whenHealed = new Date();
    console.log(
      `${this.name} healed the ${discomfort.doctorDefinition} of ${patient.name}!`
    );
  }

  writeReport(
    patient,
    doctorNote,
    discomfort,
    treatment,
    controlAppoinment = null
  ) {
    const report = new Report(
      patient,
      this,
      doctorNote,
      discomfort,
      treatment,
      controlAppoinment
    );
    this.reports.push(report);
    patient.reports.push(report);
    report.printReport();
  }

  makeAnAppointment(patient, date, location) {
    const theAppointment = new Appointment(patient, this, date, location);
    this.appointments.push(theAppointment);
    patient.appointments.push(theAppointment);
    console.log(
      `${this.name} made an appointment with ${theAppointment.patient.name} in ${theAppointment.location.name} at ${theAppointment.date}!`
    );
  }

  cancelAppointment(aAppointment) {
    if (!aAppointment.isCanceled) {
      aAppointment.isCanceled = true;
      aAppointment.whoCanceled = this;
      console.log(
        `${this.name} canceled the appointment with ${aAppointment.patient.name} in ${aAppointment.location} at ${aAppointment.date}!`
      );
    } else {
      console.log(
        `This appointment is already canceled by ${aAppointment.whoCanceled.name}.`
      );
    }
  }
}

module.exports = Doctor;
