const predictPartyVictory = function(senate) {
    senate = senate.split('')
    let stack = []
    let win = null

    for(let i = 0; i < senate.length; i++){
        if(!stack[stack.length - 1]){
            stack.push(senate[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] === senate[i]){
            stack.push(senate[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] !== senate[i]){
            senate.push(stack.pop())
        }
    }
    win = stack[0]
    if(win === 'R') return 'Radiant'
    if(win === 'D') return 'Dire'
};
