import { useState } from 'react';
import { MongoClient } from 'mongodb';

export default function Home() {
  const [prefix, setPrefix] = useState('');
  const [newValue, setNewValue] = useState('');

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleUpdateValue = async () => {
    try {
      const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await client.connect();
      const db = client.db();
      const collection = db.collection('configurations');

      const filter = { prefix };
      const update = { $set: { value: newValue } };

      await collection.updateOne(filter, update);

      console.log('Value updated successfully');

      client.close();
    } catch (error) {
      console.error('Error updating value:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <label>
          Prefix:
          <input type="text" value={prefix} onChange={handlePrefixChange} />
        </label>
      </div>
      <div>
        <label>
          New Value:
          <input type="text" value={newValue} onChange={handleValueChange} />
        </label>
      </div>
      <button onClick={handleUpdateValue}>Update Value</button>
    </div>
  );
}
