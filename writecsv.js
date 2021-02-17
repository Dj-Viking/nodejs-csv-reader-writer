const uuid = require('uuid');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter(
  {
    path: './dist/output.csv',
    header: [
      {id: 'fullName', title: "Full Name"},
      {id: 'email', title: "Email"},
      {id: 'phoneNumber', title: "Phone Number"},
      {id: 'internalId', title: "Internal ID"},
      {id: 'role', title: "Role"},
      {id: 'tags', title: "Tags (comma separated names)"}
    ],
  },
);

const data = [
  {
    fullName: "Jimmy bobbo2(id the same)",
    email: "jimmy@bobo.com",
    phoneNumber: "1231231231",
    internalId: '3fc28c87-1952-4a62-abbd-e733b2e7a357',
    role: "Hypnotist",
    tags: "Strange"
  },
  {
    fullName: "Bulma stripes(changing by email and reference id)",
    email: "bulma@stripes.com",
    phoneNumber: "3213213211",
    internalId: '1d122eb9-f24b-427e-bb0e-11743a3f90ea',
    role: "Saiyan",
    tags: "Strong"
  },
  {
    fullName: "Goku Spirit(id the same)",
    email: "goku@spirit.com",
    phoneNumber: "1233211233",
    internalId: '8fa0f2db-dfe2-4714-a50e-feb91b21a57d',
    role: "Saiyan",
    tags: "Tall"
  },
];
const data2 = [
  {
    fullName: "Jimmy bobbo",
    email: "jimmy@bobo.com",
    phoneNumber: "1231231231",
    internalId: uuid.v4(),
    role: "Hypnotist",
    tags: "Strange"
  },
  {
    fullName: "Bulma stripes",
    email: "bulma@stripes.com",
    phoneNumber: "3213213211",
    internalId: uuid.v4(),
    role: "Saiyan",
    tags: "Strong"
  },
  {
    fullName: "Goku Spirit",
    email: "goku@spirit.com",
    phoneNumber: "1233211233",
    internalId: uuid.v4(),
    role: "Saiyan",
    tags: "Tall,Smart,Over9000!!!"
  },
];

csvWriter.writeRecords(data2).then(() => {
  return console.log('csv file written to dist folder');
});