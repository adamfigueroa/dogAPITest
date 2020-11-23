const dogUrl = 'https://dog.ceo/api/breeds/image/random/'

//Get value from the user input and verify that my event listener is working
function formValue() {
    $("#submitBtn").click(function (event) {
      event.preventDefault();
      let numberOfDogs = $("#num-Entry").val();
      //create a default value for the form to be set to 3
      if (numberOfDogs === "") {
        numberOfDogs = 3;
      }
      console.log(numberOfDogs);
      let result = `${dogUrl}${numberOfDogs}`;
      console.log(result);
      getDogImage(result);
    
    });
  }

  function getDogImage(result) {
    fetch(result)
      .then((response) => response.json())
      .then((responseJson) => displayResults(responseJson))
      .catch((error) => alert("Something went wrong. Try again later."));
  }

  function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    let html = "";
    for (const element of responseJson.message) {
      html += `<img src="${element}" class="results-img"/>`;
      //display the results section
    }
    $(".results").replaceWith(html);
    $(".results").removeClass("hidden");
  }

function main() {
    formValue();
    


}

$(main);