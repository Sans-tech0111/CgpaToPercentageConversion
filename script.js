function update(){
    let s = score.value;
    let g = 'O'
    let n = Number(s);
    if(Number(s)>=4 && Number(s)<=10){
        if(Number(s)>=4 && Number(s)<4.75){
            n = 6.6*n+13.6;
            g = 'D';
        }
        else if(Number(s)>=4.75 && Number(s)<5.25){
            n = 10*n-2.5;
            g = 'C';
        }
        else if(Number(s)>=5.25 && Number(s)<5.75){
            n = 10*n-2.5;
            g = 'B';
        }
        else if(Number(s)>=5.75 && Number(s)<6.75){
            n = 5*n+26.25;
            g = 'B+';
        }
        else if(Number(s)>=6.75 && Number(s)<8.25){
            n = 10*n-7.5;
            g = 'A';
        }
        else if(Number(s)>=8.25 && Number(s)<9.50){
            n = 12*n-24;
            g = 'A+';
        }
        else if(Number(s)>=9.50 && Number(s)<=10){
            n = 20*n-100;
        }
        document.getElementById('result').innerHTML = '<div id="cgpa"><b>CGPA</b>:</div><div id="grade"><b>Grade</b>:</div><div id="percentage"><b>Converted Percentage is</b>:</div>';
        document.getElementById('cgpa').innerHTML = '<b>CGPA:<span>'+s+'</span></b>';
        document.getElementById('grade').innerHTML = '<b>Grade:<span>'+g+'</span><b/>';
        document.getElementById('percentage').innerHTML = '<b>Converted Percentage is:<span>'+n.toFixed(2)+'</span></b>';
    }
    else{
        document.getElementById('result').innerHTML = '<span>Invalid Input!</span><div id="cgpa"><b>CGPA</b>:</div><div id="grade"><b>Grade</b>:</div><div id="percentage"><b>Converted Percentage is</b>:</div>';
    }
}

