$(document).ready(function() {
  // Get all Cookies
  let cookieStore = document.cookie.split(";");
  console.log(cookieStore);

  // Initially set lang undefined
  let lang = undefined;

  // Search for language cookie
  for (let i = 0; i < cookieStore.length; ++i) {
    let pair = cookieStore[i].split("=");

    // If found set lang variable
    if (pair[0] === "lang") {
      lang = pair[1];
      break;
    }
  }

  function setEnglish() {
    $('[lang="ar"]').hide();
    $('[lang="en"]').show();
    $("#lang").html("عربي");
    $("html").attr("dir", "ltr");
    $("head").append(
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">'
    );
  }

  function setArabic() {
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $("#lang").html("English");
    $("html").attr("dir", "rtl");
    $("head").append(
      '<link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css" integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossorigin="anonymous" >'
    );
  }

  // If not found set lang initially as en and set lang cookie
  if (lang === undefined) {
    document.cookie = "lang=en";
    lang = "en";
  }

  if (lang === "en") {
    setEnglish();
  } else {
    setArabic();
  }

  $("#lang").click(function(e) {
    e.preventDefault();

    if (lang === "en") document.cookie = "lang=ar";
    else document.cookie = "lang=en";

    location.reload();
  });
});
