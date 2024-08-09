class SSCStudent{
  constructor(name,age,gender){
    console.log("We are team");
    console.log(name,age,gender);

    this.name=name;
    this.gender= 0;
    this.age =0;
}

calculateResult = () =>{
    console.log("Calculate result");
}
}

export default SSCStudent;