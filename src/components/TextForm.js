import React, { useState } from "react";

export default function TextForm(props) {

 

  const toUppercase = () => {
    // console.log('upper case clicked ', text);
    let uppercaseText = text.toUpperCase();
    //using setText
    setText(uppercaseText);
    };
    
    //converting into back to lower case
  const toLowercase = () => {
    let lowercaseText = text.toLowerCase();
    //using setText
    setText(lowercaseText);
    }; 

  const clearText = () => {
      setText("");
  };
 
 
  /*after changing of state we cannot change in textarea you can when we change 
    anything the onChange function called so we get the event in return thats why use event
    in setText
    */
    
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState("");
  const onChangeClick = e => {
    // console.log('onchange clicked');
    setText(e.target.value); //handling event,it helps you to change the value in textarea
  };

  /*Note we cannot change state like this - text = "Enter your text here"
     we have to change in terms of function
     correct way : text ("Enter your text here")
     */
    return (
      <>
        <div className="container">
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
            {props.heading}
          </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={onChangeClick}
              id="txtComp"
              rows="3"
              placeholder="Enter Your Text Here .."
              style={{
                backgroundColor: props.mode === "light" ? "#212529" : "white",
                color: props.mode === "light" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary my-4 mx-2" onClick={toUppercase}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={toLowercase}>
            Convert To LowerCase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={clearText}>
            Clear
          </button>
        </div>

        {/* another component */}
        <div className="container my-4">
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>Your Text Summary</h1>
          <p>
            <li style={{ color: props.mode === "light" ? "black" : "white" }}>
              <strong>Total Words: </strong>
              {text.length !== 0 ? text.split(" ").length : 0}
            </li>
            <li style={{ color: props.mode === "light" ? "black" : "white" }}>
              <strong>Total Characters: </strong>
              {text.length}
            </li>
            <li style={{ color: props.mode === "light" ? "black" : "white" }}>
              <strong>Total Spaces: </strong>
              {text.split(" ").length - 1}
            </li>
          </p>
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }} className=" my-3">Preview Of Text :</h1>
          <li style={{ color: props.mode === "light" ? "red" : "cyan" }} className="preview">{text.length<=0?'Enter Some Text To Watch Preview':text}</li>
        </div>
      </>
    );
}

/* here we use useState to set the text dynamically  */
