import React,{  } from "react";

const Hello = (prop) => {
    return(
            <div>
                <h1> Hello, {prop.name} knows as {prop.heroName} </h1>
                {prop.children}
            </div>
        );
    //console.log(prop);
    // return React.createElement(
    // 'div',
    // {id:'hello',className:'dummyclass'}, 
    // React.createElement('h1', null,'Hello, '+ prop.name+' and known as ' + prop.heroName)
    // )

}  

export default Hello ;