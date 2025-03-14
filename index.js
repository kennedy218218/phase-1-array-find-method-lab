// code your solution here
function superbowlWin(record) {

    const winningRecord = record.find(entry => entry.result === "W");
    
    return winningRecord ? winningRecord.year : undefined;
}

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];

  console.log(superbowlWin(record)); 

  const noWinsRecord = [
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];

  console.log(superbowlWin(noWinsRecord));



