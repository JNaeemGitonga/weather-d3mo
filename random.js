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




startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.setState({date:moment(today).format('MMM Do YY')})
    this.props.dispatch(updateTime(`${h}:${m}:${s}`));
    setTimeout(this.startTime, 500);
}

checkTime = i => {
    if (i < 10) {i = '0' + i}
    return i
}