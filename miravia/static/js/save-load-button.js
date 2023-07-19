
  $(document).ready(function()   {
      var ProductElements = document.querySelector("#product-service");
      var feedbackFinal = document.querySelector("#feedback-final");
      ProductElements.addEventListener("change", function(event) {
        feedbackFinalSelect.style.border = "";
        qualificationFeedbackSelect.style.border = "";
        var form = document.querySelector("#input-form");
        
        if (event.target.value === 'N/A')  {
          form.classList.remove('disabled_product_service')
            form.classList.remove('disabled_product_service_only_service')
            form.classList.remove('disabled')
            form.classList.remove('disabled1')
            feedbackFinal.value = "";
            // form.classList.add('disabled_product_service_na')
            var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#feedback-final):not(#qualification-feedback):not(#pic):not(.can_not_be_disabled)");
            form1.forEach(function(inputele){
              inputele.setAttribute('tabindex','-1')
              inputele.setAttribute('disabled',true)
            })
            var F23 = document.querySelector('#qualification-feedback');
            F23.removeAttribute('tabindex','-1')
            F23.removeAttribute("disabled");
        } else if (event.target.value === 'Only Services'){
          form.classList.remove('disabled_product_service')
          form.classList.remove('disabled_product_service_na')
          form.classList.remove('disabled')
          form.classList.remove('disabled1')
          feedbackFinal.value = "NOT OK";
          var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#pic):not(#feedback-final):not(.can_not_be_disabled)");
            form1.forEach(function(inputele){
              inputele.setAttribute('tabindex','-1')
              inputele.setAttribute('disabled',true)
            })
        } 
        else{
          feedbackFinal.value =  ""
          form.classList.remove('disabled_product_service')
          form.classList.remove('disabled_product_service_na')
          form.classList.remove('disabled_product_service_only_service')
          form.classList.remove('disabled')
          form.classList.remove('disabled1')
          var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#pic):not(.can_not_be_disabled)");
          form1.forEach(function(inputele){
            inputele.removeAttribute('tabindex','-1');
            inputele.removeAttribute('disabled');
          })
          
        }
    });
      var inputElements = document.querySelector("#local_spanish_seller");
      inputElements.addEventListener("change", function(event) {
          var form = document.querySelector("#input-form");
          var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#local_spanish_seller):not(#feedback-final):not(#qualification-feedback):not(#pic):not(.can_not_be_disabled)");
          if (event.target.value === 'N') {
              // form.classList.add('disabled_spanish')
              form1.forEach(function(inputele){
                inputele.setAttribute('tabindex','-1')
                inputele.setAttribute('disabled',true)  
              })
          } else {
              form1.forEach(function(inputele){
                inputele.removeAttribute('tabindex','-1');
                inputele.removeAttribute("disabled");
              })
          }
      });
      // Function to handle the select change event #cluster
      var inputElements = document.querySelector("#cluster");
      inputElements.addEventListener("change", function(event) {
          var form = document.querySelector("#input-form");
          var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#vat):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#cluster):not(#product-service):not(#local_spanish_seller):not(#feedback-final):not(#qualification-feedback):not(#pic):not(.can_not_be_disabled)");
          if (event.target.value === 'Other') {
              // form.classList.add('disabled1')
              form1.forEach(function(inputele){
                inputele.setAttribute('tabindex','-1')
                inputele.setAttribute('disabled',true)
              })
          } else {
              form.classList.remove('disabled1')
              form.classList.remove('disabled')
              form1.forEach(function(inputele){
                inputele.removeAttribute('tabindex','-1');
                inputele.removeAttribute("disabled");
              })
          }
      });

      var inputElements = document.querySelector("#product_desc_or_at_least_2_product_images");
      inputElements.addEventListener("change", function(event) {
          var form = document.querySelector("#input-form");
          var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#local_spanish_seller):not(#cluster):not(#l1):not(#l2):not(#product_desc_or_at_least_2_product_images):not(#feedback-final):not(#qualification-feedback):not(#pic):not(.can_not_be_disabled)");
          if (event.target.value === 'N') {
              // form.classList.add('disabled_spanish')
              feedbackFinal.value = "NOT OK";
              form1.forEach(function(inputele){
                inputele.setAttribute('tabindex','-1')
                inputele.setAttribute('disabled',true)
              })
          } else {
            feedbackFinal.value = "";
              form1.forEach(function(inputele){
                inputele.removeAttribute('tabindex','-1');
                inputele.removeAttribute("disabled");
              })
          }
      });

      var inputElements = document.querySelector("#vat");
      var feedbackFinal = document.querySelector("#feedback-final");
      inputElements.addEventListener("input", function(event) {
        
        var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#vat):not(#amount-of-phonenumbers):not(#amount-of-emails):not(.can_not_be_disabled),#input-form select:not(#product-service):not(#local_spanish_seller):not(#cluster):not(#l1):not(#l2):not(#product_desc_or_at_least_2_product_images):not(#feedback-final):not(#qualification-feedback):not(#pic):not(#feedback-final):not(.can_not_be_disabled)");
        
        if (event.target.value === '') {
          feedbackFinal.value = "NOT OK";
          form1.forEach(function(inputele){
            inputele.setAttribute('disabled', true);
          });
        } else {
          feedbackFinal.value = "";
          form1.forEach(function(inputele){
            inputele.removeAttribute('disabled');
            inputele.classList.remove('disabled');
            inputele.classList.remove('disabled1');
            inputele.classList.remove('disabled');
            inputele.classList.remove('disabled_product_service_only_service');
            inputele.classList.remove('disabled_product_service_na');
            inputele.classList.remove('disabled_product_service');
            inputele.classList.remove('disabled_spanish');
            inputele.classList.remove('pointer_none');
          });
          
        }
      });

      function fetchL1Data(clusterValue) {
        fetch('/select-l1?cluster=' + encodeURIComponent(clusterValue))
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    var select = document.getElementById("l1");
                    $('#l1 option:not(:first)').remove();
                    data.forEach(box => {
                        var option = document.createElement("option");
                        option.text = box;
                        option.value = box;
                        select.appendChild(option);
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error loading data from the server.');
            });
        }
        
        var clusterOptions = document.querySelector("#cluster");
        clusterOptions.addEventListener("change", function(event) {
            var clusterValue = event.target.value;
            fetchL1Data(clusterValue);
        });
    


        var l1Options = document.querySelector("#l1");
        l1Options.addEventListener("change", function(event) {
        console.log(event.target.value)
          fetch('/select-l2?l1='+encodeURIComponent(event.target.value))
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        var select = document.getElementById("l2");
                        $('#l2 option:not(:first)').remove();
                        data.forEach(box => {
                          var option = document.createElement("option");
                          option.text = box;
                          option.value = box;
                          select.appendChild(option);
                        });

                    }
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error loading data from the server.');
                });
      });

      var feedbackFinalSelect = document.querySelector("#feedback-final");
      var qualificationFeedbackSelect = document.querySelector("#qualification-feedback");
      
      feedbackFinalSelect.addEventListener("change", function(event) {
        feedbackFinalSelect.style.border = "";
        qualificationFeedbackSelect.style.border = "";
        if (feedbackFinalSelect.value === 'MAINTENANCE WEBSITE'){
          qualificationFeedbackSelect.value = 'INACTIVE PAGE - Mainteinance';
        }
        // else{
        //   if ( qualificationFeedbackSelect.value === 'INACTIVE PAGE - Mainteinance'){
        //     qualificationFeedbackSelect.value = '';
        //   }
        // }
        
      });
      
      qualificationFeedbackSelect.addEventListener("change", function(event) {
        feedbackFinalSelect.style.border = "";
        qualificationFeedbackSelect.style.border = "";
        defaultqualificationFeedbackValue = qualificationFeedbackSelect.value
      });
      var productServiceSelect = document.querySelector("#product-service");
      productServiceSelect.addEventListener("change", function(event) {
        productServiceSelect.style.border = "";
      });
      var localSpanishSelect = document.querySelector("#local_spanish_seller");
      localSpanishSelect.addEventListener("change", function(event) {
        localSpanishSelect.style.border = "";
      });
      var productCountSelect = document.querySelector("#product-count");
      productCountSelect.addEventListener("change", function(event) {
        productCountSelect.style.border = "";
      });
      var productDescSelect = document.querySelector("#product_desc_or_at_least_2_product_images");
      productDescSelect.addEventListener("change", function(event) {
        productDescSelect.style.border = "";
        productCountSelect.style.border = ""
      });


      var telephoneInputs = document.querySelectorAll("#telephone, #telephone1");

      telephoneInputs.forEach(function(input) {
        input.addEventListener("input", function(event) {
          var phoneNumber = event.target.value;
          var formattedNumber = formatPhoneNumber(phoneNumber);
          event.target.value = formattedNumber;
        });
      });

      function formatPhoneNumber(phoneNumber) {
        // Replace all non-digit characters, parentheses, and spaces with spaces
        var formattedNumber = phoneNumber.replace(/[^\d]/g, " ").replace(/\s+/g, "");
        // Trim leading and trailing spaces
        formattedNumber = formattedNumber.trim();
        return formattedNumber;
      }

      var trimInputs = document.querySelectorAll("#email, #email1");

      trimInputs.forEach(function(input) {
        input.addEventListener("input", function(event) {
          var trimstring = event.target.value;
          var formattedstring = formattrim(trimstring);
          event.target.value = formattedstring;
        });
      });


      var VATElements = document.querySelectorAll("#vat");
      VATElements.forEach(function(input) {
        input.addEventListener("input", function(event) {
          var VAT = event.target.value;
          var formatVAT = formatVATNumber(VAT);
          event.target.value = formatVAT;
        });
      });
      function formatVATNumber(VAT) {
        // Replace all non-digit characters, parentheses, and spaces with spaces
        var formatVAT = VAT.replace(/[^\w]/g, "")
        // Trim leading and trailing spaces
        formatVAT = formatVAT.trim();
        return formatVAT;
      }
      

      function formattrim(string) {
        string = string.trim();
        return string;
      }
  
      
  
//   var saveButtonNext = document.getElementById('save-button');

// // Add a click event listener to the Save button
//   saveButtonNext.addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default form submission
//   var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#vat):not(#amount-of-phonenumbers):not(#amount-of-emails),#input-form select:not(#product-service):not(#local_spanish_seller):not(#cluster):not(#l1):not(#l2):not(#product_desc_or_at_least_2_product_images):not(#feedback-final):not(#qualification-feedback):not(#pic)");
        
//   // if (event.target.value === '') {
//   //   form1.forEach(function(inputele){
//   //     inputele.setAttribute('disabled', true);
//   //   });
//   // } else {
//   //   form1.forEach(function(inputele){
//   //     inputele.removeAttribute('disabled');
//   //   });
    
//   // }

//   // Get the selected option from the #product-service dropdown
//   var productServiceSelect = document.querySelector("#product-service");
//   var productServiceOption = productServiceSelect.value;
//   productServiceSelect.style.border = "";
//   var feedbackFinalSelect = document.querySelector("#feedback-final");
//   feedbackFinalSelect.style.border = "";
//   var qualificationFeedbackSelect = document.querySelector("#qualification-feedback");
//   qualificationFeedbackSelect.style.border = "";

//   // Check if the productServiceOption is blank
//   if (productServiceOption === "") {
//     // Get the selected options from #feedback-final and #qualification-feedback dropdowns
//     var feedbackFinalOption = feedbackFinalSelect.value;
//     var qualificationFeedbackOption = qualificationFeedbackSelect.value;

//     // Check if either feedbackFinalOption or qualificationFeedbackOption is chosen
//     if (feedbackFinalOption || qualificationFeedbackOption) {
//       feedbackFinalSelect.style.border = "";
//       qualificationFeedbackSelect.style.border = "";
//       productServiceSelect.style.border = "";
//     }
//     else{
//       alert("PRODUCT/SERVICE blank! Please select FEEDBACK FINAL or QUALIFICATION FEEDBACK");
//       productServiceSelect.style.border = "2px solid green";
//       feedbackFinalSelect.style.border = "2px solid red";
//       qualificationFeedbackSelect.style.border = "2px solid red";
//     }
//   // } else if (productServiceOption === 'Only Products' || productServiceOption ==='Products & Services'){
//   //     var localSpanishSelect = document.querySelector("#local_spanish_seller");
//   //     var localSpanishOption = localSpanishSelect.value;
//   //     localSpanishSelect.style.border = "";
//   //     if (localSpanishOption == 'Y'){
//   //       var feedbackFinalOption = feedbackFinalSelect.value;
//   //       var qualificationFeedbackOption = qualificationFeedbackSelect.value;
        
//   //       if (feedbackFinalOption || qualificationFeedbackOption) {
//   //         feedbackFinalSelect.style.border = "";
//   //         qualificationFeedbackSelect.style.border = "";
//   //       }
//   //       else{
//   //         alert("LOCAL SPANISH SELLER is "+localSpanishOption+" ! Please select FEEDBACK FINAL or QUALIFICATION FEEDBACK");
//   //         localSpanishSelect.style.border = "2px solid green";
//   //         feedbackFinalSelect.style.border = "2px solid red";
//   //         qualificationFeedbackSelect.style.border = "2px solid red";
//   //       }
//   //     }

//   }
  
//   else {
//     // Get the form data
//     // handleSaveDomain();
//     var formData = new FormData(document.querySelector("#input-form"));

//     // Check if a message element already exists and remove it if it does
//     var existingMessage = document.querySelector("#message-text");
//     if (existingMessage) {
//       existingMessage.parentNode.removeChild(existingMessage);
//     }

//     // Create a new element to display the "Updated" or "Error" message
//     var messageText = document.createElement("div");
//     messageText.id = "message-text";

//     // Send the form data to the server using AJAX
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/", true); // Replace "/" with the appropriate server-side endpoint
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         var pic = document.getElementById("pic").value;
//         var leadnumber = document.getElementById("lead-number").value;
//         if (xhr.status === 200) {
//           // Display the "Updated" message after successful submission
//           messageText.textContent = "Updated! - " + leadnumber;
//           messageText.className = "success";
//         } else if (xhr.status === 500) {
//           // Check if the response contains an error message for URL and PIC mismatch
//           var response = JSON.parse(xhr.responseText);
//           if (response.error === "URL and PIC mismatch") {
//             messageText.textContent = "Error: URL and PIC already exists";
//             messageText.className = "error";
//           } else if (response.error === "URL already exists") {
//             messageText.textContent = "Error: URL already exists";
//             messageText.className = "error";
//           } else if (response.error === "Missing URL or PIC") {
//             messageText.textContent = "Error: Missing URL or PIC";
//             messageText.className = "error";
//           } else {
//             messageText.textContent = "Error: An error occurred";
//             messageText.className = "error";
//           }
//         } else {
//           // Display a generic error message for other errors
//           messageText.textContent = "Error: An error occurred";
//           messageText.className = "error";
//         }

//         // Insert the message element after the Save button
//         saveButtonNext.parentNode.insertBefore(messageText, saveButtonNext.nextSibling);
//       }
//     };
//     xhr.send(formData);
//     handleSaveDomain();
//   }


//   var product_descSelect = document.querySelector("#product_desc_or_at_least_2_product_images");
//   product_descSelect.style.border = "";
//   event.preventDefault(); // Prevent the default form submission

//   var productCountSelect = document.querySelector("#product-count");
//   var productCountOption = productCountSelect.value;
//   productCountSelect.style.border = "";

//   // Check if the productServiceOption is blank
//   if (productCountOption) {
//     // Get the selected options from #feedback-final and #qualification-feedback dropdowns
//     var product_descOption = product_descSelect.value;

//     // Check if either feedbackFinalOption or qualificationFeedbackOption is chosen
//     if (product_descOption) {
//       product_descSelect.style.border = "";
//       productCountSelect.style.border = "";
//     }
//     else{
//         alert("Have PRODUCT COUNT! Please select PRODUCT DESCRIPTION OR AT LEAST 2 PRODUCT IMAGES");
//         product_descSelect.style.border = "2px solid red";
//         productCountSelect.style.border = "2px solid green";
//       }
//   } 
//   if (feedbackFinalSelect.style.border || qualificationFeedbackSelect.style.border || productServiceSelect.style.border || product_descSelect.style.border || productCountSelect.style.border) {
//     //alert("Please correct the form errors before submitting.");
//     return; // Prevent further execution of the function
//   }
//   else{
//     // Get the form data
//     // handleSaveDomain();
//     var formData = new FormData(document.querySelector("#input-form"));

//     // Check if a message element already exists and remove it if it does
//     var existingMessage = document.querySelector("#message-text");
//     if (existingMessage) {
//       existingMessage.parentNode.removeChild(existingMessage);
//     }

//     // Create a new element to display the "Updated" or "Error" message
//     var messageText = document.createElement("div");
//     messageText.id = "message-text";

//     // Send the form data to the server using AJAX
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/", true); // Replace "/" with the appropriate server-side endpoint
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         var pic = document.getElementById("pic").value;
//         var leadnumber = document.getElementById("lead-number").value;
//         if (xhr.status === 200) {
//           // Display the "Updated" message after successful submission
//           messageText.textContent = "Updated! - " + leadnumber;
//           messageText.className = "success";
//         } else if (xhr.status === 500) {
//           // Check if the response contains an error message for URL and PIC mismatch
//           var response = JSON.parse(xhr.responseText);
//           if (response.error === "URL and PIC mismatch") {
//             messageText.textContent = "Error: URL and PIC already exists";
//             messageText.className = "error";
//           } else if (response.error === "URL already exists") {
//             messageText.textContent = "Error: URL already exists";
//             messageText.className = "error";
//           } else if (response.error === "Missing URL or PIC") {
//             messageText.textContent = "Error: Missing URL or PIC";
//             messageText.className = "error";
//           } else {
//             messageText.textContent = "Error: An error occurred";
//             messageText.className = "error";
//           }
//         } else {
//           // Display a generic error message for other errors
//           messageText.textContent = "Error: An error occurred";
//           messageText.className = "error";
//         }

//         // Insert the message element after the Save button
//         saveButtonNext.parentNode.insertBefore(messageText, saveButtonNext.nextSibling);
//       }
//     };
//     xhr.send(formData);
//     handleSaveDomain();
//   }
  
// });
      

      //Save button only
      // Get the Save button element
      var saveButtonOnly = document.querySelector("#input-form button#save-button-only");
  
      // Add a click event listener to the Save button
      saveButtonOnly.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the selected option from the #product-service dropdown
        var productServiceSelect = document.querySelector("#product-service");
        var productServiceOption = productServiceSelect.value;
        productServiceSelect.style.border = "";
        var feedbackFinalSelect = document.querySelector("#feedback-final");
        feedbackFinalSelect.style.border = "";
        var qualificationFeedbackSelect = document.querySelector("#qualification-feedback");
        qualificationFeedbackSelect.style.border = "";

        var telephoneInput = document.querySelector("#telephone");
        telephoneInput.style.border = "";

        var telephoneValue = telephoneInput.value;
        var digitPattern = /[A-Za-z]/; // Regular expression to check for at least one digit

        if (telephoneValue !== "" && digitPattern.test(telephoneValue)) {
            alert("Wrong telephone format!");
            telephoneInput.style.border = "2px solid red";
        } 

        var telephoneInput1 = document.querySelector("#telephone1");
        telephoneInput1.style.border = "";

        var telephoneValue1 = telephoneInput1.value;
        console.log(telephoneValue1)
        var digitPattern = /[A-Za-z]/; // Regular expression to check for at least one digit

        if (telephoneValue1 !== "" && digitPattern.test(telephoneValue1)) {
            alert("Wrong telephone1 format!");
            telephoneInput1.style.border = "2px solid red";
        } 

        

        var emailInput = document.querySelector("#email");
        emailInput.style.border = "";

        var emailValue = emailInput.value;
        var digitPattern = /@/; // Regular expression to check for at least one digit

        if (emailValue !== "" && !digitPattern.test(emailValue)) {
            alert("Wrong email format!");
            emailInput.style.border = "2px solid red";
        } 

        var emailInput1 = document.querySelector("#email1");
        emailInput1.style.border = "";

        var emailValue1 = emailInput1.value;
        var digitPattern = /@/; // Regular expression to check for at least one digit

        if (emailValue1 !== "" && !digitPattern.test(emailValue1)) {
            alert("Wrong email1 format!");
            emailInput1.style.border = "2px solid red";
        } 

      
        // Check if the productServiceOption is blank
        if (productServiceOption === "") {
          // Get the selected options from #feedback-final and #qualification-feedback dropdowns
          var feedbackFinalOption = feedbackFinalSelect.value;
          var qualificationFeedbackOption = qualificationFeedbackSelect.value;
      
          // Check if either feedbackFinalOption or qualificationFeedbackOption is chosen
          if (feedbackFinalOption || qualificationFeedbackOption) {
            feedbackFinalSelect.style.border = "";
            qualificationFeedbackSelect.style.border = "";
          }
          else{
            alert("PRODUCT/SERVICE blank! Please select FEEDBACK FINAL or QUALIFICATION FEEDBACK");
            productServiceSelect.style.border = "2px solid green";
            feedbackFinalSelect.style.border = "2px solid red";
            qualificationFeedbackSelect.style.border = "2px solid red";
          }
        // } else if (productServiceOption === 'Only Products' || productServiceOption ==='Products & Services'){
        //     var localSpanishSelect = document.querySelector("#local_spanish_seller");
        //     var localSpanishOption = localSpanishSelect.value;
        //     localSpanishSelect.style.border = "";
        //     if (localSpanishOption == 'Y'){
        //       var feedbackFinalOption = feedbackFinalSelect.value;
        //       var qualificationFeedbackOption = qualificationFeedbackSelect.value;
              
        //       if (feedbackFinalOption || qualificationFeedbackOption) {
        //         feedbackFinalSelect.style.border = "";
        //         qualificationFeedbackSelect.style.border = "";
        //       }
        //       else{
        //         alert("LOCAL SPANISH SELLER is "+localSpanishOption+" ! Please select FEEDBACK FINAL or QUALIFICATION FEEDBACK");
        //         localSpanishSelect.style.border = "2px solid green";
        //         feedbackFinalSelect.style.border = "2px solid red";
        //         qualificationFeedbackSelect.style.border = "2px solid red";
        //       }
        //     }
      
        }
        
        else {
          var formData = new FormData(document.querySelector("#input-form"));
      
          // Check if a message element already exists and remove it if it does
          var existingMessage = document.querySelector("#message-text");
          if (existingMessage) {
            existingMessage.parentNode.removeChild(existingMessage);
          }
      
          // Create a new element to display the "Updated" or "Error" message
          var messageText = document.createElement("div");
          messageText.id = "message-text";
      
          // Send the form data to the server using AJAX
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "/", true); // Replace "/" with the appropriate server-side endpoint
          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              var pic = document.getElementById("pic").value;
              var leadnumber = document.getElementById("lead-number").value;
              if (xhr.status === 200) {
                // Display the "Updated" message after successful submission
                messageText.textContent = "Updated! - " + leadnumber;
                messageText.className = "success";
              } else if (xhr.status === 500) {
                // Check if the response contains an error message for URL and PIC mismatch
                var response = JSON.parse(xhr.responseText);
                if (response.error === "URL and PIC mismatch") {
                  messageText.textContent = "Error: Lead Number and PIC already exists";
                  messageText.className = "error";
                } else if (response.error === "URL already exists") {
                  messageText.textContent = "Error: URL already exists";
                  messageText.className = "error";
                } else if (response.error === "Missing URL or PIC") {
                  messageText.textContent = "Error: Missing URL or PIC";
                  messageText.className = "error";
                } else {
                  messageText.textContent = "Error: An error occurred";
                  messageText.className = "error";
                }
              } else {
                // Display a generic error message for other errors
                messageText.textContent = "Error: An error occurred";
                messageText.className = "error";
              }
      
              // Insert the message element after the Save button
              saveButtonOnly.parentNode.insertBefore(messageText, saveButtonOnly.nextSibling);
            }
          };
          xhr.send(formData);
        }
      
      
        var product_descSelect = document.querySelector("#product_desc_or_at_least_2_product_images");
        product_descSelect.style.border = "";
      
      
        var productCountSelect = document.querySelector("#product-count");
        var productCountOption = productCountSelect.value;
        productCountSelect.style.border = "";
      
        // // Check if the productServiceOption is blank
        // if (productCountOption) {
        //   // Get the selected options from #feedback-final and #qualification-feedback dropdowns
        //   var product_descOption = product_descSelect.value;
      
        //   // Check if either feedbackFinalOption or qualificationFeedbackOption is chosen
        //   if (product_descOption) {
        //     product_descSelect.style.border = "";
        //     productCountSelect.style.border = "";
        //   }
        //   else{
        //       alert("Have PRODUCT COUNT! Please select PRODUCT DESCRIPTION OR AT LEAST 2 PRODUCT IMAGES");
        //       product_descSelect.style.border = "2px solid red";
        //       productCountSelect.style.border = "2px solid green";
        //     }
        // } 
        
        if (telephoneInput.style.border ||telephoneInput1.style.border || emailInput.style.border || emailInput1.style.border || feedbackFinalSelect.style.border || qualificationFeedbackSelect.style.border || productServiceSelect.style.border || product_descSelect.style.border || productCountSelect.style.border) {
          //alert("Please correct the form errors before submitting.");
          return; // Prevent further execution of the function
        }
        else{
          var formData = new FormData(document.querySelector("#input-form"));
      
          // Check if a message element already exists and remove it if it does
          var existingMessage = document.querySelector("#message-text");
          if (existingMessage) {
            existingMessage.parentNode.removeChild(existingMessage);
          }
      
          // Create a new element to display the "Updated" or "Error" message
          var messageText = document.createElement("div");
          messageText.id = "message-text";
      
          // Send the form data to the server using AJAX
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "/", true); // Replace "/" with the appropriate server-side endpoint
          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              var pic = document.getElementById("pic").value;
              var leadnumber = document.getElementById("lead-number").value;
              if (xhr.status === 200) {
                // Display the "Updated" message after successful submission
                messageText.textContent = "Updated! - " + leadnumber;
                messageText.className = "success";
              } else if (xhr.status === 500) {
                // Check if the response contains an error message for URL and PIC mismatch
                var response = JSON.parse(xhr.responseText);
                if (response.error === "URL and PIC mismatch") {
                  messageText.textContent = "Error: Lead Number and PIC already exists";
                  messageText.className = "error";
                } else if (response.error === "URL already exists") {
                  messageText.textContent = "Error: URL already exists";
                  messageText.className = "error";
                } else if (response.error === "Missing URL or PIC") {
                  messageText.textContent = "Error: Missing URL or PIC";
                  messageText.className = "error";
                } else {
                  messageText.textContent = "Error: An error occurred";
                  messageText.className = "error";
                }
              } else {
                // Display a generic error message for other errors
                messageText.textContent = "Error: An error occurred";
                messageText.className = "error";
              }
      
              // Insert the message element after the Save button
              saveButtonOnly.parentNode.insertBefore(messageText, saveButtonOnly.nextSibling);
            }
          };
          xhr.send(formData);
        }
      
      });
  });

    

  // Simulate click event on the input box when data is rendered
function simulateInputClick() {
  var inputBox_amount_emails = document.getElementById('amount-of-emails');
  inputBox_amount_emails.focus();
  inputBox_amount_emails.blur();
  var inputBox_amount_phones = document.getElementById('amount-of-phonenumbers');
  inputBox_amount_phones.focus();
  inputBox_amount_phones.blur();
  var inputBox_url = document.getElementById('url');
  inputBox_url.focus();
  inputBox_url.blur();
  var inputBox_lead_number = document.getElementById('lead-number');
  inputBox_lead_number.focus();
  inputBox_lead_number.blur();

  var inputBox_vat = document.getElementById('vat');
  inputBox_vat.focus();
  inputBox_vat.blur();
  var inputBox_company_name = document.getElementById('company-name');
  inputBox_company_name.focus();
  inputBox_company_name.blur();
  var inputBox_telephone = document.getElementById('telephone');
  inputBox_telephone.focus();
  inputBox_telephone.blur();
  var inputBox_telephone1 = document.getElementById('telephone1');
  inputBox_telephone1.focus();
  inputBox_telephone1.blur();
  var inputBox_email = document.getElementById('email');
  inputBox_email.focus();
  inputBox_email.blur();
  var inputBox_email1 = document.getElementById('email1');
  inputBox_email1.focus();
  inputBox_email1.blur();
}


    var newWindow;

    function openNewWindow(url) {
      if (newWindow && !newWindow.closed) {
        newWindow.close();
      }
    
      var leftPosition = window.screen.width - window.screen.width;
    
      newWindow = window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,left=" + leftPosition + ",width=" + window.screen.width + ",height=" + window.screen.height);
    }

    var goDomainButton = document.getElementById('go-domain-button');
    goDomainButton.addEventListener('click', function(event) {
      var get_cookies = getCookie('username');
      if (get_cookies !== 'viethuynh.chungoc' && get_cookies !== 'thuyhang.nguyenthi' && get_cookies !== 'ductin.nguyen' ) {
        alert('Permission denied!');
      } else {
        console.log(get_cookies)
        handleGoDomain();
        
      }
    });

    
    var loadDomainButton = document.getElementById('load-domain');
    var clickCount = 0;
    var maxClicks = 2;

    loadDomainButton.addEventListener('click', function(event) {
      // event.preventDefault();
      handleLoadDomain();



      // var inputElements = document.querySelector("#vat");
      // var form1 = document.querySelectorAll("#input-form input:not(#lead-number):not(#url):not(#note):not(#vat):not(#amount-of-phonenumbers):not(#amount-of-emails),#input-form select:not(#product-service):not(#local_spanish_seller):not(#cluster):not(#l1):not(#l2):not(#product_desc_or_at_least_2_product_images):not(#feedback-final):not(#qualification-feedback):not(#pic)");
      // if (inputElements.value === '') {
      //   form1.forEach(function(inputele){
      //     inputele.setAttribute('disabled', true);
      //   });
      // } else {
      //   form1.forEach(function(inputele){
      //     inputele.removeAttribute('disabled');
      //     inputele.classList.remove('disabled');
      //     inputele.classList.remove('disabled1');
      //     inputele.classList.remove('disabled');
      //     inputele.classList.remove('disabled_product_service_only_service');
      //     inputele.classList.remove('disabled_product_service_na');
      //     inputele.classList.remove('disabled_product_service');
      //     inputele.classList.remove('disabled_spanish');
      //     inputele.classList.remove('pointer_none');
      //   });
      // }
      

      var feedbackFinalSelect = document.querySelector("#feedback-final");
      feedbackFinalSelect.style.border = "";
      var qualificationFeedbackSelect = document.querySelector("#qualification-feedback");
      qualificationFeedbackSelect.style.border = "";

      // Function to simulate a click event
      function simulateClick(element) {
        var event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        element.dispatchEvent(event);
      }

      // Simulate two clicks on loadDomainButton with a delay of 100 milliseconds
      clickCount++;
      if (clickCount >= maxClicks) {
        // Reset the clickCount and return after max clicks
        clickCount = 0;
        return;
      } else {
        setTimeout(function() {
          simulateClick(loadDomainButton);
        }, 500);
      }
    });

    
    
    function simulateClick(element) {
      var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      element.dispatchEvent(event);
    }
    
    


    // var saveButtonNext = document.getElementById('save-button');
    // saveButtonNext.addEventListener('click', function() {
    //   handleSaveDomain();
    // });

    // var saveOnlyButton = document.getElementById('save-button-only');
    // saveOnlyButton.addEventListener('click', function() {
      
    // });

    function updatePic(lead_number, pic) {
        // Create a data object with the url and pic values
        var data = { lead_number: lead_number, pic: pic };

        // Send a POST request to update the pic in the database
        fetch('/update-pic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response as needed
                console.log(data);
                //alert('Pic updated successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                // Show an error message or handle the error gracefully
                alert('Error updating pic in the database.');
            });
    }
    
    var form_default = document.getElementById("input-form");
    var form_default1 = document.querySelectorAll(".reset");
    function handleLoadDefault(){
      form_default.classList.remove('disabled','disabled1','disabled_spanish','disabled_product_service','disabled_product_service_na','disabled_product_service_only_service');
      form_default.querySelectorAll('.pointer_none').forEach(box => {
        box.classList.remove('pointer_none');
        //btn.removeAttribute('disabled');
        
      });
      form_default1.forEach(box => {
        box.removeAttribute('disabled')
        box.removeAttribute('readonly')
        box.removeAttribute('tabindex','-1')
        box.classList.remove('disabled')
        box.classList.remove('disabled1')
        box.classList.remove('disabled_spanish')
        box.classList.remove('disabled_product_service')
        box.classList.remove('disabled_product_service_na')
        box.classList.remove('disabled_product_service_only_service')
        box.classList.remove('pointer_none')
        box.classList.remove('can_not_be_disabled')
        box.classList.remove('imported_data')
        box.value = '';
      });
    }
    function fetchL1Data(clusterValue) {
      fetch('/select-l1?cluster=' + encodeURIComponent(clusterValue))
          .then(response => response.json())
          .then(data => {
              if (data.error) {
                  alert(data.error);
              } else {
                  var select = document.getElementById("l1");
                  $('#l1 option:not(:first)').remove();
                  data.forEach(box => {
                      var option = document.createElement("option");
                      option.text = box;
                      option.value = box;
                      select.appendChild(option);
                  });
              }
          })
          .catch(error => {
              console.error('Error:', error);
              alert('Error loading data from the server.');
          });
  }

    function handleLoadDomain(){
        var picElement = document.getElementById('pic').value;
        
        if (picElement == '') {
            alert('Please select PIC first!');x
        } else {
            // Fetch data from the server using AJAX or fetch API
            fetch('/get-domain-data?pic='+encodeURIComponent(picElement))
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        handleLoadDefault();
                        // Fill the input fields with the retrieved data
                        document.getElementById('lead-number').value = data.lead_number;
                        document.getElementById('url').value = data.url;
                        document.getElementById('amount-of-phonenumbers').value = data.amount_phone_number;
                        document.getElementById('amount-of-emails').value = data.amount_emails;
                        if (data.vat){
                          document.getElementById('vat').value = data.vat;
                          document.getElementById('vat').classList.add('can_not_be_disabled')
                          document.getElementById('vat').classList.add('imported_data')
                          document.getElementById('company-name').removeAttribute('disabled')
                          document.getElementById('revenue').removeAttribute('disabled')
                          document.getElementById('product-count').removeAttribute('disabled')
                          document.getElementById('telephone').removeAttribute('disabled')
                          document.getElementById('telephone1').removeAttribute('disabled')
                          document.getElementById('email').removeAttribute('disabled')
                          document.getElementById('email1').removeAttribute('disabled')
                        }
                        else{
                          document.getElementById('feedback-final').value = 'NOT OK';
                          // document.getElementById('company-name').setAttribute('disabled',true)
                          // document.getElementById('revenue').setAttribute('disabled',true)
                          // document.getElementById('product-count').setAttribute('disabled',true)
                          // document.getElementById('telephone').setAttribute('disabled',true)
                          // document.getElementById('telephone1').setAttribute('disabled',true)
                          // document.getElementById('email').setAttribute('disabled',true)
                          // document.getElementById('email1').setAttribute('disabled',true)
                          document.getElementById('vat').classList.remove('imported_data')
                        }
                        if (data.company_name){
                          document.getElementById('company-name').removeAttribute('disabled')
                          document.getElementById('company-name').value = data.company_name;
                          document.getElementById('company-name').classList.add('can_not_be_disabled')
                          document.getElementById('company-name').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('company-name').classList.remove('can_not_be_disabled')
                          document.getElementById('company-name').classList.remove('imported_data')
                        }
                        if (data.telephone){
                          document.getElementById('telephone').removeAttribute('disabled')
                          document.getElementById('telephone').value = data.telephone;
                          document.getElementById('telephone').classList.add('can_not_be_disabled')
                          document.getElementById('telephone').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('telephone').classList.remove('can_not_be_disabled')
                          document.getElementById('telephone').classList.remove('imported_data')
                        }
                        if (data.telephone1){
                          document.getElementById('telephone1').removeAttribute('disabled')
                          document.getElementById('telephone1').value = data.telephone1;
                          document.getElementById('telephone1').classList.add('can_not_be_disabled')
                          document.getElementById('telephone1').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('telephone1').classList.remove('can_not_be_disabled')
                          document.getElementById('telephone1').classList.remove('imported_data')
                        }
                        if (data.email){
                          document.getElementById('email').removeAttribute('disabled')
                          document.getElementById('email').value = data.email;
                          document.getElementById('email').classList.add('can_not_be_disabled')
                          document.getElementById('email').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('email').classList.remove('can_not_be_disabled')
                          document.getElementById('email').classList.remove('imported_data')
                        }
                        if (data.email1){
                          document.getElementById('email1').removeAttribute('disabled')
                          document.getElementById('email1').value = data.email1;
                          document.getElementById('email1').classList.add('can_not_be_disabled')
                          document.getElementById('email1').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('email1').classList.remove('can_not_be_disabled')
                          document.getElementById('email').classList.remove('imported_data')
                        }
                        
                        
                        if(data.product_service){
                          console.log(data.product_service)
                          document.getElementById('product-service').removeAttribute('disabled')
                          document.getElementById('product-service').value = data.product_service;
                          document.getElementById('product-service').classList.add('imported_data')
                        }
                        if (data.is_local_spanish_seller){
                          document.getElementById('local_spanish_seller').removeAttribute('disabled')
                          document.getElementById('local_spanish_seller').value = data.is_local_spanish_seller;
                          document.getElementById('local_spanish_seller').classList.add('can_not_be_disabled')
                          document.getElementById('local_spanish_seller').classList.add('imported_data')
                        }
                        
                        if(data.cluster){
                          document.getElementById('cluster').removeAttribute('disabled')
                          document.getElementById('cluster').value = data.cluster;
                          fetchL1Data(document.getElementById('cluster').value);
                          document.getElementById('cluster').classList.add('can_not_be_disabled')
                          document.getElementById('cluster').classList.add('imported_data')
                        }
                        
                        if(data.l1){
                          document.getElementById('l1').removeAttribute('disabled')
                          document.getElementById('l1').value = data.l1;
                          document.getElementById('l1').classList.add('can_not_be_disabled')
                          document.getElementById('l1').classList.add('imported_data')
                        }
                        if(data.l2){
                          document.getElementById('l2').removeAttribute('disabled')
                          document.getElementById('l2').value = data.l2;
                          document.getElementById('l2').classList.add('can_not_be_disabled')
                          document.getElementById('l2').classList.add('imported_data')
                        }
                        if(data.revenue){
                          document.getElementById('revenue').removeAttribute('disabled')
                          document.getElementById('revenue').value = data.revenue;
                          document.getElementById('revenue').classList.add('can_not_be_disabled')
                          document.getElementById('revenue').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('revenue').classList.remove('can_not_be_disabled')
                          document.getElementById('revenue').classList.remove('imported_data')
                        }
                        if(data.product_count){
                          document.getElementById('product-count').removeAttribute('disabled')
                          document.getElementById('product-count').value = data.product_count;
                          document.getElementById('product-count').classList.add('can_not_be_disabled')
                          document.getElementById('product-count').classList.add('imported_data')
                        }
                        else{
                          document.getElementById('product-count').classList.remove('can_not_be_disabled')
                          document.getElementById('product-count').classList.remove('imported_data')
                        }
                        if(data.product_desc_or_at_least_2_product_images){
                          document.getElementById('product_desc_or_at_least_2_product_images').removeAttribute('disabled')
                          document.getElementById('product_desc_or_at_least_2_product_images').value = data.product_desc_or_at_least_2_product_images;
                          document.getElementById('product_desc_or_at_least_2_product_images').classList.add('can_not_be_disabled')
                          document.getElementById('product_desc_or_at_least_2_product_images').classList.add('imported_data')
                        }
                        if(data.feedback_final){
                          document.getElementById('feedback-final').removeAttribute('disabled')
                          document.getElementById('feedback-final').value = data.feedback_final;
                        }
                        if(data.qualification_feedback){
                          document.getElementById('qualification-feedback').removeAttribute('disabled')
                          document.getElementById('qualification-feedback').value = data.qualification_feedback;
                        }
                        if (data.record_left) {
                
                          document.getElementById('record-left-value').textContent = data.record_left;
                        }
                        document.getElementById('your_score').textContent = data.your_score;
                        document.getElementById('your_paid').textContent = data.your_paid;

                        // Call the updatePic function to update the pic in the database
                        updatePic(data.lead_number, picElement);

                        simulateInputClick();
                        
                        var form_input = document.querySelectorAll("#lead-number,#url,#amount-of-phonenumbers,#amount-of-emails")
                        form_input.forEach(box => {
                          box.classList.remove('pointer_none');
                          box.classList.add('pointer_none');
                          box.removeAttribute('tabindex','-1')
                          box.setAttribute('tabindex','-1')
                        });
                        var telephone = document.querySelector("#telephone");
                        var telephone1 = document.querySelector("#telephone1");
                        if (data.amount_phone_number != ''){
                          if (data.amount_phone_number == '1'){
                            telephone1.setAttribute('readonly', true);
                          }
                          else if(Number(data.amount_phone_number) > 1){
                            telephone.setAttribute('readonly', true);
                            telephone1.setAttribute('readonly', true);
                          }
                          else{
                            telephone.classList.remove('pointer_none')
                            telephone1.classList.remove('pointer_none')
                            telephone.removeAttribute('tabindex','-1')
                            telephone1.removeAttribute('tabindex','-1')
                            telephone.removeAttribute('readonly')
                            telephone1.removeAttribute('readonly')
                          }
                        }
                        else{
                          telephone.classList.remove('pointer_none')
                          telephone1.classList.remove('pointer_none')
                          telephone.removeAttribute('tabindex','-1')
                          telephone1.removeAttribute('tabindex','-1')
                          telephone.removeAttribute('readonly')
                          telephone1.removeAttribute('readonly')
                        }
                        var email = document.querySelector("#email");
                        var email1 = document.querySelector("#email1");
                        if (data.amount_emails != ''){
                          if (data.amount_emails == '1'){
                            email1.setAttribute('readonly', true);
                          }
                          else if(Number(data.amount_emails) > 1){
                            email.setAttribute('readonly', true);
                            email1.setAttribute('readonly', true);
                          }
                          else{
                            email.classList.remove('pointer_none')
                            email1.classList.remove('pointer_none')
                            email.removeAttribute('tabindex','-1')
                            email1.removeAttribute('tabindex','-1')
                            email.removeAttribute('readonly')
                            email1.removeAttribute('readonly')
                          }
                        }
                        else{
                          email.classList.remove('pointer_none')
                          email1.classList.remove('pointer_none')
                          email.removeAttribute('tabindex','-1')
                          email1.removeAttribute('tabindex','-1')
                          email.removeAttribute('readonly')
                          email1.removeAttribute('readonly')
                        }
                        // if(data.url) {
                        //   openNewWindow(data.url);
                        // }
                          
                    }
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error loading data from the server.');
                });
        }
        
    }
    function handleSaveDomain(){
      var picElement = document.getElementById('pic').value;
      if (picElement == '') {
          alert('Please select PIC first!');
      } else {
          // Fetch data from the server using AJAX or fetch API
          fetch('/get-domain-data-save')
              .then(response => response.json())
              .then(data => {
                  if (data.error) {
                      alert("No new data found! Please click <LOAD NEW DOMAIN> button to load pending data if exist!");
                  } else {
                      handleLoadDefault();
                      document.getElementById('lead-number').value = data.lead_number;
                      document.getElementById('url').value = data.url;
                      document.getElementById('amount-of-phonenumbers').value = data.amount_phone_number;
                      document.getElementById('amount-of-emails').value = data.amount_emails;
                      document.getElementById('vat').value = data.vat;
                      document.getElementById('company-name').value = data.company_name;
                      document.getElementById('telephone').value = data.telephone;
                      document.getElementById('telephone1').value = data.telephone1;
                      document.getElementById('email').value = data.email;
                      document.getElementById('email1').value = data.email1;
                      if(data.product_service){
                        document.getElementById('product-service').value = data.product_service;
                      }
                      if (data.is_local_spanish_seller){
                        document.getElementById('local_spanish_seller').value = data.is_local_spanish_seller;
                      }
                      if(data.cluster){
                        document.getElementById('cluster').value = data.cluster;
                      }
                      
                      if(data.l1){
                        document.getElementById('l1').value = data.l1;
                      }
                      if(data.l2){
                        document.getElementById('l2').value = data.l2;
                      }
                      
                      if(data.revenue){
                        document.getElementById('revenue').value = data.revenue;
                      }
                      if(data.product_count){
                        document.getElementById('product-count').value = data.product_count;
                      }
                      if(data.product_desc_or_at_least_2_product_images){
                        document.getElementById('product_desc_or_at_least_2_product_images').value = data.product_desc_or_at_least_2_product_images;
                      }
                      if(data.feedback_final){
                        document.getElementById('feedback-final').value = data.feedback_final;
                      }
                      if(data.qualification_feedback){
                        document.getElementById('qualification-feedback').value = data.qualification_feedback;
                      }
                      // Call the updatePic function to update the pic in the database
                      updatePic(data.lead_number, picElement);

                      simulateInputClick();
                      
                      var form_input = document.querySelectorAll("#lead-number,#url,#amount-of-phonenumbers,#amount-of-emails")
                      form_input.forEach(box => {
                        box.classList.remove('pointer_none');
                        box.classList.add('pointer_none');
                        box.removeAttribute('tabindex','-1')
                        box.setAttribute('tabindex','-1')
                      });
                      var telephone = document.querySelector("#telephone");
                      var telephone1 = document.querySelector("#telephone1");
                      if (data.amount_phone_number != ''){
                        if (data.amount_phone_number == '1'){
                          telephone1.classList.remove('pointer_none')
                          telephone1.classList.add('pointer_none')
                        }
                        else if(Number(data.amount_phone_number) > 1){
                          telephone.classList.remove('pointer_none')
                          telephone.classList.add('pointer_none')
                          telephone1.classList.remove('pointer_none')
                          telephone1.classList.add('pointer_none')
                        }
                      }
                      else{
                        telephone.classList.remove('pointer_none')
                        telephone1.classList.remove('pointer_none')
                      }
                      var email = document.querySelector("#email");
                      var email1 = document.querySelector("#email1");
                      if (data.amount_emails != ''){
                        if (data.amount_emails == '1'){
                          email1.classList.remove('pointer_none')
                          email1.classList.add('pointer_none')
                        }
                        else if(Number(data.amount_emails) > 1){
                          email.classList.remove('pointer_none')
                          email.classList.add('pointer_none')
                          email1.classList.remove('pointer_none')
                          email1.classList.add('pointer_none')
                        }
                      }
                      else{
                        email.classList.remove('pointer_none')
                        email1.classList.remove('pointer_none')
                      }
                      // if(data.url) {
                      //   openNewWindow(data.url);
                      // }
                        
                  }
                  
              })
              .catch(error => {
                  console.error('Error:', error);
                  alert('Error loading data from the server.');
              });
      }
      
  }

  function handleGoDomain(){
    var picElement = document.getElementById('pic').value;
    var LeadNumberGo = document.getElementById('lead-number-go').value;
    
    if (picElement == '') {
        alert('Please select PIC first!');x
    } 
    else if (LeadNumberGo == '') {
        alert('Please enter Lead Number!');x
    } 
     else {
        // Fetch data from the server using AJAX or fetch API
        fetch('/get-domain-data?pic='+encodeURIComponent(picElement)+'&leadnumbergo='+LeadNumberGo)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    handleLoadDefault();
                    // Fill the input fields with the retrieved data
                    document.getElementById('lead-number').value = data.lead_number;
                    document.getElementById('url').value = data.url;
                    document.getElementById('amount-of-phonenumbers').value = data.amount_phone_number;
                    document.getElementById('amount-of-emails').value = data.amount_emails;
                    if (data.vat){
                      document.getElementById('vat').value = data.vat;
                      document.getElementById('vat').classList.add('can_not_be_disabled')
                      document.getElementById('vat').classList.add('imported_data')
                      document.getElementById('company-name').removeAttribute('disabled')
                      document.getElementById('revenue').removeAttribute('disabled')
                      document.getElementById('product-count').removeAttribute('disabled')
                      document.getElementById('telephone').removeAttribute('disabled')
                      document.getElementById('telephone1').removeAttribute('disabled')
                      document.getElementById('email').removeAttribute('disabled')
                      document.getElementById('email1').removeAttribute('disabled')
                    }
                    else{
                      document.getElementById('feedback-final').value = 'NOT OK';
                      // document.getElementById('company-name').setAttribute('disabled',true)
                      // document.getElementById('revenue').setAttribute('disabled',true)
                      // document.getElementById('product-count').setAttribute('disabled',true)
                      // document.getElementById('telephone').setAttribute('disabled',true)
                      // document.getElementById('telephone1').setAttribute('disabled',true)
                      // document.getElementById('email').setAttribute('disabled',true)
                      // document.getElementById('email1').setAttribute('disabled',true)
                      document.getElementById('vat').classList.remove('imported_data')
                    }
                    if (data.company_name){
                      document.getElementById('company-name').removeAttribute('disabled')
                      document.getElementById('company-name').value = data.company_name;
                      document.getElementById('company-name').classList.add('can_not_be_disabled')
                      document.getElementById('company-name').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('company-name').classList.remove('can_not_be_disabled')
                      document.getElementById('company-name').classList.remove('imported_data')
                    }
                    if (data.telephone){
                      document.getElementById('telephone').removeAttribute('disabled')
                      document.getElementById('telephone').value = data.telephone;
                      document.getElementById('telephone').classList.add('can_not_be_disabled')
                      document.getElementById('telephone').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('telephone').classList.remove('can_not_be_disabled')
                      document.getElementById('telephone').classList.remove('imported_data')
                    }
                    if (data.telephone1){
                      document.getElementById('telephone1').removeAttribute('disabled')
                      document.getElementById('telephone1').value = data.telephone1;
                      document.getElementById('telephone1').classList.add('can_not_be_disabled')
                      document.getElementById('telephone1').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('telephone1').classList.remove('can_not_be_disabled')
                      document.getElementById('telephone1').classList.remove('imported_data')
                    }
                    if (data.email){
                      document.getElementById('email').removeAttribute('disabled')
                      document.getElementById('email').value = data.email;
                      document.getElementById('email').classList.add('can_not_be_disabled')
                      document.getElementById('email').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('email').classList.remove('can_not_be_disabled')
                      document.getElementById('email').classList.remove('imported_data')
                    }
                    if (data.email1){
                      document.getElementById('email1').removeAttribute('disabled')
                      document.getElementById('email1').value = data.email1;
                      document.getElementById('email1').classList.add('can_not_be_disabled')
                      document.getElementById('email1').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('email1').classList.remove('can_not_be_disabled')
                      document.getElementById('email').classList.remove('imported_data')
                    }
                    
                    
                    if(data.product_service){
                      console.log(data.product_service)
                      document.getElementById('product-service').removeAttribute('disabled')
                      document.getElementById('product-service').value = data.product_service;
                      document.getElementById('product-service').classList.add('imported_data')
                    }
                    if (data.is_local_spanish_seller){
                      document.getElementById('local_spanish_seller').removeAttribute('disabled')
                      document.getElementById('local_spanish_seller').value = data.is_local_spanish_seller;
                      document.getElementById('local_spanish_seller').classList.add('can_not_be_disabled')
                      document.getElementById('local_spanish_seller').classList.add('imported_data')
                    }
                    
                    if(data.cluster){
                      document.getElementById('cluster').removeAttribute('disabled')
                      document.getElementById('cluster').value = data.cluster;
                      fetchL1Data(document.getElementById('cluster').value);
                      document.getElementById('cluster').classList.add('can_not_be_disabled')
                      document.getElementById('cluster').classList.add('imported_data')
                    }
                    
                    if(data.l1){
                      document.getElementById('l1').removeAttribute('disabled')
                      document.getElementById('l1').value = data.l1;
                      document.getElementById('l1').classList.add('can_not_be_disabled')
                      document.getElementById('l1').classList.add('imported_data')
                    }
                    if(data.l2){
                      document.getElementById('l2').removeAttribute('disabled')
                      document.getElementById('l2').value = data.l2;
                      document.getElementById('l2').classList.add('can_not_be_disabled')
                      document.getElementById('l2').classList.add('imported_data')
                    }
                    if(data.revenue){
                      document.getElementById('revenue').removeAttribute('disabled')
                      document.getElementById('revenue').value = data.revenue;
                      document.getElementById('revenue').classList.add('can_not_be_disabled')
                      document.getElementById('revenue').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('revenue').classList.remove('can_not_be_disabled')
                      document.getElementById('revenue').classList.remove('imported_data')
                    }
                    if(data.product_count){
                      document.getElementById('product-count').removeAttribute('disabled')
                      document.getElementById('product-count').value = data.product_count;
                      document.getElementById('product-count').classList.add('can_not_be_disabled')
                      document.getElementById('product-count').classList.add('imported_data')
                    }
                    else{
                      document.getElementById('product-count').classList.remove('can_not_be_disabled')
                      document.getElementById('product-count').classList.remove('imported_data')
                    }
                    if(data.product_desc_or_at_least_2_product_images){
                      document.getElementById('product_desc_or_at_least_2_product_images').removeAttribute('disabled')
                      document.getElementById('product_desc_or_at_least_2_product_images').value = data.product_desc_or_at_least_2_product_images;
                      document.getElementById('product_desc_or_at_least_2_product_images').classList.add('can_not_be_disabled')
                      document.getElementById('product_desc_or_at_least_2_product_images').classList.add('imported_data')
                    }
                    if(data.feedback_final){
                      document.getElementById('feedback-final').removeAttribute('disabled')
                      document.getElementById('feedback-final').value = data.feedback_final;
                    }
                    if(data.qualification_feedback){
                      document.getElementById('qualification-feedback').removeAttribute('disabled')
                      document.getElementById('qualification-feedback').value = data.qualification_feedback;
                    }
                      if (data.record_left) {
              
                        document.getElementById('record-left-value').textContent = data.record_left;
                      }
                      document.getElementById('your_score').textContent = data.your_score;
                      document.getElementById('your_paid').textContent = data.your_paid;

                      // Call the updatePic function to update the pic in the database
                      updatePic(data.lead_number, picElement);

                      simulateInputClick();
                      
                      var form_input = document.querySelectorAll("#lead-number,#url,#amount-of-phonenumbers,#amount-of-emails")
                      form_input.forEach(box => {
                        box.classList.remove('pointer_none');
                        box.classList.add('pointer_none');
                        box.removeAttribute('tabindex','-1')
                        box.setAttribute('tabindex','-1')
                      });
                      var telephone = document.querySelector("#telephone");
                      var telephone1 = document.querySelector("#telephone1");
                      if (data.amount_phone_number != ''){
                        if (data.amount_phone_number == '1'){
                          telephone1.setAttribute('readonly', true);
                        }
                        else if(Number(data.amount_phone_number) > 1){
                          telephone.setAttribute('readonly', true);
                          telephone1.setAttribute('readonly', true);
                        }
                        else{
                          telephone.classList.remove('pointer_none')
                          telephone1.classList.remove('pointer_none')
                          telephone.removeAttribute('tabindex','-1')
                          telephone1.removeAttribute('tabindex','-1')
                          telephone.removeAttribute('readonly')
                          telephone1.removeAttribute('readonly')
                        }
                      }
                      else{
                        telephone.classList.remove('pointer_none')
                        telephone1.classList.remove('pointer_none')
                        telephone.removeAttribute('tabindex','-1')
                        telephone1.removeAttribute('tabindex','-1')
                        telephone.removeAttribute('readonly')
                        telephone1.removeAttribute('readonly')
                      }
                      var email = document.querySelector("#email");
                      var email1 = document.querySelector("#email1");
                      if (data.amount_emails != ''){
                        if (data.amount_emails == '1'){
                          email1.setAttribute('readonly', true);
                        }
                        else if(Number(data.amount_emails) > 1){
                          email.setAttribute('readonly', true);
                          email1.setAttribute('readonly', true);
                        }
                        else{
                          email.classList.remove('pointer_none')
                          email1.classList.remove('pointer_none')
                          email.removeAttribute('tabindex','-1')
                          email1.removeAttribute('tabindex','-1')
                          email.removeAttribute('readonly')
                          email1.removeAttribute('readonly')
                        }
                      }
                      else{
                        email.classList.remove('pointer_none')
                        email1.classList.remove('pointer_none')
                        email.removeAttribute('tabindex','-1')
                        email1.removeAttribute('tabindex','-1')
                        email.removeAttribute('readonly')
                        email1.removeAttribute('readonly')
                      }
                    // if(data.url) {
                    //   openNewWindow(data.url);
                    // }
                      
                }
                
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error loading data from the server.');
            });
    }
    
}


  

