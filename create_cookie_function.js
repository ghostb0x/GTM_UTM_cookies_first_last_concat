function() {
  return function (name, value, days) {
    var myDomain = {{Page Hostname}};
    var expires = "";

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    };

    document.cookie = name + "=" + value + expires + "; path=/; domain=."+ myDomain +"; SameSite=Lax";
  };
};
