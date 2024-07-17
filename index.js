// Import Express
const express = require("express");
const app = express();

// Data contoh siswa
const students = [
  { id: 1, name: "John Doe", grade: "A" },
  { id: 2, name: "Jane Smith", grade: "B" },
  { id: 3, name: "Michael Johnson", grade: "A+" },
];

// Endpoint untuk mendapatkan semua siswa
app.get("/api/datasiswa", (req, res) => {
  res.json(students);
});

// Endpoint untuk mendapatkan siswa berdasarkan ID
app.get("/api/datasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    res.status(404).json({ error: "Siswa tidak ditemukan." });
  } else {
    res.json(student);
  }
});

// Menentukan port server dan menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
