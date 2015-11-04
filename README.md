Small application for displaying a live draw from a Google Spreadsheet source.

# Google Spreadsheet

# Setup

There are 5 variables relevant to attendance-draw:

* url
* shortUrl
* lotteryName
* lotteryLogo
* countdownSeconds

### url:
This is found in the vars.js file.
This is the URL to the Google Spreadsheet.

The format needs to be like this:
https://docs.google.com/spreadsheet/ccc?key=145VnVKlv9r_I6rhAJyCVcfGKAu79ABkfltniu01d123

Where the last part, the key, is a unique identifier of your Google Spreadsheet.

This is not the current URL structure of a Google Spreadsheet.
So you need to manually construct this URL from a "base string" and a unique identifier, found in the current Google Spreadsheet URL.

Current Google Spreadsheet URL structure, looks like this:
https://docs.google.com/spreadsheets/d/145VnVKlv9r_I6rhAJyCVcfGKAu79ABkfltniu01d123/

Take the long random string ( in this case 145VnVKlv9r_I6rhAJyCVcfGKAu79ABkfltniu01d123 ), which is the last part of the shown URL structure, and combine it with this base URL string:

https://docs.google.com/spreadsheet/ccc?key=

Please note that your Google Spreadsheet document must be publically shared, with atleast "View" rights.

The url variable is found in the vars.js file.

### shortUrl:
This is a short and easy url, which is shown on the actual attendance-draw website. This should point the audience to a sign-up form, so that people can sign-up for the draw.

Perhaps use a Google Form, to submit attendees into the Google Spreadsheet.

If no sign-up form url is to be shown on the attendance draw screen, then simply leave the shortUrl variable as "", then it will sign-up form information won't be shown at all.

The shortUrl variable is found in the vars.js file.

### lotteryName:
This is the name of the lottery/draw, which is shown on the actual attendance-draw website.

Example = "The Attendance Draw" or "The ultimate lottery"

The lotteryName variable is also found in the vars.js file.

### lotteryLogo:
This is a Logo file, which will be displayed below the lotteryName headline shown on the actual attendance-draw website.

Example = "http://example.com/logo.png"

The lotteryName variable is found in the vars.js file.

### countdownSeconds

This is the last variable, and it defines the number of seconds the count should run on screen, before the winner is selected.

Default is 15 seconds

This variable is found in the lottery.js file at the top.  