function getFormvalue() {
    //Write your code here
    let form=document.getElementById('form1');
	let fname=form['fname'].value;
	let lname=form['lname'].value;
	let fulln=fname+" "+lname;
	alert(fulln);
}
