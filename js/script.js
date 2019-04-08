function processData(allText) {
    // var utcDate = Date.UTC(2005, 1, 1, 0, 0, 0);
    // console.log(utcDate);
    let allTextLines = allText.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];
    let lines2 = [];

    for (let i=0; i<allTextLines.length; i++) {
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            let tarr2 = [];
            for (let j=0; j<headers.length; j++) {
                if(i>0 && j==0) {

                    let dateString = data[0];
                    let dateTimeParts = dateString.split(' '),
                        timeParts = dateTimeParts[1].split(':'),
                        dateParts = dateTimeParts[0].split('/'),
                        date;
                    date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]);
                    data[0]=date.getTime();
                }
                //tarr.push(data[j]);
                tarr.push(parseFloat(data[j]));
                tarr2.push(parseFloat(data[j]));
            }

            lines.push(tarr);
            //console.log(tarr)
            console.log(tarr2)
            tarr2.splice(1,1);
            lines2.push(tarr2)
            console.log(lines2)


        }
    }