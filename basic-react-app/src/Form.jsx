function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted")
}
export default function Form(){
    return(
        <form>
           <input type = "text" placeholder="Write something"/>
           <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}