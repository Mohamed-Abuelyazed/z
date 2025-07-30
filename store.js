// تحميل الرقم المحفوظ من العربة عند فتح الصفحة
let totalCartCount = parseInt(localStorage.getItem("cartCount")) || 0;
document.getElementById("cartCount").textContent = totalCartCount;

// نحدد كل أزرار "Add to Cart"
const addToCartButtons = document.querySelectorAll(".btn-primary.mt-2");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    // نحدد العنصر اللي فيه الرقم الحالي للكمية (اللي في نفس الكارت)
    const quantitySpan = this.parentElement.querySelector(".quantity");
    const quantity = parseInt(quantitySpan.textContent);

    // نزوّد العدد الكلي
    totalCartCount += quantity;

    // نخزن الرقم الجديد في localStorage
    localStorage.setItem("cartCount", totalCartCount);

    // نعرض العدد الجديد في الناف بار
    document.getElementById("cartCount").textContent = totalCartCount;
  });
});
document.getElementById("clearCart").addEventListener("click", function () {
  totalCartCount = 0;
  localStorage.setItem("cartCount", totalCartCount);
  document.getElementById("cartCount").textContent = totalCartCount;
});
