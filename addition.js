document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
    var question3 = document.getElementById('question3').value;
    var question5 = document.getElementById('question5').value;
    var address = document.getElementsByName('address')[0].value;
    var gender = document.querySelector('input[name="question4"]:checked').value;

    console.log('Date of Submission:', question1);
    console.log('First Name:', question2);
    console.log('Last Name:', question3);
    console.log('Birthday:', question5);
    console.log('Address:', address);
    console.log('Gender:', gender);

    alert('Form submitted with the following data:\n' +
          'Date of Submission: ' + question1 + '\n' +
          'First Name: ' + question2 + '\n' +
          'Last Name: ' + question3 + '\n' +
          'Birthday: ' + question5 + '\n' +
          'Address: ' + address + '\n' +
          'Gender: ' + gender);
});








//var question1 = document.getElementsByTagName('question1');
            //document.getElementById("myText").innerHTML = question1;
//alert(question1);

            //for (var i = 0; i < elements.length; i++) {
                //console.log(elements[i].tagName);
