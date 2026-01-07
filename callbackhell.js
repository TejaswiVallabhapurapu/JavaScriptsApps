const st_details = () => {
    console.log("st_info");
    setTimeout(() => {
        let rollno = [1,2,3,4];
        console.log(rollno);
        setTimeout(() => {
            const data = {sname:"soni",
                qualification:"Btech"
            };
            console.log(`name is ${data.sname} 
                qualification is ${data.qualification} 
                roll no is ${rollno}`);
        },2000,rollno[1]);
    },2000);
}
st_details();