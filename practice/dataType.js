function dataTypeSize(str) {
  let res;
  switch (str) {
    case 'Character':
      res = 1;
      break;
    case 'Integer':
      res = 8;
      break;
    case 'Long':
      res = 8;
      break;
    case 'Float':
      res = 8;
      break;
    case 'Double':
        res=8;
        break;
    default:
      res = -1;
  }
  return res;
}

console.log(dataTypeSize('Character'));
