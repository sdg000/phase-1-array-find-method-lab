function superbowlWin(record) {
    const result = record.find((object) => object.result === 'W')
        if(result) {
            const year = result.year
            return year
        }else {
            return undefined
        }
}