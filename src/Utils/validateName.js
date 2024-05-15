
/**
 * 
 * @param {@} name Validate name with regex
 */

export const validateFullName =(name)=> {

    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ]{2,}$/;
    return regex.test(name.split(" ")[0]) && regex.test(name.split(" ")[1]);

  };

 