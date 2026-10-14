// ============================================================
// SITE SETTINGS  (the only setting you normally need to change)
// ============================================================
window.SITE = {
  // true  = EDITING MODE: shows reminders on the site ("add LinkedIn", "add
  //         current position", ...) and a red warning box if a data file has a
  //         typo or an image path is wrong.
  // false = PUBLIC MODE: hides every reminder and warning. Set this to false
  //         right before you publish.
  showTodo: false,
};

// Want to preview public mode without editing this file?
// Add ?public to any page address, e.g.  team.html?public
(function () {
  var S = window.SITE;
  if (/[?&]public\b/.test(location.search)) S.showTodo = false;
  document.documentElement.classList.toggle("show-todo", !!S.showTodo);

  var msgs = [],
    box = null;

  function render() {
    if (!S.showTodo || !msgs.length || !document.body) return;
    if (!box) {
      box = document.createElement("div");
      box.setAttribute("role", "alert");
      box.style.cssText =
        "position:fixed;left:12px;bottom:12px;z-index:9999;max-width:min(440px,calc(100vw - 24px));" +
        "background:#B42318;color:#fff;padding:12px 14px;border-radius:8px;font:13px/1.45 system-ui,sans-serif;" +
        "box-shadow:0 6px 20px rgba(0,0,0,.25)";
      document.body.appendChild(box);
    }
    box.innerHTML =
      "<b>Editing-mode warnings</b> (hidden when showTodo is false)" +
      '<ul style="margin:6px 0 8px 18px;padding:0">' +
      msgs
        .map(function (m) {
          return "<li>" + m + "</li>";
        })
        .join("") +
      "</ul>" +
      '<button type="button" style="background:#fff;color:#B42318;border:0;border-radius:6px;padding:8px 12px;font:600 13px system-ui,sans-serif;cursor:pointer" ' +
      'onclick="this.parentNode.remove()">Dismiss</button>';
  }

  // Any page script can report a problem with SITE.warn("message")
  S.warn = function (m) {
    if (msgs.indexOf(m) === -1) msgs.push(m);
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
    else render();
  };

  // A typo in a data file (missing comma, quote or bracket) stops that file from
  // running. Say so clearly instead of leaving a silently empty page.
  window.addEventListener("error", function (e) {
    var file = (e.filename || "").split("/").pop();
    if (e.target && e.target !== window) return; // resource load errors are handled elsewhere
    if (!file || /^Script error/i.test(e.message || "")) {
      S.warn(
        "A script has a problem. Press F12 and open the Console tab to see which file and line.",
      );
    } else {
      S.warn(
        "Problem in <b>" +
          file +
          "</b>, line " +
          e.lineno +
          ": " +
          (e.message || "") +
          ". This is usually a missing comma, quote or bracket just above that line.",
      );
    }
  });
})();
