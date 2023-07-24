class randomizer {
    //output will be in uppercase, lowercase, and number
    makeid(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;

    }
    makeNumberUnderMax(max){
      return Math.floor(Math.random() * max);
    }
    
    makeName(){
      const { faker } = require('@faker-js/faker');
      let randomName = faker.name.findName();
      return randomName
  }
}


export default randomizer;