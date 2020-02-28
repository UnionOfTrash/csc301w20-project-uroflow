function createData(id, num, recentUpdate) {
    return { id, num, recentUpdate };
}
function createData2(time, imageURL, leak, poop, urgent) {
    return { time, imageURL, leak, poop, urgent };
}

const Data = [

    {
        patient: createData('0123000000', 12, true),
        record: [createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },

    {
        patient: createData('0123000020',  13, false),
        record: [
                createData2('2022-02-31 25:60:37', '', false, true, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },

    {
        patient: createData('0123000002',14, false),
        record: [createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, true, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },

    {
        patient: createData('1233120003',15, false),
        record: [
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },
    {
        patient: createData('1233120006',15, false),
        record: [
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },
    {
        patient: createData('1233120004',15, false),
        record: [
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },
    {
        patient: createData('1233120009',5, false),
        record: [
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
            ]
    },

]

const FakeData = {
    patients: Data.map(e => e.patient),
    records: Data.map(e => e.record),
}

function getFakeData(){
    return FakeData
}

function getFakeRecords(id){
    return FakeData.records[id]
}

export { getFakeData, getFakeRecords }