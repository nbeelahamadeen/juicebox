const { client, getAllusers } = require('./index');

async function testDB() {
    try {
        // connect the client to the database, finally
        client.connect();

        // queries are promises, so we can await them
        const users = await getAllusers();
        // for now, logging is a fine way to see what's up
        console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

testDB();