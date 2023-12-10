export default function checkData(name, percent) {
    if (!name.includes(" ") && Number.isInteger(+percent)) {
      return true;
    } else {
      return false;
    }
  }