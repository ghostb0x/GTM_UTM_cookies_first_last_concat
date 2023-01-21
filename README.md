# GTM_UTM_cookies_first_last_concat
JS to be deployed in a Google Tag Manager (GTM) Custom HTML Tag, using several variables (see parts of code referenced with double curly brace e.g. {{Cookie - first_touch_dateTime}}, - these need to be defined in GTM Instance as Custom 1st party cookie variables) that will create a set of cookies for tracking first, last, and concatenated touch UTM values.

I also recommend using this with a trigger that only fires when the page URL contains "utm_", and also to configure consent permissions in the tag or trigger to only fire when analytics or statistical cookies are allowed by the visitor.
