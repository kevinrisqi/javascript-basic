// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    console.log(today)

    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir

    console.log(diff_ms)

    const diffDate = new Date(diff_ms);

    console.log(diffDate.getFullYear())
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('1999-01-13'));
//   console.log(myAge.today)