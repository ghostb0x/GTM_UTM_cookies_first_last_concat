//This code should be saved as a Custom JavaScript VARIABLE in your GTM Instance, and referenced using GTM Variable syntax, e.g. {{GTM Variable Name}}
//in the tag where cookie values are created. Use the code in this same branch at /create_cookie_values_tag.html for that
//in my example code, this function variable is named {{Function - create_cookie()}}

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
