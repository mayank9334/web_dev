let marksarray = [50, 60, 85, 73, 65];

//console.log(marksarray);

/*as it is a loosely typed language , so any type of variable can be stored in this array.
ie - int , str, object , function etc
*/

//console.log(marksarray.length);

/* after array_name use "." to see other inbuilt features for the array */

/*can change array values, by accessing through indexes 
ie marksarray[2] = "mayank" ;
output = [50, 60, "mayank", 73, 65];
*/

/*array store values in contiguous memory locations.
 */

/*can store array in new variable , which will also be an array.
ie - newarr = marksarray; but changing in this array will affect both arrays, bqz both are situated on same memory locations.

*/

/* arrayname.indexof(element);

will tell the index of that element in array.
*/

/* arrayname.includes(element) 

is a boolean method, tells about the given element is present in array or not , output will be true/false.
*/

/* to push something at the end of array 
write -
    arrayname.push(elementvalue) ;
    
to push into end of array
*/

/* to push element at the begining of the array write -
             arrayname.unshift(elementvalue);
*/

/* to delete element from the end of array
write-
       arrayname.pop();

to delete from begining of array,
write -
        arrayname.shift();

*/

marksarray.pop(); //delete element from end
marksarray.shift(); //delete element from start.
console.log(marksarray); //2 element has deleted, 1 from start & one from end.

marksarray.sort(); // used to sort array element numbers.
console.log(marksarray);
