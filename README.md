# GTM_UTM_cookies_first_last_concat

Use Google Tag Manager to create cookies on your website (with GTM installed), then push the field values to a form field (for example, a hidden form value).

This example code uses UTM values pulled from the visitor's URL when they land to create and store cookie values in a series of cookies (first, last, and concatenated touch for all major UTM value and also date/time of landing and landing page url).

*********

**Important, consider cookie consent settings and privacy laws like GDPR when creating your cookies and triggers. You may need to configure your trigger to only fire on all pages AFTER consent has been given and recorded by GTM.** 

Note that GDPR protection applies to any EU citizens visiting your site, not just companies based in the EU, so odds are you need to do something like this to get your gold star for total compliance.

If these laws apply to your website and visitors, you'll also likely need to declare the names and descriptions of all cookies you'll be creating in your cookie consent manager tool. 

There are many guides online for how to configure GTM to do first after consent is granted, and the specifics will largely depend upon if you have a cookie consent management vendor already and who that is. I won't go any deeper into configuring triggers for privacy here, but please be mindful of this when you set this system up.

**********

Credit to Vlad from EZSegment for writing this article to help me get familiar with GTM and cookie use: https://ezsegment.com/read-and-write-cookies-in-gtm/

##Steps to get URL parameter / UTM capture via Google Tag Manager working on your site:

###Part 1: Creating browser tracking cookies via GTM based on UTM values

1. Install GTM on your website - be sure to include the `<script>` tag code in the `<head>` and `<body>` of your site. Test using GTM's preview mode to make sure your instance is sending data.

2. Create custom cookie Variables (type of 1st party cookie) in your GTM instance to match the cookie names you want to create (see above ezsegment.com article for details on how to do this)

3. Create custom a Javascript Variable in your GTM instance (go to Variables section in GTM) with the code from the "create_cookie_function.js" file in this github repository (see ezsegment.com article for more details on this as well)

4. Create a new Tag in your instance following the code from this github repository's "create_cookie_values_tag.html" file - adjust variable names in curly braces to match the variables you created in steps 2 and 3 e.g. {{your_GTM_variable_name}}

5. If needed, create a Trigger in your instance for the tag in step 4 to fire on all pages where the page URL contains "utm_" or whatever url parameter values you're looking to capture from the URL into the cookies. Modify this trigger's logic to handle your visitors landing on any page of your website with the URL Parameters in question. 

**Again --- consider cookie consent settings and privacy laws like GDPR when creating your cookies and triggers. You may need to configure your trigger to only fire on all pages AFTER consent has been given and recorded by GTM.** 

###Part 2: Inserting cookie values to form fields via Google Tag Manager

6. Create a new Tag in your instance that contains the code from this github repo's "push_cookie_values_to_hubspot_form.html" file - adjust the code to match your GTM cookie variable and form field selector names.

7. If needed, create a Trigger in your instance to fire the tag in step 6 on any pages where your desired form or forms are present. Note: This trigger should be a Window Loaded event instead of Page View, because we want to ensure the form has completely loaded before we attempt to insert the cookie values. You can further configure the trigger to only fire on pages where the URL contains some identifying name (e.g. URL contains mysite.com/demo-form) to prevent the trigger from unnecessarily firing on all pages.

8. Push changes to Google Preview Mode for testing before pushing live to production. I suggest doing one round of testing after step 5 to ensure the cookie creation process is working, and then again after step 7 to test the form fills.


That's all folks! If you're looking for a developer to handle this for you, I may be available for some contract work - It is usually a quick job to get these pieces up an running. Contact me at ghostb0x.github -AT-> gmail.com for more info.
