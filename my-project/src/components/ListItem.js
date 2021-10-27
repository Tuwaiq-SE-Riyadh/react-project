function ListItem({ UserName, Comment, setList, index }) {
  const deleteListItem = (e) => {
    setList((list) => {
      const newArray = [];
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (index !== i) {
          newArray.push(element);
        }
      }
      return newArray;
    });
  };

  return (
    <>
      <div className="flex">
        <h2> {UserName}</h2>
        <h2> {Comment}</h2>
        <button onClick={deleteListItem}>Remove</button>
      </div>
    </>
  );
}

export default ListItem;
