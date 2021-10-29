import ListItem from "./SetPosts";

function List({ list, setList }) {
    console.log(list);
    return (
        <>
          {list.map((element, index) => {
              console.log(element);
            return (
              <ListItem
                setList={setList}
                sentedPost={element}
                index={index}
                key={index}
              />
            );
          })}
        </>
      );
    }

export default List;
