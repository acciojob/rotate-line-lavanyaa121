//your JS code here. If required.
// Get the line element
    const line = document.getElementById("line");

    // Set the initial rotation angle
    let angle = 0;

    // Function to rotate the line
    function rotateLine() {
      angle += 1; // Increase the rotation angle

      // Apply the rotation transform
      line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      // Call the function again in the next frame
      requestAnimationFrame(rotateLine);
    }

    // Start rotating the line
    rotateLine();
