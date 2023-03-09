function mergeLists(ar) {
	class ListNode {
		constructor(data) {
			this.data = data;
			this.next = null;
		}
	}

	class LinkedList {
		constructor(head = null) {
			this.head = head;
		}
	}

	const node1 = new ListNode(2);
	const node2 = new ListNode(5);

	node1.next = node2;

	const node = new ListNode(7);
	node2.next = node;

	const list = new LinkedList(node1);

	// for (let i = 0; i < 10; i++) {
	// 	const node = new ListNode(i + 2);
	// 	node2.next = node;
	// }
	console.log(list);
}

mergeLists([1, 2, 3, 4, 10, 11]);
