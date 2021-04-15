console.log('-----Get Planet Name By ID-----');

function getPlanetName(id){
    let name;
    switch(id){
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 5:
        name = 'Jupiter'
        break;
    }
    
    return name;
  }

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');