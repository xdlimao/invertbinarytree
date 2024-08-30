class TreeNode {
    public value?:number;
    public left:TreeNode | null;
    public right:TreeNode | null;
    constructor (value:number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value
        this.left = left
        this.right = right
    }
    invert(){
        let templeft = this.left
        let tempright = this.right
        this.left = tempright
        this.right = templeft
        this.left?.invert() //Here says: if you exist, you will have the method invert, however, if you are a null object, you don't have a method called invert cuz ur null!
        if(this.right != null)
            this.right.invert()
    }
}
        let node1 = new TreeNode(1) //dir
        let node12 = new TreeNode(12) //esq
    let node3 = new TreeNode(3, node12, node1) //dir
    let node6 = new TreeNode(6) //esq
let node7 = new TreeNode(7, node6, node3) //root

function invert(node: TreeNode | null) {
    if (node == null)
        return;
    let templeft = node.left
    let tempright = node.right
    node.left = tempright
    node.right = templeft
    invert(node.left)
    invert(node.right)
    return node
}

console.log(node7)
console.log(invert(node7)
)


