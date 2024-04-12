function checkBody(body, array) {
  let isValid = true;
  for (let element of array) {
    if (body[element] === "" || !body[element]) {
      isValid = false;
    }
  }
  return isValid;
}

module.exports = { checkBody };
