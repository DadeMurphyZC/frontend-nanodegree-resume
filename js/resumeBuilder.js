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
var work = {
    "jobs": [
        {
            "employer": "ARRC Technology",
            "title": "NOC Technician",
            "location": "Bakersfield, CA",
            "dates": "2012-2013",
            "description": "On-site Network Technician responding to call-outs in the Network Operations Center"
        },

        {
            "employer": "City of Bakersfield",
            "title": "Network Systems Technician",
            "location": "Bakersfield, CA",
            "dates": "2013-Present",
            "description": "Support and maintain all IT related systems, and equipment, for the Bakersfield Police Department"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Github Repo",
            "dates": "2016",
            "description": "Set up a Github Repo for project code storage and reviews",
            "images": ["images/ph1.png", "images/ph1.png", "images/ph1.png"]
        }
    ]
};


var bio = {
    "name": "Cristoval Fonseca",
    "role": "Network Systems Technician",
    "welcomeMessage": "Welcome to my bio project!",
    "bioPic": "images/fry.jpg",
    "contacts": {
        "mobile": "661-316-9973",
        "email": "cfonsec@wgu.edu",
        "github": "DadeMurphyZC",
        "location": "Bakersfield, CA"
    },
    "skills": ["Networking", "Active Directory", "GPOs", "Server 2008 r2", "Server 2012", ".net", "HTML 5", "CSS 3", "Bootstrap 3", "Python", "Java", "Javascript"]
};

var education = {
    "schools": [
        {
            "name": "Western Governors University",
            "degree": "Information Technology",
            "location": "Salt Lake City, UT",
            "dates": "Currently enrolled - 2016",
            "major": "Software Development",
            "url": "http://www.wgu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Web Development Fundamentals - C376",
            "school": "Western Governors University",
            "dates": "2016",
            "url": "http://www.wgu.edu"
      }
    ]
};

function displayBio() {
    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    $("#topContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    $("#topContacts").append(formattedEmail);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    $("#topContacts").append(formattedGithub);

    var _location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", _location);
    $("#topContacts").append(formattedLocation);

    var bioPic = bio.bioPic;
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
    $("#header").append(formattedBioPic);

    var _welcomeMessage = bio.welcomeMessage;
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", _welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
}

displayBio();


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

education.display = function () {
    {
        for (schools in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
            $(".education-entry:last").append(formattedSchoolName + " " + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
            $(".education-entry:last").append(formattedSchoolMajor);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[schools].url);
            $(".education-entry:last").append(formattedSchoolURL);
        }

        for (online in education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            $(".education-entry:last").append(formattedOnlineTitle + " " + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$("#mapDiv").append(googleMap);