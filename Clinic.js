class Clinic {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.doctors = []
  }

  addDoctor(doctor) {
    this.doctors.push(doctor)
  }

  removeDoctor(doctor) {
    this.doctor.filter(i => doctor !== i)
  }
}

module.exports = Clinic