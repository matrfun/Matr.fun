const matrixContainer = document.querySelector('.matrix-container');

// Function to generate the matrix effect
function createMatrixEffect() {
    const numColumns = Math.floor(window.innerWidth / 20); // Adjusted number of columns based on screen width
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Characters for the matrix effect
    const columns = []; // To store the column elements
    
    // Create multiple falling columns
    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('code');
        column.style.left = `${i * 20}px`; // Space columns evenly

        // Add characters to the column at a regular interval
        let columnText = '';
        setInterval(() => {
            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            columnText += randomChar;
            column.textContent = columnText;

            // Adjust animation speed based on the column's position
            column.style.animationDuration = `${Math.random() * 5 + 5}s`; // Randomize speed
        }, Math.random() * 200 + 100); // Add a character at a random interval between 100ms and 300ms

        // Append the column to the matrix container
        columns.push(column);
        matrixContainer.appendChild(column);
    }
}

// Initialize matrix effect
createMatrixEffect();

// Adjust the number of columns if the window is resized
window.addEventListener('resize', () => {
    matrixContainer.innerHTML = ''; // Clear current columns
    createMatrixEffect(); // Recreate columns based on the new window size
});
