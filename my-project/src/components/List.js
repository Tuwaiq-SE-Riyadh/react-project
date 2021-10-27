import ListItem from "./ListItem";

function List({ list, setList }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <ListItem
            setList={setList}
            UserName={element.UserName}
            Comment={element.Comment}
            index={index}
          />
        );
      })}
    </>
  );
}

export default List;
