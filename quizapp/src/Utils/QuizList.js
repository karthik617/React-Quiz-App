const quizapi = [
    {
      question:"What is karthik's age?",
      answer:[21,22,20,19],
      correct:21
    },
    {
      question:"What is karthik's surname?",
      answer:["Yadav","Konar","shetty","nadar"],
      correct:"Yadav"
    },
    {
      question:"What is karthik's birthday ?",
      answer:[13,14,15,10],
      correct:13
    },
    {
      question:"What is karthik's mother name?",
      answer:["Jaya","Usha","Pavithra","Maya"],
      correct:"Jaya"
    }
  ]
export default quizapi;
/*(n=4)=>
 Promise.resolve(quizapi.sort(()=>0.5-Math.random()).slice(0,n))*/