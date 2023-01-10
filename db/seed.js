const { client, getAllusers } = require('./index');

async function dropTables() {
    try {
        await client.query(`

        `);
    } catch (error) {
        throw error;
    }
}

async function createTables() {
    try {
        await client.query(`

        `);
    } catch (error) {
        throw error;
    }
}


async function rebuildDB() {
    try {
        client.connect();

        // const users = await getAllusers();
        // console.log(users);

        await dropTables();
        await createTables();
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

rebuildDB();