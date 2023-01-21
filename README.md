# GTM_UTM_cookies_first_last_concat
tag.html code is to be deployed in a Google Tag Manager (GTM) Custom HTML Tag, using several variables (see parts of code referenced with double curly brace e.g. {{Cookie - first_touch_dateTime}}, - these need to be defined in GTM Instance as Custom 1st party cookie variables) that will create a set of cookies for tracking first, last, and concatenated touch UTM values.

I also recommend using this with a trigger that only fires when the page URL contains "utm_", and also to configure consent permissions in the tag or trigger to only fire when analytics or statistical cookies are allowed by the visitor.


The code in create_cookie_function.js is to be saved as a "Custom Javascript" type custom variable in your instance. This function is referenced in the main tag.html code as {{Function - create_cookie()}}.

Credit to Vlad from EZSegment for writing this article to help me get familiar with GTM and cookie use: https://ezsegment.com/read-and-write-cookies-in-gtm/
