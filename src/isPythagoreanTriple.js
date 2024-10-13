// Hàm kiểm tra tam giác có thỏa mãn định lý Pythagoras không
function isPythagoreanTriple(a, b, c) {
  return a * a + b * b === c * c;
}

// Xuất hàm này ra để có thể sử dụng trong file kiểm thử
module.exports = isPythagoreanTriple;
