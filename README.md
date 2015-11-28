Introduction
============
Opaque theme.

![image1](pix/screenshot.png "Opaque screenshot")

About
=====
![image2](pix/Opaque_logo_sm.png "Opaque logo")
 * copyright  &copy; 2015-onwards G J Barnard.
 * author     G J Barnard - http://about.me/gjbarnard and http://moodle.org/user/profile.php?id=442195
 * author     Based on code originally written by Bas Brands, David Scotson and many other contributors.
 * license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later

Free Software
=============
The Opaque theme is 'free' software under the terms of the GNU GPLv3 License, please see 'COPYING.txt'.

It can be obtained for free from:
https://moodle.org/plugins/view.php?plugin=theme_opaque
and
https://github.com/gjb2048/moodle-theme_opaque/releases

You have all the rights granted to you by the GPLv3 license.  If you are unsure about anything, then the
FAQ - http://www.gnu.org/licenses/gpl-faq.html - is a good place to look.

If you reuse any of the code then I kindly ask that you make reference to the theme.

If you make improvements or bug fixes then I would appreciate if you would send them back to me by forking from
https://github.com/gjb2048/moodle-theme_opaque and doing a 'Pull Request' so that the rest of the
Moodle community benefits.

Sponsorships
============
This theme is provided to you for free, and if you want to express your gratitude for using this theme, please consider sponsoring
by:

PayPal - Please contact me via my 'Moodle profile' (above) for details as I am an individual and therefore am unable to have
'buy me now' buttons under their terms.

Flattr - https://flattr.com/profile/gjb2048

Sponsorships may allow me to provide you with more or better features in less time.

Customisation
=============
If you like this theme and would like me to customise it, transpose functionality to another theme or
build a new theme from scratch, then I offer competitive rates.  Please contact me via 'www.gjbarnard.co.uk/contact/'
or 'gjbarnard at gmail dot com' or 'about.me/gjbarnard' to discuss your requirements.

Required version of Moodle
==========================
This version works with Moodle version 2015111600.00 3.0 (Build: 20151116) and above within the 3.0 branch until the
next release.

Please ensure that your hardware and software complies with 'Requirements' in 'Installing Moodle' on
'docs.moodle.org/30/en/Installing_Moodle'.

Licenses used
=============
GPLv3 - http://www.gnu.org/licenses/license-list.html#GNUGPL
-----
Opaque theme code and icons (including altered core icons) - https://moodle.org/mod/forum/discuss.php?d=135896, 
http://www.gnu.org/licenses/gpl-faq.html#GPLPluginsInNF and http://www.gnu.org/licenses/license-list.html#OtherLicenses

MIT - http://www.gnu.org/licenses/license-list.html#Expat
---
Bootstrap - http://getbootstrap.com

Installation
============
 1. Ensure you have the version of Moodle as stated above in 'Required version of Moodle'.  This is essential as the
    theme relies on underlying core code that is out of my control.
 2. Login as an administrator and put Moodle in 'Maintenance Mode' so that there are no users using it bar you as the administrator.
 3. Copy the extracted 'opaque' folder to the '/theme/' folder.
 4. Go to 'Site administration' -> 'Notifications' and follow standard the 'plugin' update notification.
 5. Select as the theme for the site.
 6. Put Moodle out of Maintenance Mode.

Note: If you get no CSS whatsoever, then please add the following to your Apache web server httpd.conf file after loading the modules
and restart (without the ` if you see them):

```
<IfModule mpm_winnt_module>
   ThreadStackSize 8388608
</IfModule>
```

I have created a screencast to help: https://www.youtube.com/watch?v=nI3LsN0XwKY

Ref: https://github.com/bmbrands/theme_bootstrap/issues/342#issuecomment-58152495 and https://code.google.com/p/minify/issues/detail?id=62.

Upgrading
=========
 1. Ensure you have the version of Moodle as stated above in 'Required version of Moodle'.  This is essential as the
    theme relies on underlying core code that is out of my control.
 2. Login as an administrator and put Moodle in 'Maintenance Mode' so that there are no users using it bar you as the administrator.
 3. Make a backup of your old 'opaque' folder in '/theme/' and then delete the folder.
 4. Copy the replacement extracted 'opaque' folder to the '/theme/' folder.
 5. Go to 'Site administration' -> 'Notifications' and follow standard the 'plugin' update notification.
 6. If automatic 'Purge all caches' appears not to work by lack of display etc. then perform a manual 'Purge all caches'
   under 'Home -> Site administration -> Development -> Purge all caches'.
 7. Put Moodle out of Maintenance Mode.

Uninstallation
==============
 1. Put Moodle in 'Maintenance Mode' so that there are no users using it bar you as the administrator.
 2. Change the theme to another theme of your choice.
 3. In '/theme/' remove the folder 'opaque'.
 4. Put Moodle out of Maintenance Mode.

Reporting issues
================
Before reporting an issue, please ensure that you are running the latest version for your release of Moodle.  It is essential
that you are operating the required version of Moodle as stated at the top - this is because the theme relies on core
functionality that is out of its control.

I operate a policy that I will fix all genuine issues for free.  Improvements are at my discretion.  I am happy to make bespoke
customisations / improvements for a negotiated fee. 

When reporting an issue you can post in the theme's forum on Moodle.org (currently 'moodle.org/mod/forum/view.php?id=46')
or check the issue list https://github.com/gjb2048/moodle-theme_opaque/issues and if the problem does not exist, create an
issue.

It is essential that you provide as much information as possible, the critical information being the contents of the theme's 
'version.php' file.  Other version information such as specific Moodle version, theme name and version also helps.  A screen shot
can be really useful in visualising the issue along with any files you consider to be relevant.

Known issues
============

Todo
====

Version information
===================
Version 3.0.0.1
  1. Initial alpha version for Moodle 3.0.

Credits
=======

Bootstrap
------------
Authors: Mark Otto and Jacob Thornton
URL: http://getbootstrap.com/
License: https://github.com/twbs/bootstrap/blob/master/LICENSE

Me
==
G J Barnard MSc. BSc(Hons)(Sndw). MBCS. CEng. CITP. PGCE.
Moodle profile: http://moodle.org/user/profile.php?id=442195
Web profile   : http://about.me/gjbarnard
