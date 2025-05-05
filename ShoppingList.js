



// 数组应用
function add_two_items(shopping_list, items){
    shopping_list.push(items[0])
    shopping_list.push(items[1])
    console.log(shopping_list)
}

function remove_last_items(shopping_list){
    shopping_list.pop()
    console.log(shopping_list)
}

//条件与循环11111
function full_shopping_list(shopping_list){
    if(shopping_list.length > 5){
        console.log("你的购物车满了")
    }
    for (let i = 0; i < shopping_list.length; i ++){
        console.log(i+1,".", shopping_list[i])
    }
}

//函数与对象
function search_item(shopping_list, item){
    if(shopping_list.includes(item)){
        console.log("item found")
    }
    else{
        console.log("item not in the list")
    }
}

let milk = {
    name: "牛奶",
    price: 6,
    quantity: 2
}



add_two_items(shopping_list, items)
remove_last_items(shopping_list)
full_shopping_list(shopping_list)
search_item(shopping_list,"a")