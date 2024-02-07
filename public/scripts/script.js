// script.js
let scene, camera, renderer, controls, sphere;

document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    initGlobe();
    animateGlobe();
});

function initTerminal() {
    const terminalElement = document.getElementById('terminal');
    const inputField = document.getElementById('input');

    // Define commands
    const commands = {
        'help': 'Available commands:\n' +
                'help - Display this help message\n',
        // Add more commands here
    };

    // Function to display output in the terminal
    function displayOutput(content, color = 'white') {
        const outputDiv = document.createElement('div');
        outputDiv.textContent = content;
        outputDiv.style.color = color;
        terminalElement.appendChild(outputDiv);
        terminalElement.scrollTop = terminalElement.scrollHeight; // Auto-scroll to bottom
    }

    // Function to handle command processing
    function processCommand(input) {
        const command = input.split(' ')[0];
        let response = commands[command] || `Command not found: ${command}`;
        displayOutput(response);
    }

    // Initial content for the terminal
    const welcomeMessage = 'Welcome to the Retro Terminal!\n' +
                           'Type "help" for a list of commands.\n';
    displayOutput(welcomeMessage, 'lime');

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const input = inputField.value.trim();
            if (input) {
                // Display user input
                displayOutput(`> ${input}`, 'lime');
                // Process the command
                processCommand(input);
                inputField.value = '';
            }
        }
    });
}


function initGlobe() {
    // Scene setup
    scene = new THREE.Scene();
    const globeContainer = document.getElementById('globe-container');
    const WIDTH = globeContainer.clientWidth;
    const HEIGHT = globeContainer.clientHeight;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    globeContainer.appendChild(renderer.domElement);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.z = 5;

    // Sphere setup
    const geometry = new THREE.SphereGeometry(2, 32, 32); // The radius (first argument) controls the size
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // OrbitControls setup
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zooming with the mouse wheel

    // Handle window resize
    window.addEventListener('resize', () => {
        const WIDTH = globeContainer.clientWidth;
        const HEIGHT = globeContainer.clientHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });
}

function animateGlobe() {
    requestAnimationFrame(animateGlobe);
    // Continuously rotate the globe
    if (sphere) {
        sphere.rotation.y += 0.001; // Adjust this value to change the rotation speed
    }
    controls.update();
    renderer.render(scene, camera);
}