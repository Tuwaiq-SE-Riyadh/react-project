

function DisplayCommint({Commint, setList, index}){

    const deleteListItem = (e) => {
    console.log(setList);
    setList((list) => {
      console.log(setList);
      const newArray = list.slice()
      return newArray.filter((element, i)=>{
        return index !== i
      })
    });
  };

//   const updateCommint =(e)=>{
//     setList((list) => {
//         console.log(setList);
//         const newArray = list.slice()
//         return newArray.filter((element, i)=>{
//           return index !== i
//         })
//       });

//   }
    
    return(
    <>
    <div className="commintDiv">
    <p className="parCommint"> {Commint}</p>
    <div>
    <input type="button" className="btnDel" value="Delete Commint" onClick={deleteListItem}/>
    {/* <input type="button" className="btnDel" value="Update Commint" onClick={updateCommint}/> */}
    </div>
    </div>
    </>)
}

export default DisplayCommint