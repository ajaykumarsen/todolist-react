import DeleteButton from "./DeleteButton";

const initialTodos = [
  {
    text: "buy groceries",
    isCompleted: true,
  },
  {
    text: "walk the dog",
    isCompleted: false,
  },
  {
    text: "do laundry",
    isCompleted: true,
  },
];
export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-8 h-[50px]
            text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
