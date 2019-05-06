class Helpers {
  // replaces spaces with '+' to match giphy syntax
  static removeSpaces(str) {
    return (str = str.replace(' ', '+'));
  }
  static replaceSpacesWithUnderScore(str) {
    return (str = str.replace(/ /gi, '_'));
  }
}

export default Helpers;
