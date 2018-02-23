var exercise = {};

exercise.roman = function(time){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
	var seconds = time.getSeconds();

    var col1 = hours.toString()[0];
    var col2 = hours.toString()[1];
    var col3 = minutes.toString()[0];
    var col4 = minutes.toString()[1];
    var col5 = seconds.toString()[0];
    var col6 = seconds.toString()[1];

    document.getElementById("hour_col1_pos0").innerHTML=col1;
    document.getElementById("hour_col2_pos0").innerHTML=col2;
    document.getElementById("hour_col3_pos0").innerHTML=col3;
    document.getElementById("hour_col4_pos0").innerHTML=col4;
    document.getElementById("hour_col5_pos0").innerHTML=col5;
    document.getElementById("hour_col6_pos0").innerHTML=col6;

};

exercise.binary = function(time, col){
    //define binary clock elements
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    var col1 = hours.toString()[0];
    if(col1 === '0'){
        document.getElementById('hour_col1_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col1_pos2').style.backgroundColor = 'silver';
    }
    if(col1 === '1'){  
        document.getElementById('hour_col1_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col1_pos2').style.backgroundColor = 'silver';
    }
    else{
        document.getElementById('hour_col1_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col1_pos2').style.backgroundColor = 'red'; 
    }

    var col2 = hours.toString()[1];
    if(col2 == '0'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '1'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '2'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red'; 
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '3'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '4'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '5'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '6'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '7'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    }
    if(col2 == '8'){
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
    }

    var col3 = minutes.toString()[0];
    if(col3 == '0'){
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }
    if(col3 == '1'){
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }
    if(col3 == '2'){
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'red'; 
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }
    if(col3 == '3'){
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }
    if(col3 == '4'){
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }
    else{
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col3_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    }

    var col4 = minutes.toString()[1];
    if(col4 == '0'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '1'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '2'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'red'; 
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '3'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '4'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '5'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '6'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '7'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '8'){
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col4_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'red';
    }

    var col5 = seconds.toString()[0];
    if(col5 == '0'){
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }
    if(col5 == '1'){
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }
    if(col5 == '2'){
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'red'; 
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }
    if(col5 == '3'){
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }
    if(col5 == '4'){
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }
    else{
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col5_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    }

    var col6 = seconds.toString()[1];
    if(col6 == '0'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '1'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '2'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'red'; 
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '3'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '4'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '5'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '6'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col6 == '7'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    }
    if(col4 == '8'){
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver'; 
        document.getElementById('hour_col6_pos3').style.backgroundColor = 'silver';
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'red';
    }
};
