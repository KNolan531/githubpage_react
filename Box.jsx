import React from "react"; 
import "./Box.css"; 


function Box() { 

    return (
    <div><center><div className="notepad"><div className="updateBox"> 
    <h1 className="boxHeading"><u><strong>Latest Update:</strong></u> </h1> 
    <p>Updated on 3/29/2021 with new web app from SWE App Domain class and independent React project. </p>
    </div><br /><br />
    <div className="mainBox"> <h2><center><strong>Welcome to my Github Portfolio Page!</strong></center></h2>
    <p> This github website will serve as portfolio of all the various projects and assignments I have worked on and/or completed during my time at Kennesaw State. It was built using react with various css and javascript capabilities included.
      My goal is to add more interactive elements to this site itself as time permits.</p>
        
        <p>The links on the navbar will be updated as new projects are added. The update box above will display the most recent date that something has been added and a short description. </p> 
        <p> Listed below are a few short descriptions of the links included in the Navbar and more details on each. </p>
        <br /><br /><div className="container">
        <div className="contentBox">     
        <h1 className="boxHeading"><u><strong>Web Programming</strong></u> </h1> 
         <center>This section contains various web programming based assignments I have completed. <p />They include simple javscript functions, python server calls, jquery and more.  </center>
        </div>
        <div className="contentBox"> 
        <h1 className="boxHeading"><u><strong>Software Engineering</strong></u> </h1> 
         <center>This section contains various projects and assignments I have worked on related to Software Engineering concepts. <p />They include Software Testing, Software Process and Prototyping. UML diagrams, test cases and digital prototypes are included. </center>
        </div> 
        <div className="contentBox"> 
        <h1 className="boxHeading"><u><strong>Web Apps </strong></u> </h1> 
         <center>This section contains various web apps I have worked on either as a school project or indepedent work. <p />They are usually deployed on either github,heroku or vercel. They include nodejs, nodejs with express and react. </center>
        </div>
        
        </div>             
        
        </div>
        


        
    </div> </center>
    

   </div>

    
    );

}

export default Box; 