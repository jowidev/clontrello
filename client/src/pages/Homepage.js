import React, { useState } from "react";
import Item from "../componentes/Item";
import DropWrapper from "../componentes/DropWrapper";
import Col from "../componentes/Col";
import { data, statuses } from "../data";

 const Homepage = props => {
    const [items, setItems] = useState (data);

    const onDrop = (item, monitor, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
           const newItems = prevState
              .filter(i.id !== item.id)
              .concat ({ ...item, status, icon: mapping.icon });
          return [ ...newItems ];
       });
   };

  const MoveItem = (dragIndex, hoverIndex) => {
     const item = items[dragIndex],
     setItems(prevState => {
        const newItems = prevState.filter((i,idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, item);
        return [ ...newItems ];
     });
  };

  return (
     <div className={"row"}>
          {statuses.map(s => {
             return (
                <div key={s.status} className={"col-wrapper"}>
                  <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                  <DropWrapper onDrop={onDrop} status={s.status}>
                    <Col>
                      {items
                          .filter(i => i.status === s.status)
                          .map((i,idx) => <item key={i, id} item={i} index={idx} moveItem={moveItem} status= {s} />
                    </Col>
                  </DropWrapper>
              </div>
            );
          })}
    </div>
};

export default Homepage;
