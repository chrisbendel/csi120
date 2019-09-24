const isBlizzard = true;
const liveOnCampus = false;

let schoolCancelled;

if (isBlizzard) {
    schoolCancelled = true;
} else {
    schoolCancelled = false;
}


switch(isBlizzard) {
    case isBlizzard && liveOnCampus:
        schoolCancelled = false;
    default:
        schoolCancelled = false;
}

// && AND
// || OR

if (isBlizzard && liveOnCampus) {
    schoolCancelled = false;
} else if (isBlizzard && !liveOnCampus) {
    schoolCancelled = true;
} else {
    schoolCancelled = false;
}