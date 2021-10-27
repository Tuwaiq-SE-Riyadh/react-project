import image from '../avater.png';
function Commentlist({setcommentlist , name , comm , index}) {

  const deleteing = ()=>{
    setcommentlist((commentlist)=>{
      const ArrayComment = commentlist.slice()
      return ArrayComment.filter((e,i)=>{
        return index !== i
      })
    })

  }


  return (


        <div className="linecomm">
          <button className="deleting" onClick={deleteing} >X</button>
          <div className="avatericon"><img src={image} />
          <h3 style={{color: '#170042'}}>{name}</h3></div>
          
          <p>{comm}</p>

        </div>

  )
  }

export default Commentlist;
