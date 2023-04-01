class Report {
  constructor(patient, doctor, doctorNote, discomfort, treatment) {
    this.patient = patient
    this.doctor = doctor
    this.doctorNote = doctorNote
    this.discomfort = discomfort
    this.treatment = treatment
    this.controlAppointment = null
  }

  printReport() {
    console.log(`REPORT OF ${this.doctor.name} ABOUT ${this.patient.name}`)
    console.log(`Patient: ${this.patient.name}\nDiscomfort: \"${this.discomfort.patientComplaint}\"\nDoctor Note: ${this.doctorNote}\n${this.doctor.name} healed the ${this.discomfort.doctorDefinition} of ${this.patient.name} with the treatment (${this.treatment})!`);
    if(this.controlAppointment) {
      console.log(`${this.doctor.name} made a new appointment with ${this.patient.name} at ${this.controlAppointment}`)
    }
  }
}

module.exports = Report
