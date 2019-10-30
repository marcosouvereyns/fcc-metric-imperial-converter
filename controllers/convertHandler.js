/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    let regex = /^\d?\.?\d?\/?\d+\.?\d?/
    
    if(regex.test(input) === false) {
      result = 1
    }else {
      result = input.match(regex)[0]
    }
    
    return eval(result);
  };
  
  this.getUnit = function(input) {
    var result;
    let regex = /[a-z]+$/i
    const allowedUnits=['gal','l','mi','km','lbs','kg'];
    
    let word = input.match(regex)[0]
    
    if(allowedUnits.indexOf(word.toLowerCase()) === -1){
      result = "Invalid Unit"
    }else{
      result = word.toLowerCase()
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case "gal":
        result = "l"
        break
      case "l":
        result = "gal"
        break
      case "lbs":
        result = "kg"
        break
      case "kg":
        result = "lbs"
        break
      case "mi":
        result = "km"
        break
      case "km":
        result = "mi"
        break
      default:
        result = "wrong unit"
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case "gal":
        result = "gallons"
        break;
      case "l":
        result = "liters"
        break;
      case "lbs":
        result = "pounds"
        break;
      case "kg":
        result = "kilograms"
        break;
      case "mi":
        result = "miles"
        break;
      case "km":
        result = "kilometers"
        break;
      default:
        result = "wrong unit"
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    
    switch(initUnit){
      case "gal":
        result = (initNum) * galToL
        break
      case "l":
        result = (initNum) / galToL
        break
      case "lbs":
        result = (initNum) * lbsToKg
        break
      case "kg":
        result = (initNum) / lbsToKg
        break
      case "mi":
        result = (initNum) * miToKm
        break
      case "km":
        result = (initNum) / miToKm
        break
      default:
        result = 1
        break
    }
    
    return Math.round(result * 100000) / 100000
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    let initial_Units = this.spellOutUnit(initUnit)
    let return_Units = this.spellOutUnit(returnUnit)
    result = `${initNum} ${initial_Units} converts to ${returnNum} ${return_Units}`
    return result;
  };
  
}

module.exports = ConvertHandler;
