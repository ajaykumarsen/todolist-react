import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <section
      className="col-[2/3] row-[2/3] border-l border-black/[0.08] bg-[#fffcf9]
    px-[25px] pt-[18px] pt-[18px] pb-[28px]
    flex flex-col"
    >
      <AddTodoForm></AddTodoForm>

      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
      

    </section>
  );
}
