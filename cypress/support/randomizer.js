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

    getGender(type='') {
      const genderList = [
        'male','female',
      ];
      
      return genderList[this.makeNumberUnderMax(genderList.length)];
    } 
    
    getStatus(type='') {
      const statusList = [
        'active','inactive',
      ];
      
      return statusList[this.makeNumberUnderMax(statusList.length)];
    }
}


export default randomizer;