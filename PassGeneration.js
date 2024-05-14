function Passwordgen(Fname, Lname){
    let Fname1 = Fname.slice(0,3)
    let Lname1 = Lname.slice(-3)
    const Pass = Fname1 + Lname1 + "@2024"
    return Pass
}
console.log(Passwordgen("Janet", "Alwanga"));