const Doctor = require("./Doctor");
const Patient = require("./Patient");
const Clinic = require("./Clinic");
const db = require("./database");

function printReports(report) {
  console.log(`REPORT OF ${report.doctor.name} ABOUT ${report.patient.name}`);
  console.log(
    `Patient: ${report.patient.name}\nDiscomfort: \"${report.discomfort.patientComplaint}\"\nDoctor Note: ${report.doctorNote}\n${report.doctor.name} healed the ${report.discomfort.doctorDefinition} of ${report.patient.name} with the treatment (${report.treatment})!`
  );
  if (report.controlAppointment) {
    console.log(
      `${report.doctor.name} made a new appointment with ${report.patient.name} at ${report.controlAppointment}`
    );
  }
}

function printReportHistory(patient) {
  if (patient.reports.length == 0)
    console.log(`${patient.name} has no reports.`)
  patient.reports.forEach(printReports);
}

// const emre = new Doctor("Uzm. Dr. Emre Metin")
// const merve = new Patient("Merve Ata", "Female", 26)
// const kerem = new Patient("Ali Kerem Ata", "Male", 22)
// const umraniye = new Clinic("Ümraniye Kliniği", "Akyazı Sk. Ahmediye Mah. No:3 Daire:9, Ümraniye/İstanbul")

// emre.diagnose(merve, "wants love", "Attention Disease", "from birth")
// emre.heal(merve, "Attention Disease")
// emre.writeReport(merve, "Merve needs Kegem to feel good.", merve.discomforts[0], "Kegem")

// merve.tellDiscomfort("dişim ağrıyor", new Date("2023", "03", "12"), "Çürük")
// emre.heal(merve, "Çürük")
// emre.writeReport(merve, "Merve has decay on her 12th tooth.", merve.discomforts[1], "Kanal Tedavisi")

// emre.diagnose(kerem, "stomach hurts", "Ülser", "2 weeks")
// emre.writeReport(kerem, "Shouldn't eat at evenings", kerem.discomforts[0], "Proton Enhibitor Pump")

// emre.makeAnAppointment(merve, new Date("2023", "04", "06", "15", "30"), umraniye)
// merve.cancelAppointment(merve.appointments[0])
// emre.cancelAppointment(merve.appointments[0])

// db.save("patients", [merve, kerem]);
// db.save("doctors", [emre]);



const ugur = new Patient("Şaban Uğur Metin", "Male", 71)

// db.insert('patients', ugur)
// db.remove('patients', 2)



const patients = db.load("patients");
const doctors = db.load("doctors");

patients.forEach(p => console.log(p.name))

const ben = db.findByName('patients', 'Merve Ata')
printReportHistory(ben)

// doctors.forEach(printReportHistory)
