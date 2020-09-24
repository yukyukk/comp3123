// Full stack Development Lab 1
// Daniel Lee 100517557

function capitalizeWords(string) {
	newString = string.charAt(0).toUpperCase();

	for (i = 1; i < string.length; ++i) {
		if (string.charAt(i - 1) == ' ') {
			charToAdd = string.charAt(i).toUpperCase();
		}
		else {
			charToAdd = string.charAt(i);
		}
		newString += charToAdd;
	} 
	return newString;
}

function findLargestInteger(num1, num2, num3) {
	var largest;
	if (num1 > num2) {
		largest = num1;
	}
	else {
		largest = num2;
	}

	if (largest > num3) {
		return largest;
	}
	else {
		return num3;
	}
}

function moveLastLettersToStart(string) {
	stringLength = string.length;

	if (stringLength <= 3) {
		return string;
	}

	newString = "";

	for (i = 3; i > 0; --i) {
		char = string.charAt(stringLength - i);
		newString += char;
	}

	for (i = 0; i < stringLength - 3; ++i) {
		newString += string.charAt(i);
	}
	return newString;
}

function returnAngleType(angle) {

	if (angle >= 0 && angle < 90) {
		return 'Acute angle';
	}
	else if (angle == 90) {
		return 'Right angle';
	}
	else if (angle < 180) {
		return 'Obtuse angle';
	}
	else if (angle == 180) {
		return 'Straight angle';
	}
}

