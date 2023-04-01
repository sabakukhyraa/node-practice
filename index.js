const Doctor = require("./Doctor")
const Patient = require("./Patient")
const Clinic = require("./Clinic")

const emre = new Doctor("Uzm. Dr. Emre Metin")
const merve = new Patient("Merve Ata", "Female", 26)
const umraniye = new Clinic("Ümraniye Kliniği", "Akyazı Sk. Ahmediye Mah. No:3 Daire:9, Ümraniye/İstanbul")

emre.diagnose(merve, "wants love", "Attention Disease", "from birth")
emre.heal(merve, "Attention Disease")
emre.writeReport(merve, "Merve needs Kegem to feel good.", merve.discomforts[0], "Kegem")

merve.tellDiscomfort("dişim ağrıyor", new Date("2023", "03", "12"), "Çürük")
emre.heal(merve, "Çürük")
emre.writeReport(merve, "Merve has decay on her 12th tooth.", merve.discomforts[1], "Kanal Tedavisi")

console.log(emre.reports)

emre.makeAnAppointment(merve, new Date("2023", "04", "06", "15", "30"), umraniye)
merve.cancelAppointment(merve.appointments[0])
emre.cancelAppointment(merve.appointments[0])