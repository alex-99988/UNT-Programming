document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
    var question3 = document.getElementById('question3').value;
    var question5 = document.getElementById('question5').value;
    var question4 = document.querySelector('input[name="question4"]:checked').value;

    console.log('Question 1:', question1);
    console.log('Question 2:', question2);
    console.log('Question 3:', question3);
    console.log('Question 4:', question4);
    console.log('Question 5:', question5);

    var score = 0; // Initialize score variable

    if (parseInt(question1) === 1) score++;
    if (parseInt(question2) === 2) score++;
    if (parseInt(question3) === 3) score++;
    if (question4 === '11') score++; // Compare the value of question4
    if (parseInt(question5) === 9) score++; // Corrected the answer to match 14 + 4

    alert('Form submitted with the following data:\n' +
          'Question 1: ' + question1 + '\n' +
          'Question 2: ' + question2 + '\n' +
          'Question 3: ' + question3 + '\n' +
          'Question 4: ' + question4 + '\n' +
          'Question 5: ' + question5 + '\n' +
          'Score: ' + score); // Display the score correctly
});
