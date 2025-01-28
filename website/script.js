const matrixContainer = document.querySelector('.matrix-container');


function createMatrixEffect() {
    const numColumns = Math.floor(window.innerWidth / 20); 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    const columns = []; 
    
    
    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('code');
        column.style.left = `${i * 20}px`; 

        
        let columnText = '';
        setInterval(() => {
            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            columnText += randomChar;
            column.textContent = columnText;

            
            column.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        }, Math.random() * 200 + 100); 

        
        columns.push(column);
        matrixContainer.appendChild(column);
    }
}


createMatrixEffect();


window.addEventListener('resize', () => {
    matrixContainer.innerHTML = ''; 
    createMatrixEffect(); 
});
