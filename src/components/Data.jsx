import { useState } from "react";

//sample object
const laptop = {
    Dell: '20,000 - 60,000',
    Hp : '18,000 - 1,00,000',
}

const mobile = {
    Redmi: '10,000 - 25,000',
    Realme: '10,000 - 20,000',
    sumsung: '12,000 - 60,000'
}

const Data = () => {
 const [items, setItems] = useState(laptop)

 let name;
 if(items === laptop){
     name='laptop'
 }else{
     name = 'Mobiles'
 }

  return (
      <div>
          <h3>Best {`${name}`}  in range with compaines</h3>
          <button onClick={() => setItems(laptop)}>Laptop</button>
          <button onClick={() => setItems(mobile)}>Mobiles</button>

          <ul className="list">
              {Object.keys(items).map((material) =>(
                  <li key={material}>
                      {material} : {items[material]}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default Data;
