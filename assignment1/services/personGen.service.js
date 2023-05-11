const axios = require('axios').default;
const fs = require('fs');
const path = require('path');

/**
 * ===== Generate Person ======
 * @param {*} userData 
 * @returns 
 */
const generatePerson = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        if (users.length === 0) {
            throw new Error('No users found');
        }

        const randomUser = users[Math.floor(Math.random() * users.length)];

        const person = {
            name: randomUser.name,
            email: randomUser.email,
            address: randomUser.address.street,
            city: randomUser.address.city,
            zipcode: randomUser.address.zipcode,
        };

        return person;
    } catch (error) {
        throw new Error(error.message);
    }
};


/**
 * ====== Get All Persons =====
 * @param {*} callback 
 */
const getAllPersons = (callback) => {
    const DBPath = path.join(__dirname, '../database/db.json');
    fs.readFile(DBPath, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            const persons = JSON.parse(data);
            callback(null, persons);
        }
    });
}

/**
 * ===== Save To File ======
 * @param {*} person 
 * @param {*} cb 
 */
const savePersonToDB = (person, cb) => {
    const DBPath = path.join(__dirname, '../database/db.json');

    fs.readFile(DBPath, 'utf8', (err, data) => {
        if (err) {
            cb(err);
            return;
        }

        let existingData = [];
        if (data) {
            existingData = JSON.parse(data);
        }

        existingData = Array.isArray(existingData) ? existingData : [];

        existingData.push(person);

        fs.writeFile(DBPath, JSON.stringify(existingData, null, 2), cb);
    });
};

module.exports = { generatePerson, getAllPersons, savePersonToDB };