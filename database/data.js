const Data = [
  {
    id: 1,
    question:
      "1. Dapatkan nilai maksimum dari mutlak |(z^2-5z+3) / (z^2-4)(z^2+5) | jika |z| = 1.",
    options: ["4/3", "3/4", "-3/4", "-4/3"],
  },
  {
    id: 2,
    question:
      "2. Diberikan f, g, dan h merupakan fungsi real. Apakah ((f+g) o h(x)) = (f o h)(g o h)(x)?",
    options: ["Iya", "Tidak"],
  },
  {
    id: 3,
    question:
      "3. Diberikan g(x) = x^2+2x-10 dengan menduga nilai limit yang sesuai, dapatkan persaman garis singgung pada kurva y=g(x) di titik (2,0).",
    options: ["y = 6x+2", "y = 12x+2", "y = 6x-12", "y = -6x+2"],
  },
  {
    id: 4,
    question:
      "4. Diberikan x = sin^(-1) (t) dan y = log(1-t^2) maka tentukan turunan kedua y terdapat x dengan t = 1/2.",
    options: ["3/4", "2/3", "4/3", "-8/3"],
  },
  {
    id: 5,
    question: "5. Hitung integral tak tentu dari cos(4x)sin(20x)dx .",
    options: [
      "1/16 cos(24x)-1/24 cos(16x) + C",
      "1/48 cos(32x)-1/32 cos(32x) + C",
      "-1/48 cos(24x)-1/32 cos(16x) + C",
      "-1/24 cos(24x)-1/16 cos(24x) + C",
    ],
  },
];
export default Data;

export const answers = [1, 0, 2, 3, 2];
