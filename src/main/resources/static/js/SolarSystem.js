
var setting = {
		view: {
			selectedMulti: true,
			txtSelectedEnable: true,
			autoCancelSelected: false,
		},
		edit: {
			enable: true,
			drag: {
				isCopy: false,
				isMove: true
			}
		}

};
var zTreeNodes = [
	{"name":"太阳", 
		open:true, children: [
			{ "name":"水星",
				children:[
					{ "name":"小行星1",},
					{ "name":"小行星2",},
					{ "name":"小行星3",},
					{ "name":"小行星4",},
					{ "name":"小行星5",},
					{ "name":"小行星6",}
				]
				},
			{ "name":"金星",
					children:[
						{ "name":"小行星1",},
						{ "name":"小行星2",},
						{ "name":"小行星3",},
						{ "name":"小行星4",},
						{ "name":"小行星5",},
						{ "name":"小行星6",}
					]		
			},
			{ "name":"地球",
				children:[
					{ "name":"月球",
						children:[
							{ "name":"小小行星1",},
							{ "name":"小小行星2",},
							{ "name":"小小行星3",},
							{ "name":"小小行星4",},
							{ "name":"小小行星5",},
							{ "name":"小小行星6",}
						]
					},
					{ "name":"小行星1",},
					{ "name":"小行星2",},
					{ "name":"小行星3",},
					{ "name":"小行星4",},
					{ "name":"小行星5",},
					{ "name":"小行星6",}					
					
				]
				},
			{ "name":"火星", 
				children:[
					{ "name":"月球",
						children:[
							{ "name":"小小行星1",},
							{ "name":"小小行星2",},
							{ "name":"小小行星3",},
							{ "name":"小小行星4",},
							{ "name":"小小行星5",},
							{ "name":"小小行星6",}
						]
					},
					{ "name":"小行星1",},
					{ "name":"小行星2",},
					{ "name":"小行星3",},
					{ "name":"小行星4",},
					{ "name":"小行星5",},
					{ "name":"小行星6",}
				]},
			{ "name":"木星",
					children:[
						{ "name":"小行星1",},
						{ "name":"小行星2",},
						{ "name":"小行星3",},
						{ "name":"小行星4",},
						{ "name":"小行星5",},
						{ "name":"小行星6",}
					]
					},
			{ "name":"土星",
						children:[
							{ "name":"小行星1",},
							{ "name":"小行星2",},
							{ "name":"小行星3",},
							{ "name":"小行星4",},
							{ "name":"小行星5",},
							{ "name":"小行星6",}
						]
						},
			{ "name":"天王星", 
							children:[
								{ "name":"小行星1",},
								{ "name":"小行星2",},
								{ "name":"小行星3",},
								{ "name":"小行星4",},
								{ "name":"小行星5",},
								{ "name":"小行星6",}
							]				
			},
			{ "name":"海王星", 
				children:[
					{ "name":"小行星1",},
					{ "name":"小行星2",},
					{ "name":"小行星3",},
					{ "name":"小行星4",},
					{ "name":"小行星5",},
					{ "name":"小行星6",}
				]	
			}
		]
	}
];

function copyForestTreeNodeChildrenToAnotherForest(srcForest,tgtForest){
	if(!srcForest){
		throw "Source Forest not empty!";
	}
	let j = 0;
	for(let i=0;i<srcForest.length;i++){
		if(!srcForest[i]||!srcForest[i].name)continue;
		tgtForest[j] = {};
		tgtForest[j].name = srcForest[i].name;
		if(!!srcForest[i].children 
				&& srcForest[i].children.length>0){
			tgtForest[j].children = [];
			copyForestTreeNodeChildrenToAnotherForest(srcForest[i].children,tgtForest[j].children);
		}
		j++;
			
	}
}
//core
function ztreeForestNodesFilterByNameFuzzily(nodes,searchedNodes,searchingMsg){
	if(!nodes||nodes.length==0){
		throw "Searching nodes are not empty!";
	}
	let j = 0;
	for(let i=0;i<nodes.length;i++){
		if(!nodes[i]||!nodes[i].name)continue;// filter name empty node;
		let tempNode = {};
		// firstly,if name contains msg,into the list for output.
		if(nodes[i].name.toLowerCase().indexOf(searchingMsg.toLowerCase()) >-1){
			tempNode.name = nodes[i].name; 
		}
		
		if(nodes[i].children && nodes[i].children.length>0){
			tempNode.children = [];
			ztreeForestNodesFilterByNameFuzzily(nodes[i].children,tempNode.children,searchingMsg);
		}
		if(!!tempNode.children&&tempNode.children.length > 0){
			tempNode.open = true;
			// if children and father's name empty,it must have father node;
			if(!tempNode.name){
				tempNode.name = nodes[i].name;
			}
		}
		
		// if nodes[i] contains children and the children are not
		// satisfy searching condition,
		// keeping its children to the list for output,but not expanded.
		if(!!nodes[i].children
				&&nodes[i].children.length>0
				&&!!tempNode.children
				&&tempNode.children.length <= 0){
			tempNode.open = false;
			copyForestTreeNodeChildrenToAnotherForest(nodes[i].children,tempNode.children);
		}
		
		if(!!tempNode.children
				&&tempNode.children.length <= 0){
			tempNode.children = null;
		}
		
		if(!!tempNode.name){
			searchedNodes[j] = tempNode;
			j++;
		}
	}
}


function ztree_search_nodes(){
	
	var searchingMsg = $("#searchBox").val();
	var treeObj = $.fn.zTree.getZTreeObj("tree");
	treeObj.destroy();
	if(!searchingMsg){
		treeObj = $.fn.zTree.init($("#tree")/* jquery object */,
				setting, zTreeNodes);
	}
	else{
		// var nodes = treeObj.getNodes();
		var searchedNodes = [];
		ztreeForestNodesFilterByNameFuzzily(zTreeNodes,searchedNodes,searchingMsg);
		
		treeObj = $.fn.zTree.init($("#tree")/* jquery object */,
				setting, searchedNodes);
	}
	

	
}
$(()=>{
	var zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);
});