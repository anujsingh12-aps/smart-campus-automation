let attendance = 78;

let roomData = {
    room101: {
        light: true,
        fan: true
    },

    room102: {
        light: true,
        fan: true
    },

    room103: {
        light: false,
        fan: false
    }
};

function toggleLight(room) {
    roomData[room].light = !roomData[room].light;
    updateStatus(room);
    updateGlobalStatus();
}

function toggleFan(room) {
    roomData[room].fan = !roomData[room].fan;
    updateStatus(room);
    updateGlobalStatus();
}

function updateStatus(room) {
    let data = roomData[room];

    let status = document.getElementById(room + "Status");

    status.innerHTML =
        "Light: " + (data.light ? "ON" : "OFF") +
        " | Fan: " + (data.fan ? "ON" : "OFF");
}

function updateGlobalStatus() {
    let lightsOn = 0;
    let fansOn = 0;

    for (let room in roomData) {
        if (roomData[room].light) {
            lightsOn++;
        }

        if (roomData[room].fan) {
            fansOn++;
        }
    }

    document.getElementById("lights").innerText =
        lightsOn > 0 ? "ON" : "OFF";

    document.getElementById("fans").innerText =
        fansOn > 0 ? "ON" : "OFF";
}

function markAttendance() {
    attendance++;

    if (attendance > 100) {
        attendance = 100;
    }

    document.getElementById("attendance").innerText =
        attendance + "%";

    document.getElementById("attendanceValue").innerText =
        attendance + "%";

    document.getElementById("progressBar").style.width =
        attendance + "%";
}

function addAnnouncement() {
    let input = document.getElementById("announcementInput");

    let text = input.value.trim();

    if (text === "") {
        alert("Please enter an announcement.");
        return;
    }

    let announcement = document.createElement("div");

    announcement.className = "announcement";

    announcement.innerHTML =
        "<strong>📢 New Announcement</strong>" +
        "<p>" + text + "</p>";

    document
        .getElementById("announcements")
        .appendChild(announcement);

    input.value = "";
}