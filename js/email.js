// Spam-resistant email: the address is stored in parts and assembled on page load,
// so it never appears whole in the HTML. Any element with [data-email] is filled
// with a normal clickable email link.
(function () {
  var user = ["macfadden", "o"].join(".");
  var host = ["northeastern", "edu"].join(".");
  var address = user + String.fromCharCode(64) + host;

  document.querySelectorAll("[data-email]").forEach(function (slot) {
    var link = document.createElement("a");
    link.href = "mai" + "lto:" + address;
    link.textContent = address;
    slot.textContent = "";
    slot.appendChild(link);
  });
})();
