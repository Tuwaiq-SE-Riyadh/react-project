import DisplayCommint from "./DisplayCommint"

function GetCommint({ list, setList }){
    console.log(list);
    // console.log(setList);
    return(
        <>
        {list.map((ele,index)=>{
         return(   <DisplayCommint 
            setList={setList}
            Commint={ele}
            index={index}
            key={index}/>
            )
        })}
        </>
    )
}

export default GetCommint