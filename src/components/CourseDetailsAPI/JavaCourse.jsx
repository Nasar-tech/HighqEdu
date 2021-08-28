import React from "react";
import Contactus from "../Contactus";
import OnlyNav from "../onlyNav";

const JavaCourse = () => {
  return (
    <div className="container-fluid">
      <br></br>
      <br></br>
      <br></br>
      <div>

        <OnlyNav></OnlyNav>
        <div className="container-fluid">
        <OnlyNav />
      </div>
      <br />
      <br />
      <br />
      
      <div className="container courseDetails">
        <div className="row">
          <div className="col-10 col-xl-6 col-lg-6 col-md-6">
            <h2>Java Course Details : </h2>
            ·   {" "}
              <h4> Introduction to java</h4>
            <ul>
              <li>JDK installation</li>
              <li>Keywords,</li>
              <li>Identifiers</li>
              <li>Data types</li>
              <li>Variables and Arrays</li>
              <li>Widening and Narrowing</li>
              <li>Operators</li>
              <li>Control Statements</li>
            </ul>
            <h4>Conditional-if switch</h4>
            <h4>Looping-for while do while for each</h4>
            <h4>Control Transfer break co</h4>
            <h4>Object Oriented Programming System</h4>
            <ul>
              <li>User Defined Classes</li>
              <li>Object creation</li>
              <li>Reference variable</li>
                 <li> Global variables</li>
            </ul>
            <h4>Static and non static </h4>
            <h4>Primitive and non primitive</h4>
            <h4>Final and non final</h4>
            <h4>Constructors</h4>
            <h4>Static block </h4>
            <h4>Non static block</h4>
            <h4>Static and non static methods</h4>
            <h4>Method Overloading</h4>
            <h4>Inheritance</h4>
            <h4>Package</h4>
            <h4> Access Modifiers</h4>
            <h4>Method overriding</h4>
            <h4>Abstraction </h4>
            <h4> Polymorphism </h4>
            <h4>Abstract classes</h4>
            <h4>Interfaces</h4>
            <h4>Typecasting</h4>
            <h4>Encapsulation</h4>
            <h4>Java Built-in packages and API</h4>
            <ul>
              <li>String, String Buffer</li>
              <li>Exception Handling</li>
              <li>Wrapper Classes</li>
              <li>JAVA COLLECTIONS</li>
            </ul>
            <h4>Data Base</h4>
            <ul>
              <li>Introduction to JDBC</li>
              <li>Database Connections</li>
              <li>Result Sets</li>
              <li>Exceptions Handling</li>
            </ul>
            <h4>Unit Testing</h4>
            <ul>
              <li>Introduction to Unit testing</li>
              <li>Junit and TestNG</li>
              <li>Annontations</li>
              <li>Reporting</li>
            </ul>
            <h4>Programming Session</h4>
            <ul>
              <li>Control Statements</li>
              <li>Strings </li>
              <li>Arrays</li>
              <li>Collections </li>
            </ul>
                
          </div>
         
        </div>
      </div>
        <Contactus></Contactus>
      </div>
    </div>
  );
};

export default JavaCourse;
