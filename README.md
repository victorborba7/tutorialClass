# Build Tutorials (in Development)
A simple class in javascript to build tutorials for users.

1. Download the Tutorial.js and include to your project.

2. Call the javascript file in your HTML file:
  script type="text/javascript" src="js/Tutorial.js" charset="ISO-8859-1"></script>

3. In your script instantiate the class:
  eg.: var Tutorial = new Tutorial();
  
4. Than use the function "add(obj)" to add steps.
  eg.: Tutorial.add({
    id: "txbName",
    color: "red", 
    text: "Insert your name here"
  });
 
5. Peg the "init()" to a Tutorial button.
  eg.: document.querySelector("#btnTutorial").onclick(()=>{
    Tutorial.init();
  });

6. Share.


Please, in case bugs occurences contact me.
