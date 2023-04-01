class Discomfort {
  constructor(patientComplaint, doctorDefinition, sinceWhen) {
    this.patientComplaint = patientComplaint
    this.doctorDefinition = doctorDefinition
    this.sinceWhen = sinceWhen
    this.isHealed = false
    this.whenHealed = null
  }
}

module.exports = Discomfort