/* Wires up every quiz on the page.
   To add a quiz: copy any <div class="q" data-answer="..."> block,
   change the text, and set data-answer to the correct letter. */
document.querySelectorAll(".q[data-answer]").forEach(function (q) {
  var correct = q.dataset.answer;
  var opts = q.querySelectorAll(".q-opt");
  var reveal = q.querySelector(".q-reveal");
  var verdict = q.querySelector(".q-verdict");
  var done = false;

  opts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (done) return;
      done = true;
      var picked = btn.dataset.key;

      opts.forEach(function (b) {
        b.disabled = true;
        if (b.dataset.key === correct) b.classList.add("is-correct");
      });
      if (picked !== correct) btn.classList.add("is-wrong");

      if (verdict) {
        verdict.textContent = picked === correct
          ? "Correct — " + correct + "."
          : "Not quite. The answer is " + correct + ".";
      }
      if (reveal) reveal.classList.add("open");
    });
  });
});
