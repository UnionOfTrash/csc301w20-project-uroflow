function createData(id, name, num, recentUpdate) {
    return { id, name, num, recentUpdate };
}
function createData2(time, imageURL, leak, poop, urgent) {
    return { time, imageURL, leak, poop, urgent };
}

const Data = [

    {
        patient: createData('0', "Harry Poter", 12, true),
        record: [createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },

    {
        patient: createData('1', "Tomas Edison",  13, false),
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
        patient: createData('2', "Biggie",14, false),
        record: [createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, true, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    },
    {
        patient: createData('3', "TwoPac",15, false),
        record: [
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false),
                createData2('2021-01-32 13:51:17', '', true, false, true),
                createData2('2022-02-31 25:60:37', '', false, false, false),
                createData2('2009-01-01 23:24:54', '', true, false, false)]
    }]

const FakeData = {
    patients: Data.map(e => e.patient),
    records: Data.map(e => e.record)
}

function getFakeData(){
    return FakeData
} 

export { getFakeData }