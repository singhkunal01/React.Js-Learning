import React ,{useState} from 'react'

export default function TextForm(props) {
    const toUppercase = () => {
        // console.log('upper case clicked ', text);
        let uppercaseText = text.toUpperCase();
        //using setText
        setText(uppercaseText);
    }

    /*after changing of state we cannot change in textarea you can when we change 
    anything the onChange function called so we get the event in return thats why use event
    in setText
*/
    const onChangeClick = (e) => {
        // console.log('onchange clicked');
        setText(e.target.value);//handling event,it helps you to change the value in textarea
    }
    
    
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState('Enter Your Text Here...');

    /*Note we cannot change state like this - text = "Enter your text here"
     we have to change in terms of function
     correct way : text ("Enter your text here")
     */
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={onChangeClick}  id="txtComp" rows="3" ></textarea>
          <button className="btn btn-primary my-4" onClick={toUppercase} >Convert To UpperCase</button>
    </div>
  );
}

/* here we use useState to set the text dynamically  */