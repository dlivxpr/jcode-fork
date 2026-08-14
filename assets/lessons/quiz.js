/* ============================================================
   jcode 架构课程 — quiz 组件（零依赖）
   使用：
   <div class="quiz">
     <p class="quiz-q" data-correct="2">题干？</p>
     <ul class="quiz-opts">
       <li><button class="quiz-opt">选项一</button></li>
       <li><button class="quiz-opt">选项二</button></li>
     </ul>
     <p class="quiz-feedback"></p>
   </div>
   data-correct = 正确选项的下标（从 0 开始）。
   每个 .quiz 内部独立判分；页面底部自动汇总（.quiz-score 由本脚本注入）。
   ============================================================ */

(function () {
  function initQuiz(root) {
    var questions = root.querySelectorAll('.quiz-q');
    var total = questions.length;
    var answered = 0;
    var correct = 0;

    function updateScore() {
      var el = root.querySelector('.quiz-score');
      if (!el) return;
      el.textContent = '得分：' + correct + ' / ' + total +
        (answered < total ? '（已答 ' + answered + ' 题）' : '');
    }

    var score = document.createElement('p');
    score.className = 'quiz-score';
    root.appendChild(score);
    updateScore();

    Array.prototype.forEach.call(questions, function (q) {
      var key = parseInt(q.getAttribute('data-correct'), 10);
      var opts = q.nextElementSibling.querySelectorAll('.quiz-opt');
      var fb = q.nextElementSibling.nextElementSibling; // 紧随其后的 .quiz-feedback
      var done = false;

      Array.prototype.forEach.call(opts, function (btn, idx) {
        btn.addEventListener('click', function () {
          if (done) return;
          done = true;
          answered += 1;
          Array.prototype.forEach.call(opts, function (b, i) {
            b.disabled = true;
            if (i === key) b.classList.add('correct');
            else if (i === idx) b.classList.add('wrong');
          });
          if (idx === key) {
            correct += 1;
            if (fb) fb.textContent = '✓ 正确。';
          } else if (fb) {
            fb.textContent = '✗ 不对——再看一遍上文，然后重试。';
          }
          updateScore();
        });
      });
    });

    var reset = document.createElement('button');
    reset.className = 'quiz-reset';
    reset.textContent = '重做';
    reset.addEventListener('click', function () {
      answered = 0; correct = 0;
      Array.prototype.forEach.call(questions, function (q) {
        var opts = q.nextElementSibling.querySelectorAll('.quiz-opt');
        var fb = q.nextElementSibling.nextElementSibling;
        Array.prototype.forEach.call(opts, function (b) {
          b.disabled = false;
          b.classList.remove('correct', 'wrong');
        });
        if (fb) fb.textContent = '';
      });
      updateScore();
    });
    score.appendChild(reset);
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.quiz'), initQuiz);
  });
})();
