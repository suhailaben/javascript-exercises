let findTheOldest = function(list) {
    let oldest = 0;
    let oldestName = ''
    let d = new Date()
    for (let i = 0; i < list.length; i++) {
        let death = list[i].yearOfDeath ? list[i].yearOfDeath : d.getFullYear();
        let age = (death - list[i].yearOfBirth);
        if (age > oldest) {
            oldest = age;
            oldestName = list[i]
        }
        }
        return oldestName;
    }



module.exports = findTheOldest
