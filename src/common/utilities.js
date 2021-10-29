
export const getListData = (data,round) => {
    const convert = (total,item,index) => {
        let position = Math.floor(index / round);
        if(total.length < position + 1 || total.length === 0){
            total.push([]);
        }
        total[position].push(item)
        return total;
    };
    return data && data.length && data.reduce(convert,[]) || []
}
