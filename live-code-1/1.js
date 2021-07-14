const posisi = "Junior";
const pengalaman = 2;

if (posisi === "Junior") {
  console.log("Junior: ");
  if (pengalaman < 2) {
    console.log("Gaji adalah Rp.3.000.000");
  } else if (pengalaman >= 2 && pengalaman <= 5) {
    console.log("Gaji adalah Rp.4.000.000");
  } else {
    console.log("Gaji adalah Rp.5.000.000");
  }
} else if (posisi === "Middle") {
  console.log("Middle: ");
  if (pengalaman < 2) {
    console.log("Gaji adalah Rp.5.000.000");
  } else if (pengalaman >= 2 && pengalaman <= 5) {
    console.log("Gaji adalah Rp.6.500.000");
  } else {
    console.log("Gaji adalah Rp.7.500.000");
  }
} else if (posisi === "Senior") {
  console.log("Senior: ");
  if (pengalaman < 2) {
    console.log("Gaji adalah Rp.7.500.000");
  } else if (pengalaman >= 2 && pengalaman <= 5) {
    console.log("Gaji adalah Rp.9.000.000");
  } else {
    console.log("Gaji adalah Rp.10.000.000");
  }
} else {
  console.log("Posisi tidak ditemukan");
}
