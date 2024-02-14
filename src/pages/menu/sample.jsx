import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const YourComponent = () => {
  const [selectedAddonItemId, setSelectedAddonItemId] = useState(null);
  const [addonItems, setAddonItems] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      try {
        // Simulated API response
        const newAddonItems = [
          { itemid: 1, name: 'Addon 1', price: 10 },
          { itemid: 2, name: 'Addon 2', price: 15 },
          // Add more items as needed
        ];

        setAddonItems(newAddonItems);
        setSelectedAddonItemId(null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRadioButtonClick = (itemId, btnNext, nextAid) => {
    // Your logic for handling radio button click
    // ...

    // Update the state to reflect the selected radio button
    setSelectedAddonItemId(itemId);
  };

  return (
    <div className="addon-items">
      <Form>
        <div className="input-grup-div">
          {addonItems.map((addonItem, index) => (
            <label className="input-div" key={index}>
              <input
                type="radio"
                id={addonItem.itemid}
                name="addon-group"
                value={addonItem.name}
                checked={selectedAddonItemId === addonItem.itemid}
                onChange={() => handleRadioButtonClick(addonItem.itemid)}
              />
              <p>{addonItem.name}</p>
              <span> {addonItem.price}</span>
            </label>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default YourComponent;
