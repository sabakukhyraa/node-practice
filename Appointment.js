class Appointment {
  constructor(patient, doctor, date, location) {
    this.patient = patient
    this.doctor = doctor
    this.date = date
    this.location = location
    this.isCanceled = false
    this.whoCanceled = null
    this.patientCame = null
  }
}

module.exports = Appointment