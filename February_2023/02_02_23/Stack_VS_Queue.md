# Stack VS Queue

- Stacks and queues are abtract data types (ADTs) that obey order with which nodes can be added and removed from a data type

## What is a Stack?

- The last node added to a stack is the first out (LIFO)
- Cannister of tennis balls:
- Adds head node to the top of a stack
```
 🎾
|⬇️|
|🎾|
|🎾|
|🎾|
----
```
- Removes head node from the top of a stack.
```
 🎾
|⬆️|
|🎾|
|🎾|
|🎾|
----
```
- ❌ Never adds or removes from bottom of stack
- Actions:
    - Add To Top: new node added to top
    - Remove From Top: first node removed from top


Current_stack ===
```
🔵
```

Current_stack.add_to_top(🔴)
Current_stack ===
```
🔴
🔵
```

current_stack.add_to_top(🟠)
current_stack ===
```
🟠
🔴
🔵
```

current_stack.remove_from_top()
current_stack ===
```
🔴
🔵
```

## What is a Queue?
```
 🐓, 🐢, 🐛, 🦖, 🦕
```

- The first node added to a queue is the first out (FIFO)
- Who: First Node, Last Node
- Actions:
    - Enqueue: adds last node to back
    - Dequeue: removes first node from front

- Does 🦕, 🐓,🐛,🦖,🐢 === 🐓,🐢,🐛,🦖,🦕 ?
- What is different? The order

-  Current Queue
```
🏦 ⬅️ 🐓, 🐢, 🐛, 🦖, 🦕
```

- Dequeue our queue by one.

- Who leaves the queue? (First in First Out) a.k.a. "dequeue"?
```
🐓
```

- What does our queue look like now?
```
🐢, 🐛, 🦖, 🦕
```
- What does the queue look like when the chicken gets back in line? aka "enqueue"
```
🐢, 🐛, 🦖, 🦕, 🐓
```
