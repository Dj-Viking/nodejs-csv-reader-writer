const uuid = require('uuid');
const randomEmail = require('random-email');
const randomName = require('random-name');
const Fakerator = require('fakerator');
const fakeratorRU = Fakerator('ru-RU');
const fakeratorHU = Fakerator('hu-HU');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvFileName =
'MOCK_DATA10.csv';

const csvWriter = createCsvWriter(
    {
        path: `./dist/${csvFileName}`,
        header: [
            { id: 'fullName', title: "Full Name" },
            { id: 'email', title: "Email" },
            { id: 'phoneNumber', title: "Phone Number" },
            { id: 'internalId', title: "Internal ID" },
            { id: 'role', title: "Role" },
            { id: 'tags', title: "Tags (comma separated names)" }
        ],
    }
);

let records;
const newData = [];

(async function() 
{
    fs.readFile(`./dist/${csvFileName}`, async function (_error, data) 
    {
        console.log('\x1b[33m', 'reading incoming records...', '\x1b[00m');
        records = parse(data, { columns: true });
        console.log(records);

        for (let i = 0; i < records.length; i++) 
        {
            let newObj = {};
            Object.keys(records[i]).map(oldKey => 
            {
                if (oldKey === 'Full Name') 
                {
                    let newPair = {
                        ['fullName']: 
                        //fakeratorHU.names.name()
                        //fakeratorRU.names.name()
                        `${randomName.first()} ${randomName.last()}` 
                        //records[i][oldKey]
                    };
                    newObj = { ...newObj, ...newPair }
                }
                else if (oldKey === 'Email') 
                {
                    let newPair = {
                        ['email']: 
                        //randomEmail({ domain: 'test.com'}) 
                        records[i][oldKey] 
                    };
                    newObj = { ...newObj, ...newPair }
                }
                else if (oldKey === 'Phone Number') 
                {
                    let newPair = {
                        ['phoneNumber']: 
                        records[i][oldKey] 
                        //records[i][oldKey]
                    };
                    newObj = { ...newObj, ...newPair }
                }
                else if (oldKey === 'Internal ID') 
                {
                    let newPair = {
                        ['internalId']: 
                        //uuid.v4()
                        records[i][oldKey]
                    };
                    newObj = { ...newObj, ...newPair }
                }
                else if (oldKey === 'Role') 
                {
                    let newPair = {
                        ['role']: 
                        records[i][oldKey]
                        //records[i][oldKey]
                    }
                    newObj = { ...newObj, ...newPair }
                }
                else if (oldKey === 'Tags (comma separated names)') 
                {
                    let newPair = {
                        ['tags']: 
                        records[i][oldKey] 
                        //records[i][oldKey]
                    }
                    newObj = { ...newObj, ...newPair }
                }
            });
            newData.push(newObj);
        };
        console.log('\x1b[33m', 'looking at same records with new keys so we can write to it again', '\x1b[00m');
        console.log(newData);

        csvWriter.writeRecords(newData).then(() => {
            return console.log('\x1b[33m', 'csv read then written to again', '\x1b[00m');
        });
    });
})();