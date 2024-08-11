document.addEventListener('DOMContentLoaded', function() {
    const showDetailsButton = document.getElementById('showDetails');
    const detailsDiv = document.getElementById('details');

    showDetailsButton.addEventListener('click', function() {
        if (detailsDiv.style.display === 'none') {
            detailsDiv.style.display = 'block';
            showDetailsButton.textContent = 'Show Less';
        } else {
            detailsDiv.style.display = 'none';
            showDetailsButton.textContent = 'Show More Details';
        }
    });
});
