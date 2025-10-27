// Show booking form modal
function showBookingForm() {
    document.getElementById("booking-form").style.display = "block";
}

// Close booking form modal
function closeBookingForm() {
    document.getElementById("booking-form").style.display = "none";
}

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("booking-form");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

