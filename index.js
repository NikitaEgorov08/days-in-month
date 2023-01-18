var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
	Date.prototype.daysInMonth = function() {
		return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
	};
} else {
	Date.prototype.daysInMonth = function() {
		return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	};
}
