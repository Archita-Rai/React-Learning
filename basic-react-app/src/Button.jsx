function displayHelloWorld(event){
    console.log("Hello world!");
    console.log(event)
    // let h1 = document.createElement("h1");
    // h1.innerText = "Hello World!";
    // document.body.appendChild(h1);
}
function handleMouseHover(){
    console.log("byee");
}
export default function Button(){
    return (
        <div>
            <button onClick={displayHelloWorld}>Click me </button>
            <p onMouseOver={handleMouseHover}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni illo facere molestias quibusdam eos ab, doloremque magnam laudantium quas possimus! Sint, fugiat officiis eligendi repellendus omnis necessitatibus laudantium autem quisquam!
            </p>
        </div>
    )
}