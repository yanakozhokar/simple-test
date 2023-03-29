class Some {
  method = () => {
    console.log("this is an arrow => ", this);
  };

  meth() {
    console.log("this is a function => ", this);
  }
}

const temp = new Some();

temp.meth();
temp.method();
