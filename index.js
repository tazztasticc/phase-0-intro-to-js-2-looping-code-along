for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } 

  const name = ['Lisa','Kaitlin', 'Jan'];
  const event = 'surprise';

  function writeCards(names, events){
    let newArr= [];
    for(let i=0; i<names.length; i++){
        newArr.push('Thank you,${names[i]}, for the wonderful ${event} gift!');
        debugger;

        return newArr;
    }
}