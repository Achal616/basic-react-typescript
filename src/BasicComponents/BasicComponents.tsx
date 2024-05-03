import React from "react";
import './BasicComponents.scss'


const BasicComponent :React.FC<{title: string,Name :string}> = (props)=>{

    const {title} = props;
    const {Name} = props;
    return(

        <div className="title"> <h1> {title} {Name}</h1></div>
    )

}
export default BasicComponent