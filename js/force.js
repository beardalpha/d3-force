var w = 900;
    h = 400;

var circeWidth = 5;

var nodes = [
    {'name': 'Parent'},
    {'name': 'child1'},
    {'name': 'child2', target: [0]},
    {'name': 'child3', target: [0]},
    {'name': 'child4', target: [1]},
    {'name': 'child5', target: [0,1,2,3]}
];

var links = [];
    
for (var i=0; i<nodes.length; i++){
    if(nodes[i].target !== undefined){
        for(var x=0; x<nodes[i].target.length; x++){
            links.push({
                source: nodes[i],
                target: nodes[nodes[i].target[x]];
            })   
        }
    }
}