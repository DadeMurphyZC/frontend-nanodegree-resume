/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Cristoval Fonseca";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Bio Section goes here
var bio = {
    "name": "Cristoval Fonseca",
    "role": "Network Systems Technician",
    "contacts": {
        "mobile": "661-316-9973",
        "email": "cfonsec@wgu.edu",
        "location": "Bakersfield, CA"
    },
    "welcomeMessage": "Welcome to my bio project!",
    "skills": ["Networking", "Active Directory", "GPOs", "Server 2008 r2", "Server 2012", ".net", "HTML 5", "CSS 3", "Bootstrap 3", "Python", "Java", "Javascript"],
    "bioPic": "images/fry.jpg"
}

var work = {};
work.position = "Network Systems Technician";
work.employer = "City of Bakersfield";
work.years = 3;

var education = {};
education["name"] = "Western Governors University";
education["years"] = "2016-Present"
education["city"] = "Salt Lake City, UT - Remote Studies"

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var _welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", _welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

$("#main").append(HTMLworkStart);
$("#main").append(work["position"]);

$("#main").append(HTMLschoolStart);
$("#main").append(education.name);