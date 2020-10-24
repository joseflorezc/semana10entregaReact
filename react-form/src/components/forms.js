import React, {useState} from 'react';
import Form from "./form";




const Forms = () => {

   

    const [inputFields, setInputFields] = useState ([
        {type: '', name: '', placeholder: '', id:'', required: '', max:'', min:''},
        {type: '', name: '', placeholder: '', id:'', required: '', max:'', min:''}
    ]);

    

    const handleChangeInput = (index, evt) => {
        console.log(evt,index);
        const values = [...inputFields];
        values[index][evt.target.name] = evt.target.value;
        setInputFields(values);
        console.log(values);
        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("inputFields", inputFields)
        
        
        // setErrors(validateForm(values));
    }

    const handleRemoveFields= (index)=>{
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
        
    }
    const handleAddFields= ()=>{
        setInputFields([...inputFields, {type: '', name: '', placeholder: '', id:'', required: '', max:'', min:''} ])
    }



   // <input className="btn btn-primary px-1" type="button" value="add" onClick={handleAddFields()}/>
   //<input className="btn btn-primary px-1" type="button" value="remove" onClick={handleRemoveFields()}/>
                   
    // en ca
    return(
        <div>
            <h1>Register form</h1>
            
           <form onSubmit={handleSubmit}>
               { inputFields.map((inputField,index) => (
                   <div key={index}>
                       <div className="container-fluid text-white bg-secondary">
                    <label className= "">creating Forms</label>
                   <div className="form-group py-2">
                   
                   <input type="text" className="form-control py-2" id="type"  placeholder="type" required onChange={event => handleChangeInput(index, event)}/>
                   <input type="text" className="form-control px-1 py-2" id="name"  required placeholder="name" onChange={event => handleChangeInput(index, event)}/>
                   <input type="text" className="form-control px-1 py-2" id="placeholder"  required placeholder="placeholder" onChange={event => handleChangeInput(index, event)}/>
                   <input type="text" className="form-control px-1 py-2" id="id"  required placeholder="id" onChange={event => handleChangeInput(index, event)}/>
                   <div className="form-check py-2">
                   <input type="checkbox" className="form-check-input px-1 py-2"  id="required" onChange={event => handleChangeInput(index, event)}/>
                   <label className="form-check-label py-2" htmlFor="required">Required?</label>
                   </div>
                   <input type="number" className="form-control px-1 py-2" id="max"  placeholder="max in form" onChange={event => handleChangeInput(index, event)}/>
                   <input type="number" className="form-control px-1 py-2" id="min"  placeholder="min in form" onChange={event => handleChangeInput(index, event)}/>           
                   </div>
                   </div>
                   <hr />
                   </div>
               ))
                }
                <button type="submit" className="btn btn-primary py-3" onSubmit={handleSubmit}>Submit Form</button>
                </form>
                <hr />
                
                



                </div>


    );
    
    // <Form data= {inputFields}/>
}

export default Forms;