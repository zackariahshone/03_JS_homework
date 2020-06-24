Using the generate password button The user is prompeted with four options of how they want their password to look. 

1 Inclued Upper case
2 Inclued Lower case
3 Inclued Numbers
4 Inclued Special Char

Before assigning a string of char I created variables of empty strings so i could later change their values depending the answer of the user

Input is brought in from the user with my preferences function which returns the prefered string of characters

While gathering input I used while loops and do while loops depending on if I needed to check conditions before or after a block of code runs. Gathering my yes and no answers if the answer does not === Y or N or is Blank on any answer this block runs until all conditions are met 

Then depending on what answers are chosen I have my char sets being assigned accordingly and then I concatonate my strings if it will use empty string if the user entered n or it will populate the string with which ever char set chosen and add them all to gether and return the passChar which is the full set of variables. 

In the generate function I called my preferences and assigned it to passChar. I logged it in console to varifiy my data set. Then the user is prompted for how long the password should be which sets the pLenght for the for loop telling the program to iterate pLength many times. If the user selects something over 128 or under 8 they are alerted and prompted until they get it correct. 

Once they enter a correct number it is then passed on to the next step which is to pull characters from the string at random. I created an empty string called pWord to use here and add to the the empty string as random numbers are enter in the char(randomnumbers).length of the password data set. This function returns the pWord(password that has been generated)

The last function which writes the final password the web page calls the generate password function which returns the value of pWord. That value is assigned to password. 

Lastly an event listener is set to fire writePassword() when the generate password button is clicked. 

