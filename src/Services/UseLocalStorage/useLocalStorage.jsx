import { useEffect, useState } from "react";



/**
 * 
 * @param {*} key 
 * @param {*} defaultValue 
 * @returns {React.Component} This component provides a custom hook useLocalStorage that allows you to store and retrieve values from localStorage. 
 * It takes two arguments: key and defaultValue. The key is the unique name for the value to be stored, and defaultValue is the value to be returned 
 * if no value is found in localStorage.
 */
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : (defaultValue || []);
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };