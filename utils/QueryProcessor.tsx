export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("What is your Andrew ID?")) {
    return(
      "ahw2"
    );
  }

  if (query.includes("What is your name?")) {
    return(
      "Andrew, Daniel"
    );
  }

  if (query.includes("largest")) {
    const num = query.slice(46, query.length)
    const arr = num.split(", ").map(Number)
    return(
      (Math.max(...arr)).toString()
    );
  }

  if (query.includes("plus")) {
    const firstNum = query.slice(8, 10)
    const secondNum = query.slice(15, 17)
    return(
      (parseInt(firstNum) + parseInt(secondNum)).toString()
    );
  }
  

  return "";
}
