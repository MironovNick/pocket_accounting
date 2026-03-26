import React, { useState, useEffect } from 'react';
import { MongoClient } from 'mongodb';

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const client = await MongoClient.connect('mongodb://localhost:27017');
            const db = client.db('pocket_accauntingDB');
            const collection = db.collection('itemList');
            const result = await collection.find().toArray();
            setData(result);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from MongoDB:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>{item.category}</li>
                ))}
            </ul>
        </div>
    );
}

export default Data;