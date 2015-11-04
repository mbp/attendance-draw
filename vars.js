// This is the URL to the Google Spreadsheet
// Sample format: https://docs.google.com/spreadsheet/ccc?key=1uAx4FyzPGjK3ciCWnh23AgkG9cpCQzidjLCrSpxAbzE
var url = "";

// This is the Shortened URL to a Signup form, shown on the attendance draw screen
// If left as "", it will not be shown on the attendance draw screen
var shortUrl = "";

// Input a name for the lottery as a string, e.g. "The Attendance Draw"
var lotteryName = "";

// This is a url-path for a Logo image file
// If left as "", no logo will be shown on the attendance draw screen
var lotteryLogo = "";

if (!url)
{
	alert("You must specify the \"url\" variable in vars.js");
}

if (!lotteryName)
{
	alert("You must specify the \"lotteryName\" variable in vars.js");
}