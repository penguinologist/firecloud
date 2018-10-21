export class Mask {
  public zipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/,/\d/,/\d/,/\d/,]
  public phoneNumber = [/\d/, /\d/, /\d/, '-', /\d/,/\d/,/\d/, '-', /\d/,/\d/,/\d/,/\d/]
  public driversLicenseNumber = [/\d/, /\d/, /\d/, '-', /\d/,/\d/,/\d/]
  public removeMaskingFormat(stringInput: any) {
    return stringInput.replace(/(\-)/gm,"");
  }
}
