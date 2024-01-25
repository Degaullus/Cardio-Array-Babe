//Array coorection. 

///////////////////////////////////
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
  // Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

//ROBINs solution. 
const filteredInventors = inventors.filter((inventor) => 
    inventor.year > 1500 && 1600; 
)

console.log(filteredInventors); 

////////////////////////////////////

// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
  // Expected output: an array containing only one inventor: Isaac Newton

  const math = inventors.filter(inventor) => inventor.categories && inventor.categories.includes("mathematician"): 

  console/log(math); 

  //prepare variable math. filtere trhourgt inventors. 
  //if the left hand is tru => then it's going to the other side. So we don't know if inventors as categorie.We check if inventors categoeires exist. If yes : it stop. If doent goes on the other to the right. 

  //solution reagan : CALL OPTIONNAL CHAINING it will be : 
  inventor.categories?. includes


  const  lookingManPhy = inventors.filter(inventor => inventor.categories?.includes("phycisist") && inventor.categories?.includes("man")); 

  //you take the array andfilter the array. filter will check every array for a criteria. It will check if every object has the categorie fiel, if it does  : include worl phisist. If it does go further : look for macn. If both are there, then we are good and log this for us. 
  //if you need OR, you will need, and OR operator 
  //IMPORTANT : INput just takes one parameter. 

  ////////////////////////////////////////////////

  // Array.prototype.map()
  // 4. Give us an array filled with the inventors first and last names
  // Expected output:
  // ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]
  
  const names = inventors.map(inventor) => inventor.first + " " + inventor.last);
  console.log(names);  
