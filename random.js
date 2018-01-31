const  toTitleCase = str => {
    return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(toTitleCase('jaha naeem gitonga'))
console.log('working')


//TRY THIS ON YOUR FORMS
//USE NAME PROPERTIES FOR ALL INPUTS FOR IT TO WORK
handleInputChange = event => {
   const {name, value} = event.target

this.setState({
    [name]:value
}) 
}
