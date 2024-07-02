window.addEventListener('load', function(event)
{
    printText()
    printInputText()
    sendContactDetails()
})

function printText(){
    const button = document.getElementById('click-btn')
    button.addEventListener('click', () =>{
        //arrow function code
        const h1 = document.getElementById('title')
        h1.innerHTML="<p>My name is Mike</p>"
        })
    }
function printInputText(){
        const fnInput = document.getElementById('fn-input')
        const spanText = document.getElementById('input-text')

        fnInput.addEventListener('input', (event) =>
            {
            const inputValue = fnInput.value
            spanText.innerHTML = inputValue

            })
        }

function sendContactDetails(){
    const form = document.getElementById('contact-form')

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        console.log("Prevented default action")

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())
        
        console.log("formData", data)
    }
    )
}